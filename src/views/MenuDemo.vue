<template>
<h1>Menu 导航菜单</h1>
<p>为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。</p>

<h2>顶部导航</h2>
<p>水平的顶部导航菜单。</p>
<p>通过设置属性 <code>theme</code>为<code>light</code>、<code>dark</code>、<code>primary</code>可以选择主题。</p>
<p>通过事件<code>on-select</code>可以得到点击菜单的 name 值，从而控制页面路由或自定义操作。</p>
<div class="example">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <!-- <Submenu name="3">
            <template #title>
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu> -->
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    </Menu>
</div>
</template>

<script>
import Menu from '../components/menu';
import Button from '../components/button';
import Icon from '../components/icon';

const MenuItem = Menu.Item;

export default {
    components: { Menu, MenuItem, Button, Icon }

}
</script>