<template>
  <h1>Radio 单选</h1>
  <p>
    基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。
  </p>

  <h2>基本用法</h2>
  <p>使用 v-model 可以双向绑定数据。</p>
  <p>
    使用<code>RadioGroup</code
    >实现一组互斥的选项组。在组合使用时，<code>Radio</code>
    使用 <code>radioValue</code> 来自动判断。每个 Radio
    的内容可以自定义，如不填写则默认使用 radioValue 的值。
  </p>
  <div class="example">
    <RadioGroup v-model="phone" name="phone">
      <Radio radioValue="apple">
        <Icon type="logo-apple"></Icon>
        <span>Apple</span>
      </Radio>
      <Radio radioValue="android">
        <Icon type="logo-android"></Icon>
        <span>Android</span>
      </Radio>
      <Radio radioValue="windows">
        <Icon type="logo-windows"></Icon>
        <span>Windows</span>
      </Radio>
    </RadioGroup>
    <p class="demo-data">{{ phone }}</p>
    <br />
    <RadioGroup v-model="insect" name="insect">
      <Radio radioValue="金斑蝶"></Radio>
      <Radio radioValue="爪哇犀牛"></Radio>
      <Radio radioValue="印度黑羚"></Radio>
    </RadioGroup>
    <p class="demo-data">{{ insect }}</p>
  </div>

  <h2>不可用</h2>
  <p>通过设置<code>disabled</code>属性来禁用单选框。</p>
  <div class="example">
    <RadioGroup v-model="disabledGroup">
      <Radio radioValue="金斑蝶" disabled></Radio>
      <Radio radioValue="爪哇犀牛"></Radio>
      <Radio radioValue="印度黑羚"></Radio>
    </RadioGroup>
    <p class="demo-data">{{ disabledGroup }}</p>
  </div>

  <h2>垂直</h2>
  <p>通过设置<code>vertical</code>可以垂直显示，按钮样式下无效。</p>
  <div class="example">
    <RadioGroup v-model="vertical" vertical>
      <Radio radioValue="apple">
        <Icon type="social-apple"></Icon>
        <span>Apple</span>
      </Radio>
      <Radio radioValue="android">
        <Icon type="social-android"></Icon>
        <span>Android</span>
      </Radio>
      <Radio radioValue="windows">
        <Icon type="social-windows"></Icon>
        <span>Windows</span>
      </Radio>
    </RadioGroup>
    <p class="demo-data">{{ vertical }}</p>
  </div>

  <h2>按钮样式</h2>
  <p>组合使用时可以设置属性type为 button 来应用按钮的样式。</p>
  <div class="example">
    <RadioGroup v-model="button1" type="button">
      <Radio radioValue="北京"></Radio>
      <Radio radioValue="上海"></Radio>
      <Radio radioValue="深圳"></Radio>
      <Radio radioValue="杭州"></Radio>
    </RadioGroup>
    <p class="demo-data">{{ button1 }}</p>
    <br />
    <RadioGroup v-model="button2" type="button">
      <Radio radioValue="北京"></Radio>
      <Radio radioValue="上海" disabled></Radio>
      <Radio radioValue="深圳"></Radio>
      <Radio radioValue="杭州"></Radio>
    </RadioGroup>
    <p class="demo-data">{{ button2 }}</p>
    <br />
    <RadioGroup v-model="button3" type="button">
      <Radio radioValue="北京" disabled></Radio>
      <Radio radioValue="上海" disabled></Radio>
      <Radio radioValue="深圳" disabled></Radio>
      <Radio radioValue="杭州" disabled></Radio>
    </RadioGroup>
    <p class="demo-data">{{ button3 }}</p>
  </div>

  <h2>尺寸</h2>
  <p>
    通过设置属性size为large或small将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。
  </p>
  <div class="example">
    <RadioGroup v-model="button4" type="button" size="large">
      <Radio radioValue="北京"></Radio>
      <Radio radioValue="上海"></Radio>
      <Radio radioValue="深圳"></Radio>
      <Radio radioValue="杭州"></Radio>
    </RadioGroup>
    <p class="demo-data">{{ button4 }}</p>
    <br />
    <RadioGroup v-model="button5" type="button">
      <Radio radioValue="北京"></Radio>
      <Radio radioValue="上海"></Radio>
      <Radio radioValue="深圳"></Radio>
      <Radio radioValue="杭州"></Radio>
    </RadioGroup>
    <p class="demo-data">{{ button5 }}</p>
    <br />
    <RadioGroup v-model="button6" type="button" size="small">
      <Radio radioValue="北京"></Radio>
      <Radio radioValue="上海"></Radio>
      <Radio radioValue="深圳"></Radio>
      <Radio radioValue="杭州"></Radio>
    </RadioGroup>
    <p class="demo-data">{{ button6 }}</p>
  </div>

  <h2>API</h2>
  <div class="api">
    <h3>Radio props</h3>
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
            只在单独使用时有效。可以使用
            <code>v-model</code> 双向绑定数据
          </td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>label</td>
          <td>
            只在组合使用时有效。指定当前选项的 value
            值，组合会自动判断当前选择的项目
          </td>
          <td>String | Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用当前项</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>
            单选框的尺寸，可选值为 <code>large</code>、<code
             
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

    <h3>Radio events</h3>
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
            在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发
          </td>
          <td>...</td>
        </tr>
      </tbody>
    </table>

    <h3>RadioGroup props</h3>
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
            指定当前选中的项目数据。可以使用
            <code>v-model</code> 双向绑定数据
          </td>
          <td>String | Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>type</td>
          <td>
            可选值为 button 或不填，为 button 时使用按钮样式
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>
            button-style
            <span class="ivu-badge">
              <sup class="ivu-badge-count ivu-badge-count-alone"
                >4.5.0</sup
              ></span
            >
          </td>
          <td>按钮样式，可选值为 default 和 solid</td>
          <td>String</td>
          <td>default</td>
        </tr>
        <tr>
          <td>size</td>
          <td>
            尺寸，可选值为<code>large</code>、<code
             
              >small</code
            >、<code>default</code>或者不设置
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>vertical</td>
          <td>是否垂直排列，按钮样式下无效</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>RadioGroup events</h3>
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
            在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发
          </td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import Radio from "../components/radio";
import Icon from "../components/icon";

const RadioGroup = Radio.Group;

export default {
  components: { Radio, RadioGroup, Icon },
  setup() {
    const single = ref(false);
    const phone = ref("apple");
    const insect = ref("爪哇犀牛");
    const disabledGroup = ref("爪哇犀牛");
    const vertical = ref("apple");
    const button1 = ref("北京");
    const button2 = ref("北京");
    const button3 = ref("北京");
    const button4 = ref("北京");
    const button5 = ref("北京");
    const button6 = ref("北京");

    return {
      single,
      phone,
      insect,
      disabledGroup,
      vertical,
      button1,
      button2,
      button3,
      button6,
      button4,
      button5,
    };
  },
};
</script>