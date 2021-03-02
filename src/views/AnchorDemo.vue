<template>
  <h1>Anchor 锚点</h1>
  <p>用于跳转到页面指定位置。</p>

  <h2>基础用法</h2>
  <p>最简单的用法。</p>
  <div id="basic_usage">
    <div class="example">
      <Anchor show-ink>
        <AnchorLink href="#basic_usage" title="基础用法" />
        <AnchorLink href="#static_position" title="静态位置" />
        <AnchorLink href="#API" title="API">
          <AnchorLink href="#Anchor_props" title="Anchor props" />
          <AnchorLink href="#Anchor_events" title="Anchor events" />
          <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
        </AnchorLink>
      </Anchor>
    </div>
  </div>

  <h2>静态位置</h2>
  <p>不浮动，状态不随页面滚动变化。</p>
  <div id="static_position">
    <div class="example">
      <Anchor :affix="false" show-ink>
        <AnchorLink href="#basic_usage" title="基础用法" />
        <AnchorLink href="#static_position" title="静态位置" />
        <AnchorLink href="#API" title="API">
          <AnchorLink href="#Anchor_props" title="Anchor props" />
          <AnchorLink href="#Anchor_events" title="Anchor events" />
          <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
        </AnchorLink>
      </Anchor>
    </div>
  </div>

  <h2 id="API">API</h2>
  <div class="api">
    <h3>Anchor props</h3>
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
          <td>affix</td>
          <td>固定模式</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>offset-top</td>
          <td>距离窗口顶部达到指定偏移量后触发</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>offset-bottom</td>
          <td>距离窗口底部达到指定偏移量后触发</td>
          <td>Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>bounds</td>
          <td>锚点区域边界，单位：px</td>
          <td>Number</td>
          <td>5</td>
        </tr>
        <tr>
          <td>scroll-offset</td>
          <td>点击滚动的额外距离</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>container</td>
          <td>指定滚动的容器</td>
          <td>String | HTMLElement</td>
          <td>-</td>
        </tr>
        <tr>
          <td>show-ink</td>
          <td>是否显示小圆点</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>Anchor events</h3>
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
          <td>on-select</td>
          <td>点击锚点时触发，返回链接</td>
          <td>href</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td>链接改变时触发，返回新链接和旧链接</td>
          <td>newHref, oldHref</td>
        </tr>
      </tbody>
    </table>

    <h3>AnchorLink props</h3>
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
          <td>href</td>
          <td>锚点链接</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>title</td>
          <td>文字内容</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>scroll-offset</td>
          <td>点击滚动的额外距离</td>
          <td>Number</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Anchor from "../components/anchor";
import AnchorLink from "../components/anchor/anchor-link.vue";

export default {
  components: { Anchor, AnchorLink },
};
</script>

<style>
</style>