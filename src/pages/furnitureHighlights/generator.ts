import { FolderHandler } from '@/common/folder';
import { message } from 'ant-design-vue';
import { markRaw, reactive } from 'vue';

interface HighlightItem {
    handle: FileSystemFileHandle;
    folder: FileSystemDirectoryHandle;
    checked: boolean;
}

const DEFAULT_POSTFIX = ['.png', '.jpg', '.jpeg'];
const FURNITURE_NUM = new Map<string, number>([
    ['bathtub', 2],
    ['bed', 2],
    ['candelabra', 2],
    ['candle', 2],
    ['chair', 2],
    ['chandelier', 2],
    ['door', 2],
    ['doorclosed', 3],
    ['lamp', 2],
    ['lantern', 2],
    ['toilet', 2],
    ['clock', 1] // special
]);

export class HighlightGenerator {
    files: HighlightItem[] = reactive([]);
    validPostfix: Set<string>;
    processing: boolean = false;

    constructor(public folder: FolderHandler, postfix: string[] = []) {
        this.validPostfix = new Set(DEFAULT_POSTFIX.concat(postfix));
        folder.on('update', () => {
            this.files.splice(0);
            folder.folders.forEach(v => this.readFolder(v));
        });
    }

    private async readFolder(folder: FileSystemDirectoryHandle) {
        for await (const item of folder.values()) {
            if (item.kind === 'directory') continue;
            if (!this.checkPostfix(item)) continue;
            this.files.push({
                handle: markRaw(item),
                folder: markRaw(folder),
                checked: true
            });
        }
    }

    private checkPostfix(file: FileSystemFileHandle) {
        const name = file.name;
        const split = name.split('.');
        if (split.length === 1 || split.length === 0) return false;
        const postfix = '.' + split.at(-1)!;
        return (
            this.validPostfix.has(postfix) &&
            !split.at(-2)?.endsWith('_Highlight')
        );
    }

    async generate() {
        this.processing = true;
        message.info('处理中，请稍后...');
        await Promise.all(
            [...this.files].map(async ({ handle, folder, checked }) => {
                if (!checked) return;
                const data = await handle.getFile();
                const buffer = await data.arrayBuffer();
                const canvas = await this.handleImage(buffer, handle.name);
                const blob = await new Promise<Blob | null>(res => {
                    canvas.toBlob(blob => {
                        res(blob);
                    });
                });
                if (!blob) return;
                const name = handle.name;
                const split = name.split('.');
                const resolved =
                    split.slice(0, -1).join('.') +
                    '_Highlight.' +
                    split.at(-1)!;
                const newFile = await folder.getFileHandle(resolved, {
                    create: true
                });
                const write = await newFile.createWritable();
                await write.write(blob);
                await write.close();
            })
        );
        message.success('保存成功！');
        this.processing = false;
    }

    private async handleImage(buffer: ArrayBuffer, name: string) {
        const blob = new Blob([buffer], { type: 'image/png' });
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.src = url;
        await new Promise<void>(res => {
            img.addEventListener('load', () => res(), { once: true });
        });

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;
        canvas.width = img.width;
        canvas.height = img.height;
        const split = name.split('.');
        const post = split.at(-2)?.toLowerCase();
        const match = [...FURNITURE_NUM].find(([k]) => post?.endsWith(k));
        let num = 1;
        if (match) {
            num = match[1];
        }

        const isChest = !!post?.endsWith('chest');
        const eliminated = this.eliminateInterval(img, num, isChest);
        const resolved: HTMLCanvasElement[] = [];
        eliminated.forEach(([canvas, ctx]) => {
            resolved.push(this.checkEdges(canvas, ctx));
        });
        this.recoverInterval(ctx, resolved, isChest);
        URL.revokeObjectURL(url);

        return canvas;
    }

    private eliminateInterval(
        img: HTMLImageElement | HTMLCanvasElement,
        num: number,
        isChest: boolean
    ) {
        const cellWidth = Math.ceil(img.width / 18);
        const cellHeight = Math.ceil(img.height / 18);

        const eleCellWidth = Math.round(cellWidth / num);

        const res: [HTMLCanvasElement, CanvasRenderingContext2D][] = [];
        if (isChest) {
            const width = Math.ceil(cellWidth / 2);
            const height = Math.ceil(cellHeight / 2);
            for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d')!;
                    canvas.width = 17;
                    canvas.height = 17;
                    ctx.imageSmoothingEnabled = false;
                    const px = x * 36;
                    const py = y * 38;
                    ctx.drawImage(img, px, py, 16, 16, 0, 0, 8, 8);
                    ctx.drawImage(img, px + 18, py, 16, 16, 8, 0, 8, 8);
                    ctx.drawImage(img, px, py + 18, 16, 18, 0, 8, 8, 9);
                    ctx.drawImage(img, px + 18, py + 18, 16, 18, 8, 8, 8, 9);
                    res.push([canvas, ctx]);
                }
            }
        } else {
            for (let i = 0; i < num; i++) {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d')!;
                canvas.width = eleCellWidth * 8;
                canvas.height = cellHeight * 8;
                ctx.imageSmoothingEnabled = false;
                for (let x = 0; x < eleCellWidth; x++) {
                    for (let y = 0; y < cellHeight; y++) {
                        const px = i * eleCellWidth * 18 + x * 18;
                        const py = y * 18;
                        const dx = x * 8;
                        const dy = y * 8;
                        ctx.drawImage(img, px, py, 16, 16, dx, dy, 8, 8);
                    }
                }
                res.push([canvas, ctx]);
            }
        }

        return res;
    }

    private recoverInterval(
        ctx: CanvasRenderingContext2D,
        canvases: HTMLCanvasElement[],
        isChest: boolean
    ) {
        const eleCellWidth = Math.round(canvases[0].width / 8);
        const cellHeight = Math.round(canvases[0].height / 8);
        ctx.imageSmoothingEnabled = false;
        if (isChest) {
            const cellWidth = Math.ceil(ctx.canvas.width / 18 / 2);
            const cellHeight = Math.ceil(ctx.canvas.height / 18 / 2);
            for (let x = 0; x < cellWidth; x++) {
                for (let y = 0; y < cellHeight; y++) {
                    const index = y + x * cellHeight;
                    const dx = x * 36;
                    const dy = y * 36;
                    const img = canvases[index];
                    ctx.drawImage(img, 0, 0, 8, 8, dx, dy, 16, 16);
                    ctx.drawImage(img, 8, 0, 8, 8, dx + 18, dy, 16, 16);
                    ctx.drawImage(img, 0, 8, 8, 9, dx, dy + 18, 16, 18);
                    ctx.drawImage(img, 8, 8, 8, 9, dx + 18, dy + 18, 16, 18);
                }
            }
        } else {
            canvases.forEach((v, i) => {
                for (let x = 0; x < eleCellWidth; x++) {
                    for (let y = 0; y < cellHeight; y++) {
                        const sx = x * 8;
                        const sy = y * 8;
                        const dx = eleCellWidth * i * 18 + x * 18;
                        const dy = y * 18;
                        ctx.drawImage(v, sx, sy, 8, 8, dx, dy, 16, 16);
                    }
                }
            });
        }
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
}
