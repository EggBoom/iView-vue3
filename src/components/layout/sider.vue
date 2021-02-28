<template>
    <div 
        :class="wrapClasses" 
        :style="wrapStyles">
        <span v-show="showZeroTrigger" @click="toggleCollapse" :class="zeroWidthTriggerClasses">
            <i class="ivu-icon ivu-icon-navicon-round"></i>
        </span>
        <div :class="childClasses">
            <slot></slot>
        </div>
        <slot name="trigger">
            <div v-show="showBottomTrigger" :class="triggerClasses" @click="toggleCollapse" :style="{width: siderWidth + 'px'}">
                <i :class="triggerIconClasses"></i>
            </div>
        </slot>
    </div>
</template>
<script>
import { computed, onMounted, onUnmounted, ref, watch, getCurrentInstance } from 'vue';
import { on, off } from '../../utils/dom';
import { oneOf, dimensionMap, setMatchMedia } from '../../utils/assist';

setMatchMedia();

export default {
    name: 'Sider',
    props: {
        value: {  // if it's collpased now
            type: Boolean,
            default: false
        },
        width: {
            type: [Number, String],
            default: 200
        },
        collapsedWidth: {
            type: [Number, String],
            default: 64
        },
        hideTrigger: {
            type: Boolean,
            default: false
        },
        breakpoint: {
            type: String,
            validator (val) {
                return oneOf(val, ['xs', 'sm', 'md', 'lg', 'xl']);
            }
        },
        collapsible: {
            type: Boolean,
            default: false
        },
        defaultCollapsed: {
            type: Boolean,
            default: false
        },
        reverseArrow: {
            type: Boolean,
            default: false
        }
    },
    emits: ['input', 'on-collapse'],
    setup(props, { emit }) {
        const instance = getCurrentInstance();

        const prefixCls = ref('ivu-layout-sider');
        const mediaMatched = ref(false);

        const siderWidth = computed(() => {
            return props.collapsible 
                    ? (props.value 
                        ? (mediaMatched.value
                            ? 0
                            : parseInt(props.collapsedWidth)) 
                        : parseInt(props.width))
                    : props.width;
        });
        const wrapClasses = computed(() => {
            return [
                `${prefixCls.value}`,
                siderWidth ? '' : `${prefixCls.value}-zero-width`,
                props.value ? `${prefixCls.value}-collapsed` : ''
            ];
        });
        const wrapStyles = computed(() => {
            return {
                width: `${siderWidth}px`,
                minWidth: `${siderWidth}px`,
                maxWidth: `${siderWidth}px`,
                flex: `0 0 ${siderWidth}px`
            };
        });
        const triggerClasses = computed(() => {
            return [
                `${prefixCls.value}-trigger`,
                props.value ? `${prefixCls.value}-trigger-collapsed` : '',
            ];
        });
        const childClasses = computed(() => {
            return `${prefixCls.value}-children`;
        });
        const zeroWidthTriggerClasses = computed(() => {
            return [
                `${prefixCls.value}-zero-width-trigger`,
                props.reverseArrow ? `${prefixCls.value}-zero-width-trigger-left` : ''
            ];
        });
        const triggerIconClasses = computed(() => {
            return [
                'ivu-icon',
                `ivu-icon-chevron-${props.reverseArrow ? 'right' : 'left'}`,
                `${prefixCls.value}-trigger-icon`,
            ];
        });
        const showZeroTrigger = computed(() => {
            return props.collapsible
                    ? (mediaMatched.value && !props.hideTrigger || (parseInt(props.collapsedWidth) === 0) && props.value && !props.hideTrigger)
                    : false;
        });
        const showBottomTrigger = computed(() => {
            return props.collapsible ? !mediaMatched.value && !props.hideTrigger : false;
        });

        const toggleCollapse = () => {
            let value = props.collapsible ? !props.value : false;
            emit('input', value);
        };
        const matchMedia = () => {
            let matchMedia;
            if (window.matchMedia) {
                matchMedia = window.matchMedia;
            }
            let _mediaMatched = mediaMatched.value;
            mediaMatched.value = matchMedia(`(max-width: ${dimensionMap[props.breakpoint]})`).matches;
            
            if (mediaMatched.value !== _mediaMatched) {
                emit('input', mediaMatched.value);
            }
        };
        const onWindowResize = () => {
            matchMedia();
        };

        watch(props.value, stat =>  emit('on-collapse', stat));

        onMounted(() => {
            if (props.defaultCollapsed) {
                emit('input', props.defaultCollapsed);
            }
            if (props.breakpoint !== undefined) {
                on(window, 'resize', onWindowResize);
                matchMedia();
            }
            // const parent = instance.parent;
            // if (parent && parent.ctx.$options.name === 'Layout') {
            //     console.log('parent.ctx.hasSider: ', parent.ctx.hasSider);
            //     parent.ctx.hasSider = true;
            //     console.log('parent.ctx.hasSider: ', parent.ctx.hasSider);
            //}
        });

        onUnmounted(() => {
            if (props.breakpoint !== undefined) {
                off(window, 'resize', onWindowResize);
            }
        });

        return {
            mediaMatched,
            wrapClasses,
            wrapStyles,
            siderWidth,
            triggerClasses,
            childClasses,
            zeroWidthTriggerClasses,
            triggerIconClasses,
            showZeroTrigger,
            showBottomTrigger,
            toggleCollapse
        };
    }
};
</script>