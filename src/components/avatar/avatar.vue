<template>
    <span :class="classes">
        <img v-if="src" :src="src">
        <Icon v-else-if="icon" :type="icon"></Icon>
        <span v-else ref="children" :class="childrenCls" :style="childrenStyle">
            <slot></slot>
        </span>
    </span>
</template>
<script>
import { computed, getCurrentInstance, onMounted, onUpdated, ref } from 'vue';
import Icon from '../icon';
import { oneOf } from '../../utils/assist';

export default {
    name: 'Avatar',
    components: { Icon },
    props: {
        shape: {
            validator (value) {
                return oneOf(value, ['circle', 'square']);
            },
            default: 'circle'
        },
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large', 'default']);
            },
            default: 'default'
        },
        src: {
            type: String
        },
        icon: {
            type: String
        }
    },
    setup(props) {
        const instance = getCurrentInstance();

        const prefixCls = 'ivu-avatar';
        const scale = ref(1);
        const childrenWidth = ref(0);
        const isSlotShow = ref(false);

        const children = ref(null);

        const childrenCls = `${prefixCls}-string`;

        const childrenStyle = computed(() => {
            let style = {};
            if (isSlotShow.value) {
                style = {
                    msTransform: `scale(${scale.value})`,
                    WebkitTransform: `scale(${scale.value})`,
                    transform: `scale(${scale.value})`,
                    position: 'absolute',
                    display: 'inline-block',
                    left: `calc(50% - ${Math.round(childrenWidth.value / 2)}px)`
                };
            }
            return style;
        });

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                `${prefixCls}-${props.shape}`,
                `${prefixCls}-${props.size}`,
                {
                    [`${prefixCls}-image`]: !!props.src,
                    [`${prefixCls}-icon`]: !!props.icon
                }
            ];
        });

        const setScale = () => {
            isSlotShow.value = !props.src && !props.icon;
            if (children.value) {
                // set children width again to make slot centered
                childrenWidth.value = children.value.offsetWidth;
                debugger
                const avatarWidth = instance.proxy.$el.getBoundingClientRect().width;
                // add 4px gap for each side to get better performance
                if (avatarWidth - 8 < childrenWidth.value) {
                    scale.value = (avatarWidth - 8) / childrenWidth.value;
                } else {
                    scale.value = 1;
                }
            }
        };

        onMounted(() => setScale());
        onUpdated(() => setScale());

        return {
            prefixCls,
            scale,
            childrenWidth,
            children,
            isSlotShow,
            classes,
            childrenCls,
            childrenStyle,
            setScale
        }
    }
};
</script>
