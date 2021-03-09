<template>
    <div :class="prefixCls">
        <button type="button" :class="arrowClasses" class="left" @click="arrowEvent(-1)">
            <Icon type="chevron-left"></Icon>
        </button>
        <div :class="`${prefixCls}-list`">
            <div :class="[`${prefixCls}-track`, showCopyTrack ? '' : 'higher']" :style="trackStyles" ref="originTrack">
                <slot></slot>
            </div>
            <div v-if="loop" :class="[`${prefixCls}-track`, showCopyTrack ? 'higher' : '']" :style="copyTrackStyles" ref="copyTrack">
            </div>
        </div>
        <button type="button" :class="arrowClasses" class="right" @click="arrowEvent(1)">
            <Icon type="chevron-right"></Icon>
        </button>
        <ul :class="dotsClasses">
            <template v-for="n in slides.length" :key="n">
                <li :class="[(n - 1) === currentIndex ? `${prefixCls}-active` : '']"
                    @click="dotsEvent('click', n - 1)"
                    @mouseover="dotsEvent('hover', n - 1)">
                    <button type="button" :class="[radiusDot ? 'radius' : '']"></button>
                </li>
            </template>
        </ul>
    </div>
</template>
<script>
import { computed, ref, nextTick, getCurrentInstance, onMounted, onUnmounted, watch, provide } from 'vue';
import Icon from '../icon/icon.vue';
import { getStyle, oneOf } from '../../utils/assist';
import { on, off } from '../../utils/dom';

export default {
    name: 'Carousel',
    components: { Icon },
    props: {
        modelValue: {
            type: Number,
            default: 0
        },
        arrow: {
            type: String,
            default: 'hover',
            validator (value) {
                return oneOf(value, ['hover', 'always', 'never']);
            }
        },
        autoplay: {
            type: Boolean,
            default: false
        },
        autoplaySpeed: {
            type: Number,
            default: 2000
        },
        loop: {
            type: Boolean,
            default: false
        },
        easing: {
            type: String,
            default: 'ease'
        },
        dots: {
            type: String,
            default: 'inside',
            validator (value) {
                return oneOf(value, ['inside', 'outside', 'none']);
            }
        },
        radiusDot: {
            type: Boolean,
            default: false
        },
        trigger: {
            type: String,
            default: 'click',
            validator (value) {
                return oneOf(value, ['click', 'hover']);
            }
        },
        height: {
            type: [String, Number],
            default: 'auto',
            validator (value) {
                return value === 'auto' || Object.prototype.toString.call(value) === '[object Number]';
            }
        }
    },
    emits: ['on-change', 'update:modelValue'],
    setup(props, { slots, emit }) {
        const prefixCls = 'ivu-carousel';

        const instance = getCurrentInstance();

        const listWidth = ref(0);
        const trackWidth = ref(0); // carousel总长度

        const trackOffset = ref(0);
        const trackCopyOffset = ref(0);

        const showCopyTrack = ref(false);

        const slides = ref([]);
        const slideInstances = ref([]);

        const timer = ref(null);
        const ready = ref(false);

        const currentIndex = ref(props.modelValue);
        const trackIndex = ref(props.modelValue);
        const copyTrackIndex = ref(props.modelValue);
        const hideTrackPos = ref(-1);

        const copyTrack = ref(null);
        const originTrack = ref(null);

        const trackStyles = computed(() => {
            return {
                width: `${trackWidth.value}px`,
                transform: `translateX(${-trackOffset.value}px)`,
                transition: `transform 500ms ${props.easing}`
            };
        });
        const copyTrackStyles = computed(() => {
            return {
                width: `${trackWidth.value}px`,
                transform: `translateX(${-trackCopyOffset.value}px`,
                transition: `transform 500ms ${props.easing}`,
                position: 'absolute',
                top: 0
            };
        });
        const arrowClasses = computed(() => {
            return [
                `${prefixCls}-arrow`,
                `${prefixCls}-arrow-${props.arrow}`
            ];
        });
        const dotsClasses = computed(() => {
            return [
                `${prefixCls}-dots`,
                `${prefixCls}-dots-${props.dots}`
            ];
        });

        // find option component
        const findChild = (cb) => {
            const find = function (child) {
                const name = child.type.name;

                if (name === 'CarouselItem') {
                    cb(child);
                } else if (child.slots.default) {
                    child.slots.default().forEach((innerChild) => {
                        find(innerChild, cb);
                    });
                }
            };
            if (slideInstances.value.length || !slots.default) {
                slideInstances.value.forEach((child) => {
                    find(child);
                });
            } else {
                slots.default().forEach((child) => {
                    find(child);
                });
            }
        };
        
        const initCopyTrackDom = () => {
            nextTick(() => {
                copyTrack.value.innerHTML = originTrack.value.innerHTML;
            });
        };
        const updateSlides =  (init) => {
            let slides = [];
            let index = 1;

            findChild((child) => {
                //debugger
                slides.push({
                    $el: child.$el
                });
                child.index = index++;

                if (init) {
                    slideInstances.value.push(child);
                }
            });

            slides.value = slides;
            updatePos();
        };
        const updatePos =  () => {
            findChild((child) => {
                //debugger
                child.width = listWidth.value;
                child.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
            });


            provide('CarouselWidth', listWidth);
            provide('CarouselHeight', props.height);

            trackWidth.value = (slides.value.length || 0) * listWidth.value;
        };
        // use when slot changed
        const slotChange = () => {
            nextTick(() => {
                slides.value = [];
                slideInstances.value = [];

                updateSlides(true, true);
                updatePos();
                updateOffset();
            });
        };
        
        const handleResize = () => {
            listWidth.value = parseInt(getStyle(instance.proxy.$el, 'width'));
            updatePos();
            updateOffset();
        };
        const updateTrackPos = (index) => {
            if (showCopyTrack.value) {
                trackIndex.value = index;
            } else {
                copyTrackIndex.value = index;
            }
        };
        const updateTrackIndex = (index) => {
            if (showCopyTrack.value) {
                copyTrackIndex.value = index;
            } else {
                trackIndex.value = index;
            }
        };
        const add = (offset) => {
            // 获取单个轨道的图片数
            let slidesLen = slides.value.length;
            // 如果是无缝滚动，需要初始化双轨道位置
            if (props.loop) {
                if (offset > 0) {
                    // 初始化左滑轨道位置
                    hideTrackPos.value = -1;
                } else {
                    // 初始化右滑轨道位置
                    hideTrackPos.value = slidesLen;
                }
                updateTrackPos(hideTrackPos.value);
            }
            // 获取当前展示图片的索引值
            const oldIndex = showCopyTrack.value ? copyTrackIndex.value : trackIndex.value;
            let index = oldIndex + offset;
            while (index < 0) index += slidesLen;
            if (((offset > 0 && index === slidesLen) || (offset < 0 && index === slidesLen - 1)) && props.loop) {
                // 极限值（左滑：当前索引为总图片张数， 右滑：当前索引为总图片张数 - 1）切换轨道
                showCopyTrack.value = !showCopyTrack.value;
                trackIndex.value += offset;
                copyTrackIndex.value += offset;
            } else {
                if (!props.loop) index = index % slides.value.length;
                updateTrackIndex(index);
            }
            currentIndex.value = index === slides.length.value ? 0 : index;
            emit('on-change', oldIndex, currentIndex.value);
            emit('update:modelValue', currentIndex.value);
        };
        const arrowEvent = (offset) => {
            setAutoplay();
            add(offset);
        };
        const dotsEvent = (event, n) => {
            let curIndex = showCopyTrack.value ? copyTrackIndex.value : trackIndex.value;
            if (event === props.trigger && curIndex !== n) {
                updateTrackIndex(n);
                emit('update:modelValue', n);
                // Reset autoplay timer when trigger be activated
                setAutoplay();
            }
        };
        const setAutoplay = () => {
            window.clearInterval(timer.value);
            if (props.autoplay) {
                timer.value = window.setInterval(() => {
                    add(1);
                }, props.autoplaySpeed);
            }
        };
        const updateOffset = () => {
            nextTick(() => {
                /* hack: revise copyTrack offset (1px) */
                let ofs = copyTrackIndex.value > 0 ? -1 : 1;
                trackOffset.value = trackIndex.value * listWidth.value;
                trackCopyOffset.value = copyTrackIndex.value * listWidth.value + ofs;
            });
        };

        

        provide('carousel', instance);

        watch(
            () => props.autoplay,
            () => {
                setAutoplay()
            }
        );
        watch(
            () => props.autoplaySpeed,
            () => {
                setAutoplay()
            }
        );
        watch(
            trackIndex,
            () => {
                updateOffset()
            }
        );
        watch(
            copyTrackIndex,
            () => {
                updateOffset()
            }
        );
        watch(
            () => props.height,
            () => {
                updatePos()
            }
        );
        watch(
            () => props.modelValue,
            (newValue) => {
                currentIndex.value = newValue;
                trackIndex.value = newValue;
            }
        );

        onMounted(() => {
            updateSlides(true);
            handleResize();
            setAutoplay();
            on(window, 'resize', handleResize);
            console.log(slots.default());
        });


        onUnmounted(() => {
            off(window, 'resize', handleResize);
        });

        return {
            prefixCls,
            listWidth,
            trackWidth,
            trackOffset,
            trackCopyOffset,
            showCopyTrack,
            slides,
            slideInstances,
            timer,
            ready,
            currentIndex,
            trackIndex,
            copyTrackIndex,
            hideTrackPos,
            trackStyles,
            copyTrackStyles,
            arrowClasses,
            dotsClasses,
            originTrack,
            copyTrack,
            findChild,
            initCopyTrackDom,
            updateSlides,
            updatePos,
            slotChange,
            handleResize,
            updateTrackPos,
            updateTrackIndex,
            add,
            arrowEvent,
            dotsEvent,
            updateOffset,
            setAutoplay
        }
    }
};
</script>
