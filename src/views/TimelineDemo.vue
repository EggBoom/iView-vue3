<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#basic" title="基础用法" />
      <AnchorLink href="#color" title="圆圈颜色" />
      <AnchorLink href="#pending" title="最后一个" />
      <AnchorLink href="#custom" title="自定义时间轴点" />
      <AnchorLink href="#API" title="API" />
    </Anchor>
  </div>

  <h1>Timeline 时间轴</h1>
  <p>对一系列信息进行时间排序时，垂直地展示。</p>

  <h2 id="basic">基础用法</h2>
  <p>最简单定义一个时间轴的用法。</p>
  <div class="example">
    <Timeline>
      <TimelineItem>
        <p class="time">1976年</p>
        <p class="content">Apple I 问世</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">1984年</p>
        <p class="content">发布 Macintosh</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">2007年</p>
        <p class="content">发布 iPhone</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">2010年</p>
        <p class="content">发布 iPad</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">2011年10月5日</p>
        <p class="content">史蒂夫·乔布斯去世</p>
      </TimelineItem>
    </Timeline>
  </div>

  <h2 id="color">圆圈颜色</h2>
  <p>
    用各种颜色来标识不同状态，可以使用<code>green</code
    >、<code>red</code>、<code>blue</code
    >或自定义的颜色，默认是 blue 。
  </p>
  <div class="example">
    <Timeline>
      <TimelineItem color="green">发布1.0版本</TimelineItem>
      <TimelineItem color="green">发布2.0版本</TimelineItem>
      <TimelineItem color="red">严重故障</TimelineItem>
      <TimelineItem color="blue">发布3.0版本</TimelineItem>
    </Timeline>
  </div>

  <h2 id="pending">最后一个</h2>
  <p>
    通过添加<code>pending</code
    >属性来标记最后一个为幽灵节点，标识还未完成。
  </p>
  <div class="example">
    <Timeline pending>
      <TimelineItem>发布1.0版本</TimelineItem>
      <TimelineItem>发布2.0版本</TimelineItem>
      <TimelineItem>发布3.0版本</TimelineItem>
      <TimelineItem><a href="#">查看更多</a></TimelineItem>
    </Timeline>
  </div>

  <h2 id="custom">自定义时间轴点</h2>
  <p>接受一个 slot 来自定义轴点的内容，比如一个图标。</p>
  <div class="example">
    <Timeline>
      <TimelineItem color="green">
        <template #dot>
          <Icon type="ios-trophy"></Icon>
        </template>
        <span>发布里程碑版本</span>
      </TimelineItem>
      <TimelineItem>发布1.0版本</TimelineItem>
      <TimelineItem>发布2.0版本</TimelineItem>
      <TimelineItem>发布3.0版本</TimelineItem>
    </Timeline>
  </div>

  <div class="api">
    <div class="anchor">
      <h2 id="API">API</h2>
      <a href="#API">#</a>
    </div>
    <div class="anchor">
      <h3 id="Timeline_props">Timeline props</h3>
      <a href="#Timeline_props">#</a>
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
          <td>pending</td>
          <td>指定是否最后一个节点为幽灵节点</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <div class="anchor">
      <h3 id="TimelineItem_props">TimelineItem props</h3>
      <a href="#TimelineItem_props">#</a>
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
          <td>color</td>
          <td>
            圆圈颜色，可选值为<code>blue</code>、<code
             
              >red</code
            >、<code>green</code>，或自定义色值
          </td>
          <td>String</td>
          <td>blue</td>
        </tr>
      </tbody>
    </table>
    <div class="anchor">
      <h3 id="TimelineItem_slot">TimelineItem slot</h3>
      <a href="#TimelineItem_slot">#</a>
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
          <td>dot</td>
          <td>自定义时间轴点内容</td>
        </tr>
        <tr>
          <td>无</td>
          <td>基本内容</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Timeline from "../components/timeline";
import Anchor from "./../components/anchor";
import Icon from "./../components/icon";

const AnchorLink = Anchor.Link;
const TimelineItem = Timeline.Item;

export default {
  components: { TimelineItem, Anchor, AnchorLink, Timeline, Icon }
};
</script>

<style>
</style>