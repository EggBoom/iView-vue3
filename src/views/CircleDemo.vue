<template>
  <h1>Circle 进度环</h1>
  <p>显示某项任务进度的百分比,统计某些指标的占比。</p>

  <h2>基础用法</h2>
  <p>圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。</p>
  <div class="example">
    <Circle :percent="80">
      <span class="demo-Circle-inner" style="font-size: 24px">80%</span>
    </Circle>
    <Circle :percent="100" stroke-color="#5cb85c">
      <Icon type="ios-checkmark" size="60" style="color: #5cb85c"></Icon>
    </Circle>
    <Circle :percent="35" stroke-color="#ff5500">
      <span class="demo-Circle-inner">
        <Icon type="ios-close" size="50" style="color: #ff5500"></Icon>
      </span>
    </Circle>
  </div>

  <h2>配合外部组件使用</h2>
  <p>通过数据的联动和逻辑控制，实现交互效果。</p>
  <div class="example">
    <Circle :percent="percent" :stroke-color="color">
      <Icon
        v-if="percent == 100"
        type="ios-checkmark"
        size="60"
        style="color: #5cb85c"
      ></Icon>
      <span v-else style="font-size: 24px">{{ percent }}%</span>
    </Circle>
    <ButtonGroup size="large">
      <Button icon="ios-add" @click="add"></Button>
      <Button icon="ios-remove" @click="minus"></Button>
    </ButtonGroup>
  </div>

  <h2>自定义样式</h2>
  <p>通过自定义<code>slot</code>和丰富的配置，可以组合出很多统计效果。</p>
  <div class="example">
    <Circle
      :size="250"
      :trail-width="4"
      :stroke-width="5"
      :percent="75"
      stroke-linecap="square"
      stroke-color="#43a3fb"
    >
      <div class="demo-Circle-custom">
        <h1>42,001,776</h1>
        <p>消费人群规模</p>
        <span>
          总占人数
          <i>75%</i>
        </span>
      </div>
    </Circle>
  </div>

  <h2>仪表盘</h2>
  <p>
    通过设置属性<code>dashboard</code>，可以很方便地实现仪表盘样式的进度环。
  </p>
  <div class="example">
    <Circle :percent="80" dashboard>
      <span class="demo-circle-inner" style="font-size: 24px">80%</span>
    </Circle>
  </div>

  <h2>API</h2>
  <div class="api">
    <h3>Circle props</h3>
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
          <td>percent</td>
          <td>百分比</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>size</td>
          <td>图表的宽度和高度，单位 px</td>
          <td>Number</td>
          <td>120</td>
        </tr>
        <tr>
          <td>stroke-linecap</td>
          <td>
            进度环顶端的形状，可选值为<code>square</code>（方）和<code>round</code>（圆）
          </td>
          <td>String</td>
          <td>round</td>
        </tr>
        <tr>
          <td>stroke-width</td>
          <td>进度环的线宽，单位 px</td>
          <td>Number</td>
          <td>6</td>
        </tr>
        <tr>
          <td>stroke-color</td>
          <td>进度环的颜色，4.0.0 版本开始支持传入数组显示为渐变色</td>
          <td>String | Array</td>
          <td>#2db7f5</td>
        </tr>
        <tr>
          <td>trail-width</td>
          <td>进度环背景的线宽，单位 px</td>
          <td>Number</td>
          <td>5</td>
        </tr>
        <tr>
          <td>trail-color</td>
          <td>进度环背景的颜色</td>
          <td>String</td>
          <td>#eaeef2</td>
        </tr>
        <tr>
          <td>dashboard</td>
          <td>是否显示为仪表盘</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>Circle slots</h3>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>default</td>
          <td>自定义显示中间内容，内容默认垂直居中</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import Circle from "../components/circle";
import Icon from "../components/icon";
import Button from "../components/button";

const ButtonGroup = Button.Group;

export default {
  components: { Circle, Icon, Button, ButtonGroup },
  setup() {
    const percent = ref(0);

    const color = computed(() => {
      let color = "#2db7f5";
      if (percent.value == 100) {
        color = "#5cb85c";
      }
      return color;
    });

    const add = () => {
      if (percent.value >= 100) {
        return false;
      }
      percent.value += 10;
    };
    const minus = () => {
      if (percent.value <= 0) {
        return false;
      }
      percent.value -= 10;
    };

    return {
      percent,
      color,
      add,
      minus,
    };
  },
};
</script>

<style>
.demo-Circle-custom h1 {
  color: #3f414d;
  font-size: 28px;
  font-weight: normal;
}
.demo-Circle-custom p {
  color: #657180;
  font-size: 14px;
  margin: 10px 0 15px;
}
.demo-Circle-custom span {
  display: block;
  padding-top: 15px;
  color: #657180;
  font-size: 14px;
}
.demo-Circle-custom span::before {
  content: "";
  display: block;
  width: 50px;
  height: 1px;
  margin: 0 auto;
  background: #e0e3e6;
  position: relative;
  top: -15px;
}
.demo-Circle-custom span i {
  font-style: normal;
  color: #3f414d;
}
</style>