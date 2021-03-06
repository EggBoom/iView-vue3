<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#basic" title="基础用法" />
      <AnchorLink href="#type" title="类型" />
      <AnchorLink href="#API" title="API" />
    </Anchor>
  </div>
  <h1>Avatar 头像</h1>
  <p>用来代表用户或事物，支持图片、图标或字符展示。</p>

  <h2 id="basic">基础用法</h2>
  <p>头像有三种尺寸，两种形状可选。</p>
  <div class="example">
    <div>
      <div class="demo-avatar">
        <Avatar icon="ios-person" size="large" />
        <Avatar icon="ios-person" />
        <Avatar icon="ios-person" size="small" />
      </div>
      <div class="demo-avatar">
        <Avatar shape="square" icon="ios-person" size="large" />
        <Avatar shape="square" icon="ios-person" />
        <Avatar shape="square" icon="ios-person" size="small" />
      </div>
    </div>
  </div>

  <h2 id="type">类型</h2>
  <p>
    支持三种类型：图片、Icon 以及字符，其中 Icon
    和字符型可以自定义图标颜色及背景色。
  </p>
  <div class="example">
    <div class="demo-avatar">
      <Avatar icon="ios-person" />
      <Avatar>U</Avatar>
      <Avatar>USER</Avatar>
      <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
      <Avatar style="color: #f56a00; background-color: #fde3cf">U</Avatar>
      <Avatar style="background-color: #87d068" icon="ios-person" />
    </div>
  </div>

  <div class="api">
    <div class="anchor">
      <h2 id="API">API</h2>
      <a href="#API">#</a>
    </div>
    <div class="anchor">
      <h3 id="Avatar_props">Avatar props</h3>
      <a href="#Avatar_props">#</a>
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
          <td>shape</td>
          <td>指定头像的形状，可选值为 circle、square</td>
          <td>String</td>
          <td>circle</td>
        </tr>
        <tr>
          <td>size</td>
          <td>
            设置头像的大小，可选值为 large、small、default，4.0.0
            版本开始支持设置具体数值
          </td>
          <td>String | Number</td>
          <td>default</td>
        </tr>
        <tr>
          <td>src</td>
          <td>图片类头像的资源地址</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>设置头像的图标类型，参考 <code>Icon</code> 组件</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>custom-icon</td>
          <td>自定义图标</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <div class="anchor">
      <h3 id="Avatar_events">Avatar events</h3>
      <a href="#Avatar_events">#</a>
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
          <td>on-error</td>
          <td>在设置 src 且图片加载不成功时触发</td>
          <td>event</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Avatar from "../components/avatar";
import Anchor from "./../components/anchor";

const AnchorLink = Anchor.Link;

export default {
  components: { Avatar, Anchor, AnchorLink },
};
</script>

<style>
.demo-avatar .ivu-avatar {
  margin-top: 16px;
  margin-right: 16px;
}
</style>