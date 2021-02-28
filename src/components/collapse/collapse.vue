<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
import { getCurrentInstance, onBeforeMount, provide, reactive, toRefs } from 'vue';
import { computed, watch } from 'vue';
import useEmitter from '../../mixins/emitter';

const prefixCls = 'ivu-collapse';

export default {
    name: 'Collapse',
    props: {
        accordion: {
            type: Boolean,
            default: false
        },
        simple: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: [Array, String, Number]
        }
    },
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {
        const instance = getCurrentInstance();

        provide('collapse', instance);

        const { on } = useEmitter();

        const state = reactive({
            activeNames: [].concat(props.modelValue)
        });

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-simple`]: props.simple
                }
            ];
        });

        const setActiveNames = (activeNames) => {
            activeNames = [].concat(activeNames);
            const value = props.accordion ? activeNames[0] : activeNames;
            state.activeNames = activeNames;
            emit('update:modelValue', value);
            emit('change', value);
        };

        const handleItemClick = ({ name }) => {
            if (props.accordion) {
                if ((state.activeNames[0] || state.activeNames[0] === 0) && state.activeNames[0] === name) {
                    return;
                } else {
                    setActiveNames(name);
                }
            } else {
                const activeNames = state.activeNames.slice(0)
                const index = activeNames.indexOf(name)

                if (index > -1) {
                    activeNames.splice(index, 1)
                } else {
                    activeNames.push(name)
                }
                setActiveNames(activeNames)
            }
        };

        onBeforeMount(() => {
            on('item-click', handleItemClick);
        })

        watch(
            () => props.modelValue, 
            value => state.activeNames = [].concat(value)
        );

        return {
            ...toRefs(state),
            classes
        }
    }
};
</script>
