<template>
    <div :class="prefixCls" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
import { computed, onMounted, ref, inject, onUnmounted, watch, nextTick } from 'vue';
export default {
    componentName: 'carousel-item',
    name: 'CarouselItem',
    setup() {
        const carousel = inject('carousel');
        const carouselWidth = inject('CarouselWidth');
        const carouselHeight = inject('CarouselHeight');
        const prefixCls = 'ivu-carousel-item';
        const width = ref(0);
        const height = ref('auto');
        const left = ref(0);

        const styles = computed(() => {
            return {
                width: `${width.value}px`,
                height: `${height.value}`,
                left: `${left.value}px`
            };
        });

        onMounted(() => {
            carousel.proxy.slotChange();
            nextTick(() => {
                width.value = carousel.proxy.listWidth;
                height.value = 'auto';
            })
        });

        onUnmounted(() => {
            carousel.proxy.slotChange();
        });

        // watch(width, (newValue) => {
        //      if (newValue && carousel.proxy.loop) {
        //         nextTick(() => {
        //             carousel.proxy.initCopyTrackDom();
        //         });
        //     }
        // });

        // watch(height, (newValue) => {
        //     if (newValue && carousel.proxy.loop) {
        //         nextTick(() => {
        //             carousel.proxy.initCopyTrackDom();
        //         });
        //     }
        // });

        return {
            prefixCls,
            width,
            height,
            left,
            styles
        }
    }
};
</script>
