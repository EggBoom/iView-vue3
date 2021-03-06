<template>
    <span>
        <a v-if="to" :class="linkClasses" @click="handleClick">
            <slot></slot>
        </a>
        <span v-else :class="linkClasses">
            <slot></slot>
        </span>

        <span :class="separatorClasses">
            <slot name="separator">{{ separator }}</slot>
        </span>
    </span>
</template>
<script>
import { getCurrentInstance, inject } from 'vue';
export default {
    name: 'BreadcrumbItem',
    props: {
        to: {
            type: [Object, String]
        },
        replace: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { slots }) {
        const inatance = getCurrentInstance();

        const prefixCls = 'ivu-breadcrumb-item';

        const linkClasses = `${prefixCls}-link`;
        const separatorClasses = `${prefixCls}-separator`;

        const handleClick = () => {
            const router = inatance.proxy.$router;
            if (router) {
                props.replace ? router.replace(props.to) : router.push(props.to);
            } else {
                window.location.href = props.to;
            }
        }

        const separator = inject('BreadcrumbSeparator');

        return {
            prefixCls,
            separator,
            linkClasses,
            separatorClasses,
            handleClick
        }
    }
};
</script>
