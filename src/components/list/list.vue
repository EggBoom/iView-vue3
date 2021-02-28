<template>
    <div :class="classes">
        <div class="ivu-list-header" v-if="header || headerSlot">
            <slot name="header">{{ header }}</slot>
        </div>
        <div class="ivu-list-container">
            <ul class="ivu-list-items">
                <slot></slot>
            </ul>
        </div>
        <Spin v-if="loading" fix size="large">
            <slot name="spin"></slot>
        </Spin>
        <div class="ivu-list-footer" v-if="footer || footerSlot">
            <slot name="footer">{{ footer }}</slot>
        </div>
    </div>
</template>
<script>
import { computed, provide, ref } from 'vue';
import { oneOf } from '../../utils/assist';

export default {
    name: 'List',
    props: {
        border: {
            type: Boolean,
            default: false
        },
        itemLayout: {
            validator (value) {
                return oneOf(value, ['horizontal', 'vertical']);
            },
            default: 'horizontal'
        },
        // 或 slot
        header: {
            type: String,
            default: ''
        },
        // 或 slot
        footer: {
            type: String,
            default: ''
        },
        // 含 slot: spin
        loading: {
            type: Boolean,
            default: false
        },
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large', 'default']);
            },
            default () {
                return 'default';
            }
        },
        split: {
            type: Boolean,
            default: true
        }
    },
    setup(props, { slots }) {
        const prefixCls = 'ivu-list';

        provide('ListItemLayout', props.itemLayout);

        const headerSlot = ref(!!slots.header);
        const footerSlot = ref(!!slots.footer);

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                `${prefixCls}-${props.size}`,
                `${prefixCls}-${props.itemLayout}`,
                {
                    [`${prefixCls}-bordered`]: props.border,
                    [`${prefixCls}-split`]: props.split
                }
            ];
        });

        return {
            classes,
            headerSlot,
            footerSlot
        }
    }
};
</script>
