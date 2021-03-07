<template>
    <div
        :class="classes"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
        v-click-outside="handleClose">
        <div
            :class="relCls"
            ref="reference"
            @click="handleClick"
            @mousedown="handleFocus"
            @mouseup="handleBlur">
            <slot></slot>
        </div>
        <transition name="fade">
            <div
                :class="popperClasses"
                :style="styles"
                ref="popper"
                v-show="visible"
                @click="handleTransferClick"
                @mouseenter="handleMouseenter"
                @mouseleave="handleMouseleave"
                :data-transfer="transfer"
                v-transfer-dom>
                <div :class="contentCls">
                    <div :class="arrowCls"></div>
                    <div v-if="confirm" :class="innerCls">
                        <div :class="bodyCls">
                            <i class="ivu-icon ivu-icon-ios-help-circle"></i>
                            <div :class="bodyMessageCls">
                                <slot name="title">{{ title }}</slot>
                            </div>
                        </div>
                        <div :class="footerCls">
                            <Button type="text" size="small" @click="cancel">{{ cancelText }}</Button>
                            <Button type="primary" size="small" @click="ok">{{ okText }}</Button>
                        </div>
                    </div>
                    <div v-else :class="innerCls">
                        <div v-if="showTitle" :class="titleCls" :style="contentPaddingStyle">
                            <slot name="title">
                                <div :class="titleInnerCls">
                                    {{ title }}
                                </div>
                            </slot>
                        </div>
                        <div :class="bodyCls" :style="contentPaddingStyle">
                            <div :class="contentClasses">
                                <slot name="content">
                                    <div :class="bodyContentInnerCls">
                                        {{ content }}
                                    </div>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import Popper from 'popper.js';
import Button from '../button';
import clickOutside from '../../directives/clickoutside';
import TransferDom from '../../directives/transfer-dom';
import { oneOf } from '../../utils/assist';
import { computed, onMounted, onUnmounted, onUpdated, ref, watch, nextTick } from 'vue';

export default {
    name: 'Poptip',
    directives: { clickOutside, TransferDom },
    components: { Button },
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        trigger: {
            validator (value) {
                return oneOf(value, ['click', 'focus', 'hover']);
            },
            default: 'click'
        },
        placement: {
            validator (value) {
                return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
            },
            default: 'top'
        },
        title: {
            type: [String, Number]
        },
        content: {
            type: [String, Number],
            default: ''
        },
        width: {
            type: [String, Number]
        },
        confirm: {
            type: Boolean,
            default: false
        },
        okText: {
            type: String,
            default: '确认'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        transfer: {
            type: Boolean,
            default () {
                return false
            }
        },
        popperClass: {
            type: String
        },
        wordWrap: {
            type: Boolean,
            default: false
        },
        // default by css: 8px 16px
        padding: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        capture: {
            type: Boolean,
            default () {
                return false
            }
        },
        transferClassName: {
            type: String
        },
        options: {
            type: Object,
            default () {
                return {
                    modifiers: {
                        computeStyle:{
                            gpuAcceleration: false,
                        },
                        preventOverflow :{
                            boundariesElement: 'window'
                        }
                    }
                };
            }
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    emits: ['on-cancel', 'on-ok', 'update:modelValue'],
    setup(props, { slots, emit }) {
        const prefixCls = 'ivu-poptip';
        const relCls = `${prefixCls}-rel`;
        const contentCls = `${prefixCls}-content`;
        const arrowCls = `${prefixCls}-arrow`;
        const innerCls = `${prefixCls}-inner`;
        const bodyCls = `${prefixCls}-body`;
        const footerCls = `${prefixCls}-footer`;
        const titleCls = `${prefixCls}-title`;
        const bodyContentInnerCls = `${prefixCls}--body-content-inner`;
        const titleInnerCls = `${prefixCls}-title-inner`;
        const bodyMessageCls = `${prefixCls}-body-message`;

        const enterTimer = ref(0);
        const visible = ref(props.value);

        const reference = ref(null);
        const popper = ref(null);

        const showTitle = ref(true);
        const isInput = ref(false);
        const disableCloseUnderTransfer = ref(false); // transfer 模式下，点击 slot 也会触发关闭

        const transferIndex = ref(0);

        const transferIncrease = () => transferIndex.value++;
        const handleGetIndex = () => {
            transferIncrease();
            return transferIndex;
        };
        const tIndex = ref(handleGetIndex());

        const classes = computed(() => {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-confirm`]: props.confirm
                }
            ];
        });
        const popperClasses = computed(() => {
            return [
                `${prefixCls}-popper`,
                {
                    [`${prefixCls}-confirm`]: props.transfer && props.confirm,
                    [prefixCls + '-transfer']: props.transfer,
                    [`${props.popperClass}`]: !!props.popperClass,
                    [props.transferClassName]: props.transferClassName
                }
            ];
        });
        const styles = computed(() => {
            let style = {};

            if (props.width) {
                style.width = `${props.width}px`;
            }

            if (props.transfer) style['z-index'] = 1060 + props.tIndex;

            return style;
        });
        const contentClasses = computed(() => {
            return [
                `${prefixCls}-body-content`,
                {
                    [`${prefixCls}-body-content-word-wrap`]: props.wordWrap
                }
            ];
        });
        const contentPaddingStyle = computed(() => {
            const styles = {};
            if (!!props.padding) styles['padding'] = props.padding;
            return styles;
        });

        const handleClick = () => {
            if (props.disabled) return;

            if (props.confirm) {
                visible.value = !visible.value;
                return true;
            }
            if (props.trigger !== 'click') {
                return false;
            }
            visible.value = !visible.value;
        };
        const handleTransferClick = () => {
            if (props.transfer) disableCloseUnderTransfer.value = true;
        };
        const handleClose = () => {
            debugger
            if (disableCloseUnderTransfer.value) {
                disableCloseUnderTransfer.value = false;
                return false;
            }
            if (props.confirm) {
                visible.value = false;
                return true;
            }
            if (props.trigger !== 'click') {
                return false;
            }
            visible.value = false;
        };
        const handleFocus = () => {
            if (props.disabled) return;

            if (props.trigger !== 'focus' || props.confirm || isInput.value) {
                return false;
            }
            visible.value = true;
        };
        const handleBlur = () => {
            if (props.trigger !== 'focus' || props.confirm || isInput.value) {
                return false;
            }
            visible.value = false;
        };
        const handleMouseenter = () => {
            if (props.disabled) return;
            
            if (props.trigger !== 'hover' || props.confirm) {
                return false;
            }
            if (enterTimer.value) clearTimeout(enterTimer.value);
            enterTimer.value = setTimeout(() => {
                visible.value = true;
            }, 100);
        };
        const handleMouseleave = () => {
            if (props.trigger !== 'hover' || props.confirm) {
                return false;
            }
            if (enterTimer.value) {
                clearTimeout(enterTimer.value);
                enterTimer.value = setTimeout(() => {
                    visible.value = false;
                }, 100);
            }
        };
        const cancel =  () => {
            visible.value = false;
            emit('on-cancel');
        };
        const ok = () => {
            visible.value = false;
            emit('on-ok');
        };
        const getInputChildren = () => {
            const _inputs = reference.value.querySelectorAll('input');
            const _textareas = reference.value.querySelectorAll('textarea');
            let _children = null;

            if (_inputs.length) {
                _children = _inputs[0];
            } else if (_textareas.length) {
                _children = _textareas[0];
            }

            return _children;
        };

        let popperJS = null;

        const createPopper = () => {
            if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(props.placement)) {
                return;
            }

            const options = props.options;

            if (!popper.value || !reference.value) return;

            if (popperJS && popperJS.hasOwnProperty('destroy')) {
                popperJS.destroy();
            }

            options.placement = props.placement;

            if (!options.modifiers.offset) {
                options.modifiers.offset = {};
            }
            options.modifiers.offset.offset = props.offset;
            options.onCreate =()=>{
                nextTick(updatePopper);
            };

            popperJS = new Popper(reference.value, popper.value, options);
        };

        const updatePopper = () => {
            popperJS ? popperJS.update() : createPopper();
        };

        const doDestroy = () => {
            popperJS.destroy();
            popperJS = null;
        };

        watch(visible, (newValue) => {
            updatePopper();
            emit('update:modelValue', newValue);
        });

        watch(
            () => props.modelValue,
            (newValue) => {
                visible.value = newValue;
                emit('update:modelValue', newValue);
            }
        );

        onMounted(() => {
            if (!props.confirm) {
                showTitle.value = !!slots.title || props.title;
            }
            // if trigger and children is input or textarea,listen focus & blur event
            if (props.trigger === 'focus') {
                nextTick(() => {
                    const children = getInputChildren();
                    if (children) {
                        isInput.value = true;
                        children.addEventListener('focus', handleFocus, false);
                        children.addEventListener('blur', handleBlur, false);
                    }
                });
            }
        });

        onUpdated(() => {
            nextTick(() => updatePopper());
        });

        onUnmounted(() => {
            const children = getInputChildren();
            if (children) {
                children.removeEventListener('focus', handleFocus, false);
                children.removeEventListener('blur', handleBlur, false);
            }
            doDestroy();
        });

        return{
            prefixCls,
            relCls,
            contentCls,
            arrowCls,
            innerCls,
            bodyCls,
            footerCls,
            titleCls,
            bodyContentInnerCls,
            titleInnerCls,
            bodyMessageCls,
            showTitle,
            isInput,
            tIndex,
            classes,
            popperClasses,
            styles,
            contentClasses,
            contentPaddingStyle,
            handleClick,
            handleTransferClick,
            handleClose,
            handleFocus,
            handleBlur,
            handleMouseenter,
            handleMouseleave,
            cancel,
            ok,
            popper,
            reference,
            visible
        }
    }
};
</script>
