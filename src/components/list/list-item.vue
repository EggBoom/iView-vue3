<template>
    <li class="ivu-list-item" :class="classes">
        <template v-if="itemLayout === 'vertical' && extraSlot">
            <div class="ivu-list-item-main">
                <slot></slot>
                <ul class="ivu-list-item-action" v-if="actionSlot">
                    <slot name="action"></slot>
                </ul>
            </div>
            <div class="ivu-list-item-extra">
                <slot name="extra"></slot>
            </div>
        </template>
        <template v-else>
            <slot></slot>
            <ul class="ivu-list-item-action" v-if="actionSlot">
                <slot name="action"></slot>
            </ul>
            <div class="ivu-list-item-extra">
                <slot name="extra"></slot>
            </div>
        </template>
    </li>
</template>
<script>
import { computed, inject, ref } from 'vue';

export default {
    name: 'ListItem',
    setup(props, { slots }) {
        const actionSlot = ref(!!slots.action);
        const extraSlot = ref(!!slots.extra);

        const itemLayout = inject('ListItemLayout');

        const isItemContainsTextNode = computed(() => {
            let result;
            slots.default().forEach(item => {
                if (typeof item === 'string') {
                    result = true;
                }
            });
            return result;
        });
        const isFlexMode = computed(() => {
            const extra = slots.extra;

            if (itemLayout === 'vertical') {
                return !!extra;
            }

            return !isItemContainsTextNode;
        });
        const classes = computed(() => {
            return [
                {
                    'ivu-list-item-no-flex': !isFlexMode
                }
            ];
        });

        return {
            itemLayout,
            isItemContainsTextNode,
            isFlexMode,
            classes,
            actionSlot,
            extraSlot
        };
    }
};
</script>
