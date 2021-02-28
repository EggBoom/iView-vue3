import { computed, reactive } from 'vue';
import { findComponentUpward, findComponentsUpward } from '../../utils/assist';

export default function(instance) {
    const _instance = instance;

    const menu = reactive(findComponentUpward(_instance, 'Menu'));

    const hasParentSubmenu = computed(() => {
        return !!findComponentUpward(_instance, 'Submenu');
    });

    const parentSubmenuNum = computed(() => {
        return findComponentsUpward(_instance, 'Submenu').length;
    });

    const mode = computed(() => {
        return _instance.menu.mode;
    });

    return {
        menu,
        hasParentSubmenu,
        parentSubmenuNum,
        mode
    };
};
