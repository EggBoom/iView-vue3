<template>
  <h1>Affix 图钉</h1>
  <p>
    使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。
  </p>

  <h2>基础用法</h2>
  <p>简单使用，当元素不可见时，直接固定在最顶端。</p>
  <div class="example">
    <Affix :offset-top="60">
      <span class="demo-affix">Fixed at the top</span>
    </Affix>
  </div>

  <h2>偏移</h2>
  <p>当滚动到一定距离时再固定。</p>
  <div class="example">
    <Affix :offset-top="110">
      <span class="demo-affix">Fixed at the top 50px from the top</span>
    </Affix>
  </div>

  <h2>固定在底部</h2>
  <p>在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。</p>
  <p>
    注意，<code>offset-top</code>和<code>offset-bottom</code>只可以设置一个，如果都设置，会使用<code>offset-top</code>。
  </p>
  <div class="example">
    <Affix :offset-bottom="20">
      <span class="demo-affix">Fix at the bottom 20px</span>
    </Affix>
  </div>

  <h2>固定状态改变时的回调</h2>
  <p>当固定状态发生改变时，会触发事件。</p>
  <div class="example">
    <Affix :offset-top="100" @change="change">
      <span class="demo-affix"
        >Fix the position at the top of 100px at the top</span
      >
    </Affix>
  </div>

  <h2>API</h2>
  <div class="api">
    <h3>Affix props</h3>
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
          <td>
            use-capture
            <span class="ivu-badge">
              <sup class="ivu-badge-count ivu-badge-count-alone"
                >4.1.0</sup
              ></span
            >
          </td>
          <td>addEventListener 原生的 useCapture 选项</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>Affix events</h3>
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
          <td>on-change</td>
          <td>在固定状态发生改变时触发</td>
          <td>true | false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Affix from "../components/affix";

export default {
  components: { Affix },
  setup() {
    const change = () => {
      alert("change");
    };

    return { change };
  },
};
</script>
<style scoped>
.demo-affix {
  display: inline-block;
  color: #fff;
  padding: 10px 30px;
  text-align: center;
  background: rgba(0, 153, 229, 0.9);
}
</style>