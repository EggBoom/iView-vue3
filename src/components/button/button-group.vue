<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
import { computed } from 'vue';
import { oneOf } from '../../utils/assist';

const prefixCls = 'ivu-btn-group';

export default {
    name: 'ButtonGroup',
    props: {
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large', 'default']);
            }
        },
        shape: {
            validator (value) {
                return oneOf(value, ['circle', 'circle-outline']);
            }
        },
        vertical: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const classes = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-${props.size}`]: !!props.size,
                    [`${prefixCls}-${props.shape}`]: !!props.shape,
                    [`${prefixCls}-vertical`]: props.vertical
                }
            ];
        })

        return { classes };
    }
};
</script>