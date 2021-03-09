<template>
  <div class="anchorWrapper">
    <Anchor show-ink>
        <AnchorLink href="#basic" title="基础用法" />
        <AnchorLink href="#offset" title="偏移" />
        <AnchorLink href="#icooffsetBottomn" title="固定在底部" />
        <AnchorLink href="#change" title="固定状态改变时的回调" />
        <AnchorLink href="#API" title="API" />
    </Anchor>
  </div>
  
  <h1>Carousel 走马灯</h1>
  <p>常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</p>

  <h2 id="basic">基础用法</h2>
  <p>最基本的用法。</p>
  <div class="example">
    <Carousel v-model="value1" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
import { ref } from 'vue';
import Carousel from "../components/carousel";
import Anchor from "./../components/anchor";

const AnchorLink = Anchor.Link;
const CarouselItem = Carousel.Item;

export default {
  components: { Carousel, CarouselItem, Anchor, AnchorLink },
  setup() {
      const value1 = ref(0);

      return {
          value1
      }
  }

}
</script>

<style>
.demo-carousel {
    height: 200px;
    line-height: 200px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    background: #506b9e;
}
</style>