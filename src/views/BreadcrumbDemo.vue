<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#basic" title="基础用法" />
      <AnchorLink href="#icon" title="图标" />
      <AnchorLink href="#separator" title="分隔符" />
      <AnchorLink href="#API" title="API" />
    </Anchor>
  </div>

  <h1>Breadcrumb 面包屑</h1>
  <p>显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。</p>

  <h2 id="basic">基础用法</h2>
  <p>最基础的用法，通过设置<code>to</code>属性添加链接。</p>
  <div class="example">
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/Breadcrumb">Components</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  </div>

  <h2 id="icon">图标</h2>
  <p>可自定义每项的内容，比如带有一个图标。</p>
  <div class="example">
    <Breadcrumb>
      <BreadcrumbItem to="/">
        <Icon type="ios-home-outline"></Icon> Home
      </BreadcrumbItem>
      <BreadcrumbItem to="/Breadcrumb">
        <Icon type="logo-buffer"></Icon> Components
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon type="ios-cafe"></Icon> Breadcrumb
      </BreadcrumbItem>
    </Breadcrumb>
  </div>

  <h2 id="separator">分隔符</h2>
  <p>
    通过设置<code>separator</code>属性来自定义分隔符，比如<code> &gt; </code
    >，也可以接受自定义的HTML字符串。
  </p>
  <div class="example">
    <Breadcrumb separator=">">
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/Breadcrumb">Components</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbItem to="/">
        Home
        <template #separator
          ><b class="demo-breadcrumb-separator">=></b></template
        >
      </BreadcrumbItem>
      <BreadcrumbItem to="/Breadcrumb">
        Components
        <template #separator
          ><b class="demo-breadcrumb-separator">=></b></template
        >
      </BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  </div>

  <div class="api">
    <div class="anchor">
      <h2 id="API">API</h2>
      <a href="#API">#</a>
    </div>
    <div class="anchor">
      <h3 id="Breadcrumb_props">Breadcrumb props</h3>
      <a href="#Breadcrumb_props">#</a>
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
          <td>separator</td>
          <td>自定义分隔符</td>
          <td>String | Element String</td>
          <td>/</td>
        </tr>
      </tbody>
    </table>
    <div class="anchor">
      <h3 id="BreadcrumbItem_props">BreadcrumbItem props</h3>
      <a href="#BreadcrumbItem_props">#</a>
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
          <td>to</td>
          <td>链接，不传则没有链接，支持 vue-router 对象</td>
          <td>String | Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>replace</td>
          <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>Breadcrumb slots</h3>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>default</td>
          <td>自定义BreadcrumbItem</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <h3>BreadcrumbItem slots</h3>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>default</td>
          <td>自定义面包屑内容</td>
          <td>-</td>
        </tr>
        <tr>
          <td>separator</td>
          <td>自定义分隔符</td>
          <td>separator</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Breadcrumb from "../components/breadcrumb";
import Anchor from "./../components/anchor";
import Icon from "./../components/icon";

const AnchorLink = Anchor.Link;
const BreadcrumbItem = Breadcrumb.Item;

export default {
  components: { Breadcrumb, BreadcrumbItem, Anchor, AnchorLink, Icon },
};
</script>

<style>
.demo-breadcrumb-separator {
  color: #ff5500;
  padding: 0 5px;
}
</style>