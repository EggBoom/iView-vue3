<template>
    <component :is="wrapperComponent" :offset-top="offsetTop" :offset-bottom="offsetBottom" @on-change="handleAffixStateChange">
		<div :class="`${prefix}-wrapper`" :style="wrapperStyle">
            <div :class="`${prefix}`">
                <div :class="`${prefix}-ink`">
                    <span v-show="showInk" :class="`${prefix}-ink-ball`" :style="{top: `${inkTop}px`}"></span>
                </div>
                <slot></slot>
            </div>
        </div>
	</component>
</template>
<script>
import { computed, getCurrentInstance, onMounted, onUnmounted, ref, nextTick, provide, watch } from 'vue';
import { scrollTop as scrollToTop, sharpMatcherRegx } from '../../utils/assist';
import { on, off } from '../../utils/dom';
export default {
    name: 'Anchor',
    props: {
        affix: {
            type: Boolean,
            default: true
        },
        offsetTop: {
            type: Number,
            default: 0
        },
        offsetBottom: Number,
        bounds: {
            type: Number,
            default: 5
        },
        container: null,
        showInk: {
            type: Boolean,
            default: false
        },
        scrollOffset: {
            type: Number,
            default: 0
        }
    },
    emits: ['on-change'],
    setup(props, { emit, slots }) {
        const instance = getCurrentInstance();

        const prefix = 'ivu-anchor';
        const isAffixed = ref(false);
        const inkTop = ref(0);
        const animating = ref(false);
        const currentLink = ref('');
        const currentId = ref('');
        const scrollContainer = ref(null);
        const scrollElement = ref(null);
        const titlesOffsetArr = ref([]);
        const wrapperTop = ref(0);
        const upperFirstTitle = ref(true);

        const wrapperComponent = computed(() => {
            return props.affix ? 'Affix' : 'div';
        });
        const wrapperStyle = computed(() => {
           return {
                maxHeight: props.offsetTop ? `calc(100vh - ${props.offsetTop}px)` : '100vh'
            };
        });
        const containerIsWindow = computed(() => {
            return scrollContainer.value === window;
        });
        const handleAffixStateChange = (state) => {
            isAffixed.value = props.affix && state;
        };
        const handleScroll = (e) => {
            upperFirstTitle.value = e.target.scrollTop < titlesOffsetArr.value[0].offset;
            if (animating.value) return;
            updateTitleOffset();
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || e.target.scrollTop;
            getCurrentScrollAtTitleId(scrollTop);
        };
        const handleHashChange = () => {
            const url = window.location.href;
            const sharpLinkMatch = sharpMatcherRegx.exec(url);
            if (!sharpLinkMatch) return;
            currentLink.value = sharpLinkMatch[0];
            currentId.value = sharpLinkMatch[1];
        };
        const handleScrollTo = () => {
            const anchor = document.getElementById(currentId.value);
            const currentLinkElementA = document.querySelector(`a[data-href="${currentLink.value}"]`);
            let offset = props.scrollOffset;
            if (currentLinkElementA) {
                offset = parseFloat(currentLinkElementA.getAttribute('data-scroll-offset'));
            }

            if (!anchor) return;
            const offsetTop = anchor.offsetTop - wrapperTop.value - offset;
            animating.value = true;
            scrollToTop(scrollContainer.value, scrollElement.value.scrollTop, offsetTop, 600, () => {
                animating.value = false;
            });
            handleSetInkTop();
        };
        const handleSetInkTop = () => {
            const currentLinkElementA = document.querySelector(`a[data-href="${currentLink.value}"]`);
            if (!currentLinkElementA) return;
            const elementATop = currentLinkElementA.offsetTop;
            const top = (elementATop < 0 ? props.offsetTop : elementATop);
            inkTop.value = top;
        };
        const updateTitleOffset = () => {
            const links = slots.default() && slots.default().map(link => link.props.href);
            const idArr = links.map(link => {
                return link.split('#')[1];
            });
            let offsetArr = [];
            idArr.forEach(id => {
                const titleEle = document.getElementById(id);
                if (titleEle) {
                    offsetArr.push({
                        link: `#${id}`,
                        offset: titleEle.offsetTop - scrollElement.value.offsetTop
                    });
                }
            });
            titlesOffsetArr.value = offsetArr;
        };
        const getCurrentScrollAtTitleId = (scrollTop) => {
            let i = -1;
            let len = titlesOffsetArr.value.length;
            let titleItem = {
                link: '#',
                offset: 0
            };
            scrollTop += props.bounds;
            while (++i < len) {
                let currentEle = titlesOffsetArr.value[i];
                let nextEle = titlesOffsetArr.value[i + 1];
                if (scrollTop >= currentEle.offset && scrollTop < ((nextEle && nextEle.offset) || Infinity)) {
                    titleItem = titlesOffsetArr.value[i];
                    break;
                }
            }
            currentLink.value = titleItem.link;
            handleSetInkTop();
        };
        const getContainer = () => {
            scrollContainer.value = props.container 
                                    ? (typeof props.container === 'string' ? document.querySelector(props.container) : props.container)
                                    : window;
            scrollElement.value = props.container
                                ? scrollContainer.value
                                : (document.documentElement || document.body);
        };
        const removeListener = () => {
            off(scrollContainer.value, 'scroll', handleScroll);
            off(window, 'hashchange', handleHashChange);
        };
        const init = () => {
            handleHashChange();
            nextTick(() => {
                removeListener();
                getContainer();
                wrapperTop.value = containerIsWindow.value ? 0 : scrollElement.value.offsetTop;
                handleScrollTo();
                handleSetInkTop();
                updateTitleOffset();
                if (titlesOffsetArr.value[0]) {
                    upperFirstTitle.value = scrollElement.value.scrollTop < titlesOffsetArr.value[0].offset;
                }
                on(scrollContainer.value, 'scroll', handleScroll);
                on(window, 'hashchange', handleHashChange);
            });
        };

        provide('anchorCom', instance);

        // watch('$route', () => {
        //     handleHashChange();
        //     nextTick(() => {
        //         handleScrollTo();
        //     });
        // });
        watch(props.container, () => init());
        watch(currentLink, (newHref, oldHref) => {
            emit('on-change', newHref, oldHref);
        });

        onMounted(() => init());

        onUnmounted(() => removeListener());

        return {
            prefix,
            isAffixed,
            inkTop,
            animating,
            currentLink,
            currentId,
            scrollContainer,
            scrollElement,
            titlesOffsetArr,
            wrapperTop,
            upperFirstTitle,
            wrapperComponent,
            wrapperStyle,
            containerIsWindow,
            handleAffixStateChange,
            handleHashChange,
            handleScrollTo,
            init
        }
    }
};
</script>
