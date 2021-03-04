<template>
    <div class="anchorWrapper">
        <Anchor show-ink>
            <AnchorLink href="#basic" title="基础用法" />
            <AnchorLink href="#desc" title="含描述信息" />
            <AnchorLink href="#icon" title="图标" />
            <AnchorLink href="#closable" title="可关闭" />
            <AnchorLink href="#banner" title="顶部公告" />
            <AnchorLink href="#API" title="API" />
        </Anchor>
    </div>
    <h1>Alert 警告提示</h1>
    <p>静态地呈现一些警告信息，可手动关闭。</p>

    <h2 id="basic">基础用法</h2>
    <p>基本使用方法，有四种样式可以选择<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>。</p>
    <div class="example">
    <Alert>An info prompt</Alert>
    <Alert type="success">A success prompt</Alert>
    <Alert type="warning">A warning prompt</Alert>
    <Alert type="error">An error prompt</Alert>
    </div>

    <h2 id="desc">含描述信息</h2>
    <p>自定义<code>&lt;slot name="desc"&gt;</code>描述内容。</p>
    <div class="example">
    <Alert>
        An info prompt
        <template #desc
        >Content of prompt. Content of prompt. Content of prompt. Content of
        prompt.
        </template>
    </Alert>
    <Alert type="success">
        A success prompt
        <template #desc>
        <span
            >Content of prompt. Content of prompt. Content of prompt. Content of
            prompt.
        </span>
        </template>
    </Alert>
    <Alert type="warning">
        A warning prompt
        <template #desc>
        Content of prompt. Content of prompt. Content of prompt.
        </template>
    </Alert>
    <Alert type="error">
        An error prompt
        <template #desc>
        <span>Custom error description copywriting.</span>
        </template>
    </Alert>
    </div>

    <h2 id="icon">图标</h2>
    <p>根据 type 属性自动添加不同图标，或者自定义图标 slot 。</p>
    <div class="example">
    <Alert show-icon>An info prompt</Alert>
    <Alert type="success" show-icon>A success prompt</Alert>
    <Alert type="warning" show-icon>A warning prompt</Alert>
    <Alert type="error" show-icon>An error prompt</Alert>
    <Alert show-icon>
        An info prompt
        <template #desc
        >Content of prompt. Content of prompt. Content of prompt. Content of
        prompt.
        </template>
    </Alert>
    <Alert type="success" show-icon>
        A success prompt
        <template #desc>
        <span
            >Content of prompt. Content of prompt. Content of prompt. Content of
            prompt.
        </span>
        </template>
    </Alert>
    <Alert type="warning" show-icon>
        A warning prompt
        <template #desc>
        Content of prompt. Content of prompt. Content of prompt.
        </template>
    </Alert>
    <Alert type="error" show-icon>
        An error prompt
        <template #desc>
        <span>Custom error description copywriting.</span>
        </template>
    </Alert>
    <Alert show-icon>
        Custom icon
        <template #icon>
        <Icon type="ios-bulb-outline"></Icon>
        </template>
        <template #desc>
        Custom icon copywriting. Custom icon copywriting. Custom icon
        copywriting.
        </template>
    </Alert>
    </div>

    <h2 id="closable">可关闭</h2>
    <p>显示关闭按钮，点击可关闭提示，也可以自定义关闭 slot 。</p>
    <div class="example">
    <Alert closable>An info prompt</Alert>
    <Alert type="success" show-icon closable>
        A success prompt
        <template #desc>
        <span
            >Content of prompt. Content of prompt. Content of prompt. Content of
            prompt.
        </span>
        </template>
    </Alert>
    <Alert type="warning" closable>
        Custom closing content
        <template #close>
        <span>No longer prompt</span>
        </template>
    </Alert>
    </div>

    <h2 id="banner">顶部公告</h2>
    <p>设置属性 <code>banner</code> 可以应用顶部公告的样式。</p>
    <div class="example">
    <Alert banner type="warning">Notice: notification contents...</Alert>
    <Alert banner closable type="warning"
        >Notice: notification contents...</Alert
    >
    </div>

    <div class="api">
    <div class="anchor">
        <h2 id="API">API</h2>
        <a href="#API">#</a>
    </div>
    <div class="anchor">
        <h3 id="Alert_props">Alert props</h3>
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
            <td>type</td>
            <td>
            警告提示样式，可选值为<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>
            </td>
            <td>String</td>
            <td>info</td>
        </tr>
        <tr>
            <td>closable</td>
            <td>是否可关闭</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>show-icon</td>
            <td>是否显示图标</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        </tbody>
    </table>
    <div class="anchor">
        <h3 id="Alert_events">Alert events</h3>
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
            <td>on-close</td>
            <td>关闭时触发</td>
            <td>event</td>
        </tr>
        </tbody>
    </table>
    <div class="anchor">
        <h3 id="Alert_slot">Alert slot</h3>
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
            <td>default</td>
            <td>警告提示内容</td>
        </tr>
        <tr>
            <td>desc</td>
            <td>警告提示辅助性文字介绍</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>自定义图标内容</td>
        </tr>
        <tr>
            <td>close</td>
            <td>自定义关闭内容</td>
        </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
import Alert from "./../components/alert";
import Icon from "./../components/icon";
import Anchor from "./../components/anchor";

const AnchorLink = Anchor.Link;

export default {
  components: { Alert, Icon, Anchor, AnchorLink },
};
</script>

<style>
</style>