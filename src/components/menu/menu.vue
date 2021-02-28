<template>
    <ul :class="classes" :style="styles">
        <slot></slot>
    </ul>
</template>
<script>
import { oneOf, findComponentsDownward, findComponentsUpward } from '../../utils/assist';
import { ref, toRefs, computed, onMounted, watch, getCurrentInstance } from 'vue';
import useEmitter from '../../mixins/emitter';

export default {
    name: 'Menu',
    props: {
        mode: {
            validator (value) {
                return oneOf(value, ['horizontal', 'vertical']);
            },
            default: 'vertical'
        },
        theme: {
            validator (value) {
                return oneOf(value, ['light', 'dark', 'primary']);
            },
            default: 'light'
        },
        activeName: {
            type: [String, Number]
        },
        openNames: {
            type: Array,
            default () {
                return [];
            }
        },
        accordion: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: '240px'
        }
    },
    emits: ['on-open-change', 'on-select'],
    setup(props, { emit, slots }) {
        const prefixCls = 'ivu-menu';

        const { broadcast, on } = useEmitter();

        const {
            openNames,
            activeName,
        } = toRefs(props);

        const currentActiveName = ref(props.activeName);
        const openedNames = ref([]);

        const classes = computed(() => {
            let theme = props.theme;
            if (props.mode === 'vertical' && props.theme === 'primary') {
                theme = 'light';
            }

            return [
                `${prefixCls}`,
                `${prefixCls}-${theme}`,
                {
                    [`${prefixCls}-${props.mode}`]: props.mode
                }
            ];
        });
        const styles = computed(() => {
            let style = {};

            if (props.mode === 'vertical') {
                style.width = props.width;
            }

            return style;
        });

        const updateActiveName = () => {
            if (currentActiveName.value === undefined) {
                currentActiveName.value = -1;
            }
        
            broadcast('on-update-active-name', false);
            broadcast('on-update-active-name', currentActiveName);
        };
        const updateOpenKeys = name => {
            let names = [...openedNames.value];
            const index = names.indexOf(name);
            if (index >= 0) {
                names.splice(index, 1);
            } else {
                if (props.accordion) {
                    let currentSubmenu = null;
                    names = [];
                    findComponentsDownward(slots.default(), 'Submenu').forEach(item => {
                        if (item.name === name) currentSubmenu = item;
                    });
                    findComponentsUpward(currentSubmenu, 'Submenu').forEach(item => {
                        names.push(item.name);
                    });
                }
                names.push(name);
            }
            openedNames.value = names;
            updateOpened();
            emit('on-open-change', openedNames.value);
        };
        const updateOpened = () => {
            const items = findComponentsDownward(slots, 'Submenu');

            if (items.length) {
                items.forEach(item => {                    
                    openedNames.value.indexOf(item.name) > -1 ? item.opened = true : item.opened = false;
                });
            }
        };

        onMounted(() => {
            updateActiveName();
            openedNames.value = [...openNames.value];
            updateOpened();
            on('on-menu-item-select', name => {
                currentActiveName.value = name;
                emit('on-select', name);
            });
        });

        watch(openNames, names =>  openedNames.value = names);
        watch(activeName, val => currentActiveName.value = val);
        watch(openNames, () => updateActiveName());

        return {
            currentActiveName,
            openNames,
            classes,
            styles,
            updateActiveName,
            updateOpenKeys,
            updateOpened
        }
    }
}
</script>
