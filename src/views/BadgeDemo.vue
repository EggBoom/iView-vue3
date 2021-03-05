<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#basic" title="基础用法" />
      <AnchorLink href="#dot" title="小红点" />
      <AnchorLink href="#count" title="封顶数字" />
      <AnchorLink href="#alone" title="独立使用及自定义样式" />
      <AnchorLink href="#text" title="自定义内容" />
      <AnchorLink href="#status" title="状态点" />
      <AnchorLink href="#color" title="多彩徽标" />
      <AnchorLink href="#type" title="预设颜色" />
      <AnchorLink href="#API" title="API" />
    </Anchor>
  </div>
  <h1>Badge 徽标</h1>
  <p>主要用于通知未读数的角标，提醒用户点击。</p>

  <h2 id="basic">基础用法</h2>
  <p>最简单的使用方法。</p>
  <div class="example">
    <Badge :count="3">
      <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge>
      <a href="#" class="demo-badge" style="margin-left: 32px"></a>
      <template #count>
        <Icon type="md-time" color="#ed4014" size="16" />
      </template>
    </Badge>
  </div>

  <h2 id="dot">小红点</h2>
  <p>强迫症患者慎用！</p>
  <div class="example">
    <Badge dot>
      <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge dot style="margin-left: 32px">
      <Icon type="ios-notifications-outline" size="26"></Icon>
    </Badge>
    <Badge dot style="margin-left: 32px">
      <a href="#">可以是一个链接</a>
    </Badge>
  </div>

  <h2 id="count">封顶数字</h2>
  <p>
    通过设置<code>overflow-count</code
    >属性设置一个封顶值，当超过时，会显示<code
      >${overflowCount}+</code
    >
  </p>
  <div class="example">
    <Badge :count="100">
      <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="1000" overflow-count="999">
      <a href="#" class="demo-badge" style="margin-left: 32px"></a>
    </Badge>
  </div>

  <h2 id="alone">独立使用及自定义样式</h2>
  <p>可以没有 slot 独立展示。</p>
  <div class="example">
    <Badge :count="10"></Badge>
    <Badge
      :count="20"
      class-name="demo-badge-alone"
      style="margin-left: 32px"
    ></Badge>
  </div>

  <h2 id="text">自定义内容</h2>
  <p>
    设置 <code>text</code> 属性，可以自定义显示内容。
  </p>
  <div class="example">
    <Badge text="new">
      <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge text="hot">
      <a href="#" class="demo-badge" style="margin-left: 32px"></a>
    </Badge>
  </div>

  <h2 id="status">状态点</h2>
  <p>用于表示状态的小圆点。</p>
  <div class="example">
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="processing" text="Processing" />
    <br />
    <Badge status="warning" text="Warning" />
  </div>

  <h2 id="color">多彩徽标</h2>
  <p>
    <span class="ivu-badge">
      <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span
    >
    属性
    <code>color</code>
    可以设置更多预设的状态点颜色，或者自定义颜色。
  </p>
  <div class="example">
    <strong>预设:</strong>
    <br />
    <Badge color="blue" text="blue" /><br />
    <Badge color="green" text="green" /><br />
    <Badge color="red" text="red" /><br />
    <Badge color="yellow" text="yellow" /><br />
    <Badge color="pink" text="pink" /><br />
    <Badge color="magenta" text="magenta" /><br />
    <Badge color="volcano" text="volcano" /><br />
    <Badge color="orange" text="orange" /><br />
    <Badge color="gold" text="gold" /><br />
    <Badge color="lime" text="lime" /><br />
    <Badge color="cyan" text="cyan" /><br />
    <Badge color="geekblue" text="geekblue" /><br />
    <Badge color="purple" text="purple" /><br />
    <br />
    <strong>自定义:</strong>
    <br />
    <Badge color="#2db7f5" text="#2db7f5" /><br />
    <Badge color="#f50" text="#f50" />
  </div>

  <h2 id="type">预设颜色</h2>
  <p>
    使用 <code>type</code> 属性，可以设置不同的颜色。
  </p>
  <div class="example">
    <Badge :count="5" type="primary">
      <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="5" type="success">
      <a href="#" class="demo-badge" style="margin-left: 32px"></a>
    </Badge>
    <Badge :count="5" type="normal">
      <a href="#" class="demo-badge" style="margin-left: 32px"></a>
    </Badge>
    <Badge :count="5" type="info">
      <a href="#" class="demo-badge" style="margin-left: 32px"></a>
    </Badge>
    <Badge :count="5" type="error">
      <a href="#" class="demo-badge" style="margin-left: 32px"></a>
    </Badge>
    <Badge :count="5" type="warning">
      <a href="#" class="demo-badge" style="margin-left: 32px"></a>
    </Badge>
  </div>

  <div class="api">
    <div class="anchor">
      <h2 id="API">API</h2>
      <a href="#API">#</a>
    </div>
    <div class="anchor">
      <h3 id="Badge_props">Badge props</h3>
      <a href="#Badge_props">#</a>
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
          <td>count</td>
          <td>
            显示的数字，大于<code>overflowCount</code
            >时，显示<code>${overflowCount}+</code>，为 0
            时隐藏
          </td>
          <td>Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>overflow-count</td>
          <td>展示封顶的数字值</td>
          <td>Number | String</td>
          <td>99</td>
        </tr>
        <tr>
          <td>dot</td>
          <td>
            不展示数字，只有一个小红点，如需隐藏 dot ，需要设置<code
             
              >count</code
            >为 0
          </td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>class-name</td>
          <td>自定义的class名称，dot 模式下无效</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>type</td>
          <td>
            使用预设的颜色，可选值为
            success、primary、normal、error、warning、info
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>show-zero</td>
          <td>当数值为 0 时，是否展示 Badge</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>status</td>
          <td>
            设置 Badge 为状态点，可选值为
            success、processing、default、error、warning
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>text</td>
          <td>
            自定义内容，如果设置了 status，则为状态点的文本
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>设置状态点的位置偏移，格式为 [x, y]</td>
          <td>Array</td>
          <td>-</td>
        </tr>
        <tr>
          <td>
            color

          </td>
          <td>设置更多状态点的颜色或自定义颜色</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <div class="anchor">
      <h3 id="Badge_slot">Badge slot</h3>
      <a href="#Badge_slot">#</a>
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
          <td>
            count

          </td>
          <td>
            自定义角标显示内容（去角标背景），数值 count 将无效。
          </td>
        </tr>
        <tr>
          <td>
            text

          </td>
          <td>
            自定义角标显示内容（带角标背景），数值 count
            将无效。亦可自定义状态点模式下的 text 内容。
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Badge from "../components/badge";
import Anchor from "./../components/anchor";
import Icon from "../components/icon";

const AnchorLink = Anchor.Link;
export default {
  components: { Anchor, AnchorLink, Badge, Icon },
};
</script>

<style>
.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}

.demo-badge-alone {
  background: #5cb85c !important;
}
</style>