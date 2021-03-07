import mitt from 'mitt';
import { getCurrentInstance } from 'vue';

const DISPATCH = 'dispatch';
const BROADCAST = 'broadcast';

const wrapper = Symbol('wrapper')

const emitter = mitt();

export default function() {

    const currentComponentInstance = getCurrentInstance();


    const on = (type, handler) => {
        const handleWrapper = (e) => {
            const { value, type, emitComponentInstance } = e
            if (type === BROADCAST) {
                if (isChildComponent(currentComponentInstance, emitComponentInstance)) {
                    handler && handler(...value)
                }
            } else if (type === DISPATCH) {
                if (isChildComponent(emitComponentInstance, currentComponentInstance)) {
                    handler && handler(...value)
                }
            } else {
                handler && handler(...value)
            }
        };

        // Save the real handler because the need to call off
        handler[wrapper] = handleWrapper
        emitter.on(type, handleWrapper)
    };

    const dispatch = (type, ...args) => {
        emitter.emit(type, {
          type: DISPATCH,
          emitComponentInstance: currentComponentInstance,
          value: args
        })
    };

    const broadcast = (type, ...args) => {
        emitter.emit(type, {
          type: BROADCAST,
          emitComponentInstance: currentComponentInstance,
          value: args
        })
    };

    return {
        on,
        dispatch,
        broadcast
    };
}

/**
 * check componentChild is componentParent child components
 * @param {*} componentChild
 * @param {*} componentParent
 */
function isChildComponent(componentChild, componentParent) {
    const parentUId = componentParent.uid
  
    while (componentChild && componentChild?.parent?.uid !== parentUId) {
      componentChild = componentChild.parent
    }
  
    return Boolean(componentChild)
  }