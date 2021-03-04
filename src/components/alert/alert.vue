<template>
    <transition name="fade">
        <div v-if="!closed" :class="wrapClasses">
            <span :class="iconClasses" v-if="showIcon">
                <slot name="icon">
                    <Icon :type="iconType"></Icon>
                </slot>
            </span>
            <span :class="messageClasses">
                <slot></slot>
            </span>
            <span :class="descClasses">
                <slot name="desc"></slot>
            </span>
            <a :class="closeClasses" v-if="closable" @click="close">
                <slot name="close">
                    <Icon type="ios-close"></Icon>
                </slot>
            </a>
        </div>
    </transition>
</template>
<script>
import Icon from '../icon';
import { oneOf } from '../../utils/assist';
import { computed, onMounted, ref } from 'vue';

const prefixCls = 'ivu-alert';

export default {
    name: 'Alert',
    components: { Icon },
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['success', 'info', 'warning', 'error']);
            },
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: false
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        banner: {
            type: Boolean,
            default: false
        }
    },
    emits: ['on-close'],
    setup(props, { slots, emit }) {
        const closed = ref(false);
        const desc = ref(false);

        const wrapClasses = computed(() => {
            return [
                `${prefixCls}`,
                `${prefixCls}-${props.type}`,
                {
                    [`${prefixCls}-with-icon`]: props.showIcon,
                    [`${prefixCls}-with-desc`]: desc.value,
                    [`${prefixCls}-with-banner`]: props.banner
                }
            ];
        });
        const messageClasses = `${prefixCls}-message`;
        const descClasses = `${prefixCls}-desc`;
        const closeClasses = `${prefixCls}-close`;
        const iconClasses = `${prefixCls}-icon`;
        const iconType = computed(() => {
            let type = '';

            switch (props.type) {
                case 'success':
                    type = 'ios-information-circle';
                    break;
                case 'info':
                    type = 'ios-checkmark-circle';
                    break;
                case 'warning':
                    type = 'ios-alert';
                    break;
                case 'error':
                    type = 'ios-close-circle';
                    break;
            }

            return type;
        });

        const close = (e) => {
            closed.value = true;
            emit('on-close', e);
        };

        onMounted(() => {
            desc.value = slots.desc !== undefined;
        });

        return {
            closed,
            desc,
            wrapClasses,
            messageClasses,
            descClasses,
            closeClasses,
            iconClasses,
            iconType,
            close
        }
    }
};
</script>
