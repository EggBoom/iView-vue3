/**
 * @2021/02/21 00:49
 * 
 * 1、RadioGroup中v-model为必传项，为RadioGroup的value
 * 2、Radio中radioValue为必传项
 * 3、slot内为显示label，slot内无内容radioValue为默认显示label
 * 4、name为原生input radio区分标志
 * 5、改变判断选中逻辑，子组件onchange发送自身radioValue使RadioGroup的modelValue和groupValue改变，
 *    各子组件判断自身radioValue和groupValue是否相等确定自身是否被选中。
 * 6、不再支持Radio单独使用。由RadioGroup统一emit事件和向表单dispatch事件
 * 7、用provide/inject和emit事件代替直接操作父组件和子组件。
 */
import Radio from './radio.vue';
import RadioGroup from './radio-group.vue';

Radio.Group = RadioGroup;
export default Radio;