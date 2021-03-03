<template>
    <div ref="affixEl">
        <div ref="point" :class="classes" :style="styles">
            <slot></slot>
        </div>
        <div v-show="slot" :style="slotStyle"></div>
    </div>
</template>
<script>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import { on, off } from '../../utils/dom';

export default {
    name: 'Affix',
    props: {
        offsetTop: {
            type: Number,
            default: 0
        },
        offsetBottom: {
            type: Number
        }
    },
    emits: ['change'],
    setup(props, { emit }) {
        const prefixCls = 'ivu-affix';

        const affix = ref(false);
        const styles = reactive({});
        const slot = ref(false);
        const slotStyle = reactive({});
        

        const affixEl = ref(null);
        const point = ref(null);

        const offsetType = computed(() => {
            let type = 'top';
            if (props.offsetBottom >= 0) {
                type = 'bottom';
            }
            return type;
        });
        const classes = computed(() => {
            return [
                {
                    [`${prefixCls}`]: affix.value
                }
            ];               
        });

        const handleScroll = () => {
            const scrollTop = getScroll(window, true);
            const elOffset = getOffset(affixEl.value);
            const windowHeight = window.innerHeight;
            const elHeight = affixEl.value.getElementsByTagName('div')[0].offsetHeight;

            // Fixed Top
            if ((elOffset.top - props.offsetTop) < scrollTop && offsetType.value == 'top' && !affix.value) {
                affix.value = true;

                slotStyle.width = point.clientWidth + 'px';
                slotStyle.height = point.clientHeight + 'px';
                // slotStyle = {
                //     width: point.clientWidth + 'px',
                //     height: point.clientHeight + 'px'
                // };

                slot.value = true;

                styles.top = `${props.offsetTop}px`;
                styles.left = `${elOffset.left}px`;
                styles.width = `${affixEl.value.offsetWidth}px`;
                // styles = {
                //     top: `${props.offsetTop}px`,
                //     left: `${elOffset.left}px`,
                //     width: `${affixEl.value.offsetWidth}px`
                // };

                emit('on-change', true);
            } else if ((elOffset.top - props.offsetTop) > scrollTop && offsetType.value == 'top' && affix.value) {
                slot.value = false;

                slotStyle.width = '';
                slotStyle.height = '';
                // slotStyle = {};

                affix.value = false;
                
                styles.top = '';
                styles.bottom = '';
                styles.left = '';
                styles.width = '';
                // styles = null;

                emit('change', false);
            }

            // Fixed Bottom
            if ((elOffset.top + props.offsetBottom + elHeight) > (scrollTop + windowHeight) && offsetType.value == 'bottom' && !affix.value) {
                affix.value = true;

                styles.bottom = `${props.offsetBottom}px`;
                styles.left = `${elOffset.left}px`;
                styles.width = `${affixEl.value.offsetWidth}px`;
                // styles = {
                //     bottom: `${props.offsetBottom}px`,
                //     left: `${elOffset.left}px`,
                //     width: `${affixEl.value.offsetWidth}px`
                // };

                emit('on-change', true);
            } else if ((elOffset.top + props.offsetBottom + elHeight) < (scrollTop + windowHeight) && offsetType.value == 'bottom' && affix.value) {
                affix.value = false;

                styles.top = '';
                styles.bottom = '';
                styles.left = '';
                styles.width = '';
                // styles = null;

                emit('on-change', false);
            }
        };

        onMounted(() => {
            on(window, 'scroll', handleScroll);
            on(window, 'resize', handleScroll);
        });

        onBeforeUnmount(() => {
            off(window, 'scroll', handleScroll);
            off(window, 'resize', handleScroll);
        });

        const getScroll = (target, top) => {
            const prop = top ? 'pageYOffset' : 'pageXOffset';
            const method = top ? 'scrollTop' : 'scrollLeft';

            let ret = target[prop];

            if (typeof ret !== 'number') {
                ret = window.document.documentElement[method];
            }

            return ret;
        };

        const getOffset = (element) => {
            const rect = element.getBoundingClientRect();

            const scrollTop = getScroll(window, true);
            const scrollLeft = getScroll(window);

            const docEl = window.document.body;
            const clientTop = docEl.clientTop || 0;
            const clientLeft = docEl.clientLeft || 0;

            return {
                top: rect.top + scrollTop - clientTop,
                left: rect.left + scrollLeft - clientLeft
            };
        };

        return {
            styles,
            slot,
            slotStyle,
            classes,
            affixEl,
            point
        }

    }
};
</script>
