<template>
<div class="app-container">
    <div class="app-left">
        <MySider />
    </div>
    <div class="app-right">
        <div class="wrapper-header">
            <MyHeader class="myheader"/>
        </div>
        <div class="wrapper-content">
          <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import MySider from './modules/MySider.vue';
import MyHeader from './modules/MyHeader.vue';

export default {
    components: { 
      MySider,
      MyHeader,
    }
};
</script>

<style>
body {
  min-height: 100vh;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #515a6e;
}

code {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  background-color: #fff5f5;
  border-radius: 3px;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  color: #fa795e;
}

h1, h2 {
  font-weight: 400;
}

.app-container {
display: flex;
flex-direction: column;
}

.app-left {
  width: 240px;
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 150px;

  overflow-y: auto;
}

.app-right {
  margin-left: 390px;
  margin-right: 150px;

  overflow-y: auto;
}

.wrapper-header {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
}

.myheader {
  display: flex;
  justify-content: space-between;
  margin: 0 150px;
}

.wrapper-content {
  margin-top: 60px;
  padding: 20px 25px;
}

.wrapper-content > h2 {
  margin: 55px 0 20px;
}

.wrapper-content > p {
  color: #5e6d82;
  line-height: 1.5em;
  margin: 14px 0;
 }

 .example {
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 20px;
  position: relative;
  transition: all .2s ease-in-out;
  padding: 20px;
 }
 .example:hover {
    box-shadow: 0 2px 7px rgb(0 0 0 / 15%);
    border-color: transparent;
    position: relative;
 }

  .demo-data {
    margin: 5px;
    font-size: 14px;
    color: #b3b3b3;
 }

 .api table {
    font-family: Consolas,Menlo,Courier,monospace;
    font-size: 12px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
    width: 100%;
    margin-bottom: 24px;
 }

 .api table th {
    background: #f7f7f7;
    white-space: nowrap;
    color: #5c6b77;
    font-weight: 600;
 }

 .api table th, .api table td {
    border: 1px solid #e9e9e9;
    padding: 8px 16px;
    text-align: left;
 }

 .api h3 {
    font-size: 16px;
    font-weight: 400;
    margin: 8px 0;
 }
</style>