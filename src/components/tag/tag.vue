<template>
    <transition v-if="fade" name="fade">
        <div :class="classes" @click.stop="check" :style="wraperStyles">
            <span :class="dotClasses" v-if="showDot" :style="bgColorStyle"></span>
            <span :class="textClasses" :style="textColorStyle"><slot></slot></span>
            <Icon v-if="closable" :class="iconClass" :color="lineColor" type="ios-close" @click.stop="close"></Icon>
        </div>
    </transition>
    <div v-else :class="classes" @click.stop="check" :style="wraperStyles">
        <span :class="dotClasses" v-if="showDot" :style="bgColorStyle"></span>
        <span :class="textClasses" :style="textColorStyle"><slot></slot></span>
        <Icon v-if="closable" :class="iconClass" :color="lineColor" type="ios-close" @click.stop="close"></Icon>
    </div>
</template>
<script>
import Icon from '../icon';
import { oneOf } from '../../utils/assist';
import { computed, ref, watch } from 'vue';

export default {
    name: 'Tag',
    components: { Icon },
    props: {
        closable: {
            type: Boolean,
            default: false
        },
        checkable: {
            type: Boolean,
            default: false
        },
        checked: {
            type: Boolean,
            default: true
        },
        color: {
            type: String,
            default: 'default'
        },
        type: {
            validator (value) {
                return oneOf(value, ['border', 'dot']);
            }
        },
        name: {
            type: [String, Number]
        },
        fade: {
            type: Boolean,
            default: true
        },
        size: {
            validator (value) {
                return oneOf(value, ['default', 'medium', 'large']);
            },
            default: 'default'
        }
    },
    emits:['on-change'],
    setup(props, { emit }) {
        const prefixCls = 'ivu-tag';

        const initColorList = ['default', 'primary', 'success', 'warning',
                                'error', 'blue', 'green', 'red', 'yellow',
                                'pink', 'magenta', 'volcano', 'orange', 
                                'gold', 'lime', 'cyan', 'geekblue', 'purple'
                            ];
        const isInitColor = computed(() => {
            return oneOf(props.color, initColorList);
        });

        const isChecked = ref(props.checked);

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                `${prefixCls}-size-${props.size}`,
                {
                    [`${prefixCls}-${props.color}`]: isInitColor.value,
                    [`${prefixCls}-${props.type}`]: !!props.type,
                    [`${prefixCls}-closable`]: props.closable,
                    [`${prefixCls}-checked`]: isChecked.value
                }
            ];
        });
        const wraperStyles = computed(() => {
            return isInitColor.value
                    ? {}
                    : {
                        background: isChecked.value ? defaultTypeColor.value : 'transparent',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: ((props.type !== 'dot' && props.type !== 'border' && isChecked.value) ? borderColor.value : lineColor.value),
                        color: lineColor.value
                    };
        });
        const textClasses = computed(() => {
            return [
                `${prefixCls}-text`,
                props.type === 'border' ? (isInitColor.value ? `${prefixCls}-color-${props.color}` : '') : '',
                (props.type !== 'dot' && props.type !== 'border' && props.color !== 'default') ? (isChecked.value ? `${prefixCls}-color-white` : '') : ''
            ];
        });
        const dotClasses = `${prefixCls}-dot-inner`;
        const iconClass = computed(() => {
            if (props.type === 'dot') {
                return '';
            } else if (props.type === 'border') {
                return isInitColor.value ? `${prefixCls}-color-${props.color}` : '';
            } else {
                return props.color === 'default' ? '' : 'rgb(255, 255, 255)';
            }
        });
        const showDot = computed(() => {
            return !!props.type && props.type === 'dot';
        });
        const lineColor = computed(() => {
            if (props.type === 'dot') {
                return '';
            } else if (props.type === 'border') {
                return !isInitColor.value ? '' : props.color;
            } else {
                return props.color === 'default' ? '' : 'rgb(255, 255, 255)';
            }
        });
        const borderColor = computed(() => {
            return props.color === 'default' ? '' : props.color;
        });
        const dotColor = computed(() => {
            return isInitColor.value ? '' : props.color;
        });
        const textColorStyle = computed(() => {
            return isInitColor.value ? {} : ((props.type !== 'dot' && props.type !== 'border') ? (isChecked.value ? {color: lineColor.value} : {}) : {color: lineColor.value});
        });
        const bgColorStyle = computed(() => {
            return isInitColor.value ? {} : {background: dotColor.value};
        });
        const defaultTypeColor = computed(() => {
            return (props.type !== 'dot' && props.type !== 'border') ? (isInitColor.value ? '' : props.color) : '';
        });

        const close = (event) => {
            props.name === undefined ? emit('on-close', event) : emit('on-close', event, props.name);
        };
        const check = () => {
            if (!props.checkable) return;
            isChecked.value = !isChecked.value;
            props.name ? emit('on-change', isChecked.value, props.name) : emit('on-change', isChecked.value);
        };

        watch(() => props.checked,
            newValue => isChecked.value = newValue
        );

        return {
            isChecked,
            classes,
            wraperStyles,
            textClasses,
            dotClasses,
            iconClass,
            showDot,
            lineColor,
            borderColor,
            dotColor,
            textColorStyle,
            bgColorStyle,
            defaultTypeColor,
            close,
            check
        }
    }
};
</script>