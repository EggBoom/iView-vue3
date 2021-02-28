<template>
    <label :class="wrapClasses">
        <span :class="checkboxClasses">
            <span :class="innerClasses"></span>
            <input
                type="checkbox"
                :class="inputClasses"
                :disabled="disabled"
                :checked="isChecked"
                :name="name"
                @change="onChange"
                @focus="onFocus"
                @blur="onBlur">
        </span>
        <slot>{{ checkboxValue }}</slot>
    </label>
</template>
<script>
import { oneOf } from '../../utils/assist';
import useEmitter from '../../mixins/emitter';
import { computed, inject, onMounted, ref } from 'vue';

export default {
    name: 'Checkbox',
    props: {
        checkboxValue: {
            type: [String, Number, Boolean],
            default: false,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        indeterminate: {
            type: Boolean,
            default: false
        },
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large', 'default']);
            }
        },
    },
    data () {
        return {
            model: [],
        };
    },
    setup(props) {
        const prefixCls = 'ivu-checkbox';

        const { dispatch } = useEmitter();

        const name = inject('CheckboxGroupName');
        const groupValue = inject('GroupValue', []);
        const addItem = inject('AddItem');
        const deleteItem = inject('DeleteItem');

        const isFocused = ref(false);
        const isChecked = ref(false);

        const wrapClasses = computed(() => {
            return [
                `${prefixCls}-wrapper`,
                `${prefixCls}-group-item`,
                {
                    [`${prefixCls}-wrapper-checked`]: isChecked.value,
                    [`${prefixCls}-wrapper-disabled`]: props.disabled,
                    [`${prefixCls}-${props.size}`]: !!props.size
                }
            ];
        });
        const checkboxClasses = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-checked`]: isChecked.value,
                    [`${prefixCls}-disabled`]: props.disabled,
                    [`${prefixCls}-indeterminate`]: props.indeterminate
                }
            ];
        });
        const innerClasses = computed(() => {
            return [
                `${prefixCls}-inner`,
                {
                    [`${prefixCls}-focus`]: isFocused.value
                }
            ];
        });
        const inputClasses = `${prefixCls}-input`;

        const onChange = () => {
            if (props.disabled) {
                return false;
            }

            isChecked.value = !isChecked.value;

            isChecked.value ? addItem(props.checkboxValue) : deleteItem(props.checkboxValue);
        };
        const onBlur = () => isFocused.value = false;

        const onFocus = () => isFocused.value = true;

        const updateStatus = () => {
            isChecked.value =  groupValue.value.some(item => item.indexOf(props.checkboxValue) > -1);
        };

        onMounted(() => updateStatus());

        return {
            inputClasses,
            innerClasses,
            checkboxClasses,
            wrapClasses,
            name,
            isChecked,
            onChange,
            onBlur,
            onFocus,
            groupValue        
        }

    }
};
</script>
