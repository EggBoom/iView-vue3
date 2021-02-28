import ButtonDemo from '../views/ButtonDemo.vue';
import IconDemo from '../views/IconDemo.vue';
import CollapseDemo from '../views/CollapseDemo.vue';
import DividerDemo from '../views/DividerDemo.vue';
import AffixDemo from '../views/AffixDemo.vue';
import BackTopDemo from '../views/BackTopDemo.vue';
import LoadingBarDemo from '../views/LoadingBarDemo.vue';
import ListDemo from '../views/ListDemo.vue';
import CardDemo from '../views/CardDemo.vue';
import MenuDemo from '../views/MenuDemo.vue';
import RadioDemo from '../views/RadioDemo.vue';
import CheckboxDemo from '../views/CheckboxDemo.vue';
import GridDemo from '../views/GridDemo.vue';
import CircleDemo from '../views/CircleDemo.vue';

const routes = [
    { path: '/', component: ButtonDemo},
    { path: '/Button', component: ButtonDemo },
    { path: '/Icon', component: IconDemo },
    { path: '/Collapse', component: CollapseDemo },
    { path: '/Divider', component: DividerDemo },
    { path: '/Affix', component: AffixDemo },
    { path: '/BackTop', component: BackTopDemo },
    { path: '/LoadingBar', component: LoadingBarDemo },
    { path: '/List', component: ListDemo },
    { path: '/Card', component: CardDemo },
    { path: '/Menu', component: MenuDemo },
    { path: '/Radio', component: RadioDemo },
    { path: '/Checkbox', component: CheckboxDemo },
    { path: '/Row/Col', component: GridDemo },
    { path: '/Circle', component: CircleDemo },
];

export default routes;