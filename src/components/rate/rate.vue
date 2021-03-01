<template>
    <div :class="classes" @mouseleave="handleMouseleave">
        <input type="hidden" :name="name" :value="currentValue">
        <div
            v-for="(item, index) in count"
            :key="index"
            :class="starCls(item)"
            @mousemove="handleMousemove(item, $event)"
            @click="handleClick(item)"
        >
            <template v-if="!showCharacter">
                <span :class="[prefixCls + '-star-content']" type="half"></span>
            </template>
            <template v-else>
                <span :class="[prefixCls + '-star-first']" type="half">
                    <template v-if="character !== ''">{{ character }}</template>
                    <i v-else :class="iconClasses" type="half"></i>
                </span>
                <span :class="[prefixCls + '-star-second']">
                    <template v-if="character !== ''">{{ character }}</template>
                    <i v-else :class="iconClasses"></i>
                </span>
            </template>
        </div>
        <div :class="[prefixCls + '-text']" v-if="showText" v-show="currentValue > 0">
            <slot>
                <span>{{ currentValue }}星</span>
            </slot>
        </div>
    </div>
</template>
<script>
import useEmitter from '../../mixins/emitter';
import { computed, ref, watch } from 'vue';

export default {
    name: 'Rate',
    props: {
        count: {
            type: Number,
            default: 5
        },
        modelValue: {
            type: Number,
            default: 0
        },
        allowHalf: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        showText: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        clearable: {
            type: Boolean,
            default: false
        },
        character: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        customIcon: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue', 'on-change'],
    setup(props, { emit }) {
        const { dispatch } = useEmitter();

        const prefixCls = ref('ivu-rate');
        const hoverIndex = ref(-1);
        const isHover = ref(false);
        const currentValue = ref(props.modelValue);

        const isHalf = computed(() => {
            return props.allowHalf && props.modelValue.toString().indexOf('.') >= 0;
        });
        const classes = computed(() => {
            return [
                prefixCls.value,
                {
                    [`${prefixCls.value}-disabled`]: props.disabled
                }
            ];
        });
        const showCharacter = computed(() => {
            return props.character !== '' || props.icon !== '' || props.customIcon !== '';
        });
        const iconClasses = computed(() => {
            return [
                    'ivu-icon',
                    {
                        [`ivu-icon-${props.icon}`]: props.icon !== '',
                        [`${props.customIcon}`]: props.customIcon !== ''
                    }
                ];
        });

        const starCls = (value) => {
            const currentIndex = isHover.value ? hoverIndex.value : currentValue.value;

            let full = false;
            let isLast = false;

            if (currentIndex >= value) full = true;

            if (isHover.value) {
                isLast = currentIndex === value;
            } else {
                isLast = Math.ceil(currentValue.value) === value;
            }

            return [
                `${prefixCls.value}-star`,
                {
                    [`${prefixCls.value}-star-full`]: (!isLast && full) || (isLast && !isHalf.value),
                    [`${prefixCls.value}-star-half`]: isLast && isHalf.value,
                    [`${prefixCls.value}-star-zero`]: !full
                }
            ];
        };
        const handleMousemove = (value, event) => {
            if (props.disabled) return;

            isHover.value = true;
            if (props.allowHalf) {
                const type = event.target.getAttribute('type') || false;
                isHalf.value = type === 'half';
            } else {
                isHalf.value = false;
            }
            hoverIndex.value = value;
        };
        const handleMouseleave = () => {
            if (props.disabled) return;

            isHover.value = false;
            setHalf(currentValue.value);
            hoverIndex.value = -1;
        };
        const setHalf = (value) => {
            isHalf.value = props.allowHalf && value.toString().indexOf('.') >= 0;
        };
        const handleClick = (value) => {
            if (props.disabled) return;
            if (isHalf.value) value -= 0.5;

            if(props.clearable && Math.abs(value - currentValue.value) < 0.01) {
                value = 0;
            }

            currentValue.value = value;
            emit('update:modelvalue', value);
            emit('on-change', value);
            dispatch('on-form-change', value);
        };

        watch(props.modelValue, (newValue) => currentValue.value = value);
        watch(currentValue, (newValue) => setHalf(newValue));

        return {
            prefixCls,
            hoverIndex,
            isHover,
            isHalf,
            currentValue,
            classes,
            starCls,
            handleMousemove,
            handleMouseleave,
            setHalf,
            handleClick,
            showCharacter,
            iconClasses
        }
    }
};
</script>
