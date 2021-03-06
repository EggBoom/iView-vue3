<template>
    <ul :class="classes">
        <slot></slot>
    </ul>
</template>
<script>
import { computed } from 'vue';
export default {
    name: 'Timeline',
    props: {
        pending: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const prefixCls = 'ivu-timeline';

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-pending`]: props.pending
                }
            ];
        });

        return { classes };
    }
};
</script>
