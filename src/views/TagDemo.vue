<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#basic" title="基础用法" />
      <AnchorLink href="#type" title="样式类型" />
      <AnchorLink href="#color" title="颜色" />
      <AnchorLink href="#checkable" title="可选择" />
      <AnchorLink href="#dynamic" title="动态添加和删除" />
      <AnchorLink href="#size" title="尺寸" />
      <AnchorLink href="#API" title="API" />
    </Anchor>
  </div>

  <h1>Tag 标签</h1>
  <p>对不同维度进行简单的标记和分类。</p>

  <h2 id="basic">基础用法</h2>
  <p>简单的展示，添加属性<code>closable</code>可以关闭标签。</p>
  <p>点击关闭标签时，会触发 on-close 事件，需自己实现关闭逻辑。</p>
  <div class="example">
    <Tag>标签一</Tag>
    <Tag>标签二</Tag>
    <Tag v-if="show" closable @on-close="show = false">标签三</Tag>
  </div>

  <h2 id="type">样式类型</h2>
  <p>
    通过设置 <code>type</code> 属性为 <code>border</code> 或
    <code>dot</code> 来选择不同的样式类型。建议有关闭的某些场景下使用
    border，图例的场景下使用 dot。
  </p>
  <div class="example">
    <Tag type="border">标签三</Tag>
    <Tag type="border" closable>标签四</Tag>
    <Tag type="dot">标签一</Tag>
    <Tag type="dot" closable>标签二</Tag>
  </div>

  <h2 id="color">颜色</h2>
  <p>多种预设颜色，可自定义颜色。</p>
  <div class="example">
    <Tag color="default">default</Tag>
    <Tag color="primary">primary</Tag>
    <Tag color="success">success</Tag>
    <Tag color="error">error</Tag>
    <Tag color="warning">warning</Tag>
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="yellow">yellow</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
    <Tag color="#FFA2D3">Custom Color</Tag>
    <br /><br />
    <Tag type="border" closable color="primary">标签一</Tag>
    <Tag type="border" closable color="success">标签二</Tag>
    <Tag type="border" closable color="error">标签三</Tag>
    <Tag type="border" closable color="warning">标签四</Tag>
    <br /><br />
    <Tag type="dot" closable color="primary">标签一</Tag>
    <Tag type="dot" closable color="success">标签二</Tag>
    <Tag type="dot" closable color="error">标签三</Tag>
    <Tag type="dot" closable color="warning">标签四</Tag>
  </div>

  <h2 id="checkable">可选择</h2>
  <p>
    设置属性 <code>checkable</code>，可以对标签进行选择，属性
    <code>checked</code> 控制当前选择状态。
  </p>
  <div class="example">
    <Tag checkable color="primary">标签一</Tag>
    <Tag checkable color="success">标签二</Tag>
    <Tag checkable color="error">标签三</Tag>
    <Tag checkable color="warning">标签四</Tag>
  </div>

  <h2 id="dynamic">动态添加和删除</h2>
  <p>用数组生成一组标签，可以动态添加和删除。</p>
  <div class="example">
    <Tag
      v-for="item in count"
      :key="item"
      :name="item"
      closable
      @on-close="handleClose2(item)"
    >
      标签{{ item + 1 }}
    </Tag>
    <Button icon="ios-add" type="dashed" size="small" @click="handleAdd"
      >添加标签</Button
    >
  </div>

  <h2 id="size">尺寸</h2>
  <p>设置属性 <code>size</code> 可以显示不同尺寸的标签。</p>
  <div class="example">
    <Tag>Default Tag</Tag>
    <Tag size="medium">Medium Tag</Tag>
    <Tag size="large">Large Tag</Tag>
  </div>

  <div class="api">
    <div class="anchor">
      <h2 id="API">API</h2>
      <a href="#API">#</a>
    </div>
    <div class="anchor">
      <h3 id="Tag_props">Tag props</h3>
      <a href="#Tag_props">#</a>
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
          <td>closable</td>
          <td>标签是否可以关闭</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>checkable</td>
          <td>标签是否可以选择</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>标签的选中状态</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>type</td>
          <td>
            标签的样式类型，可选值为 <code>border</code>、<code>dot</code>或不填
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>color</td>
          <td>
            标签颜色，预设颜色值为<code>default</code>、<code>primary</code>、<code>success</code>、<code>warning</code>、<code>error</code>、<code>blue</code>、<code>green</code>、<code>red</code>、<code>yellow</code>、<code>pink</code>、<code>magenta</code>、<code>volcano</code>、<code>orange</code>、<code>gold</code>、<code>lime</code>、<code>cyan</code>、<code>geekblue</code>、<code>purple</code>，你也可以自定义颜色值。
          </td>
          <td>String</td>
          <td>default</td>
        </tr>
        <tr>
          <td>name</td>
          <td>当前标签的名称，使用 v-for，并支持关闭时，会比较有用</td>
          <td>String | Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>fade</td>
          <td>
            是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁
          </td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>size</td>
          <td>尺寸，可选值为 large、medium、default</td>
          <td>String</td>
          <td>default</td>
        </tr>
      </tbody>
    </table>
    <div class="anchor">
      <h3 id="Tag_events">Tag events</h3>
      <a href="#Tag_events">#</a>
    </div>
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
          <td>on-close</td>
          <td>关闭时触发</td>
          <td>event, name</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td>切换选中状态时触发</td>
          <td>checked, name</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import Tag from "../components/tag";
import Anchor from "./../components/anchor";
import Button from "./../components/button";

const AnchorLink = Anchor.Link;

export default {
  components: { Tag, Anchor, AnchorLink, Button },
  setup() {
    const show = ref(true);
    const count = ref([0, 1, 2]);

    const handleAdd = () => {
      if (count.value.length) {
        count.value.push(count.value[count.value.length - 1] + 1);
      } else {
        count.value.push(0);
      }
    };
    const handleClose2 = (name) => {
      const index = count.value.indexOf(name);
      count.value.splice(index, 1);
    };

    return {
      show,
      count,
      handleAdd,
      handleClose2,
    };
  },
};
</script>

<style>
</style>