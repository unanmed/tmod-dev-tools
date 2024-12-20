<template>
    <div class="tool-main">
        <div class="tool-split" v-if="support">
            <div class="tool-left">
                <div class="button" @click="folder.choose()">
                    选择并添加文件夹
                </div>
                <div class="folder-list">
                    <div class="folder-one" v-for="item of opened">
                        {{ item.name }}
                        <DeleteOutlined class="folder-delete"></DeleteOutlined>
                    </div>
                </div>
                <div class="button" @click="gen.generate()">生成描边</div>
                <div>注意，该工具只会读取一层文件夹的图片</div>
            </div>
            <div class="tool-right">
                <div class="image-item" v-for="item of gen.files">
                    <Checkbox v-model:checked="item.checked">{{
                        item.handle.name
                    }}</Checkbox>
                </div>
            </div>
        </div>
        <div class="not-support" v-else>
            你的浏览器不支持本工具，请更新浏览器。
        </div>
    </div>
</template>

<script lang="ts" setup>
import { FolderHandler } from '@/common/folder';
import { DeleteOutlined } from '@ant-design/icons-vue';
import { shallowRef } from 'vue';
import { HighlightGenerator } from './generator';
import { Checkbox } from 'ant-design-vue';

const support = 'showDirectoryPicker' in window;
const opened = shallowRef<FileSystemDirectoryHandle[]>([]);

const folder = new FolderHandler();
const gen = new HighlightGenerator(folder);
folder.on('update', () => {
    opened.value = [...folder.folders];
});
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
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: row;
}

.tool-left {
    flex-basis: 40%;
    height: calc(100% - 32px);
    border-right: 1px solid #bbb;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;

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
    }

    .button:hover {
        background-color: #ccc;
    }

    .folder-list {
        width: 100%;
        margin: 8px 0;
        padding: 8px 0;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        height: 100%;
        overflow: auto;

        .folder-one {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size: 18px;
            padding: 8px;
            background-color: #e6e6e6;
            transition: all 0.3s ease;
            margin-bottom: 4px;
        }

        .folder-one:hover {
            background-color: #ddd;
        }

        .folder-delete {
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .folder-delete:hover {
            color: rgb(0, 155, 239);
        }
    }
}

.tool-right {
    flex-basis: 60%;
    height: calc(100% - 32px);
    padding: 16px;
    overflow: auto;
    user-select: none;
}

.not-support {
    font-size: 24px;
}
</style>
