<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
import { computed, getCurrentInstance, onMounted, provide, ref, watch } from 'vue';
import { oneOf } from '../../utils/assist';
import useEmitter from '../../mixins/emitter';

let seed = 0;
const now = Date.now();
const UUID = `CheckboxGroup_${now}_${seed++}`;

export default {
    name: 'CheckboxGroup',
    props: {
        modelValue: {
            type: Array,
            default () {
                return [];
            }
        },
        name: {
            type: String,
            default: UUID,
        },
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large', 'default']);
            }
        }
    },
    emits: ['update:modelValue', 'checkbox-group-change'],
    setup(props, { emit }) {
        const prefixCls = 'ivu-checkbox-group';

        const { dispatch, on } = useEmitter();

        const currentValue = ref(props.modelValue);

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`ivu-checkbox-${props.size}`]: !!props.size
                }
            ];
        });

        const emitChange = () => {
            emit('update:modelValue', currentValue.value);
            emit('checkbox-group-change', currentValue.value);
            dispatch('form-change', currentValue.value);
        };

        const deleteItem = (target) => {
            currentValue.value =  currentValue.value.filter(item => item !== target);
            emitChange();

        };
        const addItem = (target) => {
            currentValue.value.push(target);
            emitChange();
        }

        provide('CheckboxGroupName', props.name);
        provide('GroupValue', currentValue);
        provide('AddItem', addItem);
        provide('DeleteItem', deleteItem);

        return {
            currentValue,
            classes        
        }

    }
};
</script>
