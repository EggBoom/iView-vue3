<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
      <AnchorLink href="#basic" title="基础用法" />
      <AnchorLink href="#border" title="无边框" />
      <AnchorLink href="#disable" title="禁用悬停阴影" />
      <AnchorLink href="#shadow" title="卡片阴影" />
      <AnchorLink href="#introduce" title="简介卡片" />
      <AnchorLink href="#api" title="API" />
    </Anchor>
  </div>

  <h1>Card 卡片</h1>
  <p>基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。</p>

  <h2 id="basic">基础用法</h2>
  <p>
    自定义标题、额外操作和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。
  </p>
  <p>可以通过设置属性<code>title</code>和<code>icon</code>快速设置标题栏。</p>
  <div class="example">
    <Card style="width: 350px">
      <template #title>
        <p>
          <Icon type="ios-film-outline"></Icon>
          Classic film
        </p>
      </template>
      <template #extra>
        <a href="#" @click.prevent="changeLimit">
          <Icon type="ios-loop-strong"></Icon>
          Change
        </a>
      </template>
      <ul>
        <li v-for="(item, index) in randomMovieList" :key="index">
          <a :href="item.url" target="_blank">{{ item.name }}</a>
          <span>
            <Icon type="ios-star" v-for="n in 4" :key="n"></Icon
            ><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon
            ><Icon type="ios-star-half" v-else></Icon>
            {{ item.rate }}
          </span>
        </li>
      </ul>
    </Card>
  </div>

  <h2 id="border">无边框</h2>
  <p>
    通过设置属性<code>bordered为</code> false
    ，可以不添加边框，建议在灰色背景下使用。
  </p>
  <div class="example">
    <div style="background: #eee; padding: 20px">
      <Card :bordered="false">
        <template #title>
          <p>No border title</p>
        </template>
        <p>
          Content of no border type. Content of no border type. Content of no
          border type. Content of no border type.
        </p>
        <p>
          Content of no border type. Content of no border type. Content of no
          border type. Content of no border type.
        </p>
      </Card>
    </div>
  </div>

  <h2 id="disable">禁用悬停阴影</h2>
  <p>通过设置属性<code>dis-hover</code>来禁用鼠标悬停显示阴影的效果。</p>
  <div class="example">
    <Row>
      <ICol span="11">
        <Card>
          <template #title>
            <p>The standard card</p>
          </template>
          <p>Content of card</p>
          <p>Content of card</p>
          <p>Content of card</p>
        </Card>
      </ICol>
      <ICol span="11" offset="2">
        <Card dis-hover>
          <template #title>
            <p>Disable card with hover shadows</p>
          </template>
          <p>Content of card</p>
          <p>Content of card</p>
          <p>Content of card</p>
        </Card>
      </ICol>
    </Row>
  </div>

  <h2 id="shadow">卡片阴影</h2>
  <p>
    通过设置属性<code>shadow</code>来显示卡片阴影，使用该属性后，<code>bordered和</code>和<code>dis-hover</code>将无效，建议在灰色背景下使用。
  </p>
  <div class="example">
    <Row style="background: #eee; padding: 20px">
      <ICol span="11">
        <Card :bordered="false">
          <template #title>
            <p>Borderless card</p>
          </template>
          <p>Content of card</p>
          <p>Content of card</p>
          <p>Content of card</p>
        </Card>
      </ICol>
      <ICol span="11" offset="2">
        <Card shadow>
          <template #title>
            <p>Use a card with a shadow effect</p>
          </template>
          <p>Content of card</p>
          <p>Content of card</p>
          <p>Content of card</p>
        </Card>
      </ICol>
    </Row>
  </div>

  <h2 id="introduce">简介卡片</h2>
  <p>只包含内容区域，没有标题。</p>
  <div class="example">
    <Card style="width: 320px">
      <div style="text-align: center">
        <img
          src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png"
        />
        <h3>A high quality UI Toolkit based on Vue.js</h3>
      </div>
    </Card>
  </div>

  <h2>API</h2>
  <div class="api">
    <h3>Card props</h3>
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
          <td>bordered</td>
          <td>是否显示边框，建议在灰色背景下使用</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>dis-hover</td>
          <td>禁用鼠标悬停显示阴影</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>shadow</td>
          <td>卡片阴影，建议在灰色背景下使用</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>padding</td>
          <td>卡片内部间距，单位 px</td>
          <td>Number</td>
          <td>16</td>
        </tr>
        <tr>
          <td>title</td>
          <td>标题</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>标题前的图标</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>to</td>
          <td>跳转的链接，支持 vue-router 对象</td>
          <td>String | Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>replace</td>
          <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>target</td>
          <td>相当于 a 链接的 target 属性</td>
          <td>String</td>
          <td>_self</td>
        </tr>
        <tr>
          <td>append</td>
          <td>同 vue-router append</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>Card slots</h3>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>
            自定义卡片标题，如果是简单文字，可以使用<code>&lt;p&gt;</code>标签包裹
          </td>
        </tr>
        <tr>
          <td>extra</td>
          <td>额外显示的内容，默认位置在右上角</td>
        </tr>
        <tr>
          <td>default</td>
          <td>卡片主体内容</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Card from "../components/card";
import Icon from "../components/icon";
import { Row, Col as ICol } from "../components/grid";
import Anchor from "./../components/anchor";

const AnchorLink = Anchor.Link;

export default {
  components: { Card, Icon, Row, ICol, Anchor, AnchorLink },
  setup() {
    const movieList = ref([
      {
        name: "The Shawshank Redemption",
        url: "https://movie.douban.com/subject/1292052/",
        rate: 9.6,
      },
      {
        name: "Leon:The Professional",
        url: "https://movie.douban.com/subject/1295644/",
        rate: 9.4,
      },
      {
        name: "Farewell to My Concubine",
        url: "https://movie.douban.com/subject/1291546/",
        rate: 9.5,
      },
      {
        name: "Forrest Gump",
        url: "https://movie.douban.com/subject/1292720/",
        rate: 9.4,
      },
      {
        name: "Life Is Beautiful",
        url: "https://movie.douban.com/subject/1292063/",
        rate: 9.5,
      },
      {
        name: "Spirited Away",
        url: "https://movie.douban.com/subject/1291561/",
        rate: 9.2,
      },
      {
        name: "Schindlers List",
        url: "https://movie.douban.com/subject/1295124/",
        rate: 9.4,
      },
      {
        name: "The Legend of 1900",
        url: "https://movie.douban.com/subject/1292001/",
        rate: 9.2,
      },
      {
        name: "WALL·E",
        url: "https://movie.douban.com/subject/2131459/",
        rate: 9.3,
      },
      {
        name: "Inception",
        url: "https://movie.douban.com/subject/3541415/",
        rate: 9.2,
      },
    ]);
    const randomMovieList = ref([]);

    const changeLimit = () => {
      function getArrayItems(arr, num) {
        const temp_array = [];
        for (let index in arr) {
          temp_array.push(arr[index]);
        }
        const return_array = [];
        for (let i = 0; i < num; i++) {
          if (temp_array.length > 0) {
            const arrIndex = Math.floor(Math.random() * temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
          } else {
            break;
          }
        }
        return return_array;
      }
      randomMovieList.value = getArrayItems(movieList.value, 5);
    };

    onMounted(() => changeLimit());

    return {
      movieList,
      randomMovieList,
      changeLimit,
    };
  },
};
</script>
<style scoped>
li {
  list-style: none;
  margin-bottom: 5px;
}

li span {
  float: right;
  color: #ffac2d;
}
</style>