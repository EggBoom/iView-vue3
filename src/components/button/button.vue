<template>
    <button
        :type="htmlType"
        :class="classes"
        :disabled="disabled"
        @click="handleClick">
        <Icon class="ivu-load-loop" type="ios-loading" v-if="loading"></Icon>
        <Icon :type="icon" v-if="icon && !loading"></Icon>
        <span v-if="showSlot" ref="slot">
            <slot></slot>
        </span>
    </button>
</template>
<script>
import { ref, onMounted, computed } from 'vue';
import Icon from '../icon';
import { oneOf } from '../../utils/assist';
const prefixCls = 'ivu-btn';

export default {
    name: 'Button',
    components: { Icon },
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default']);
            }
        },
        shape: {
            validator (value) {
                return oneOf(value, ['circle', 'circle-outline']);
            }
        },
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large', 'default']);
            }
        },
        loading: Boolean,
        disabled: Boolean,
        htmlType: {
            default: 'button',
            validator (value) {
                return oneOf(value, ['button', 'submit', 'reset']);
            }
        },
        icon: String,
        long: {
            type: Boolean,
            default: false
        }
    },
    emits: ['click'],
    setup(props, { emit, slots }) {
        const showSlot = ref(false);

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-${props.type}`]: !!props.type,
                    [`${prefixCls}-long`]: props.long,
                    [`${prefixCls}-${props.shape}`]: !!props.shape,
                    [`${prefixCls}-${props.size}`]: !!props.size,
                    [`${prefixCls}-loading`]: props.loading != null && props.loading,
                    [`${prefixCls}-icon-only`]: !showSlot && (!!props.icon || props.loading)
                }
            ];
        })

        const handleClick = (event) => {
            emit('click', event);
        }

        onMounted(() => {
            showSlot.value = slots.default !== undefined;
        })

        return { 
            showSlot,
            classes,
            handleClick
        };
    }
};
</script>