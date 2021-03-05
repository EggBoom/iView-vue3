<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#vertical" title="水平分割线" />
      <AnchorLink href="#horizontal" title="垂直分割线" />
      <AnchorLink href="#title" title="标题位置" />
      <AnchorLink href="#text" title="分割文字使用正文样式" />
      <AnchorLink href="#api" title="API" />
    </Anchor>
  </div>

  <h1>Divider 分割线</h1>
  <p>区隔内容的分割线。</p>

  <h2 id="vertical">水平分割线</h2>
  <p>默认为水平分割线，可在中间加入文字。</p>
  <div class="example">
    <p>
      Steven Paul Jobs was an American entrepreneur and business magnate. He was
      the chairman, chief executive officer, and a co-founder of Apple Inc.
    </p>
    <Divider />
    <p>
      Steven Paul Jobs was an American entrepreneur and business magnate. He was
      the chairman, chief executive officer, and a co-founder of Apple Inc.
    </p>
    <Divider>With Text</Divider>
    <p>
      Steven Paul Jobs was an American entrepreneur and business magnate. He was
      the chairman, chief executive officer, and a co-founder of Apple Inc.
    </p>
    <Divider dashed />
    <p>
      Steven Paul Jobs was an American entrepreneur and business magnate. He was
      the chairman, chief executive officer, and a co-founder of Apple Inc.
    </p>
  </div>

  <h2 id="horizontal">垂直分割线</h2>
  <p>使用<code>type="vertical"</code>设置为行内的垂直分割线。</p>
  <div class="example">
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </div>

  <h2 id="title">标题位置</h2>
  <p>修改分割线标题的位置。</p>
  <div class="example">
    <Divider orientation="left">Left Text</Divider>
    <p>
      Steven Paul Jobs was an American entrepreneur and business magnate. He was
      the chairman, chief executive officer, and a co-founder of Apple Inc.
    </p>
    <Divider orientation="right">Right Text</Divider>
    <p>
      Steven Paul Jobs was an American entrepreneur and business magnate. He was
      the chairman, chief executive officer, and a co-founder of Apple Inc.
    </p>
  </div>

  <h2 id="text">分割文字使用正文样式</h2>
  <p>设置属性<code>plain</code>可以显示为更轻量的分割文字样式。</p>
  <div class="example">
    <div>
      <Divider plain>Text</Divider>
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He
        was the chairman, chief executive officer, and a co-founder of Apple
        Inc.
      </p>
      <Divider plain orientation="left">Left Text</Divider>
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He
        was the chairman, chief executive officer, and a co-founder of Apple
        Inc.
      </p>
      <Divider plain orientation="right">Right Text</Divider>
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He
        was the chairman, chief executive officer, and a co-founder of Apple
        Inc.
      </p>
    </div>
  </div>

<h2>API</h2>
<div class="api">
  <h3>Divider props</h3>
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
        <td>type</td>
        <td>水平还是垂直类型，可选值为 horizontal 或 vertical</td>
        <td>String</td>
        <td>horizontal</td>
      </tr>
      <tr>
        <td>orientation</td>
        <td>分割线标题的位置，可选值为 left、right 或 center</td>
        <td>Number</td>
        <td>center</td>
      </tr>
      <tr>
        <td>dashed</td>
        <td>是否虚线</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>plain</td>
        <td>文字是否显示为普通正文样式</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>size</td>
        <td>尺寸，可选值为 small 或 default</td>
        <td>String</td>
        <td>default</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import Divider from "../components/divider";
import Anchor from "./../components/anchor";

const AnchorLink = Anchor.Link;
export default {
  components: { Divider, Anchor, AnchorLink }
};
</script>