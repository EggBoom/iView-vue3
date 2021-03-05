<template>
    <Menu theme="light" active-name="1">
        <MenuGroup title="基础">
            <MenuItem name="1" @click="handleClick">
                Button 按钮
            </MenuItem>
            <!-- <MenuItem name="2" @click="handleClick">
                Icon 图标
            </MenuItem> -->
        </MenuGroup>
        <MenuGroup title="布局">
            <MenuItem name="3" @click="handleClick">
                Row/Col 栅格
            </MenuItem>
            <!-- <MenuItem name="4" @click="handleClick">
                Layout 布局
            </MenuItem> -->
            <MenuItem name="5" @click="handleClick">
                List 列表
            </MenuItem>
            <MenuItem name="6" @click="handleClick">
                Card 卡片
            </MenuItem>
            <MenuItem name="7" @click="handleClick">
                Collapse 折叠面板
            </MenuItem>
            <MenuItem name="9" @click="handleClick">
                Divider 分割线
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="导航">
            <!-- <MenuItem name="11" @click="handleClick">
                Menu 导航菜单
            </MenuItem>
            <MenuItem name="12" @click="handleClick">
                Tabs 标签页
            </MenuItem>
            <MenuItem name="13" @click="handleClick">
                Dropdown 下拉菜单
            </MenuItem>
            <MenuItem name="14" @click="handleClick">
                Page 分页
            </MenuItem>
            <MenuItem name="15" @click="handleClick">
                Breadcrumb 面包屑
            </MenuItem>  -->
            <MenuItem @click="handleClick">
                Badge 徽标
            </MenuItem>
            <MenuItem @click="handleClick">
                Anchor 锚点
            </MenuItem>
            <!-- <MenuItem name="18" @click="handleClick">
                Steps 步骤数
            </MenuItem>
            <MenuItem name="19" @click="handleClick">
                LoadingBar 加载进度条
            </MenuItem> -->
        </MenuGroup>
        <MenuGroup title="表单">
            <MenuItem name="22" @click="handleClick">
                Radio 单选
            </MenuItem>
            <MenuItem name="23" @click="handleClick">
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
        </MenuGroup>
        <MenuGroup title="其他">
            <MenuItem name="20" @click="handleClick">
                Affix 图钉
            </MenuItem>
            <MenuItem name="21" @click="handleClick">
                BackTop 返回顶部
            </MenuItem>
            <MenuItem name="22" @click="handleClick">
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