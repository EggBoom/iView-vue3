<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
import { computed } from 'vue';
import { oneOf } from '../../utils/assist';

export default {
    name: 'Row',
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['flex']);
            }
        },
        align: {
            validator (value) {
                return oneOf(value, ['top', 'middle', 'bottom']);
            }
        },
        justify: {
            validator (value) {
                return oneOf(value, ['start', 'end', 'center', 'space-around', 'space-between']);
            }
        },
        gutter: {
            type: Number,
            default: 0
        },
        className: String
    },
    setup(props) {
        const prefixCls = 'ivu-row';

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-${props.type}`]: !!props.type,
                    [`${prefixCls}-${props.align}`]: !!props.align,
                    [`${prefixCls}-${props.justify}`]: !!props.justify,
                    [`${props.className}`]: !!props.className
                }
            ];
        });
        const styles = computed(() => {
            let style = {};
            if (props.gutter !== 0) {
                style = {
                    marginLeft: props.gutter / -2 + 'px',
                    marginRight: props.gutter / -2 + 'px'
                };
            }
            return style;
        });

        return { classes, styles };

    }
};
</script>
