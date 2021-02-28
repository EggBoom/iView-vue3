<template>
     <div :class="wrapClasses">
         <slot></slot>
    </div>
</template>
<script>
import { computed, onMounted, ref } from 'vue';

const prefixCls = 'ivu-layout';

export default {
    name: 'Layout',
    setup(props, { slots }) {
        const hasSider = ref(false);

        const wrapClasses = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-has-sider`]: hasSider.value
                }
            ];
        });

        const findSider = () => {
            return slots.default().some(child => {
                return child.type.name === 'Sider'; 
            });
        };

        onMounted(() => hasSider.value = findSider());
        
        return {
            hasSider,
            wrapClasses
        }
    }
};
</script>