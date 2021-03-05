<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#basic" title="基础用法" />
      <AnchorLink href="#accordion" title="手风琴" />
      <AnchorLink href="#simple" title="简洁模式" />
      <AnchorLink href="#api" title="API" />
    </Anchor>
  </div>

  <h1>Collapse 折叠面板</h1>
  <p>将内容区域折叠/展开。</p>

  <h2 id="basic">基础用法</h2>
  <p>默认可以同时展开多个面板，可以设置默认展开第几个。</p>
  <div class="example">
    <Collapse v-model="value1">
      <Panel name="1">
        史蒂夫·乔布斯
        <template #content>
          <p>
            史蒂夫·乔布斯（Steve
            Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
          </p>
        </template>
      </Panel>
      <Panel name="2">
        斯蒂夫·盖瑞·沃兹尼亚克
        <template #content>
          <p>
            斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
          </p>
        </template>
      </Panel>
      <Panel name="3">
        乔纳森·伊夫
        <template #content>
          <p>
            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
          </p>
        </template>
      </Panel>
    </Collapse>
  </div>

  <h2 id="accordion">手风琴</h2>
  <p>
    通过设置属性<code>accordion</code>开启手风琴模式，每次只能打开一个面板。
  </p>
  <div class="example">
    <Collapse v-model="value2" accordion>
      <Panel name="1">
        史蒂夫·乔布斯
        <template #content>
          <p>
            史蒂夫·乔布斯（Steve
            Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
          </p>
        </template>
      </Panel>
      <Panel name="2">
        斯蒂夫·盖瑞·沃兹尼亚克
        <template #content>
          <p>
            斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
          </p>
        </template>
      </Panel>
      <Panel name="3">
        乔纳森·伊夫
        <template #content>
          <p>
            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
          </p>
        </template>
      </Panel>
    </Collapse>
  </div>

  <h2 id="simple">简洁模式</h2>
  <p>设置属性<code>simple</code>可以显示为不带边框和背景色的简洁模式。</p>
  <div class="example">
    <Collapse simple>
      <Panel name="1">
        史蒂夫·乔布斯
        <template #content>
          <p>
            史蒂夫·乔布斯（Steve
            Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
          </p>
        </template>
      </Panel>
      <Panel name="2">
        斯蒂夫·盖瑞·沃兹尼亚克
        <template #content>
          <p>
            斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
          </p>
        </template>
      </Panel>
      <Panel name="3">
        乔纳森·伊夫
        <template #content>
          <p>
            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
          </p>
        </template>
      </Panel>
    </Collapse>
  </div>

  <h2>API</h2>
  <div class="api">
    <h3>Collapse props</h3>
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
          <td>value</td>
          <td>当前激活的面板的 name，可以使用 v-model 双向绑定</td>
          <td>Array | String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>accordion</td>
          <td>是否开启手风琴模式，开启后每次至多展开一个面板</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>simple</td>
          <td>是否开启简洁模式</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>Collapse events</h3>
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
          <td>切换面板时触发，返回当前已展开的面板的 key，格式为数组</td>
          <td>[]</td>
        </tr>
      </tbody>
    </table>

    <h3>Panel props</h3>
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
          <td>name</td>
          <td>
            当前面板的 name，与 Collapse的<code>value</code>对应，不填为索引值
          </td>
          <td>String</td>
          <td>index</td>
        </tr>
        <tr>
          <td>hide-arrow</td>
          <td>隐藏箭头</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>Panel slots</h3>
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
          <td>面板头内容</td>
        </tr>
        <tr>
          <td>content</td>
          <td>描述内容</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import Collapse from "../components/collapse";
import Anchor from "./../components/anchor";

const AnchorLink = Anchor.Link;

const Panel = Collapse.Panel;

export default {
  components: { Collapse, Panel, Anchor, AnchorLink },
  setup() {
    const value1 = ref("1");
    const value2 = ref("1");

    return {
      value1,
      value2,
    };
  },
};
</script>