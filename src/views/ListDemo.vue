<template>
  <h1>List 列表</h1>
  <p>
    最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。
  </p>

  <h2>基础用法</h2>
  <p>设置属性<code>size</code>可以显示三种不同尺寸的列表。</p>
  <p>
    可以设置 <code>header</code>或<code>footer</code>来自定义列表头部或尾部。
  </p>
  <div class="example">
    <div>
      <strong>Default Size:</strong>
      <br /><br />
      <List header="Header" footer="Footer" border>
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
      </List>
      <br />
      <strong>Small Size:</strong>
      <br /><br />
      <List header="Header" footer="Footer" border size="small">
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
      </List>
      <br />
      <strong>Large Size:</strong>
      <br /><br />
      <List header="Header" footer="Footer" border size="large">
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
        <ListItem>This is a piece of text.</ListItem>
      </List>
    </div>
  </div>

  <h2>基础列表</h2>
  <p>带有图标、标题、描述的基础列表。</p>
  <p>也可以带有列表操作组。</p>
  <div class="example">
    <List>
      <ListItem>
        <ListItemMeta
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          title="This is title"
          description="This is description, this is description."
        />
      </ListItem>
      <ListItem>
        <ListItemMeta
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          title="This is title"
          description="This is description, this is description."
        />
      </ListItem>
      <ListItem>
        <ListItemMeta
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          title="This is title"
          description="This is description, this is description."
        />
        <template #action>
          <li>
            <a href="">Edit</a>
          </li>
          <li>
            <a href="">More</a>
          </li>
        </template>
      </ListItem>
      <ListItem>
        <ListItemMeta
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          title="This is title"
          description="This is description, this is description."
        />
        <template #action>
          <li>
            <a href="">Edit</a>
          </li>
          <li>
            <a href="">More</a>
          </li>
        </template>
      </ListItem>
    </List>
  </div>

  <h2>竖排列表样式</h2>
  <p>
    设置属<code>item-layout</code>为<code>vertical</code>可实现竖排列表样式。
  </p>
  <div class="example">
    <List item-layout="vertical">
      <ListItem v-for="item in data" :key="item.title">
        <ListItemMeta
          :avatar="item.avatar"
          :title="item.title"
          :description="item.description"
        />
        {{ item.content }}
        <template #action>
          <li><Icon type="ios-star-outline" /> 123</li>
          <li><Icon type="ios-thumbs-up-outline" /> 234</li>
          <li><Icon type="ios-chatbubbles-outline" /> 345</li>
        </template>
        <template #extra>
          <img
            src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large"
            style="width: 280px"
          />
        </template>
      </ListItem>
    </List>
  </div>

  <h2>API</h2>
  <div class="api">
    <h3>List props</h3>
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
          <td>border</td>
          <td>是否显示边框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>item-layout</td>
          <td>
            设置 ListItem 布局, 可选值为 horizontal（横排）或 vertical（竖直）
          </td>
          <td>String</td>
          <td>horizontal</td>
        </tr>
        <tr>
          <td>header</td>
          <td>列表头部</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>列表底部</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>列表是否正在加载</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>列表尺寸，可选值为 small、large、default</td>
          <td>String</td>
          <td>default</td>
        </tr>
        <tr>
          <td>split</td>
          <td>是否展示分割线</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>

    <h3>List slots</h3>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>header</td>
          <td>自定义列表头部</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>自定义列表底部</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>自定义加载中</td>
        </tr>
      </tbody>
    </table>

    <h3>ListItem slots</h3>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>action</td>
          <td>列表操作组，根据 item-layout 的不同, 位置在卡片底部或者最右侧</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>
            额外内容, 通常用在 item-layout 为 vertical 的情况下, 展示右侧内容;
            horizontal 展示在列表元素最右侧
          </td>
        </tr>
      </tbody>
    </table>

    <h3>ListItemMeta props</h3>
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
          <td>avatar</td>
          <td>列表元素的图标</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>title</td>
          <td>列表元素的标题</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>description</td>
          <td>列表元素的描述内容</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <h3>ListItemMeta slots</h3>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>avatar</td>
          <td>自定义列表元素的图标</td>
        </tr>
        <tr>
          <td>title</td>
          <td>自定义列表元素的标题</td>
        </tr>
        <tr>
          <td>description</td>
          <td>自定义列表元素的描述内容</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import List from "../components/list";
import Icon from "../components/icon";

const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;

export default {
  components: {
    List,
    ListItem,
    ListItemMeta,
    Icon,
  },
  setup() {
    const data = ref([
      {
        title: "This is title 1",
        description:
          "这是一段很长的描述信息，这是一段很长的描述信息，这是一段很长的描述信息。",
        avatar:
          "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
        content:
          "This is the content, this is the content, this is the content, this is the content.",
      },
      {
        title: "This is title 2",
        description:
          "这是一段很长的描述信息，这是一段很长的描述信息，这是一段很长的描述信息。",
        avatar:
          "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
        content:
          "This is the content, this is the content, this is the content, this is the content.",
      },
      {
        title: "This is title 3",
        description:
          "这是一段很长的描述信息，这是一段很长的描述信息，这是一段很长的描述信息。",
        avatar:
          "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
        content:
          "This is the content, this is the content, this is the content, this is the content.",
      },
    ]);

    return { data };
  },
};
</script>

<style>
</style>