<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#basic" title="基础用法" />
      <AnchorLink href="#gutter" title="区块间隔" />
      <AnchorLink href="#order" title="栅格顺序(Flex)" />
      <AnchorLink href="#pull" title="栅格排序" />
      <AnchorLink href="#offset" title="左右偏移" />
      <AnchorLink href="#flex" title="Flex布局" />
      <AnchorLink href="#align" title="Flex对齐" />
      <AnchorLink href="#responsive" title="响应式布局" />
      <AnchorLink href="#api" title="API" />
    </Anchor>
  </div>

  <h1>Grid 栅格</h1>
  <p>
    采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。
  </p>
  <p>非 template/render 模式下，需使用 i-col。</p>

  <h2 id="basic">基础用法</h2>
  <p>水平排列的布局。</p>
  <p><code>col</code>必须放在<code>row</code>里面。</p>
  <div class="example">
    <Row>
      <ICol span="12">col-12</ICol>
      <ICol span="12">col-12</ICol>
    </Row>
    <br />
    <Row>
      <ICol span="8">col-8</ICol>
      <ICol span="8">col-8</ICol>
      <ICol span="8">col-8</ICol>
    </Row>
    <br />
    <Row>
      <ICol span="6">col-6</ICol>
      <ICol span="6">col-6</ICol>
      <ICol span="6">col-6</ICol>
      <ICol span="6">col-6</ICol>
    </Row>
  </div>

  <h2 id="gutter">区块间隔</h2>
  <p>
    通过给 <code>row</code> 添加 <code>gutter</code> 属性，可以给下属的
    <code>col</code> 添加间距，推荐使用 <code>(16+8n)px</code> 作为栅格间隔。
  </p>
  <div class="example">
    <div class="gutter">
      <Row :gutter="16">
        <ICol span="6">
          <div>col-6</div>
        </ICol>
        <ICol span="6">
          <div>col-6</div>
        </ICol>
        <ICol span="6">
          <div>col-6</div>
        </ICol>
        <ICol span="6">
          <div>col-6</div>
        </ICol>
      </Row>
    </div>
  </div>

  <h2 id="order">栅格顺序(Flex)</h2>
  <p>通过 Flex 布局的order来改变栅格的顺序。</p>
  <div class="example">
    <Row type="flex">
      <ICol span="6" order="4">1 | order-4</ICol>
      <ICol span="6" order="3">2 | order-3</ICol>
      <ICol span="6" order="2">3 | order-2</ICol>
      <ICol span="6" order="1">4 | order-1</ICol>
    </Row>
  </div>

  <h2 id="pull">栅格排序</h2>
  <p>通过设置push和pull来改变栅格的顺序。</p>
  <div class="example">
    <Row>
      <ICol span="18" push="6">col-18 | push-6</ICol>
      <ICol span="6" pull="18">col-6 | pull-18</ICol>
    </Row>
  </div>

  <h2 id="offset">左右偏移</h2>
  <p>通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。</p>
  <div class="example">
    <Row>
      <ICol span="8">col-8</ICol>
      <ICol span="8" offset="8">col-8 | offset-8</ICol>
    </Row>
    <br />
    <Row>
      <ICol span="6" offset="8">col-6 | offset-8</ICol>
      <ICol span="6" offset="4">col-6 | offset-4</ICol>
    </Row>
    <br />
    <Row>
      <ICol span="12" offset="8">col-12 | offset-8</ICol>
    </Row>
  </div>

  <h2 id="flex">Flex布局</h2>
  <p>
    通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。
  </p>
  <div class="example">
    <p>子元素向左排列</p>
    <Row type="flex" justify="start">
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
    </Row>
    <p>子元素向右排列</p>
    <Row type="flex" justify="end">
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
    </Row>
    <p>子元素居中排列</p>
    <Row type="flex" justify="center">
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
    </Row>
    <p>子元素等宽排列</p>
    <Row type="flex" justify="space-between">
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
    </Row>
    <p>子元素分散排列</p>
    <Row type="flex" justify="space-around">
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
      <ICol span="4">col-4</ICol>
    </Row>
  </div>

  <h2 id="align">Flex对齐</h2>
  <p>
    通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。
  </p>
  <div class="example">
    <div class="gutter">
      <p>顶部对齐</p>
      <Row type="flex" justify="center" align="top">
        <ICol span="4"><p style="height: 80px">col-4</p></ICol>
        <ICol span="4"><p style="height: 30px">col-4</p></ICol>
        <ICol span="4"><p style="height: 100px">col-4</p></ICol>
        <ICol span="4"><p style="height: 60px">col-4</p></ICol>
      </Row>
      <p>底部对齐</p>
      <Row type="flex" justify="center" align="bottom">
        <ICol span="4"><p style="height: 80px">col-4</p></ICol>
        <ICol span="4"><p style="height: 30px">col-4</p></ICol>
        <ICol span="4"><p style="height: 100px">col-4</p></ICol>
        <ICol span="4"><p style="height: 60px">col-4</p></ICol>
      </Row>
      <p>居中对齐</p>
      <Row type="flex" justify="center" align="middle">
        <ICol span="4"><p style="height: 80px">col-4</p></ICol>
        <ICol span="4"><p style="height: 30px">col-4</p></ICol>
        <ICol span="4"><p style="height: 100px">col-4</p></ICol>
        <ICol span="4"><p style="height: 60px">col-4</p></ICol>
      </Row>
    </div>
  </div>

  <h2 id="responsive">响应式布局</h2>
  <p>
    参照 Bootstrap 的 响应式设计，预设六个响应尺寸：xs sm md lg xl xxl，详见
    API。
  </p>
  <p>调整浏览器尺寸来查看效果。</p>
  <div class="example">
    <Row>
      <ICol :xs="2" :sm="4" :md="6" :lg="8">Col</ICol>
      <ICol :xs="20" :sm="16" :md="12" :lg="8">Col</ICol>
      <ICol :xs="2" :sm="4" :md="6" :lg="8">Col</ICol>
    </Row>
  </div>

  <h2>API</h2>
  <div class="api">
    <h3>Row props</h3>
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
          <td>gutter</td>
          <td>栅格间距，单位 px，左右平分</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>type</td>
          <td>
            布局模式，可选值为<code>flex</code>或不选，在现代浏览器下有效。<code
              >4.5.0</code
            >
            版本起强制使用 flex 布局
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>align</td>
          <td>
            flex
            布局下的垂直对齐方式，可选值为<code>top</code>、<code>middle</code>、<code
              >bottom</code
            >
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>justify</td>
          <td>
            flex
            布局下的水平排列方式，可选值为<code>start</code>、<code>end</code>、<code>center</code>、<code>space-around</code>、<code
              >space-between</code
            >
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>class-name</td>
          <td>自定义的class名称</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>wrap</td>
          <td>是否自动换行</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>

    <h3>Col props</h3>
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
          <td>span</td>
          <td>
            栅格的占位格数，可选值为0~24的整数，为 0 时，相当于<code
              >display:none</code
            >
          </td>
          <td>Number | String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>flex</td>
          <td>flex 布局属性</td>
          <td>Number | String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>order</td>
          <td>栅格的顺序，在<code>flex</code>布局模式下有效</td>
          <td>Number | String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
          <td>Number | String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>push</td>
          <td>栅格向右移动格数</td>
          <td>Number | String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>pull</td>
          <td>栅格向左移动格数</td>
          <td>Number | String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>class-name</td>
          <td>自定义的class名称</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>xs</td>
          <td>
            <code>&lt;576px</code>
            响应式栅格，可为栅格数或一个包含其他属性的对象
          </td>
          <td>Number | Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>sm</td>
          <td>
            <code>≥576px</code>
            响应式栅格，可为栅格数或一个包含其他属性的对象
          </td>
          <td>Number | Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>md</td>
          <td>
            <code>≥768px</code>
            响应式栅格，可为栅格数或一个包含其他属性的对象
          </td>
          <td>Number | Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>lg</td>
          <td>
            <code>≥992px</code>
            响应式栅格，可为栅格数或一个包含其他属性的对象
          </td>
          <td>Number | Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>xl</td>
          <td>
            <code>≥1200px</code>
            响应式栅格，可为栅格数或一个包含其他属性的对象
          </td>
          <td>Number | Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>xxl</td>
          <td>
            <code>≥1600px</code>
            响应式栅格，可为栅格数或一个包含其他属性的对象
          </td>
          <td>Number | Object</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Row, Col as ICol } from "../components/grid";
import Anchor from "./../components/anchor";

const AnchorLink = Anchor.Link;

export default {
  components: { Row, ICol, Anchor, AnchorLink },
};
</script>
<style scoped>
.ivu-col {
  color: #fff;
  padding: 10px 0;
  text-align: center;
}

.gutter .ivu-col {
  background-color: transparent !important;
}

.gutter .ivu-col div:nth-of-type(odd) {
  background-color: rgba(0, 153, 229, 0.7);
}

.gutter .ivu-col p:nth-of-type(odd) {
  background-color: rgba(0, 153, 229, 0.7);
}

.ivu-col:nth-of-type(odd) {
  background-color: rgba(0, 153, 229, 0.7);
}

.ivu-col:nth-of-type(even) {
  background-color: rgba(0, 153, 229, 0.9);
}

.gutter .ivu-col:nth-of-type(odd) p {
  background-color: rgba(0, 153, 229, 0.7);
}
.gutter .ivu-col:nth-of-type(even) p {
  background-color: rgba(0, 153, 229, 0.9);
}

.gutter .ivu-col:nth-of-type(odd) div {
  background-color: rgba(0, 153, 229, 0.7);
}
.gutter .ivu-col:nth-of-type(even) div {
  background-color: rgba(0, 153, 229, 0.9);
}
</style>