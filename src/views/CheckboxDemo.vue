<template>
  <h1>Checkbox 多选</h1>
  <p>主要用于一组可选项多项选择</p>

  <h2>基础用法</h2>
  <p>
    使用<code>CheckboxGroup</code>配合数组来生成组合。在组合使用时，<code
      >Checkbox</code
    >
    使用 <code>checkboxValue</code> 来自动判断选中状态。每个 Checkbox
    的内容可以自定义，如不填写则默认使用 check box V a lue 的值。
  </p>
  <div class="example">
    <CheckboxGroup v-model="social">
      <Checkbox checkboxValue="twitter">
        <Icon type="logo-twitter"></Icon>
        <span>Twitter</span>
      </Checkbox>
      <Checkbox checkboxValue="facebook">
        <Icon type="logo-facebook"></Icon>
        <span>Facebook</span>
      </Checkbox>
      <Checkbox checkboxValue="github">
        <Icon type="logo-github"></Icon>
        <span>Github</span>
      </Checkbox>
      <Checkbox checkboxValue="snapchat">
        <Icon type="logo-snapchat"></Icon>
        <span>Snapchat</span>
      </Checkbox>
    </CheckboxGroup>
    <p class="demo-data">{{ social }}</p>
    <br />
    <CheckboxGroup v-model="fruit">
      <Checkbox checkboxValue="香蕉"></Checkbox>
      <Checkbox checkboxValue="苹果"></Checkbox>
      <Checkbox checkboxValue="西瓜"></Checkbox>
    </CheckboxGroup>
    <p class="demo-data">{{ fruit }}</p>
  </div>

  <h2>不可用</h2>
  <p>通过设置disabled属性来禁用多选框。</p>
  <div class="example">
    <CheckboxGroup v-model="disabledGroup">
      <Checkbox checkboxValue="香蕉" disabled></Checkbox>
      <Checkbox checkboxValue="苹果" disabled></Checkbox>
      <Checkbox checkboxValue="西瓜"></Checkbox>
    </CheckboxGroup>
    <p class="demo-data">{{ disabledGroup }}</p>
  </div>

  <h2>基础用法</h2>
  <p>
    使用<code>CheckboxGroup</code>配合数组来生成组合。在组合使用时，<code
      >Checkbox</code
    >
    使用 <code>checkboxValue</code> 来自动判断选中状态。每个 Checkbox
    的内容可以自定义，如不填写则默认使用 check box V a lue 的值。
  </p>
  <div class="example">
    <CheckboxGroup v-model="social">
      <Checkbox checkboxValue="twitter">
        <Icon type="logo-twitter"></Icon>
        <span>Twitter</span>
      </Checkbox>
      <Checkbox checkboxValue="facebook">
        <Icon type="logo-facebook"></Icon>
        <span>Facebook</span>
      </Checkbox>
      <Checkbox checkboxValue="github">
        <Icon type="logo-github"></Icon>
        <span>Github</span>
      </Checkbox>
      <Checkbox checkboxValue="snapchat">
        <Icon type="logo-snapchat"></Icon>
        <span>Snapchat</span>
      </Checkbox>
    </CheckboxGroup>
    <p class="demo-data">{{ social }}</p>
    <br />
    <CheckboxGroup v-model="fruit">
      <Checkbox checkboxValue="香蕉"></Checkbox>
      <Checkbox checkboxValue="苹果"></Checkbox>
      <Checkbox checkboxValue="西瓜"></Checkbox>
    </CheckboxGroup>
    <p class="demo-data">{{ fruit }}</p>
  </div>

  <!-- <h2>全选</h2>
<p>在实现全选效果时，你可能会用到 <code>indeterminate</code> 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。</p>
<div class="example">
    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <Checkbox :indeterminate="indeterminate" @click.prevent="handleCheckAll">全选</Checkbox>
    </div>
    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
</div> -->

  <h2>API</h2>
  <div class="api">
    <h3>Checkbox props</h3>
    <table>
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>
            只在单独使用时有效。可以使用 v-model 双向绑定数据
          </td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>label</td>
          <td>
            只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中
          </td>
          <td>String | Number | Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用当前项</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>indeterminate</td>
          <td>设置 indeterminate 状态，只负责样式控制</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>
            多选框的尺寸，可选值为 <code>large</code>、<code
             
              >small</code
            >、<code>default</code> 或者不设置
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>
            border
            <span class="ivu-badge">
              <sup class="ivu-badge-count ivu-badge-count-alone"
                >4.0.0</sup
              ></span
            >
          </td>
          <td>是否显示边框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>true-value</td>
          <td>
            选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
          </td>
          <td>String, Number, Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>false-value</td>
          <td>
            没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
          </td>
          <td>String, Number, Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>Checkbox events</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>on-change</td>
          <td>
            只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发
          </td>
          <td>true | false</td>
        </tr>
      </tbody>
    </table>

    <h3>CheckboxGroup props</h3>
    <table>
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>
            指定选中项目的集合，可以使用 v-model 双向绑定数据
          </td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>size</td>
          <td>
            多选框组的尺寸，可选值为
            <code>large</code>、<code
              >small</code
            >、<code>default</code> 或者不设置
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <h3>CheckboxGroup events</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>on-change</td>
          <td>
            在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发
          </td>
          <td>[...]</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import Checkbox from "../components/checkbox";
import Icon from "../components/icon";

const CheckboxGroup = Checkbox.Group;

export default {
  components: {
    Checkbox,
    CheckboxGroup,
    Icon,
  },
  setup() {
    const social = ref(["facebook"]);
    const fruit = ref(["苹果"]);
    const indeterminate = ref(true);
    const checkAll = ref(false);
    const checkAllGroup = ref(["香蕉", "西瓜"]);
    const disabledGroup = ref(["苹果"]);

    const handleCheckAll = () => {
      if (indeterminate.value) {
        checkAll.value = false;
      } else {
        checkAll.value = !checkAll.value;
      }
      indeterminate.value = false;

      if (checkAll.value) {
        checkAllGroup.value = ["香蕉", "苹果", "西瓜"];
      } else {
        checkAllGroup.value = [];
      }
    };
    const checkAllGroupChange = (data) => {
      if (data.length === 3) {
        indeterminate.value = false;
        checkAll.value = true;
      } else if (data.length > 0) {
        indeterminate.value = true;
        checkAll.value = false;
      } else {
        indeterminate.value = false;
        checkAll.value = false;
      }
    };

    return {
      social,
      fruit,
      indeterminate,
      checkAll,
      checkAllGroup,
      checkAllGroupChange,
      handleCheckAll,
      disabledGroup,
    };
  },
};
</script>