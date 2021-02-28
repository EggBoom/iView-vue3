<template>
    <div :class="itemClasses">
        <div :class="headerClasses" @click="toggle">
            <Icon type="ios-arrow-forward"></Icon>
            <slot></slot>
        </div>
        <collapse-transition>
            <div :class="contentClasses" v-show="isActive">
                <div :class="boxClasses">
                    <slot name="content"></slot>
                </div>
            </div>
        </collapse-transition>
    </div>
</template>
<script>
import { computed, inject, ref } from 'vue';
import useEmitter from '../../mixins/emitter'
import Icon from '../icon';
import CollapseTransition from '../base/collapse-transition';

const prefixCls = 'ivu-collapse';

export default {
    name: 'Panel',
    components: { Icon, CollapseTransition },
    props: {
        name: {
            type: String
        }
    },
    setup(props) {
        const { dispatch } = useEmitter();

        const collapse = inject('collapse');

        const index = ref(0); // use index for default when name is null

        const isActive = computed(() => {
            const name = props.name;
            return collapse.proxy.activeNames.indexOf(name) > -1
        })

        const itemClasses = computed(() => {
            return [
                `${prefixCls}-item`,
                {
                    [`${prefixCls}-item-active`]: isActive.value
                }
            ];
        });
        const headerClasses = computed(() => {
            return `${prefixCls}-header`;
        });
        const contentClasses = computed(() => {
            return `${prefixCls}-content`;
        });
        const boxClasses = computed(() => {
            return `${prefixCls}-content-box`;
        });

        const toggle = () => {
            const name = props.name;
            dispatch('item-click', { name });
        };

        return {
            index,
            isActive,
            itemClasses,
            headerClasses,
            contentClasses,
            boxClasses,
            toggle

        }
    }
};
</script>
