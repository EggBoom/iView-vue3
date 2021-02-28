<template>
    <div :class="classes">
        <div :class="headClasses" v-if="showHead">
            <slot name="title">
                <p v-if="title">
                    <Icon v-if="icon" :type="icon"></Icon>
                    {{title}}
                </p>
            </slot>
        </div>
        <div :class="extraClasses" v-if="showExtra">
            <slot name="extra"></slot>
        </div>
        <div :class="bodyClasses" :style="bodyStyles">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
import Icon from '../icon/icon.vue';

export default {
    name: 'Card',
    components: { Icon },
    props: {
        bordered: {
            type: Boolean,
            default: true
        },
        disHover: {
            type: Boolean,
            default: false
        },
        shadow: {
            type: Boolean,
            default: false
        },
        padding: {
            type: Number,
            default: 16
        },
        title: {
            type: String,
        },
        icon: {
            type: String,
        }
    },
    setup(props, { slots }) {
        const prefixCls = 'ivu-card';
        const defaultPadding = 16;

        const showHead = ref(true);
        const showExtra = ref(true);

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-bordered`]: props.bordered && !props.shadow,
                    [`${prefixCls}-dis-hover`]: props.disHover || props.shadow,
                    [`${prefixCls}-shadow`]: props.shadow
                }
            ];
        });
        const headClasses = computed(() => {
            return `${prefixCls}-head`;
        });
        const bodyClasses = computed(() => {
            return `${prefixCls}-body`;
        });
        const extraClasses = computed(() => {
            return `${prefixCls}-extra`;
        });
        const bodyStyles = computed(() => {
            return props.padding !== defaultPadding ? { padding: `${props.padding}px` } : '';
        });

        onMounted(() => {
            showHead.value = props.title || slots.title !== undefined;
            showExtra.value = slots.extra !== undefined;
        })

        return{
            showHead,
            showExtra,
            classes,
            headClasses,
            bodyClasses,
            extraClasses,
            bodyStyles

        }
    }
};
</script>
