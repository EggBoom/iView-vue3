<template>
    <div :class="wrapClasses">
        <div :class="outerClasses">
            <div :class="innerClasses">
                <div :class="bgClasses" :style="bgStyle">
                    <div v-if="textInside" class="ivu-progress-inner-text">
                        {{ percent }}%
                    </div>
                </div>
                <div :class="successBgClasses" :style="successBgStyle"></div>
            </div>
        </div>
        <span v-if="!hideInfo && !textInside" :class="textClasses">
            <slot>
                <span v-if="isStatus" :class="textInnerClasses">
                    <Icon :type="statusIcon"></Icon>
                </span>
                <span v-else :class="textInnerClasses">
                    {{ percent }}%
                </span>
            </slot>
        </span>
    </div>
</template>
<script>
import Icon from '../icon';
import { oneOf } from '../../utils/assist';
import { computed, ref, watch } from 'vue';

const prefixCls = 'ivu-progress';

export default {
    name: 'Progress',
    components: { Icon },
    props: {
        percent: {
            type: Number,
            default: 0
        },
        successPercent: {
            type: Number,
            default: 0
        },
        status: {
            validator (value) {
                return oneOf(value, ['normal', 'active', 'wrong', 'success']);
            },
            default: 'normal'
        },
        hideInfo: {
            type: Boolean,
            default: false
        },
        strokeWidth: {
            type: Number,
            default: 10
        },
        vertical: {
            type: Boolean,
            default: false
        },
        strokeColor: {
            type: [String, Array]
        },
        textInside: {
            type: Boolean,
            default: false
        }
    },
    emits:['on-status-change'],
    setup(props, { emit }) {
        const currentStatus = ref(props.status);

        const isStatus = computed(() => {
            return currentStatus.value == 'wrong' || currentStatus.value == 'success';
        });
        const statusIcon = computed(() => {
            let type = '';
            switch (currentStatus.value) {
                case 'wrong':
                    type = 'ios-close-circle';
                    break;
                case 'success':
                    type = 'ios-checkmark-circle';
                    break;
            }
            return type;
        });
        const bgStyle = computed(() => {
            const style =  props.vertical
                            ? { height: `${props.percent}%`, width: `${props.strokeWidth}px` }
                            : { width: `${props.percent}%`, height: `${props.strokeWidth}px` };

            if (props.strokeColor) {
                if (typeof props.strokeColor === 'string') {
                    style['background-color'] = props.strokeColor;
                } else {
                    style['background-image'] = `linear-gradient(to right, ${props.strokeColor[0]} 0%, ${props.strokeColor[1]} 100%)`;
                }
            }

            return style;
        });
        const successBgStyle = computed(() => {
            return props.vertical
                    ? { height: `${props.successPercent}%`, width: `${props.strokeWidth}px` }
                    : { width: `${props.successPercent}%`, height: `${props.strokeWidth}px` };
        });
        const wrapClasses = computed(() => {
            return [
                `${prefixCls}`,
                `${prefixCls}-${currentStatus.value}`,
                {
                    [`${prefixCls}-show-info`]: !props.hideInfo && !props.textInside,
                    [`${prefixCls}-vertical`]: props.vertical

                }
            ];
        });
        const textClasses = `${prefixCls}-text`;
        const textInnerClasses = `${prefixCls}-text-inner`;
        const outerClasses = `${prefixCls}-outer`;
        const innerClasses = `${prefixCls}-inner`;;
        const bgClasses = `${prefixCls}-bg`;
        const successBgClasses = `${prefixCls}-success-bg`;

        const handleStatus = (isDown) => {
            if (isDown) {
                currentStatus.value = 'normal';
                emit('on-status-change', 'normal');
            } else {
                if (parseInt(props.percent, 10) == 100) {
                    currentStatus.value = 'success';
                    emit('on-status-change', 'success');
                }
            }
        };

        handleStatus();

        watch(props.percent, (oldValue, newValue) => {
            (newValue < oldValue) ? handleStatus(true) : handleStatus(); 
        })
        

        return {
            currentStatus,
            isStatus,
            statusIcon,
            bgStyle,
            textClasses,
            textInnerClasses,
            outerClasses,
            bgClasses,
            innerClasses,
            successBgClasses,
            wrapClasses,
            successBgStyle
        }
    }
};
</script>
