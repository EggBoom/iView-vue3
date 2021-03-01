<template>
	<div :class="anchorLinkClasses">
        <a :class="linkTitleClasses" 
            :href="href" 
            :data-scroll-offset="scrollOffset" 
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
        scrollOffset: {
            type: Number,
            default () {
                return anchorCom.scrollOffset;
            }
        }
    },
    emits: ['on-select'],
    setup(props) {
        const prefix = 'ivu-anchor-link';

        const instance = getCurrentInstance();

        const anchorCom = inject('anchorCom');

        const anchorLinkClasses = computed(() => {
            return [
                prefix.value,
                anchorCom.currentLink === props.href ? `${prefix.value}-active` : ''
            ];
        });
        const linkTitleClasses = `${prefix.value}-title`;

        const goAnchor = () => {
            anchorCom.currentLink = props.href;
            anchorCom.handleHashChange();
            anchorCom.handleScrollTo();
            anchorCom.$emit('on-select', props.href);
            const isRoute = instance.$router;
            if (isRoute) {
                instance.$router.push(props.href, () => {});
            } else {
                window.location.href = props.href;
            }
        };

        onMounted(() => {
            nextTick(() => {
                anchorCom.init();
            });
        })

        return {
            prefix,
            anchorLinkClasses,
            linkTitleClasses,
            goAnchor
        }
    }
};
</script>
