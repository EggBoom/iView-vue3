<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#basic" title="基础用法" />
      <AnchorLink href="#percent" title="百分比内显" />
      <AnchorLink href="#vertical" title="垂直方向" />
      <AnchorLink href="#cooperate" title="配合外部组件使用" />
      <AnchorLink href="#custom" title="自定义样式" />
      <AnchorLink href="#linear" title="渐变色" />
      <AnchorLink href="#API" title="API" />
    </Anchor>
  </div>

  <h1>Progress 进度条</h1>
  <p>展示操作或任务的当前进度，比如上传文件。</p>

  <h2 id="basic">基础用法</h2>
  <p>处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success。</p>
  <div class="example">
    <Progress :percent="25" />
    <Progress :percent="45" status="active" />
    <Progress :percent="65" status="wrong" />
    <Progress :percent="100" />
    <Progress :percent="25" hide-info />
  </div>

  <h2 id="percent">百分比内显</h2>
  <p>设置属性 <code>text-inside</code> 可以将百分比显示在进度条内部。</p>
  <p>需要通过属性 <code>stroke-width</code> 设置一个足够的高度。</p>
  <div class="example">
    <Progress :percent="25" :stroke-width="20" text-inside />
    <Progress :percent="45" :stroke-width="20" status="active" text-inside />
    <Progress :percent="65" :stroke-width="20" status="wrong" text-inside />
    <Progress :percent="100" :stroke-width="20" text-inside />
  </div>

  <h2 id="vertical">垂直方向</h2>
  <p>设置属性 <code>vertical</code> 将以垂直方向显示。</p>
  <div class="example">
    <div style="height: 100px">
      <Progress vertical :percent="25" />
      <Progress vertical :percent="45" status="active" />
      <Progress vertical :percent="65" status="wrong" />
      <Progress vertical :percent="100" />
      <Progress vertical :percent="25" hide-info />
    </div>
  </div>

  <h2 id="coopereate">配合外部组件使用</h2>
  <p>通过数据的联动和逻辑控制，实现动态效果。</p>
  <div class="example">
    <Progress :percent="percent" />
    <ButtonGroup size="large">
      <Button icon="ios-add" @click="add"></Button>
      <Button icon="ios-remove" @click="minus"></Button>
    </ButtonGroup>
  </div>

  <h2 id="custom">自定义样式</h2>
  <p>
    通过自定义<code>slot</code>和属性<code>stroke-width</code>改变进度条效果。
  </p>
  <div class="example">
    <Progress :percent="25" :stroke-width="5" />
    <Progress :percent="100">
      <Icon type="ios-checkmark-circle"></Icon>
      <span>成功</span>
    </Progress>
  </div>

  <h2 id="linear">渐变色</h2>
  <p>设置属性 <code>stroke-color</code> 为数组时，可以显示为渐变色。</p>
  <p>数组只能设置为两项。</p>
  <div class="example">
    <Progress :percent="90" :stroke-color="['#108ee9', '#87d068']" />
  </div>

  <div class="api">
    <div class="anchor">
      <h2 id="API">API</h2>
      <a href="#API">#</a>
    </div>
    <div class="anchor">
      <h3 id="Progress_props">Progress props</h3>
      <a href="#Progress_props">#</a>
    </div>
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
          <td>status</td>
          <td>
            状态，可选值为<code>normal</code>、<code>active</code>、<code>wrong</code>、<code
              >success</code
            >
          </td>
          <td>String</td>
          <td>normal</td>
        </tr>
        <tr>
          <td>stroke-width</td>
          <td>进度条的线宽，单位 px</td>
          <td>Number</td>
          <td>10</td>
        </tr>
        <tr>
          <td>stroke-color</td>
          <td>进度条的颜色，4.0.0 开始支持传入数组，显示为渐变色</td>
          <td>String | Array</td>
          <td>-</td>
        </tr>
        <tr>
          <td>hide-info</td>
          <td>隐藏数值或状态图标</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>vertical</td>
          <td>是否在垂直方向显示</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>success-percent</td>
          <td>已完成的分段百分比</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>text-inside</td>
          <td>百分比是否置于进度条内</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <div class="anchor">
      <h3 id="Progress_slot">Progress slot</h3>
      <a href="#Progress_slot">#</a>
    </div>
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
          <td>自定义显示状态内容</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { ref } from "vue";
import Progress from "../components/progress";
import Anchor from "../components/anchor";
import Button from "../components/button";
import Icon from "../components/icon";

const AnchorLink = Anchor.Link;
const ButtonGroup = Button.Group;

export default {
  components: { Progress, Anchor, AnchorLink, Button, ButtonGroup, Icon },
  setup() {
    const percent = ref(0);
    const add = () => {
      if (percent.value < 100) {
        percent.value += 10;
      }
    };
    const minus = () => {
      if (percent.value > 0) {
        percent.value -= 10;
      }
    };

    return {
      percent,
      add,
      minus,
    };
  },
};
</script>

<style>
</style>