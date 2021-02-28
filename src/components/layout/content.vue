<template>
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>
<script>
import { ref } from 'vue';

const prefixCls = 'ivu-layout';
export default {
    name: 'Content',
    setup() {
        const wrapClasses = ref(`${prefixCls}-content`);

        return { wrapClasses };
    }
};
</script>