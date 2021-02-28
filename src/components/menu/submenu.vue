<template>
    <li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
        <div :class="[prefixCls + '-submenu-title']" ref="reference" @click.stop="handleClick" :style="titleStyle">
            <slot name="title"></slot>
            <Icon type="ios-arrow-down" :class="[prefixCls + '-submenu-title-icon']"></Icon>
        </div>
        <collapse-transition v-if="mode === 'vertical'">
            <ul :class="[prefixCls]" v-show="opened"><slot></slot></ul>
        </collapse-transition>
        <transition name="slide-up" v-else>
            <Drop
                v-show="opened"
                placement="bottom"
                ref="drop"
                :style="dropStyle"><ul :class="[prefixCls + '-drop-list']"><slot></slot></ul>
            </Drop>
        </transition>
    </li>
</template>
<script>
import Drop from '../select/dropdown.vue';
import Icon from '../icon/icon.vue';
import CollapseTransition from '../base/collapse-transition';
import { getStyle, findComponentUpward, findComponentsDownward } from '../../utils/assist';
import { ref, watch, computed, onMounted, getCurrentInstance } from 'vue';
import useEmitter from '../../mixins/emitter';
import useMenu from './useMenu';

export default {
    name: 'Submenu',
    components: { Icon, Drop, CollapseTransition },
    props: {
        name: {
            type: [String, Number],
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const prefixCls = 'ivu-menu';

        const instance = getCurrentInstance();

        const { hasParentSubmenu, parentSubmenuNum, menu, mode } = useMenu(instance);
        const { dispatch } = useEmitter(instance);

        const drop = ref(null);
        const reference = ref(null);

        const active = ref(false);
        const opened = ref(false);
        const dropWidth = ref(parseFloat(getStyle(instance.$el, 'width')));

        const classes = computed(() => {
            return [
                `${prefixCls}-submenu`,
                {
                    [`${prefixCls}-item-active`]: active.value && !hasParentSubmenu,
                    [`${prefixCls}-opened`]: opened.value,
                    [`${prefixCls}-submenu-disabled`]: props.disabled,
                    [`${prefixCls}-submenu-has-parent-submenu`]: hasParentSubmenu,
                    [`${prefixCls}-child-item-active`]: active.value
                }
            ];
        });
        const accordion = computed(() => {
            return menu.accordion;
        });
        const dropStyle = computed(() => {
            let style = {};

            if (dropWidth.value) {
                style.minWidth = `${dropWidth.value}px`;
            }
            return style;
        });
        const titleStyle = computed(() => {
            return hasParentSubmenu && mode.value !== 'horizontal'
                    ? { paddingLeft: 43 + (parentSubmenuNum - 1) * 24 + 'px' }
                    : {};
        });

        const handleMouseenter = () => {
            if (props.disabled) return;
            if (mode.value === 'vertical') return;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                menu.updateOpenKeys(props.name);
                opened.value = true;
            }, 250);
        };
        const handleMouseleave = () => {
            if (props.disabled) return;
            if (mode === 'vertical') return;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                menu.updateOpenKeys(props.name);
                opened.value = false;
            }, 150);
        };
        const handleClick = () => {
            if (props.disabled) return;
            if (mode === 'horizontal') return;
            const opened = opened.value;
            if (accordion.value) {
                instance.$parent.$children.forEach(item => {
                    if (item.$options.name === 'Submenu') item.opened.value = false;
                });
            }
            opened.value = !opened;
            menu.updateOpenKeys(props.name);
        };

        watch(mode, val => {
                if (val === 'horizontal') {
                drop.update();
            }
        });
        watch(opened, val => {
            if (mode === 'vertical') return;
            if (val) {
                // set drop a width to fixed when menu has fixed position
                dropWidth.value = parseFloat(getStyle(instance.$el, 'width'));
                drop.update();
            } else {
                drop.destroy();
            }
        });

        onMounted(() => {
            instance.$on('on-menu-item-select', name => {
                if (mode === 'horizontal') {
                    opened.value = false;
                }
                dispatch('Menu', 'on-menu-item-select', name);
                return true;
            });
            instance.$on('on-update-active-name', status => {
                if (findComponentUpward(instance, 'Submenu')) {
                    dispatch('Submenu', 'on-update-active-name', status);
                }
                if (findComponentsDownward(instance, 'Submenu')) {
                    findComponentsDownward(instance, 'Submenu').forEach(item => {
                        item.active.value = false;
                    });
                }
                active.value = status;
            });
        });

        return {
            prefixCls,
            active,
            opened,
            dropWidth,
            classes,
            accordion,
            dropStyle,
            titleStyle,
            handleMouseenter,
            handleMouseleave,
            handleClick
        };
    }
};
</script>
