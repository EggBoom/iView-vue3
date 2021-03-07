import Popper from 'popper.js';

export default function(props) {
    
    let popperJS = null;

    const createPopper = () => {
        if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(props.placement)) {
            return;
        }

        const options = props.options;

        if (!popper.value || !reference.value) return;

        if (popperJS && popperJS.hasOwnProperty('destroy')) {
            popperJS.destroy();
        }

        options.placement = props.placement;

        if (!options.modifiers.offset) {
            options.modifiers.offset = {};
        }
        options.modifiers.offset.offset = props.offset;
        options.onCreate =()=>{
            nextTick(updatePopper);
        };

        popperJS = new Popper(reference.value, popper.value, options);
    };

    const updatePopper = () => {
        popperJS ? popperJS.update() : createPopper();
    };

    const doDestroy = () => {
        popperJS.destroy();
        popperJS = null;
    };

    return {
        popperJS,
        createPopper,
        updatePopper,
        doDestroy
    };
}