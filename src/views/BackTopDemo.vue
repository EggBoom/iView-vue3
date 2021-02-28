<template>
  <h1>BackTop 返回顶部</h1>
  <p>当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。</p>

  <h2>基础用法</h2>
  <p>默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。</p>
  <div class="example">
    <p>向下滚动页面，灰色的按钮为默认效果。</p>
    <BackTop></BackTop>
  </div>

  <h2>基础用法</h2>
  <p>自定义了位置在页面底部 200px,滚动至距顶端 200px 时显示。</p>
  <div class="example">
    <p>向下滚动页面，蓝色的按钮为自定义效果。</p>
    <BackTop :height="100" :bottom="200">
      <div class="top">返回顶端</div>
    </BackTop>
  </div>

  <h2>API</h2>
  <div class="api">
    <h3>BackTop props</h3>
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
          <td>height</td>
          <td>
            页面滚动高度达到该值时才显示<code>BackTop</code
            >组件
          </td>
          <td>Number</td>
          <td>400</td>
        </tr>
        <tr>
          <td>bottom</td>
          <td>组件距离底部的距离</td>
          <td>Number</td>
          <td>30</td>
        </tr>
        <tr>
          <td>right</td>
          <td>组件距离右部的距离</td>
          <td>Number</td>
          <td>30</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>滚动动画持续时间，单位 毫秒</td>
          <td>Number</td>
          <td>1000</td>
        </tr>
      </tbody>
    </table>

    <h3>BackTop events</h3>
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
            <td>on-click</td>
            <td>点击按钮时触发</td>
            <td>无</td>
        </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import BackTop from "../components/back-top";
export default {
  components: {
    BackTop,
  },
};
</script>

<style scoped>
.top {
  padding: 10px;
  background: rgba(0, 153, 229, 0.7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}
</style>