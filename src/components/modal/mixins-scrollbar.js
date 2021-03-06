// used for Modal & $Spin
import { getScrollBarSize } from '../../utils/assist';
import { ref } from 'vue';

function useScrollbar() {
    const bodyIsOverflowing = ref(false);
    const scrollBarWidth = ref(0);

    const checkScrollBar = () => {
        let fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
            const documentElementRect = document.documentElement.getBoundingClientRect();
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        bodyIsOverflowing.value = document.body.clientWidth < fullWindowWidth;
        if (bodyIsOverflowing.value) {
            scrollBarWidth.value = getScrollBarSize();
        }
    };

    const setScrollBar = () => {
        if (bodyIsOverflowing.value && !!scrollBarWidth.value) {
            document.body.style.paddingRight = `${scrollBarWidth.value}px`;
        }
    };

    const resetScrollBar = () => {
        document.body.style.paddingRight = '';
    };

    const addScrollEffect = () => {
        checkScrollBar();
        setScrollBar();
        document.body.style.overflow = 'hidden';
    };
    const removeScrollEffect = () => {
        document.body.style.overflow = '';
        resetScrollBar();
    };

    return {
        checkScrollBar,
        setScrollBar,resetScrollBar,
        addScrollEffect,
        removeScrollEffect
    }
};

export default useScrollbar;