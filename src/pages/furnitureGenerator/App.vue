<template>
    <div class="tool-main">
        <div class="introduction">
            <Button type="primary" @click="intro">使用说明</Button>
        </div>
        <div class="tool-split" v-if="support">
            <div class="tool-left">
                <div class="left-input">
                    <div class="input">
                        <span class="input-hint">家具名称</span>
                        <Input
                            class="input-input"
                            v-model:value="furnitureName"
                        ></Input>
                    </div>
                    <div class="input">
                        <span class="input-hint">家具 Tile 命名空间</span>
                        <Input
                            class="input-input"
                            v-model:value="tileNamespace"
                        ></Input>
                    </div>
                    <div class="input">
                        <span class="input-hint">家具 Item 命名空间</span>
                        <Input
                            class="input-input"
                            v-model:value="itemNamespace"
                        ></Input>
                    </div>
                    <div class="input">
                        <span class="input-hint">Dust 类型</span>
                        <Input
                            class="input-input"
                            v-model:value="tileDust"
                        ></Input>
                    </div>
                    <div class="input">
                        <span class="input-hint">Dust 所在命名空间</span>
                        <Input
                            class="input-input"
                            v-model:value="dustNamespace"
                        ></Input>
                    </div>
                    <div class="input">
                        <span class="input-hint">LightColor</span>
                        <Input
                            class="input-input"
                            v-model:value="light"
                        ></Input>
                    </div>
                    <div class="folder">
                        <div class="button" @click="choose(itemFolder)">
                            选择 Item 文件夹
                        </div>
                        <div>{{ itemFolderName }}</div>
                    </div>
                    <div class="folder">
                        <div class="button" @click="choose(tileFolder)">
                            选择 Tile 文件夹
                        </div>
                        <div>{{ tileFolderName }}</div>
                    </div>
                </div>
                <div class="button generate" @click="generate">生成</div>
            </div>
            <div class="tool-right">
                <div class="item-right" v-for="item of gen.list">
                    <Checkbox v-model:checked="item.checked">
                        <div class="right-text">
                            <span class="text-from">{{
                                gen.getStandardizedType(item)
                            }}</span>
                            <span class="text-convert"> ----&gt; </span>
                            <span class="text-to">{{
                                gen.getFileName(item, furnitureName)
                            }}</span>
                        </div>
                    </Checkbox>
                </div>
            </div>
        </div>
        <div class="not-support" v-else>
            你的浏览器不支持本工具，请更新浏览器。
        </div>
    </div>
</template>

<script lang="tsx" setup>
import { SingleFolderHandler } from '@/common/folder';
import { Input, Button, Modal, Checkbox } from 'ant-design-vue';
import { ref } from 'vue';
import { FurnitureGenerator } from './generator';

const support = 'showDirectoryPicker' in window;

const furnitureName = ref('');
const tileNamespace = ref('');
const itemNamespace = ref('');
const tileDust = ref('');
const dustNamespace = ref('');
const light = ref('');
const itemFolderName = ref('');
const tileFolderName = ref('');

const itemFolder = new SingleFolderHandler();
const tileFolder = new SingleFolderHandler();
const gen = new FurnitureGenerator(itemFolder, tileFolder);

itemFolder.on('update', () => {
    itemFolderName.value = itemFolder.folder?.name ?? '';
});
tileFolder.on('update', () => {
    tileFolderName.value = tileFolder.folder?.name ?? '';
});

function choose(folder: SingleFolderHandler) {
    folder.choose();
}

function intro() {
    Modal.info({
        title: '使用说明',
        content: () => (
            <div style="font-size: 16px">
                <p>
                    该工具可以通过 Tile, Item
                    的贴图来自动生成家具代码，需要提供未分割的家具贴图，会一并生成家具描边图片。
                </p>
                <p>使用该工具时，贴图需要满足如下要求：</p>
                <ol>
                    <li>
                        贴图每格8像素，而非16像素。本工具会自动生成2x2放大后的正常贴图。
                    </li>
                    <li>
                        贴图需要未经分割，即贴图不应该有透明分割线。本工具会自动生成切割后的贴图。
                    </li>
                    <li>
                        贴图命名时，要遵循 <b>xxxBed_yyy.png</b>{' '}
                        的形式。如果同类家具包含多个家具， 那么需要遵循{' '}
                        <b>xxxBed_Type2_yyy.png</b> 的形式。
                        贴图命名需要保证第一个下划线之前的内容完全一致，
                        <b>_yyy</b>
                        为可选，一般不影响最终结果，且{' '}
                        <b>
                            不应当用于区分不同贴图，即去掉家具名称的 _yyy
                            部分后，不会出现名称重复现象
                        </b>
                        。
                    </li>
                    <li>
                        如果 tile 贴图有多帧，那么不同帧之间应该由 1px 宽度或
                        1px 高度的透明行分割。
                        例如对于箱子，那么上下两帧之间必须有 1px
                        高度的透明行分割，再如对于床，左右两个朝向的床之间也必须有一个
                        1px 宽度的透明列分割。
                    </li>
                    <li>
                        对于烛台等可能拥有火焰贴图的家具，火焰贴图需要以{' '}
                        <b>xxxCandle_Type1_Flame_yyy.png</b> 的形式命名。
                        如果没有找到对应的贴图，那么会不包含火焰渲染代码。 其中{' '}
                        <b>_Type1</b> 也是可选的，Flame
                        前的内容需要与家具保持一致。
                    </li>
                </ol>
                <p>输出格式：</p>
                <ol>
                    <li>
                        代码为 <b>家具名称_Type1.cs</b> 的形式，其中{' '}
                        <b>_Type1</b> 部分遵循原贴图命名。
                    </li>
                    <li>
                        贴图命名与代码相同，会去掉 <b>_yyy</b> 部分。
                    </li>
                </ol>
                <p>部分使用说明</p>
                <ol>
                    <li>
                        LightColor: 填写一个字符串，格式为 r,g,b 的格式，例如
                        0.75,0.8,0.9， 也可以填写大于 1 的数值，会自动除以 255。
                    </li>
                </ol>
            </div>
        ),
        width: window.innerWidth * 0.8
    });
}

function generate() {
    gen.setName(furnitureName.value);
    gen.setNamespace(itemNamespace.value, tileNamespace.value);
    gen.setDust(tileDust.value, dustNamespace.value);
    gen.setLightColor(light.value);
    gen.generate();
}
</script>

<style lang="less" scoped>
.tool-main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
}

.tool-split {
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: row;

    .button {
        width: 80%;
        height: 40px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ddd;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap;
        padding: 0 8px;
    }

    .button:hover {
        background-color: #ccc;
    }

    .tool-left {
        flex-basis: 50%;
        height: calc(100% - 32px);
        border-right: 1px solid #bbb;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 16px;

        .left-input {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: max-content;
        }

        .input {
            margin: 8px 0;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .input-hint {
                white-space: nowrap;
                margin-right: 16px;
            }

            .input-input {
                width: 60%;
            }
        }

        .folder {
            margin: 8px 0;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;

            .button {
                font-size: 16px;
                width: calc(40% - 32px);
                margin-right: 16px;
            }
        }

        .generate {
            margin-top: 48px;
        }
    }
}

.tool-right {
    flex-basis: 50%;
    height: calc(100% - 32px);
    padding: 16px;
    overflow: auto;
    user-select: none;

    .item-right {
        width: 100%;

        ::v-deep(label) {
            width: 100%;

            > .ant-checkbox + span {
                width: 100%;
            }
        }
    }

    .right-text {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 16px;

        .text-from {
            width: 30%;
        }

        .text-convert {
            width: 20%;
        }

        .text-to {
            width: 50%;
        }
    }
}

.introduction {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 48px;
}
</style>
