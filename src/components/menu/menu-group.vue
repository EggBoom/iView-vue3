<template>
    <li :class="[prefixCls + '-item-group']">
        <div :class="[prefixCls + '-item-group-title']" :style="groupStyle">
            {{ title }}
        </div>
        <ul>
            <slot></slot>
        </ul>
    </li>
</template>
<script>
import { computed, getCurrentInstance, ref } from 'vue';
import useMenu from './useMenu';

export default {
    name: 'MenuGroup',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    setup() {
        const instance = getCurrentInstance();

        const prefixCls = ref('ivu-menu');

        const { hasParentSubmenu, mode, parentSubmenuNum } = useMenu(instance);

        const groupStyle = computed(() => {
            return hasParentSubmenu && mode !== 'horizontal' 
                    ? { paddingLeft: 43 + (parentSubmenuNum - 1) * 28 + 'px' } 
                    : {};           
        });

        return {
            prefixCls,
            groupStyle
        }
    }
};
</script>
