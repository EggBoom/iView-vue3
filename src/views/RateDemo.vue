<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#basic" title="基础用法" />
      <AnchorLink href="#half" title="半星" />
      <AnchorLink href="#readonly" title="只读" />
      <AnchorLink href="#clear" title="清除" />
      <AnchorLink href="#custom" title="自定义字符和图标" />
      <AnchorLink href="#api" title="API" />
    </Anchor>
  </div>

  <h1>Rate 评分</h1>
  <p>对事物进行快速的评级操作，或对评价进行展示。</p>

  <h2 id="basic">基础用法</h2>
  <p>基本用法</p>
  <div class="example">
    <Rate v-model="value" />
  </div>

  <h2 id="half">半星</h2>
  <p>设置属性 <code>allow-half</code> 可以选中半星。</p>
  <div class="example">
    <Rate allow-half v-model="valueHalf" />
  </div>

  <h2 id="text">显示提示</h2>
  <p>设置属性 <code>show-text</code> 可以显示提示文字。</p>
  <p>提示内容也可以通过 slot 自定义。</p>
  <div class="example">
    <Rate show-text v-model="valueText" />
    <br />
    <Rate show-text allow-half v-model="valueCustomText">
      <span style="color: #f5a623">{{ valueCustomText }}</span>
    </Rate>
  </div>

  <h2 id="readonly">只读</h2>
  <p>设置属性 <code>disabled</code> 开启只读模式，无法交互。</p>
  <div class="example">
    <Rate disabled v-model="valueDisabled" />
  </div>

  <h2 id="clear">清除</h2>
  <p>支持允许或者禁用清除。</p>
  <div class="example">
    <Rate clearable v-model="value1" /> clearable: true
    <br />
    <Rate v-model="value2" /> clearable: false
  </div>

  <h2 id="custom">自定义字符和图标</h2>
  <p>设置 <code>character</code> 属性，可以自定义字符。</p>
  <p>
    设置 <code>icon</code> 或 <code>custom-icon</code> 属性，可以自定义图标。
  </p>
  <div class="example">
    <Rate v-model="value3" character="A" />
    <Rate v-model="value4" character="好" />
    <Rate v-model="value5" icon="ios-heart" />
  </div>

  <h2>API</h2>
  <div class="api">
    <h3>Rate props</h3>
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
          <td>count</td>
          <td>star 总数</td>
          <td>Number</td>
          <td>5</td>
        </tr>
        <tr>
          <td>modelValue</td>
          <td>当前 star 数，可以使用 v-model 双向绑定数据</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>allow-half</td>
          <td>是否允许半选</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否只读，无法进行交互</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>show-text</td>
          <td>是否显示提示文字</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>是否可以取消选择</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>character</td>
          <td>自定义字符</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>使用图标</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>custom-icon</td>
          <td>使用自定义图标</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <h3>Rate events</h3>
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
          <td>评分改变时触发</td>
          <td>value</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import Rate from "../components/rate";
import Anchor from "./../components/anchor";

const AnchorLink = Anchor.Link;

export default {
  components: { Rate, Anchor, AnchorLink },
  setup() {
    const value = ref(0);
    const valueHalf = ref(2.5);
    const valueText = ref(3);
    const valueCustomText = ref(3.8);
    const valueDisabled = ref(2);
    const value1 = ref(3);
    const value2 = ref(3);
    const value3 = ref(3);
    const value4 = ref(3);
    const value5 = ref(3);

    return {
      value,
      valueHalf,
      valueText,
      valueCustomText,
      valueDisabled,
      value1,
      value2,
      value3,
      value4,
      value5,
    };
  },
};
</script>

<style>
</style>