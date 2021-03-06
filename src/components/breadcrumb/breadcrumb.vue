<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>
<script>
import { provide } from 'vue';

export default {
    name: 'Breadcrumb',
    props: {
        separator: {
            type: String,
            default: '/'
        }
    },
    setup(props) {
        const prefixCls = 'ivu-breadcrumb';

        provide('BreadcrumbSeparator', props.separator);

        return { prefixCls };
    }
};
</script>
