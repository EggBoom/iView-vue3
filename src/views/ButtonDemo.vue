<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
        <AnchorLink href="#type" title="按钮类型" />
        <AnchorLink href="#ghost" title="幽灵按钮" />
        <AnchorLink href="#icon" title="图标按钮及按钮形状" />
        <AnchorLink href="#size" title="按钮尺寸" />
        <AnchorLink href="#long" title="长按钮" />
        <AnchorLink href="#disable" title="不可用状态" />
        <AnchorLink href="#loading" title="加载中状态" />
        <AnchorLink href="#group" title="按钮组合" />
        <AnchorLink href="#vertical" title="按钮组纵向排列" />
        <AnchorLink href="#jump" title="转跳" />
        <AnchorLink href="#API" title="API" />
    </Anchor>
  </div>
  <h1>Button 按钮</h1>
  <p>常用的操作按钮。</p>

  <h2 id="type">按钮类型</h2>
  <p>按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
  <p>通过设置<code>type</code>为<code>primary</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>创建不同样式的按钮，不设置为默认样式。</p>
  <div class="example">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br /><br />
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </div>

  <h2 id="ghost">幽灵按钮</h2>
  <p>幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。</p>
  <div class="example" style="background-color: #2c3e50">
    <Button type="default" ghost>Default</Button>
    <Button type="primary" ghost>Primary</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="text" ghost>Text</Button>
    <br /><br />
    <Button type="info" ghost>Info</Button>
    <Button type="success" ghost>Success</Button>
    <Button type="warning" ghost>Warning</Button>
    <Button type="error" ghost>Error</Button>
  </div>

  <h2 id="icon">图标按钮及按钮形状</h2>
  <p>
    通过设置<code>icon</code>属性在<code>Button</code>内嵌入一个<code>Icon</code>，或者直接在<code>Button</code>内使用<code>Icon</code>组件。
  </p>
  <p>
    使用<code>Button</code>的<code>icon</code>属性，图标位置将在最左边，如果需要自定义位置，需使用<code>Icon</code>组件。
  </p>
  <p>
    通过设置<code>shape</code>属性为<code>circle</code>，可将按钮置为圆的形状。
  </p>
  <div class="example">
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle">Circle</Button>
    <br /><br />
    <Button shape="circle" icon="ios-search"></Button>
    <Button icon="ios-search">Search</Button>
    <Button shape="circle" icon="ios-search">Search</Button>
    <Button shape="circle">Circle</Button>
  </div>

  <h2 id="size">按钮尺寸</h2>
  <p>按钮有三种尺寸：大、默认（中）、小</p>
  <p>
    通过设置<code>size</code>为<code>large</code>和<code>small</code>将按钮设置为大和小尺寸，不设置为默认（中）尺寸。
  </p>
  <div class="example">
    <div>
      <RadioGroup v-model="buttonSize" type="button">
        <Radio radioValue="large">Large</Radio>
        <Radio radioValue="default">Default</Radio>
        <Radio radioValue="small">small</Radio>
      </RadioGroup>
      <br /><br />
      <Button :size="buttonSize" type="primary">Primary</Button>
      <Button :size="buttonSize" type="default">Default</Button>
      <Button :size="buttonSize" type="dashed">Dashed</Button>
      <Button :size="buttonSize" type="text">Text</Button>
      <br /><br />
      <Button
        :size="buttonSize"
        icon="ios-download-outline"
        type="primary"
        shape="circle"
      ></Button>
      <Button :size="buttonSize" icon="ios-download-outline" type="primary"
        >Download</Button
      >
      <br /><br />
      <ButtonGroup :size="buttonSize">
        <Button :size="buttonSize" type="primary">
          <Icon type="ios-arrow-back" />
          Backward
        </Button>
        <Button :size="buttonSize" type="primary">
          Forward
          <Icon type="ios-arrow-forward" />
        </Button>
      </ButtonGroup>
    </div>
  </div>

  <h2 id="long">长按钮</h2>
  <p>
    通过设置属性 <code>long</code> 可将按钮宽度设置为
    100%，常用于弹窗内操作按钮。
  </p>
  <p>
    使用者也可以直接通过给组件添加
    <code>style</code> 来设置更细节的样式，比如定宽。
  </p>
  <div class="example">
    <Button type="success" long>SUBMIT</Button>
    <br /><br />
    <Button type="error" long>DELETE</Button>
  </div>

  <h2 id="disable">不可用状态</h2>
  <p>通过添加<code>disabled</code>属性可将按钮设置为不可用状态。</p>
  <div class="example">
    <Button>Default</Button>
    <Button disabled>Default(Disabled)</Button>
    <br /><br />
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(Disabled)</Button>
    <br /><br />
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(Disabled)</Button>
    <br /><br />
    <Button type="text">Text</Button>
    <Button type="text" disabled>Text(Disabled)</Button>
  </div>

  <h2 id="loading">加载中状态</h2>
  <p>
    通过添加<code>loading</code>属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。
  </p>
  <div class="example">
    <Button type="primary" loading>Loading...</Button>
    <br /><br />
    <Button type="primary" :loading="loading" @click="toLoading">
      <span v-if="!loading">Click me!</span>
      <span v-else>Loading...</span>
    </Button>
    <Button
      type="primary"
      :loading="loading2"
      icon="ios-power"
      @click="toLoading2"
    >
      <span v-if="!loading2">Click me!</span>
      <span v-else>Loading...</span>
    </Button>
    <br /><br />
    <Button loading shape="circle"></Button>
    <Button loading shape="circle" type="primary"></Button>
  </div>

  <h2 id="group">按钮组合</h2>
  <p>
    将多个<code>Button</code>放入<code>ButtonGroup</code>内，可实现按钮组合的效果。
  </p>
  <p>
    通过设置<code>ButtonGroup</code>的属性<code>size</code>为<code>large</code>和<code>small</code>，可将按钮组尺寸设置为大和小，不设置<code>size</code>，则为默认（中）尺寸。
  </p>
  <p>
    通过设置<code>ButtonGroup</code>的属性<code>shape</code>为<code>circle</code>，可将按钮组形状设置为圆角。
  </p>
  <div class="example">
    <h4>Basic</h4>
    <br /><br />
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button type="primary">Confirm</Button>
    </ButtonGroup>
    <br /><br />
    <ButtonGroup>
      <Button disabled>Yesterday</Button>
      <Button disabled>Today</Button>
      <Button disabled>Tomorrow</Button>
    </ButtonGroup>
    <br /><br />
    <ButtonGroup>
      <Button type="primary">L</Button>
      <Button>M</Button>
      <Button>M</Button>
      <Button type="dashed">R</Button>
    </ButtonGroup>
    <br /><br />
    <h4>Icons</h4>
    <br /><br />
    <ButtonGroup>
      <Button type="primary">
        <Icon type="ios-arrow-back"></Icon>
        Backward
      </Button>
      <Button type="primary">
        Forward
        <Icon type="ios-arrow-forward"></Icon>
      </Button>
    </ButtonGroup>
    <br /><br />
    <ButtonGroup>
      <Button type="primary" icon="ios-skip-backward"></Button>
      <Button type="primary" icon="ios-skip-forward"></Button>
    </ButtonGroup>
    <br /><br />
    <ButtonGroup>
      <Button icon="ios-color-wand-outline"></Button>
      <Button icon="ios-sunny-outline"></Button>
      <Button icon="ios-crop"></Button>
      <Button icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br /><br />
    <h4>Circle</h4>
    <br /><br />
    <ButtonGroup shape="circle">
      <Button type="primary">
        <Icon type="ios-arrow-back"></Icon>
        Backward
      </Button>
      <Button type="primary">
        Forward
        <Icon type="ios-arrow-forward"></Icon>
      </Button>
    </ButtonGroup>
    <br /><br />
    <ButtonGroup shape="circle">
      <Button type="primary" icon="ios-skip-backward"></Button>
      <Button type="primary" icon="ios-skip-forward"></Button>
    </ButtonGroup>
    <br /><br />
    <ButtonGroup shape="circle">
      <Button icon="ios-color-wand-outline"></Button>
      <Button icon="ios-sunny-outline"></Button>
      <Button icon="ios-crop"></Button>
      <Button icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br /><br />
    <h4>Size</h4>
    <br /><br />
    <ButtonGroup size="large">
      <Button>Large</Button>
      <Button>Large</Button>
    </ButtonGroup>
    <br /><br />
    <ButtonGroup>
      <Button>Default</Button>
      <Button>Default</Button>
    </ButtonGroup>
    <br /><br />
    <ButtonGroup size="small">
      <Button>Small</Button>
      <Button>Small</Button>
    </ButtonGroup>
    <br /><br />
    <ButtonGroup size="large" shape="circle">
      <Button>Large</Button>
      <Button>Large</Button>
    </ButtonGroup>
    <br /><br />
    <ButtonGroup shape="circle">
      <Button>Default</Button>
      <Button>Default</Button>
    </ButtonGroup>
    <br /><br />
    <ButtonGroup size="small" shape="circle">
      <Button>Small</Button>
      <Button>Small</Button>
    </ButtonGroup>
  </div>

  <h2 id="vertival">按钮组纵向排列</h2>
  <p>
    通过设置<code>ButtonGroup</code>的属性<code>vertical</code>，可以使按钮组纵向排列。
  </p>
  <div class="example">
    <ButtonGroup vertical>
      <Button icon="ios-color-wand-outline"></Button>
      <Button icon="ios-sunny-outline"></Button>
      <Button icon="ios-crop"></Button>
      <Button icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
  </div>

  <h2 id="jump">转跳</h2>
  <p>
    通过设置 <code>to</code> 可以实现点击按钮直接跳转，支持传入 vue-router
    对象。
  </p>
  <p>设置 <code>replace</code> 则不会保存历史记录。</p>
  <p>设置 <code>target</code>，会跟 a 标签一样的行为。</p>
  <div class="example">
    <Button to="/components/icon-en">Normal</Button>
    <Button to="/components/icon-en" replace>No history</Button>
    <Button to="//iviewui.com" target="_blank">New window</Button>
  </div>

  <h2>API</h2>
  <div class="api">
    <h3>Button props</h3>
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
          <td>
            按钮类型，可选值为
            <code>default</code
            >、<code>primary</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>或者不设置
          </td>
          <td>String</td>
          <td>default</td>
        </tr>
        <tr>
          <td>ghost</td>
          <td>幽灵属性，使按钮背景透明</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>
            按钮大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置
          </td>
          <td>String</td>
          <td>default</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>按钮形状，可选值为<code>circle</code>或者不设置</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>long</td>
          <td>开启后，按钮的长度为 100%</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>html-type</td>
          <td>
            设置<code>button</code>原生的<code>type</code>，可选值为<code>button</code>、<code>submit</code>、<code
              >reset</code
            >
          </td>
          <td>String</td>
          <td>button</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>设置按钮为禁用状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>设置按钮为加载中状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>设置按钮的图标类型</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <h3>ButtonGroup props</h3>
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
          <td>size</td>
          <td>
            按钮组合大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置
          </td>
          <td>String</td>
          <td>default</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>按钮组合形状，可选值为<code>circle</code>或者不设置</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>vertical</td>
          <td>是否纵向排列按钮组</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "../components/button";
import Radio from "../components/radio";
import Anchor from "./../components/anchor";

const AnchorLink = Anchor.Link;

const RadioGroup = Radio.Group;

const ButtonGroup = Button.Group;

export default {
  components: { Button, ButtonGroup, Radio, RadioGroup, Anchor, AnchorLink },
  setup() {
    const buttonSize = ref("large");
    const loading = ref(false);
    const loading2 = ref(false);

    const toLoading = () => {
      loading.value = true;
    };
    const toLoading2 = () => {
      loading2.value = true;
    };

    return {
      buttonSize,
      loading,
      loading2,
      toLoading,
      toLoading2,
    };
  },
};
</script>