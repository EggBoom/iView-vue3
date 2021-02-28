<template>
    <li :class="classes" @click.stop="handleClick" :style="itemStyle">
        <slot></slot>
    </li>
</template>
<script>
import { computed, onMounted, ref, getCurrentInstance } from 'vue';
import { findComponentUpward } from '../../utils/assist';
import useEmitter from '../../mixins/emitter';
import useMenu from './useMenu';

export default {
    name: 'MenuItem',
    props: {
        name: {
            type: [String, Number],
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { slots }) {
        const prefixCls = 'ivu-menu';
        
        const instance = getCurrentInstance();

        const active = ref(false);

        const { hasParentSubmenu, parentSubmenuNum, mode } = useMenu(instance);

        const { dispatch, on } = useEmitter();

        const classes = computed(() => {
            return [
                `${prefixCls}-item`,
                {
                    [`${prefixCls}-item-active`]: active.value,
                    [`${prefixCls}-item-selected`]: active.value,
                    [`${prefixCls}-item-disabled`]: props.disabled
                }
            ];           
        });
        const itemStyle = computed(() => {
            return hasParentSubmenu && mode !== 'horizontal' 
                    ? { paddingLeft: 43 + (parentSubmenuNum - 1) * 24 + 'px' } 
                    : {};
        });

        const handleClick = () => {
            if (props.disabled) return;

            let parent = findComponentUpward(instance, 'Submenu');

            if (parent) {
                dispatch('on-menu-item-select', props.name);
            } else {
                dispatch('on-menu-item-select', props.name);
            }
        };

        onMounted(() => {
            on('on-update-active-name', name => {
                if (props.name === name) {
                    active.value = true;
                    dispatch('on-update-active-name', name);
                } else {
                    active.value = false;
                }
            });
        })

        return {
            active,
            classes,
            itemStyle,
            handleClick
        }
    }
};
</script>
