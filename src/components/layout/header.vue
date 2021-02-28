<template>
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>
<script>
import { ref } from 'vue';

const prefixCls = 'ivu-layout';
export default {
    name: 'Header',
    setup() {
        const wrapClasses = ref(`${prefixCls}-header`);

        return { wrapClasses };
    }
};
</script>