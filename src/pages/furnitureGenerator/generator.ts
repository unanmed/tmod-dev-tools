import { SingleFolderHandler } from '@/common/folder';
import { canvasToBlob, checkExt } from '@/common/utils';
import { message } from 'ant-design-vue';
import { reactive } from 'vue';
import { itemTemplate, tileTemplate } from './template';

interface GenerateItem {
    checked: boolean;
    name: string;
    type: string;
    item: FileSystemFileHandle;
    tile: FileSystemFileHandle;
    flame: FileSystemFileHandle | null;
    doorClosed: FileSystemFileHandle | null;
    cnt: number;
}

interface ProcessingItem extends GenerateItem {
    /** 图片横向有几帧 */
    frameX: number;
    /** 图片纵向有几帧 */
    frameY: number;
    /** 最下面一格是否为 16x16 */
    has18: boolean;
}

const SUPPORTED = new Set([
    'Bed',
    'Chair',
    'Chest',
    'Clock',
    'Door',
    'Dresser',
    'Platform',
    'Table',
    'Toilet',
    'WorkBench',
    'Sink',
    'Chandelier',
    'Lantern',
    'Candle',
    'Candelabra',
    'Bathtub',
    'Bookcase',
    'Lamp',
    'Piano',
    'Sofa'
]);

const LIGHT_COLOR_RATIO = new Map([
    ['candle', 0.6],
    ['lamp', 1],
    ['lantern', 1],
    ['torch', 1],
    ['candelabra', 1.2],
    ['chandelier', 1.5]
]);

const FURNITURE_NUM = new Map<string, [x: number, y: number]>([
    ['bathtub', [2, 1]],
    ['bed', [2, 1]],
    ['candelabra', [2, 1]],
    ['candle', [2, 1]],
    ['chair', [2, 1]],
    ['chandelier', [2, 1]],
    ['door', [2, 1]],
    ['doorclosed', [3, 1]],
    ['lamp', [2, 1]],
    ['lantern', [2, 1]],
    ['toilet', [2, 1]],
    ['clock', [1, 1]],
    ['platform', [27, 1]]
]);

const STANDARDIZED_TYPE = new Map<string, string>([
    ['bed', 'Bed'],
    ['chair', 'Chair'],
    ['chest', 'Chest'],
    ['clock', 'Clock'],
    ['door', 'Door'],
    ['dresser', 'Dresser'],
    ['platform', 'Platform'],
    ['table', 'Table'],
    ['toilet', 'Toilet'],
    ['workbench', 'WorkBench'],
    ['sink', 'Sink'],
    ['chandelier', 'Chandelier'],
    ['lantern', 'Lantern'],
    ['candle', 'Candle'],
    ['candelabra', 'Candelabra'],
    ['bathtub', 'Bathtub'],
    ['bookcase', 'Bookcase'],
    ['lamp', 'Lamp'],
    ['piano', 'Piano'],
    ['sofa', 'Sofa']
]);

const EXT = ['.png', '.jpg', '.jpeg'];

export class FurnitureGenerator {
    readonly list: GenerateItem[] = reactive([]);

    name: string = '';
    dust: string = 'Dust';
    itemNamespace: string = '';
    tileNamespace: string = '';
    lightColor: string = '';
    dustNamespace: string = '';

    private processing: boolean = false;

    constructor(
        public readonly item: SingleFolderHandler,
        public readonly tile: SingleFolderHandler
    ) {
        item.on('update', () => this.update());
        tile.on('update', () => this.update());
    }

    setName(name: string) {
        this.name = name.trim();
    }

    setNamespace(item: string, tile: string) {
        this.itemNamespace = item.trim();
        this.tileNamespace = tile.trim();
    }

    setDust(dust: string, space: string) {
        this.dust = dust.trim();
        this.dustNamespace = space;
    }

    setLightColor(color: string) {
        this.lightColor = color.trim();
    }

    async update() {
        if (!this.item.folder || !this.tile.folder) return;
        this.list.splice(0);
        const itemList = await Array.fromAsync(this.item.folder.values());
        const tileList = await Array.fromAsync(this.tile.folder.values());

        // 以 item 为基准
        itemList.forEach(v => {
            if (v instanceof FileSystemDirectoryHandle) return;
            const name = v.name;

            if (!checkExt(name, EXT)) return;
            const [start, count, f] = name.replace(/\.\w+$/, '').split('_');
            if (f?.toLowerCase().startsWith('flame')) return;
            const type = this.getType(start);
            const cnt = this.parseCount(count);

            if (!type) return;

            let tile: FileSystemFileHandle | null = null;
            let flame: FileSystemFileHandle | null = null;
            let doorClosed: FileSystemFileHandle | null = null;

            tileList.forEach(v => {
                if (v instanceof FileSystemDirectoryHandle) return;
                const name = v.name;
                const [start, count, flameTex] = name
                    .replace(/\.\w+$/, '')
                    .split('_');

                if (!checkExt(name, EXT)) return;

                const tileType = this.getType(start);
                const tileCnt = this.parseCount(count);

                if (
                    start.toLowerCase().endsWith('doorclosed') &&
                    type === 'Door'
                ) {
                    doorClosed = v;
                    return;
                }

                if (
                    type === tileType &&
                    count?.toLowerCase().startsWith('flame')
                ) {
                    flame = v;
                    return;
                }

                if (
                    type === tileType &&
                    flameTex?.toLowerCase().startsWith('flame')
                ) {
                    flame = v;
                    return;
                }

                if (type === tileType && cnt === tileCnt) {
                    tile = v;
                    return;
                }
            });

            if (!tile) return;

            this.list.push({
                name: this.name,
                checked: true,
                type: type.toLowerCase(),
                item: v,
                tile,
                cnt,
                flame,
                doorClosed
            });
        });
    }

    getType(name: string) {
        const lowered = name.toLowerCase();
        if (lowered.endsWith('dooropen') || lowered.endsWith('dooropened')) {
            return 'Door';
        }
        for (const type of SUPPORTED) {
            if (name.toLowerCase().endsWith(type.toLowerCase())) {
                return type;
            }
        }
    }

    getStandardizedType(content: GenerateItem) {
        return (
            (STANDARDIZED_TYPE.get(content.type) ?? '') +
            (content.cnt !== -1 ? `_Type${content.cnt}` : '')
        );
    }

    private parseCount(count: string) {
        if (!/^Type\d+$/.test(count)) return -1;
        return parseInt(count.slice(4));
    }

    async generate() {
        // 需要先生成描边及 x2 之后的贴图，然后再根据贴图信息生成对应代码
        if (!this.item.folder || !this.tile.folder) {
            message.warn({
                content: '请选择贴图文件夹'
            });
            return;
        }
        if (this.processing) return;
        this.processing = true;
        message.info('处理中，请稍后...');

        await Promise.all(
            this.list.map(async v => {
                const { checked, type, item, tile, flame } = v;
                if (!checked) return;
                const tileFolder = this.tile.folder;
                const itemFolder = this.item.folder;
                if (!tileFolder || !itemFolder) return;
                const tileData = await tile.getFile();
                const tileBuffer = await tileData.arrayBuffer();
                const itemData = await item.getFile();
                const itemBuffer = await itemData.arrayBuffer();
                const flameData = await flame?.getFile();
                const flameBuffer = await flameData?.arrayBuffer();

                const [tileImage, itemImage, flameImage] = (await Promise.all([
                    this.loadImage(tileBuffer),
                    this.loadImage(itemBuffer),
                    this.loadImage(flameBuffer)
                ])) as [
                    HTMLImageElement,
                    HTMLImageElement,
                    HTMLImageElement | null
                ];

                const process: ProcessingItem = {
                    ...v,
                    ...this.parseImageInfo(type, tileImage, flameImage)
                };

                await this.item.folder?.removeEntry(item.name);
                await this.tile.folder?.removeEntry(tile.name);
                if (flame) await this.tile.folder?.removeEntry(flame.name);

                await Promise.all([
                    this.handleTile(
                        this.padImage(tileImage, process)!,
                        process,
                        this.padImage(flameImage, process)
                    ),
                    this.handleItem(itemImage, process)
                ]);
            })
        );

        message.success('处理完毕！');
        this.processing = false;
    }

    private parseImageInfo(
        type: string,
        tile: HTMLImageElement,
        flame: HTMLImageElement | null
    ): Omit<ProcessingItem, keyof GenerateItem> {
        if (flame) {
            if (tile.width !== flame.width || tile.height !== flame.height) {
                message.warn({
                    content: `${type} 的 Tile 与 Flame 贴图长宽不符，将以 Tile 为基准生成`
                });
            }
        }
        const { width, height } = tile;
        const remainX = width % 8;
        const remainY = height % 8;

        const has18 = remainY === 1;

        if (type === 'chest') {
            return {
                frameX: remainX + 1,
                frameY: 3,
                has18
            };
        } else {
            const data = FURNITURE_NUM.get(type);
            if (!data) {
                return {
                    frameX: 1,
                    frameY: 1,
                    has18
                };
            } else {
                return {
                    frameX: data[0],
                    frameY: data[1],
                    has18
                };
            }
        }
    }

    private padImage(
        texture: HTMLCanvasElement | HTMLImageElement | null,
        content: ProcessingItem
    ) {
        if (!texture) return null;
        const width = texture.width - content.frameX + 1;
        if (width % 8 === 0) return texture;
        const count = Math.ceil(width / 8);
        const offset = Math.round((count * 8 - width) / 2);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;
        canvas.width = count * 8 + content.frameX - 1;
        canvas.height = texture.height;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(texture, offset, 0);
        return canvas;
    }

    private enlargeTexture(texture: HTMLCanvasElement | HTMLImageElement) {
        const enlarged = document.createElement('canvas');
        const ctx = enlarged.getContext('2d')!;
        enlarged.width = texture.width * 2;
        enlarged.height = texture.height * 2;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(texture, 0, 0, enlarged.width, enlarged.height);
        return enlarged;
    }

    /**
     * 切分8x8贴图
     * @param texture 贴图
     * @param content 信息
     */
    private splitTexture(
        texture: HTMLCanvasElement | HTMLImageElement,
        content: ProcessingItem,
        frameX: number = content.frameX,
        frameY: number = content.frameY
    ) {
        const splitted = document.createElement('canvas');
        const ctx = splitted.getContext('2d')!;

        const size = 8;
        // 计算目标高度，纵向以底部为准
        const width = texture.width - frameX + 1;
        const height = texture.height - frameY + 1;
        const wc = frameX;
        const hc = frameY;
        // 每帧大小
        const cellWidth = Math.round(width / wc);
        const cellHeight = Math.round(height / hc);
        const cellCountX = Math.ceil(cellWidth / size);
        const cellCountY = content.has18
            ? Math.floor(cellHeight / size)
            : Math.ceil(cellHeight / size);

        const tw = wc * (size + 1) * cellCountX;
        const th = hc * (size + 1) * cellCountY;
        splitted.width = tw;
        splitted.height = th;

        ctx.imageSmoothingEnabled = false;
        // 对每帧进行循环分割
        for (let x = 0; x < wc; x++) {
            for (let y = 0; y < hc; y++) {
                const baseX = cellWidth * x + x;
                const baseY = texture.height - cellHeight * (y + 1) - y;
                const baseDrawX = cellCountX * x * (size + 1);
                const baseDrawY = th - cellCountY * (y + 1) * (size + 1);

                // 对每帧进行分割
                for (let nx = 0; nx < cellCountX; nx++) {
                    for (let ny = 0; ny < cellCountY; ny++) {
                        const cx = baseX + nx * size;
                        const cy = baseY + ny * size;
                        const dx = baseDrawX + nx * size + nx;
                        const dy = baseDrawY + ny * size + ny;

                        if (content.has18 && ny === cellCountY - 1) {
                            ctx.drawImage(texture, cx, cy, 8, 9, dx, dy, 8, 9);
                        } else {
                            ctx.drawImage(texture, cx, cy, 8, 8, dx, dy, 8, 8);
                        }
                    }
                }
            }
        }

        return splitted;
    }

    private async loadImage(buffer?: ArrayBuffer) {
        if (!buffer) return null;
        const blob = new Blob([buffer], { type: 'image/png' });
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.src = url;
        await new Promise<void>(res => {
            img.addEventListener('load', () => res(), { once: true });
        });

        return img;
    }

    getFileName(content: GenerateItem, name: string = this.name) {
        const type = STANDARDIZED_TYPE.get(content.type);
        if (!type) return '';
        let str = '';
        str += name;
        str += type;
        if (content.cnt !== -1) {
            str += `_Type${content.cnt}`;
        }
        return str;
    }

    private parseLightColor(content: ProcessingItem): [number, number, number] {
        const color = this.lightColor;
        const [r, g, b] = color.split(',').map(v => parseFloat(v.trim()));
        const ratio = LIGHT_COLOR_RATIO.get(content.type) ?? 1;

        return [r, g, b].map(v => {
            if (v > 1) return (v / 255) * ratio;
            else return v * ratio;
        }) as [number, number, number];
    }

    private splitFrameAndHightlight(
        img: HTMLImageElement | HTMLCanvasElement,
        xCount: number,
        yCount: number
    ) {
        const highlight = document.createElement('canvas');
        const hctx = highlight.getContext('2d')!;
        highlight.width = img.width;
        highlight.height = img.height;

        // 分离出每帧的图片
        const width = img.width - xCount + 1;
        const height = img.height - yCount + 1;
        const wc = xCount;
        const hc = yCount;
        const cw = Math.round(width / wc);
        const ch = Math.round(height / hc);

        hctx.imageSmoothingEnabled = false;
        for (let x = 0; x < xCount; x++) {
            for (let y = 0; y < yCount; y++) {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d')!;
                ctx.imageSmoothingEnabled = false;
                canvas.width = cw;
                canvas.height = ch;

                const sx = x * cw + x;
                const sy = y * ch + y;
                ctx.drawImage(img, sx, sy, cw, ch, 0, 0, cw, ch);
                const edge = this.checkEdges(canvas, ctx);
                hctx.drawImage(edge, sx, sy, cw, ch);
            }
        }

        return highlight;
    }

    private async handleTile(
        img: HTMLImageElement | HTMLCanvasElement,
        content: ProcessingItem,
        flame: HTMLImageElement | HTMLCanvasElement | null
    ) {
        const type = STANDARDIZED_TYPE.get(content.type);
        if (!type) return;

        const height = img.height - content.frameY + 1;
        const ch = Math.round(height / content.frameY);
        const highlight = this.splitFrameAndHightlight(
            img,
            content.frameX,
            content.frameY
        );

        const processedHightlight = this.enlargeTexture(
            this.splitTexture(highlight, content)
        );
        const processedImg = this.enlargeTexture(
            this.splitTexture(img, content)
        );

        const cellCountY = content.has18
            ? Math.floor(ch / 8)
            : Math.ceil(ch / 8);
        const coord = content.has18
            ? [...Array(cellCountY - 1).fill(16), 18]
            : Array(cellCountY).fill(16);
        const name = this.getFileName(content);
        const code = tileTemplate[type === 'Door' ? 'DoorOpen' : type](
            name,
            this.tileNamespace,
            this.itemNamespace,
            this.dust,
            coord,
            content.flame ? name + '_Flame' : '',
            this.parseLightColor(content),
            this.dustNamespace
        );

        if (flame) {
            const flameImg = await this.handleFlame(flame, content);
            const flameName = name + `_Flame.png`;
            const tex = await canvasToBlob(flameImg);
            await this.write(this.tile.folder, flameName, tex);
        }

        const codeName = name + `.cs`;
        const texName = name + `.png`;
        const highlightName = name + `_Highlight.png`;
        const [tex, hTex] = await Promise.all([
            canvasToBlob(processedImg),
            canvasToBlob(processedHightlight)
        ]);

        const task = [
            this.write(this.tile.folder, codeName, code),
            this.write(this.tile.folder, texName, tex),
            this.write(this.tile.folder, highlightName, hTex)
        ];

        if (content.doorClosed) {
            const file = await content.doorClosed.getFile();
            const buffer = await file.arrayBuffer();
            const closed = await this.loadImage(buffer);
            if (closed) {
                const closedHighlight = this.splitFrameAndHightlight(
                    closed,
                    3,
                    1
                );
                const closedName = name + 'Closed.cs';
                const closedImgName = name + 'Closed.png';
                const closedHighlightName = name + 'Closed_Highlight.png';
                const code = tileTemplate.DoorClosed(
                    name,
                    this.tileNamespace,
                    this.itemNamespace,
                    this.dust,
                    coord,
                    content.flame ? name + '_Flame' : '',
                    this.parseLightColor(content),
                    this.dustNamespace
                );
                const processedClosed = this.enlargeTexture(
                    this.splitTexture(closed, content, 3, 1)
                );
                const processedClosedHighlight = this.enlargeTexture(
                    this.splitTexture(closedHighlight, content, 3, 1)
                );
                const [tex, hTex] = await Promise.all([
                    canvasToBlob(processedClosed),
                    canvasToBlob(processedClosedHighlight)
                ]);
                task.push(
                    this.write(this.tile.folder, closedName, code),
                    this.write(this.tile.folder, closedImgName, tex),
                    this.write(this.tile.folder, closedHighlightName, hTex)
                );
            }
        }

        await Promise.all(task);
    }

    private async handleItem(img: HTMLImageElement, content: ProcessingItem) {
        const processedImg = this.enlargeTexture(img);
        const type = STANDARDIZED_TYPE.get(content.type);
        if (!type) return;

        const name = this.getFileName(content);
        const code = itemTemplate(
            name,
            this.itemNamespace,
            type,
            this.tileNamespace
        );
        const codeFileName = `${name}.cs`;
        const texFileName = `${name}.png`;
        const tex = await canvasToBlob(processedImg);

        // 写入文件
        await Promise.all([
            this.write(this.item.folder, codeFileName, code),
            this.write(this.item.folder, texFileName, tex)
        ]);
    }

    private async handleFlame(
        img: HTMLImageElement | HTMLCanvasElement,
        content: ProcessingItem
    ) {
        return this.enlargeTexture(this.splitTexture(img, content));
    }

    private checkEdges(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D
    ) {
        const resolvedCanvas = document.createElement('canvas');
        const resolvedCtx = resolvedCanvas.getContext('2d')!;
        resolvedCanvas.width = canvas.width;
        resolvedCanvas.height = canvas.height;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const resolvedData = new Uint8ClampedArray(data.length);

        const edge = (index: number) => {
            resolvedData[index * 4] = 255;
            resolvedData[index * 4 + 1] = 255;
            resolvedData[index * 4 + 2] = 255;
            resolvedData[index * 4 + 3] = 255;
        };

        const queue: number[] = [];
        for (let i = 0; i < canvas.width; i++) {
            queue.push(i, canvas.width * (canvas.height - 1) + i);
        }
        for (let i = 1; i < canvas.height - 1; i++) {
            queue.push(i * canvas.width, i * canvas.width + canvas.width - 1);
        }
        const used = new Set<number>();

        while (queue.length > 0) {
            const index = queue.shift();
            if (index === void 0) continue;
            if (used.has(index)) continue;
            const a = data[index * 4 + 3];
            if (a < 25) {
                const nx = index % canvas.width;
                const ny = Math.floor(index / canvas.width);
                const tIndex = (ny - 1) * canvas.width + nx;
                const bIndex = (ny + 1) * canvas.width + nx;
                const lIndex = index - 1;
                const rIndex = index + 1;
                if (!used.has(tIndex)) queue.push(tIndex);
                if (!used.has(bIndex)) queue.push(bIndex);
                if (!used.has(lIndex)) queue.push(lIndex);
                if (!used.has(rIndex)) queue.push(rIndex);
            } else {
                edge(index);
            }
            used.add(index);
        }
        used.clear();

        const resolved = new ImageData(
            resolvedData,
            canvas.width,
            canvas.height
        );
        resolvedCtx.clearRect(0, 0, canvas.width, canvas.height);
        resolvedCtx.putImageData(resolved, 0, 0);
        return resolvedCanvas;
    }

    private async write(
        handle: FileSystemDirectoryHandle | undefined,
        name: string,
        data: Blob | string | null
    ) {
        if (!data || !handle) return;
        const file = await handle.getFileHandle(name, { create: true });
        const writable = await file.createWritable();
        await writable.write(data);
        await writable.close();
    }
}
