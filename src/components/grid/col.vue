<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
import { computed, getCurrentInstance, onMounted, onUpdated, ref } from 'vue';

export default {
    name: 'Col',
    props: {
        span: [Number, String],
        order: [Number, String],
        offset: [Number, String],
        push: [Number, String],
        pull: [Number, String],
        className: String,
        xs: Number,
        sm: Number,
        md: Number,
        lg: Number
    },
    setup(props) {
        const prefixCls = 'ivu-col';

        const instance = getCurrentInstance();

        const gutter = ref(0);

        const classes = computed(() => {
            let classList = [
                `${prefixCls}`,
                {
                    [`${prefixCls}-span-${props.span}`]: props.span,
                    [`${prefixCls}-order-${props.order}`]: props.order,
                    [`${prefixCls}-offset-${props.offset}`]: props.offset,
                    [`${prefixCls}-push-${props.push}`]: props.push,
                    [`${prefixCls}-pull-${props.pull}`]: props.pull,
                    [`${props.className}`]: !!props.className
                }
            ];

            ['xs', 'sm', 'md', 'lg'].forEach(size => {
                if (props[size]) {
                    classList.push(`${prefixCls}-span-${size}-${props[size]}`);
                }
            });

            return classList;
        });
        const styles = computed(() => {
            let style = {};
            if (gutter.value !== 0) {
                style = {
                    paddingLeft: gutter.value / 2 + 'px',
                    paddingRight: gutter.value / 2 + 'px'
                };
            }

            return style;
        });

        const updateGutter = () => gutter.value = instance.parent.props.gutter;

        onMounted(() => updateGutter());

        onUpdated(() => updateGutter());

        return {
            gutter,
            classes,
            styles,
            updateGutter
        }
    }
};
</script>
