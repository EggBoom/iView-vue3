<template>
    <span v-if="dot" :class="classes" ref="badge">
        <slot></slot>
        <sup :class="dotClasses" :style="styles" v-show="badge"></sup>
    </span>
    <span v-else-if="status || color" :class="classes" class="ivu-badge-status" ref="badge">
        <span :class="statusClasses" :style="statusStyles"></span>
        <span class="ivu-badge-status-text"><slot name="text">{{ text }}</slot></span>
    </span>
    <span v-else :class="classes" ref="badge">
        <slot></slot>
        <sup v-if="$slots.count" :style="styles" :class="customCountClasses"><slot name="count"></slot></sup>
        <sup v-else-if="hasCount" :style="styles" :class="countClasses" v-show="badge"><slot name="text">{{ finalCount }}</slot></sup>
    </span>
</template>
<script>
import { computed } from 'vue';
import { oneOf } from '../../utils/assist';
const initColorList = ['blue', 'green', 'red', 'yellow', 'pink', 'magenta', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple'];
const prefixCls = 'ivu-badge';

export default {
    name: 'Badge',
    props: {
        count: Number,
        dot: {
            type: Boolean,
            default: false
        },
        overflowCount: {
            type: [Number, String],
            default: 99
        },
        className: String,
        showZero: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        },
        status: {
            validator (value) {
                return oneOf(value, ['success', 'processing', 'default', 'error', 'warning']);
            }
        },
        type: {
            validator (value) {
                return oneOf(value, ['success', 'primary', 'normal', 'error', 'warning', 'info']);
            }
        },
        offset: {
            type: Array
        },
        color: {
            type: String
        }
    },
    setup(props, { slots }) {
        const classes = `${prefixCls}`;
        const dotClasses = `${prefixCls}-dot`;
        const countClasses = computed(() => {
            return [
                `${prefixCls}-count`,
                {
                    [`${props.className}`]: !!props.className,
                    [`${prefixCls}-count-alone`]: alone.value,
                    [`${prefixCls}-count-${props.type}`]: !!props.type
                }
            ];
        });
        const alone = computed(() => {
            return slots.default === undefined;
        });
        const customCountClasses = computed(() => {
            return [
                `${prefixCls}-count`,
                `${prefixCls}-count-custom`,
                {
                    [`${props.className}`]: !!props.className,
                }
            ];
        });
        const statusClasses = computed(() => {
            return [
                `${prefixCls}-status-dot`,
                {
                    [`${prefixCls}-status-${props.status}`]: !!props.status,
                    [`${prefixCls}-status-${props.color}`]: !!props.color && oneOf(props.color, initColorList)
                }
            ];
        });
        const statusStyles = computed(() => {
            return oneOf(props.color, initColorList) ? {} : { backgroundColor: props.color};
        });
        const styles = computed(() => {
            const style = {};
            if (props.offset && props.offset.length === 2) {
                style['margin-top'] = `${props.offset[0]}px`;
                style['margin-right'] = `${props.offset[1]}px`;
            }
            return style;
        });
        const finalCount = computed(() => {
            if (props.text !== '') return props.text;
            return parseInt(props.count) >= parseInt(props.overflowCount) ? `${props.overflowCount}+` : props.count;
        });
        const badge = computed(() => {
            let status = false;

            if (props.count) {
                status = !(parseInt(props.count) === 0);
            }

            if (props.dot) {
                status = true;
                if (props.count !== null) {
                    if (parseInt(props.count) === 0) {
                        status = false;
                    }
                }
            }

            if (props.text !== '') status = true;

            return status || props.showZero;
        });
        const hasCount = computed(() => {
            if(props.count || props.text !== '') return true;
            if(props.showZero && parseInt(props.count) === 0) {
                return true;
            } else {
                return false;
            }
        });

        return {
            classes,
            dotClasses,
            countClasses,
            alone,
            customCountClasses,
            statusClasses,
            statusStyles,
            styles,
            finalCount,
            badge,
            hasCount
        }
    }
};
</script>
