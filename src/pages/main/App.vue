<template>
    <div class="main-div">
        <div class="header">tMod 开发小工具</div>
        <div class="tool-list">
            <div
                class="tool-one"
                v-for="[name, url] of tools"
                @click="open(url)"
            >
                <div class="tool-button">
                    {{ name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const tools = [
    ['家具贴图描边', `${import.meta.env.BASE_URL}furnitureHighlights`],
    ['家具代码生成', `${import.meta.env.BASE_URL}furnitureGenerator`]
] satisfies [string, string][];

function open(url: string) {
    window.open(url);
}
</script>

<style lang="less" scoped>
.main-div {
    background-color: #eee;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.header {
    font-size: 36px;
}

.tool-one {
    font-size: 18px;
    padding: 8px 48px;
    width: 300px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 8px;
}

.tool-one:hover {
    background-color: #ccc;
}

.tool-list {
    margin-top: 18px;
    border-top: 1px solid #ddd;
    padding-top: 18px;
    max-height: 50%;
    overflow: auto;
    margin-bottom: 72px;
}
</style>
