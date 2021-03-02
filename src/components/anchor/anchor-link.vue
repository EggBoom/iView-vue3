<template>
	<div :class="anchorLinkClasses">
        <a :class="linkTitleClasses" 
            :href="href" 
            :data-scroll-offset="linkScrollOffset" 
            :data-href="href" 
            @click.prevent="goAnchor" 
            :title="title">
                {{ title }}
        </a>
        <slot></slot>
    </div>
</template>
<script>
import { computed, getCurrentInstance, inject, onMounted, nextTick } from 'vue';
export default {
    name: 'AnchorLink',
    props: {
        href: String,
        title: String,
        scrollOffset: Number
    },
    emits: ['on-select'],
    setup(props) {
        const prefix = 'ivu-anchor-link';

        const instance = getCurrentInstance();

        const anchorCom = inject('anchorCom');

        const linkScrollOffset = props.scrollOffset || anchorCom.proxy.scrollOffset;
        
        const anchorLinkClasses = computed(() => {
            return [
                prefix,
                anchorCom.currentLink === props.href ? `${prefix}-active` : ''
            ];
        });
        const linkTitleClasses = `${prefix}-title`;

        const goAnchor = () => {
            anchorCom.proxy.currentLink = props.href;
            anchorCom.proxy.handleHashChange();
            anchorCom.proxy.handleScrollTo();
            anchorCom.proxy.$emit('on-select', props.href);
            const isRoute = instance.$router;
            if (isRoute) {
                instance.$router.push(props.href, () => {});
            } else {
                window.location.href = props.href;
            }
        };

        onMounted(() => {
            nextTick(() => {
                anchorCom.proxy.init();
            });
        })

        return {
            anchorLinkClasses,
            linkTitleClasses,
            goAnchor,
            anchorCom,
            linkScrollOffset
        }
    }
};
</script>
