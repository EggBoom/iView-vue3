<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#basic" title="基础用法" />
      <AnchorLink href="#placement" title="位置" />
      <AnchorLink href="#custom" title="自定义内容" />
      <AnchorLink href="#disabled" title="禁用" />
      <AnchorLink href="#delay" title="延时" />
      <AnchorLink href="#theme" title="主题" />
      <AnchorLink href="#maxWidth" title="自动换行" />
      <AnchorLink href="#API" title="API" />
    </Anchor>
  </div>

  <h1>Tooltip 图钉</h1>
  <p>
    使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。
  </p>

  <h2 id="basic">基础用法</h2>
  <p>最简单的用法。</p>
  <p>
    注意 Tooltip 内的文本使用了
    <code>white-space: nowrap;</code
    >，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式
    <code>white-space: normal;</code>。
  </p>
  <div class="example">
    <Tooltip content="这里是提示文字">
      当鼠标经过这段文字时，会显示一个气泡框.
    </Tooltip>
  </div>

  <h2 id="placement">位置</h2>
  <p>组件提供了12个不同的方向显示Tooltip，具体配置可查看API。</p>
  <div class="example">
    <div class="top">
      <Tooltip content="Top Left 文字提示" placement="top-start">
        <Button>左上</Button>
      </Tooltip>
      <Tooltip content="Top Center 文字提示" placement="top">
        <Button>上边</Button>
      </Tooltip>
      <Tooltip content="Top Right 文字提示" placement="top-end">
        <Button>上右</Button>
      </Tooltip>
    </div>
    <div class="center">
      <div class="center-left">
        <Tooltip content="Left Top 文字提示" placement="left-start">
          <Button>左上</Button> </Tooltip
        ><br /><br />
        <Tooltip content="Left Center 文字提示" placement="left">
          <Button>左边</Button> </Tooltip
        ><br /><br />
        <Tooltip content="Left Bottom 文字提示" placement="left-end">
          <Button>左下</Button>
        </Tooltip>
      </div>
      <div class="center-right">
        <Tooltip content="Right Top 文字提示" placement="right-start">
          <Button>右上</Button> </Tooltip
        ><br /><br />
        <Tooltip content="Right Center 文字提示" placement="right">
          <Button>右边</Button> </Tooltip
        ><br /><br />
        <Tooltip content="Right Bottom 文字提示" placement="right-end">
          <Button>右下</Button>
        </Tooltip>
      </div>
    </div>
    <div class="bottom">
      <Tooltip content="Bottom Left 文字提示" placement="bottom-start">
        <Button>下左</Button>
      </Tooltip>
      <Tooltip content="Bottom Center 文字提示" placement="bottom">
        <Button>下边</Button>
      </Tooltip>
      <Tooltip content="Bottom Right 文字提示" placement="bottom-end">
        <Button>下右</Button>
      </Tooltip>
    </div>
  </div>

  <h2 id="custom">自定义内容</h2>
  <p>通过自定义 slot 显示多行文本或更复杂的样式。</p>
  <div class="example">
    <Tooltip placement="top">
      <Button>多行</Button>
      <template #content>
        <div>
          <p>显示多行信息</p>
          <p><i>可以自定义样式</i></p>
        </div>
      </template>
    </Tooltip>
  </div>

  <h2 id="disabled">禁用</h2>
  <p>通过设置属性<code>disabled</code>可以禁用文字提示。</p>
  <div class="example">
    <Tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">
      <Button @click="disabled = true">点击关闭提示</Button>
    </Tooltip>
  </div>

  <h2 id="delay">延时</h2>
  <p>通过设置属性<code>delay</code>可以延时显示文字提示，单位毫秒。</p>
  <div class="example">
    <Tooltip placement="top" content="Tooltip 文字提示" :delay="1000">
      <Button>延时一秒显示</Button>
    </Tooltip>
  </div>

  <h2 id="theme">主题</h2>
  <p>设置属性 <code>theme</code> 可以显示不同的颜色。</p>
  <div class="example">
    <Tooltip content="Tooltip 文字提示">
      <Button>Dark(default)</Button>
    </Tooltip>
    <Tooltip content="Tooltip 文字提示" theme="light">
      <Button>Light</Button>
    </Tooltip>
  </div>

  <h2 id="maxWidth">自动换行</h2>
  <p>
    设置属性
    <code>max-width</code>，当超出最大值后，文本将自动换行，并两端对齐。
  </p>
  <div class="example">
    <Tooltip
      max-width="200"
      content="史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。"
    >
      <Button>长文本</Button>
    </Tooltip>
  </div>

  <div class="api">
    <div class="anchor">
      <!---->
      <h2 id="API">API</h2>
      <!---->
      <!---->
      <!---->
      <!---->
      <a href="#API">#</a>
    </div>
    <div class="anchor">
      <!---->
      <!---->
      <h3 id="Tooltip_props">Tooltip props</h3>
      <!---->
      <!---->
      <!---->
      <a href="#Tooltip_props">#</a>
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
          <td>content</td>
          <td>显示的内容</td>
          <td>String | Number</td>
          <td>空</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>
            提示框出现的位置，可选值为<code>top</code><code>top-start</code
            ><code>top-end</code><code>bottom</code><code>bottom-start</code
            ><code>bottom-end</code><code>left</code><code>left-start</code
            ><code>left-end</code><code>right</code><code>right-start</code
            ><code>right-end</code>，2.12.0 版本开始支持自动识别
          </td>
          <td>String</td>
          <td>bottom</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用提示框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>delay</td>
          <td>延迟显示，单位毫秒</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>always</td>
          <td>是否总是可见</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>theme</td>
          <td>主题，可选值为 dark 或 light</td>
          <td>String</td>
          <td>dark</td>
        </tr>
        <tr>
          <td>max-width</td>
          <td>最大宽度，超出最大值后，文本将自动换行，并两端对齐</td>
          <td>String | Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>出现位置的偏移量</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>transfer</td>
          <td>
            是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table
            列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
          </td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>options</td>
          <td>
            自定义 popper.js 的配置项，具体配置见
            <a
              href="https://popper.js.org/popper-documentation.html"
              target="_blank"
              >popper.js 文档</a
            >
          </td>
          <td>Object</td>
          <td>
            <div>
              <pre>
{
    <span>modifiers</span>: {
        <span>computeStyle</span>:{
            <span>gpuAcceleration</span>: <span>false</span>,
        },
        <span>preventOverflow</span> :{
            <span>boundariesElement</span>: <span>'window'</span>
        }
    }
}</pre
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>transfer-class-name</td>
          <td>开启 transfer 时，给浮层添加额外的 class 名称</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <div class="anchor">
      <h3 id="Tooltip_events">Tooltip events</h3>
      <a href="#Tooltip_events">#</a>
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
          <td>on-popper-show</td>
          <td>在提示框显示时触发</td>
          <td>无</td>
        </tr>
        <tr>
          <td>on-popper-hide</td>
          <td>在提示框消失时触发</td>
          <td>无</td>
        </tr>
      </tbody>
    </table>
    <div class="anchor">
      <h3 id="Tooltip_slot">Tooltip slot</h3>
      <a href="#Tooltip_slot">#</a>
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
          <td>无</td>
          <td>主体内容</td>
        </tr>
        <tr>
          <td>content</td>
          <td>
            提示框的内容，定义此 slot 时，会覆盖 props
            <code>content</code>。
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import Tooltip from "../components/tooltip";
import Anchor from "./../components/anchor";
import Button from "./../components/button";

const AnchorLink = Anchor.Link;

export default {
  components: { Tooltip, Anchor, AnchorLink, Button },
  setup() {
    const disabled = ref(false);

    return { disabled };
  },
};
</script>

<style>
.top,
.bottom {
  text-align: center;
}
.center {
  width: 300px;
  margin: 10px auto;
  overflow: hidden;
}
.center-left {
  float: left;
}
.center-right {
  float: right;
}
</style>