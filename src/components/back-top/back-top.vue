<template>
    <div :class="classes" :style="styles" @click="back">
        <slot>
            <div :class="innerClasses">
                <i class="ivu-icon ivu-icon-chevron-up"></i>
            </div>
        </slot>
    </div>
</template>
<script>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { scrollTop } from '../../utils/assist';
import { on, off } from '../../utils/dom';

export default {
    props: {
        height: {
            type: Number,
            default: 400
        },
        bottom: {
            type: Number,
            default: 30
        },
        right: {
            type: Number,
            default: 30
        },
        duration: {
            type: Number,
            default: 1000
        }
    },
    emits: ['click'],
    setup(props, { emit }) {
        const prefixCls = 'ivu-back-top';

        const backTop = ref(false);

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-show`]: backTop.value
                }
            ];
        });
        const styles = computed(() => {
            return {
                bottom: `${props.bottom}px`,
                right: `${props.right}px`
            };
        });
        const innerClasses = computed(() => {
            return `${prefixCls}-inner`;
        });

        const handleScroll = () => {
            backTop.value = window.pageYOffset >= props.height;
        };
        const back = () => {
            const sTop = document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop(window, sTop, 0, props.duration);
            emit('click');
        };

        onMounted(() => {
            on(window, 'scroll', handleScroll);
            on(window, 'resize', handleScroll);           
        });
        onUnmounted(() => {
            off(window, 'scroll', handleScroll);
            off(window, 'resize', handleScroll);
        });

        return {
            classes,
            styles,
            innerClasses,
            handleScroll,
            back
        }
    }
};
</script>
