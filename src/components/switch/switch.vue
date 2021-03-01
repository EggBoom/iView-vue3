<template>
    <span
        tabindex="0"
        :class="wrapClasses"
        :style="wrapStyles"
        @click.prevent="toggle"
        @keydown.space.prevent="toggle"
    >
        <input type="hidden" :name="name" :value="currentValue">
        <span :class="innerClasses">
            <slot name="open" v-if="currentValue === trueValue"></slot>
            <slot name="close" v-if="currentValue === falseValue"></slot>
        </span>
    </span>
</template>
<script>
import { oneOf } from '../../utils/assist';
import useEmitter from '../../mixins/emitter';
import { computed, watch, ref } from 'vue';

const prefixCls = 'ivu-switch';

export default {
    name: 'Switch',
    props: {
        modelValue: {
            type: [String, Number, Boolean],
            default: false
        },
        trueValue: {
            type: [String, Number, Boolean],
            default: true
        },
        falseValue: {
            type: [String, Number, Boolean],
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            validator (value) {
                return oneOf(value, ['large', 'small', 'default']);
            }
        },
        name: {
            type: String
        },
        loading: {
                type: Boolean,
                default: false
        },
        trueColor: {
            type: String
        },
        falseColor: {
            type: String
        },
        beforeChange: Function
    },
    emits: ['update:modelValue', 'on-change'],
    setup(props, { emit }) {
        const currentValue = ref(props.modelValue);

        const { dispatch } = useEmitter();

        const wrapClasses = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-checked`]: currentValue.value === props.trueValue,
                    [`${prefixCls}-disabled`]: props.disabled,
                    [`${prefixCls}-${props.size}`]: !!props.size,
                    [`${prefixCls}-loading`]: props.loading,
                }
            ];
        });
        const innerClasses = `${prefixCls}-inner`;

        const wrapStyles = computed(() => {
            let style = {};
            if (props.trueColor && currentValue.value === props.trueValue) {
                style['border-color'] = props.trueColor;
                style['background-color'] = props.trueColor;
            } else if (props.falseColor && currentValue.value === props.falseValue) {
                style['border-color'] = props.falseColor;
                style['background-color'] = props.falseColor;
            }
            return style;
        });

        const handleToggle = () => {
            const checked = currentValue.value === props.trueValue ? props.falseValue : props.trueValue;

            currentValue.value = checked;
            emit('update:modelValue', checked);
            emit('on-change', checked);
            dispatch('on-form-change', checked);
        };

        const toggle = () => {
            if (props.disabled || props.loading) return;

            if (!props.beforeChange) {
                return handleToggle();
            }

            const before = props.beforeChange();

            if (before && before.then) {
                before.then(() => {
                    handleToggle();
                });
            } else {
                handleToggle();
            }
        };

        watch(props.modelValue, (val) => {
            if (val !== props.trueValue && val !== props.falseValue) {
                throw 'Value should be trueValue or falseValue.';
            }
            currentValue.value = val;
        })

        return {
            currentValue,
            wrapClasses,
            innerClasses,
            toggle,
            wrapStyles
        }
    }
};
</script>
