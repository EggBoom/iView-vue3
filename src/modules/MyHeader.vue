<template>
  <Menu mode="horizontal" theme="light" active-name="1">
    <a href="http://www.pangtougui.top">Pangtougui</a>
    <MenuItem name="1">
        组件
    </MenuItem>
  </Menu>
</template>

<script>
import Menu from '../components/menu'

const MenuItem = Menu.Item;

export default {
    components: {
        Menu,
        MenuItem
    },
    setup() {
      const toHome = () => {
        window.location = "www.baidu.com";
      };

      return { toHome };
    }
}
</script>
<style scoped>
html {
  font-size: 14px;
}
a {
  color: #333;
  font-family: 'Lobster', cursive;
  font-size: 50px;
  margin: 0;
  padding: 0;
  letter-spacing: -.2rem;
  position: relative;
  user-select: none;
}

a::after {
  content: 'Pangtougui';
  color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  
  clip-path: ellipse(100px 100px at 0% 50%);
  -webkit-clip-path: ellipse(100px 100px at 0% 50%);
  
  animation: 5s infinite spotlight;
  
  background-image: url(https://images.unsplash.com/photo-1579547621869-0ddb5f237392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
  background-size: 150%;
  background-position: center center;
  
  background-clip: text;
  -webkit-background-clip: text;
}

a:hover {
  cursor: pointer;
}

@keyframes spotlight {
  0% {
    clip-path: ellipse(100px 100px at 0% 50%);
    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
  }
  
  50% {
    clip-path: ellipse(100px 100px at 100% 50%);
    -webkit-clip-path: ellipse(100px 100px at 100% 50%);
  }
  
  100% {
    clip-path: ellipse(100px 100px at 0% 50%);
    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
  }
}
</style>