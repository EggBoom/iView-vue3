<template>
    <div :class="prefixCls" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
        <div :class="relCls" ref="reference">
            <slot></slot>
        </div>
        <transition name="fade">
            <div
                :class="dropdownCls"
                :style="dropStyles"
                ref="popper"
                v-show="!disabled && (visible || always)"
                @mouseenter="handleShowPopper"
                @mouseleave="handleClosePopper"
                :data-transfer="transfer"
                v-transfer-dom>
                <div :class="contentCls">
                    <div :class="arrowCls"></div>
                    <div :class="innerClasses" :style="innerStyles">
                        <slot name="content">{{ content }}</slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import Popper from 'popper.js'
import TransferDom from '../../directives/transfer-dom';
import { oneOf } from '../../utils/assist';
import { computed, onMounted, onUnmounted, onUpdated, ref, watch, nextTick, getCurrentInstance } from 'vue';

export default {
    name: 'Tooltip',
    directives: { TransferDom },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        placement: {
            validator (value) {
                return oneOf(value, ['top', 'top-start', 'top-end',
                                    'bottom', 'bottom-start', 'bottom-end',
                                    'left', 'left-start','left-end',
                                    'right', 'right-start', 'right-end']);
            },
            default: 'bottom'
        },
        content: {
            type: [String, Number],
            default: ''
        },
        delay: {
            type: Number,
            default: 100
        },
        disabled: {
            type: Boolean,
            default: false
        },
        controlled: {    // under this prop,Tooltip will not close when mouseleave
            type: Boolean,
            default: false
        },
        always: {
            type: Boolean,
            default: false
        },
        transfer: {
            type: Boolean,
            default: false
        },
        theme: {
            validator (value) {
                return oneOf(value, ['dark', 'light']);
            },
            default: 'dark'
        },
        maxWidth: {
            type: [String, Number]
        },
        offset: {
            type: Number,
            default: 0
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
        }
    },
    emits: ['on-popper-show', 'on-popper-hide', 'input', 'created'],
    setup(props, { emit }) {
        const prefixCls = 'ivu-tooltip';
        const relCls = `${prefixCls}-rel`;
        const contentCls = `${prefixCls}-content`;
        const arrowCls = `${prefixCls}-arrow`;

        const transferIndex = ref(0);

        const timeout = ref('');
        const visible = ref(props.value);

        const transferIncrease = () => transferIndex.value++;

        const popper = ref(null);
        const reference = ref(null);

        const innerStyles = computed(() => {
            const styles = {};
            if (props.maxWidth) styles['max-width'] = `${props.maxWidth}px`;
            return styles;
        });
        const innerClasses = computed(() => {
            return [
                `${prefixCls}-inner`,
                {
                    [`${prefixCls}-inner-with-width`]: !!props.maxWidth
                }
            ];
        });
        const dropStyles = computed(() => {
            let styles = {};
            if (props.transfer) styles['z-index'] = 1060 + tIndex.value;

            return styles;
        });
        const dropdownCls = computed(() => {
            return [
                `${prefixCls}-popper`,
                `${prefixCls}-${props.theme}`,
                {
                    [prefixCls + '-transfer']: props.transfer,
                    [props.transferClassName]: props.transferClassName
                }
            ];
        });

        const handleShowPopper = () => {
            if (timeout.value) clearTimeout(timeout.value);
            timeout.value = setTimeout(() => {
                visible.value = true;
            }, props.delay);
            tIndex.value = handleGetIndex();
        };
        const handleClosePopper = () => {
            if (timeout.value) {
                clearTimeout(timeout.value);
                if (!props.controlled) {
                    timeout.value = setTimeout(() => {
                        visible.value = false;
                    }, 100);
                }
            }
        };
        const handleGetIndex = () => {
            transferIncrease();
            return transferIndex;
        };

        const tIndex = ref(handleGetIndex());

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
            if(popperJS) {
                debugger
                popperJS.destroy();
                popperJS = null;
            }
        };

        onUpdated(() => {
            nextTick(() => updatePopper());
        });

        onMounted(() => {
            if (props.always) {
                updatePopper();
            }
        });

        onUnmounted(() => doDestroy());

        watch(() => props.content, () => updatePopper());

        watch(visible, (newValue) => {
            updatePopper();
            emit('input', newValue);
        });

        return {
            popper,
            prefixCls,
            tIndex,
            innerStyles,
            innerClasses,
            dropdownCls,
            dropStyles,
            relCls,
            contentCls,
            arrowCls,
            reference,
            handleClosePopper,
            handleGetIndex,
            handleShowPopper,
            visible
        }
    }
};
</script>