<template>
    <li :class="itemClasses">
        <div :class="tailClasses"></div>
        <div :class="headClasses" :style="customColor" ref="dotEle">
            <slot name="dot"></slot>
        </div>
        <div :class="contentClasses">
            <slot></slot>
        </div>
    </li>
</template>
<script>
import { computed, onMounted, ref } from 'vue';

export default {
    name: 'TimelineItem',
    props: {
        color: {
            type: String,
            default: 'blue'
        }
    },
    setup(props) {
        const prefixCls = 'ivu-timeline';

        const dot = ref(false);

        const dotEle = ref(null);

        const itemClasses = `${prefixCls}-item`;
        const tailClasses = `${prefixCls}-item-tail`;
        const headClasses = computed(() => {
            return [
                `${prefixCls}-item-head`,
                {
                    [`${prefixCls}-item-head-custom`]: dot.value,
                    [`${prefixCls}-item-head-${props.color}`]: headColorShow.value
                }
            ];
        });

        const headColorShow = computed(() => {
            dot.value = (dotEle.value && dotEle.value.innerHTML.length) ? true : false;
        });

        const customColor = computed(() => {
            let style = {};
            if (props.color) {
                if (!headColorShow.value) {
                    style = {
                        'color': props.color,
                        'border-color': props.color
                    };
                }
            }
            return style;
        });

        const contentClasses = `${prefixCls}-item-content`;

        onMounted(() => {
            dot.value = dotEle.value.innerHTML.length ? true : false;
        });

        return {
            dot,
            dotEle,
            itemClasses,
            tailClasses,
            headClasses,
            headColorShow,
            customColor,
            contentClasses
        }
    }
};
</script>
