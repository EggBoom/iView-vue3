<template>
    <div :class="classes">
        <span v-if="hasSlot" :class="slotClasses">
            <slot>{{ slotContent }}</slot>
        </span>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { oneOf } from '../../utils/assist';

const prefixCls = 'ivu-divider';

export default {
    name: 'Divider',
    props: {
        type: {
            type: String,
            default: 'horizontal',
            validator (value) {
                return oneOf(value, ['horizontal', 'vertical']);
            }
        },
        orientation: {
            type: String,
            default: 'center',
            validator (value) {
                return oneOf(value, ['left', 'right', 'center']);
            }
        },
        dashed: {
            type: Boolean,
            default: false,
        },
        size: {
            validator (value) {
                return oneOf(value, ['small', 'default']);
            },
            default: 'default'
        },
        plain: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { slots }) {

        const slotContent = ref('');

        const hasSlot = computed(() => {
            if (slots.default) {
                slotContent.value = slots.default()[0].children;
                return true;
            } else {
                return false;
            }
        });
        const classes = computed(() => {
            return [
                `${prefixCls}`,
                `${prefixCls}-${props.type}`,
                `${prefixCls}-${props.size}`,
                {
                    [`${prefixCls}-with-text`]: hasSlot.value && props.orientation === 'center',
                    [`${prefixCls}-with-text-${props.orientation}`]: hasSlot.value,
                    [`${prefixCls}-dashed`]: !!props.dashed,
                    [`${prefixCls}-plain`]: props.plain
                }
            ];
        });
        const slotClasses = computed(() => {
            return [
                `${prefixCls}-inner-text`,
            ];
        });

        return {
            hasSlot,
            classes,
            slotClasses
        }
    }
};
</script>
