<template>
    <transition name="fade">
        <div v-if="fullscreenVisible" :class="classes">
            <div :class="mainClasses">
                <span :class="dotClasses"></span>
                <div :class="textClasses">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { computed, onMounted, ref, watch } from 'vue';
import { oneOf } from '../../utils/assist';
import useScrollBar from '../modal/mixins-scrollbar';

export default {
    name: 'Spin',
    mixins: [ ScrollbarMixins ],
    props: {
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large']);
            }
        },
        fix: {
            type: Boolean,
            default: false
        },
        fullscreen: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const prefixCls = 'ivu-spin';

        const mainClasses = `${prefixCls}-main`;
        const dotClasses = `${prefixCls}-dot`;
        const textClasses = `${prefixCls}-text`;

        const showText = ref(false);
        const visible = ref(false);

        const { addScrollEffect, removeScrollEffect } = useScrollBar();

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-${props.size}`]: !!props.size,
                    [`${prefixCls}-fix`]: props.fix,
                    [`${prefixCls}-show-text`]: showText.value,
                    [`${prefixCls}-fullscreen`]: fullscreen.value
                }
            ];
        });

        const fullscreenVisible = computed(() => {
            return props.fullscreen ? visible.value : true;
        });

        watch(visible, (newValue) => {
            newValue ? addScrollEffect() : removeScrollEffect();
        });

        onMounted(() => {
            showText.value = !!slots.default;
        })

        return {
            mainClasses,
            dotClasses,
            textClasses,
            showText,
            visible,
            classes,
            fullscreenVisible
        }
    }
};
</script>
