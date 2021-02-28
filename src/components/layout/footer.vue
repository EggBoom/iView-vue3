<template>
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>
<script>
import { ref } from 'vue';

const prefixCls = 'ivu-layout';
export default {
    name: 'Footer',
    setup() {
        const wrapClasses = ref(`${prefixCls}-footer`);

        return { wrapClasses };
    }
};
</script>