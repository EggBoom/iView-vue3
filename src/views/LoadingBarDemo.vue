<template>
<h1>LoadingBar 加载进度条</h1>
<p>全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。</p>

<h2>基础用法</h2>
<p>点击 Start 开始进度，点击 Finish 结束。在调用<code>start()</code>方法后，组件会自动模拟进度，当调用<code>finish()</code>或<code>error()</code>时，补全进度并自动消失。</p>
<div class="example">
    <Button @click="start">Start</Button>
    <Button @click="finish">Finish</Button>
    <Button @click="error">Error</Button>
</div>
</template>

<script>
import { getCurrentInstance } from 'vue';
import LoadingBar from '../components/loading-bar';
import Button from '../components/button'

export default {
    components: { LoadingBar, Button },
    setup() {
        const instance = getCurrentInstance();
        console.log('instance: ', instance);

        const start = () => {
            instance.$Loading.start();
        };
        const finish = () => {
            instance.$Loading.finish();
        };
        const error = () => {
            instance.$Loading.error();
        };

        return {
            start,
            finish,
            error
        }
    }

}
</script>

<style>

</style>