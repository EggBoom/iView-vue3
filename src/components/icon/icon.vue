<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>
<script>
import { computed } from 'vue';

const prefixCls = 'ivu-icon';

export default {
    name: 'Icon',
    props: {
        type: String,
        size: [Number, String],
        color: String
    },
    emits: ['click'],
    setup(props, { emit }) {
        const classes = computed(() => {
            return `${prefixCls} ${prefixCls}-${props.type}`;
        });
        const styles = computed(() => {
            let style = {};

            if (props.size) {
                style['font-size'] = `${props.size}px`;
            }

            if (props.color) {
                style.color = props.color;
            }

            return style;
        });

        const handleClick = (event) => {
            emit('click', event);
        };

        return {
            classes,
            styles,
            handleClick
        };
    }
};
</script>
