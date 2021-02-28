<template>
    <label :class="wrapClasses">
        <span :class="radioClasses">
            <!-- 实际显示的选中圆点 -->
            <span :class="innerClasses"></span>
            <input
                type="radio"
                :class="inputClasses"
                :disabled="disabled"
                :checked="isChecked"
                :name="name"
                @change="onChange"
                @focus="onFocus"
                @blur="onBlur">
        </span>
        <slot>{{ radioValue }}</slot>
    </label>
</template>
<script>
import { oneOf } from '../../utils/assist';
import useEmitter from '../../mixins/emitter';
import { ref, computed, onMounted, watch, inject } from 'vue';

export default {
    name: 'Radio',
    props: {
        radioValue: {
            type: [String, Number],
            default: '',
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large', 'default']);
            }
        }
    },
    setup(props) {
        const prefixCls = 'ivu-radio';

        const parent = inject('RadioGroup');
        const name = parent.props.name;
        const groupValue = inject('GroupValue', '');

        const { dispatch } = useEmitter();

        const isChecked = ref(false);
        const focusWrapper = ref(false);
        const focusInner = ref(false);

        const wrapClasses = computed(() => {
            return [
                `${prefixCls}-wrapper`,
                `${prefixCls}-group-item`,
                {
                    [`${prefixCls}-wrapper-checked`]: isChecked.value,
                    [`${prefixCls}-wrapper-disabled`]: props.disabled,
                    [`${prefixCls}-${props.size}`]: !!props.size,
                    [`${prefixCls}-focus`]: focusWrapper.value
                }
            ];
        });
        const radioClasses = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-checked`]: isChecked.value,
                    [`${prefixCls}-disabled`]: props.disabled
                }
            ];
        });
        const innerClasses = computed(() => {
            return [
                `${prefixCls}-inner`,
                {
                    [`${prefixCls}-focus`]: focusInner.value
                }
            ];
        });
        const inputClasses = `${prefixCls}-input`;

        const onChange = () => {
            if (props.disabled) {
                return false;
            }

            dispatch('radio-change', props.radioValue);
        };
        const onFocus = () => {
            if (parent && parent.props.type === 'button') {
                focusWrapper.value = true;
            } else {
                focusInner.value = true;
            }
        };
        const onBlur = () => {
            focusWrapper.value = false;
            focusInner.value = false;
        };
        const updateStatus = () => {
            isChecked.value = props.radioValue === groupValue.value;
        };

        onMounted(() => {            
            updateStatus();
        });

        watch(groupValue, updateStatus);

        return {
            groupValue,
            isChecked,
            name,
            parent,
            focusInner,
            focusWrapper,
            wrapClasses,
            radioClasses,
            innerClasses,
            inputClasses,
            onChange,
            onFocus,
            onBlur
        }
    }
};
</script>
