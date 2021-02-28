<template>
    <div :class="classes" :name="name">
        <slot></slot>
    </div>
</template>
<script>
import { oneOf } from '../../utils/assist';
import useEmitter from '../../mixins/emitter';
import { ref, computed, onMounted, watch, provide, getCurrentInstance } from 'vue';

let seed = 0;
const now = Date.now();
const UUID = `RadioGroup_${now}_${seed++}`;

export default {
    name: 'RadioGroup',
    props: {
        name: {
            type: String,
            default: UUID,
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large', 'default']);
            }
        },
        type: {
            validator (value) {
                return oneOf(value, ['button']);
            }
        },
        vertical: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue', 'radio-group-change'],
    setup(props, { emit }) {
        const prefixCls = 'ivu-radio-group';

        const instance = getCurrentInstance();

        const { dispatch, on } = useEmitter();

        const currentValue = ref(props.modelValue);

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-${props.size}`]: !!props.size,
                    [`ivu-radio-${props.size}`]: !!props.size,
                    [`${prefixCls}-${props.type}`]: !!props.type,
                    [`${prefixCls}-vertical`]: props.vertical
                }
            ];
        });

        onMounted(() => {
            on('radio-change', onChange);
        })

        const onChange = value => {
            currentValue.value = value;
            emit('update:modelValue', value);
            emit('radio-group-change', value);
            dispatch('form-change', value);
        };

        provide('RadioGroup', instance);
        provide('GroupValue', currentValue);

        return {
            currentValue,
            classes,
        }
    }
};
</script>
