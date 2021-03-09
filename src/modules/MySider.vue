<template>
    <Menu theme="light" active-name="1">
        <MenuGroup title="基础">
            <MenuItem @click="handleClick">
                Button 按钮
            </MenuItem>
            <!-- <MenuItem @click="handleClick">
                Icon 图标
            </MenuItem> -->
        </MenuGroup>
        <MenuGroup title="布局">
            <MenuItem @click="handleClick">
                Row/Col 栅格
            </MenuItem>
            <!-- <MenuItem @click="handleClick">
                Layout 布局
            </MenuItem> -->
            <MenuItem @click="handleClick">
                List 列表
            </MenuItem>
            <MenuItem @click="handleClick">
                Card 卡片
            </MenuItem>
            <MenuItem @click="handleClick">
                Collapse 折叠面板
            </MenuItem>
            <MenuItem @click="handleClick">
                Divider 分割线
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="导航">
            <!-- <MenuItem @click="handleClick">
                Menu 导航菜单
            </MenuItem>
            <MenuItem @click="handleClick">
                Tabs 标签页
            </MenuItem>
            <MenuItem @click="handleClick">
                Dropdown 下拉菜单
            </MenuItem>
            <MenuItem @click="handleClick">
                Page 分页
            </MenuItem> -->
            <MenuItem @click="handleClick">
                Breadcrumb 面包屑
            </MenuItem>
            <MenuItem @click="handleClick">
                Badge 徽标
            </MenuItem>
            <MenuItem @click="handleClick">
                Anchor 锚点
            </MenuItem>
            <!-- <MenuItem @click="handleClick">
                Steps 步骤数
            </MenuItem>
            <MenuItem @click="handleClick">
                LoadingBar 加载进度条
            </MenuItem> -->
        </MenuGroup>
        <MenuGroup title="表单">
            <MenuItem @click="handleClick">
                Radio 单选
            </MenuItem>
            <MenuItem @click="handleClick">
                Checkbox 多选
            </MenuItem>
            <MenuItem @click="handleClick">
                Switch 开关
            </MenuItem>
            <MenuItem @click="handleClick">
                Rate 评分
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="视图">
            <MenuItem @click="handleClick">
                Alert 警告提示
            </MenuItem>
            <MenuItem @click="handleClick">
                Avatar 头像
            </MenuItem>
            <MenuItem @click="handleClick">
                Progress 进度条
            </MenuItem>
            <MenuItem @click="handleClick">
                Tag 标签
            </MenuItem>
            <MenuItem @click="handleClick">
                Tooltip 文字提示
            </MenuItem>
            <MenuItem @click="handleClick">
                Poptip 气泡提示
            </MenuItem>
            <MenuItem @click="handleClick">
                Timeline 时间轴
            </MenuItem>
            <MenuItem @click="handleClick">
                Carousel 走马灯
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="其他">
            <MenuItem @click="handleClick">
                Affix 图钉
            </MenuItem>
            <MenuItem @click="handleClick">
                BackTop 返回顶部
            </MenuItem>
            <MenuItem @click="handleClick">
                Circle 进度环
            </MenuItem>
        </MenuGroup>
    </Menu>
</template>

<script>
import { useRouter } from 'vue-router';
import Menu from '../components/menu'

const MenuItem = Menu.Item;
const MenuGroup = Menu.Group;

export default {
    components: {
        Menu,
        MenuItem,
        MenuGroup
    },
    setup() {
        const router = useRouter();

        const handleClick = (event) => {
            const type = event.target.innerText.split(' ')[0];
            
            router.push(`/${type}`);
        };

        return {
            handleClick
        };
    }
}
</script>