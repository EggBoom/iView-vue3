<template>
  <h1>Switch 开关</h1>
  <p>在两种状态间切换时用到的开关选择器。</p>

  <h2>基础用法</h2>
  <p>状态切换时会触发事件。</p>
  <div class="example">
    <Switch v-model="switch1" @on-change="change" />
  </div>

  <h2>尺寸</h2>
  <p>
    设置<code>size</code>为 <code>large</code> 或
    <code>small</code> 使用大号和小号的开关。
  </p>
  <div class="example">
    <Switch size="large" />
    <Switch />
    <Switch size="small" />
  </div>

  <h2>文字和图标</h2>
  <p>自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。</p>
  <div class="example">
    <Switch>
      <template #open>开</template>
      <template #close>关</template>
    </Switch>
    <Switch>
      <template #open><Icon type="md-checkmark"></Icon></template>
      <template #close><Icon type="md-close"></Icon></template>
    </Switch>
    <br /><br />
    <Switch size="large">
      <template #open>开启</template>
      <template #close>关闭</template>
    </Switch>
    <Switch size="large">
      <template #open>On</template>
      <template #close>Off</template>
    </Switch>
  </div>

  <h2>不可用</h2>
  <p>禁用开关。</p>
  <div class="example">
    <Switch :disabled="disabled" />
    <Button type="primary" @click="disabled = !disabled"
      >Toggle Disabled</Button
    >
  </div>

  <h2>加载中</h2>
  <p>标识开关操作仍在执行中。</p>
  <div class="example">
    <Switch loading :modelValue="true" />
    <Switch loading :modelValue="false" size="small" />
  </div>

  <h2>自定义颜色</h2>
  <p>
    设置属性 <code>true-color</code> 和
    <code>false-color</code> 可以自定义背景色。
  </p>
  <div class="example">
    <Switch true-color="#13ce66" false-color="#ff4949" />
  </div>

  <h2>before-change</h2>
  <p>设置属性 <code>before-change</code> 并返回 Promise，可以阻止切换。</p>
  <div class="example">
    <Switch :before-change="handleBeforeChange" />
  </div>

  <h2>API</h2>
  <div class="api">
    <h3>Switch props</h3>
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
          <td>modelValue</td>
          <td>指定当前是否选中，可以使用 v-model 双向绑定数据</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>
            开关的尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不写。建议开关如果使用了2个汉字的文字，使用
            large。
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>禁用开关</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>true-value</td>
          <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
          <td>String, Number, Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>false-value</td>
          <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
          <td>String, Number, Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>
            true-color
          </td>
          <td>自定义打开时的背景色</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>
            false-color
          </td>
          <td>自定义关闭时的背景色</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>
            before-change
          </td>
          <td>返回 Promise 可以阻止切换</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>加载中的开关</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>Switch events</h3>
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
          <td>开关变化时触发，返回当前的状态</td>
          <td>true | false</td>
        </tr>
      </tbody>
    </table>

    <h3>Switch slots</h3>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>open</td>
          <td>自定义显示打开时的内容</td>
        </tr>
        <tr>
          <td>close</td>
          <td>自定义显示关闭时的内容</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import Switch from "../components/switch";
import Icon from "../components/icon";
import Button from "../components/button";

export default {
  components: { Switch, Icon, Button },
  setup() {
    const switch1 = ref(false);
    const disabled = ref(true);

    const change = (status) => {
      //this.$Message.info('开关状态：' + status);
      alert("开关状态：" + status);
    };

    const handleBeforeChange = () => {
      return new Promise((resolve) => {
        alert("before-change");
        resolve();
        // this.$Modal.confirm({
        //     title: '切换确认',
        //     content: '您确认要切换开关状态吗？',
        //     onOk: () => {
        //         resolve();
        //     }
        // });
      });
    };

    return {
      switch1,
      change,
      disabled,
    };
  },
};
</script>

<style>
</style>