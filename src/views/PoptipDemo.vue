<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#basic" title="基础用法" />
      <AnchorLink href="#placement" title="位置" />
      <AnchorLink href="#close" title="从浮层内关闭" />
      <AnchorLink href="#nest" title="嵌套复杂内容" />
      <AnchorLink href="#wrap" title="自动换行" />
      <AnchorLink href="#API" title="API" />
    </Anchor>
  </div>

  <h1>Poptip 气泡提示</h1>
  <p>
    Poptip 与 Tooltip 类似，具有很多相同配置，不同点是 Poptip
    以卡片的形式承载了更多的内容，比如链接、表格、按钮等。
  </p>
  <p>
    Poptip 还 confirm 确认框，与 Modal 不同的是，它会出现在就近元素，相对轻量。
  </p>

  <h2 id="basic">基础用法</h2>
  <p>支持三种触发方式：鼠标悬停、点击、聚焦。默认是点击。</p>
  <p>
    注意 Poptip 内的文本使用了
    <code>white-space: nowrap;</code
    >，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式
    <code>white-space: normal;</code>。
  </p>
  <div class="example">
    <Poptip trigger="hover" title="Title" content="content">
      <Button>Hover</Button>
    </Poptip>
    <Poptip title="Title" content="content">
      <Button>Click</Button>
    </Poptip>
    <Poptip trigger="focus" title="Title" content="content">
      <Button>Focus</Button>
    </Poptip>
    <Poptip trigger="focus" title="Title" content="content">
      <!-- <Input placeholder="Input focus" /> -->
    </Poptip>
  </div>

  <h2 id="placement">位置</h2>
  <p>组件提供了12个不同的方向显示Poptip，具体配置可查看API。</p>
  <div class="example">
    <div class="top">
      <Poptip content="Top Left 文字提示" placement="top-start">
        <Button>左上</Button>
      </Poptip>
      <Poptip content="Top Center 文字提示" placement="top">
        <Button>上边</Button>
      </Poptip>
      <Poptip content="Top Right 文字提示" placement="top-end">
        <Button>上右</Button>
      </Poptip>
    </div>
    <div class="center">
      <div class="center-left">
        <Poptip content="Left Top 文字提示" placement="left-start">
          <Button>左上</Button> 
        </Poptip>
        <br /><br />
        <Poptip content="Left Center 文字提示" placement="left">
          <Button>左边</Button> </Poptip
        ><br /><br />
        <Poptip content="Left Bottom 文字提示" placement="left-end">
          <Button>左下</Button>
        </Poptip>
      </div>
      <div class="center-right">
        <Poptip content="Right Top 文字提示" placement="right-start">
          <Button>右上</Button> </Poptip
        ><br /><br />
        <Poptip content="Right Center 文字提示" placement="right">
          <Button>右边</Button> </Poptip
        ><br /><br />
        <Poptip content="Right Bottom 文字提示" placement="right-end">
          <Button>右下</Button>
        </Poptip>
      </div>
    </div>
    <div class="bottom">
      <Poptip content="Bottom Left 文字提示" placement="bottom-start">
        <Button>下左</Button>
      </Poptip>
      <Poptip content="Bottom Center 文字提示" placement="bottom">
        <Button>下边</Button>
      </Poptip>
      <Poptip content="Bottom Right 文字提示" placement="bottom-end">
        <Button>下右</Button>
      </Poptip>
    </div>
  </div>

  <h2 id="close">从浮层内关闭</h2>
  <p>通过<code>v-model</code>来控制提示框的显示和隐藏。</p>
  <div class="example">
    <Poptip v-model="visible">
      <a>Click</a>
      <template #title>
        <div><i>Custom title</i></div>
      </template>
      <template #content>
        <div><a @click="visible = false">close</a></div>
      </template>
    </Poptip>
  </div>

  <h2 id="nest">嵌套复杂内容</h2>
  <p>通过自定义 slot 来实现复杂的内容。</p>
  <div class="example">
    <Poptip placement="right" width="400">
      <Button>Click</Button>
      <template #content>
        <div class="api">
          <table>
            <thead>
              <tr>
                <th>Version</th>
                <th>Update Time</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.9.5</td>
                <td>2016-10-26</td>
                <td>
                  Add new components <code>Tooltip</code> and
                  <code>Poptip</code>
                </td>
              </tr>
              <tr>
                <td>0.9.4</td>
                <td>2016-10-25</td>
                <td>Add new components <code>Modal</code></td>
              </tr>
              <tr>
                <td>0.9.2</td>
                <td>2016-09-28</td>
                <td>Add new components <code>Select</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </Poptip>
  </div>

  <h2 id="wrap">自动换行</h2>
  <p>
    设置属性
    <code>word-wrap</code
    >，当超出宽度后，文本将自动换行，并两端对齐。
  </p>
  <div class="example">
    <Poptip
      word-wrap
      width="200"
      content="史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。"
    >
      <Button>长文本</Button>
    </Poptip>
  </div>

  <div class="api">
    <div class="anchor">
      <h2 id="API">API</h2>
      <a href="#API">#</a>
    </div>
    <div class="anchor">
      <h3 id="Poptip_props">Poptip props</h3>
      <a href="#Poptip_props">#</a>
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
          <td>trigger</td>
          <td>
            触发方式，可选值为<code>hover</code>（悬停）<code>click</code>（点击）<code>focus</code>（聚焦）,在
            confirm 模式下，只有 click 有效
          </td>
          <td>String</td>
          <td>click</td>
        </tr>
        <tr>
          <td>title</td>
          <td>显示的标题</td>
          <td>String | Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>content</td>
          <td>显示的正文内容，只在非 confirm 模式下有效</td>
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
          <td>top</td>
        </tr>
        <tr>
          <td>width</td>
          <td>
            宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px
          </td>
          <td>String | Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>confirm</td>
          <td>是否开启对话框模式</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>ok-text</td>
          <td>确定按钮的文字，只在 confirm 模式下有效</td>
          <td>String</td>
          <td>确定</td>
        </tr>
        <tr>
          <td>cancel-text</td>
          <td>取消按钮的文字，只在 confirm 模式下有效</td>
          <td>String</td>
          <td>取消</td>
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
          <td>popper-class</td>
          <td>给 Poptip 设置 class-name，在使用 transfer 时会很有用</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>word-wrap</td>
          <td>开启后，超出指定宽度文本将自动换行，并两端对齐</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>padding</td>
          <td>自定义间距值</td>
          <td>String</td>
          <td>8px 16px</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>出现位置的偏移量</td>
          <td>Number</td>
          <td>0</td>
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
}
</pre
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
      <h3 id="Poptip_events">Poptip events</h3>
      <a href="#Poptip_events">#</a>
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
        <tr>
          <td>on-ok</td>
          <td>点击确定的回调，只在 confirm 模式下有效</td>
          <td>无</td>
        </tr>
        <tr>
          <td>on-cancel</td>
          <td>点击取消的回调，只在 confirm 模式下有效</td>
          <td>无</td>
        </tr>
      </tbody>
    </table>
    <div class="anchor">
      <h3 id="Poptip_slot">Poptip slot</h3>
      <a href="#Poptip_slot">#</a>
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
          <td>title</td>
          <td>
            提示框标题，定义此 slot 时，会覆盖 props
            <code>title</code>
          </td>
        </tr>
        <tr>
          <td>content</td>
          <td>
            提示框内容，定义此 slot 时，会覆盖 props
            <code>content</code>，只在非 confirm 模式下有效
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import Poptip from "../components/poptip";
import Anchor from "./../components/anchor";
import Button from "./../components/button";
//import Input from "./../components/input";

const AnchorLink = Anchor.Link;

export default {
  components: { Poptip, Anchor, AnchorLink, Button },
  setup() {
    const disabled = ref(false);
    const visible = ref(false);

    return { disabled, visible };
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