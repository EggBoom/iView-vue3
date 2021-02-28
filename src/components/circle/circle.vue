<template>
    <div :style="circleSize" :class="wrapClasses">
        <svg viewBox="0 0 100 100">
            <path :d="pathString" :stroke="trailColor" :stroke-width="trailWidth" :fill-opacity="0"/>
            <path :d="pathString" :stroke-linecap="strokeLinecap" :stroke="strokeColor" :stroke-width="strokeWidth" fill-opacity="0" :style="pathStyle"/>
        </svg>
        <div :class="innerClasses">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
import { oneOf } from '../../utils/assist';

const prefixCls = 'ivu-chart-circle';

export default {
    name: 'iCircle',
    props: {
        percent: {
            type: Number,
            default: 0
        },
        size: {
            type: Number,
            default: 120
        },
        strokeWidth: {
            type: Number,
            default: 6
        },
        strokeColor: {
            type: String,
            default: '#2db7f5'
        },
        strokeLinecap: {
            validator (value) {
                return oneOf(value, ['square', 'round']);
            },
            default: 'round'
        },
        trailWidth: {
            type: Number,
            default: 5
        },
        trailColor: {
            type: String,
            default: '#eaeef2'
        }
    },
    setup(props) {
        const circleSize = computed(() => {
            return {
                width: `${props.size}px`,
                height: `${props.size}px`
            };
        });
        const radius = computed(() => {
            return 50 - props.strokeWidth / 2;
        });
        const pathString = computed(() => {
            return `M 50,50 m 0,-${radius.value}
                    a ${radius.value},${radius.value} 0 1 1 0,${2 * radius.value}
                    a ${radius.value},${radius.value} 0 1 1 0,-${2 * radius.value}`;
        });
        const len = computed(() => {
            return Math.PI * 2 * radius.value;
        });
        const pathStyle = computed(() => {
            return {
                'stroke-dasharray': `${len.value}px ${len.value}px`,
                'stroke-dashoffset': `${((100 - props.percent) / 100 * len.value)}px`,
                'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
            };
        });
        const wrapClasses = computed(() => {
            return `${prefixCls}`;
        });
        const innerClasses = computed(() => {
            return `${prefixCls}-inner`;
        });

        return {
            circleSize,
            radius,
            pathString,
            len,
            pathStyle,
            wrapClasses,
            innerClasses
        }
    }
};
</script>
