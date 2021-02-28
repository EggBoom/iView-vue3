<template>
    <transition name="fade">
        <div :class="classes" :style="outerStyles" v-show="show">
            <div :class="innerClasses" :style="styles"></div>
        </div>
    </transition>
</template>
<script>
import { computed, ref } from 'vue';

export default {
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        failedColor: {
            type: String,
            default: 'error'
        },
        height: {
            type: Number,
            default: 2
        },
    },
    setup(props) {
        const prefixCls = 'ivu-loading-bar';

        const percent = ref(0);
        const status = ref('success');
        const show = ref(false);

        const classes = computed(() => {
            return `${prefixCls}`;
        });
        const innerClasses = computed(() => {
            return [
                `${prefixCls}-inner`,
                {
                    [`${prefixCls}-inner-color-primary`]: props.color === 'primary' && status.value === 'success',
                    [`${prefixCls}-inner-failed-color-error`]: props.failedColor === 'error' && status.value === 'error'
                }
            ];
        });
        const outerStyles = computed(() => {
            return {
                height: `${props.height}px`
            };
        });
        const styles = computed(() => {
            let style = {
                width: `${percent.value}%`,
                height: `${props.height}px`
            };

            if (props.color !== 'primary' && status.value === 'success') {
                style.backgroundColor = props.color;
            }

            if (props.failedColor !== 'error' && status.valiue === 'error') {
                style.backgroundColor = props.failedColor;
            }

            return style;
        });

        return {
            show,
            status,
            percent,
            classes,
            innerClasses,
            outerStyles,
            styles
        }
    }
};
</script>
