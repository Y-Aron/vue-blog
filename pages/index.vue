<template>
  <div>
    <article-nav />
    <div class="left-container home-view">

      <Carousel/>

      <div class="headline">
        <div class="image-box-list">
          <image-box :title="'为什么说10月24日是程序员的节日？'" :src="'/images/h1.jpg'" :height="125"/>
          <image-box :title="'个人网站做好了，百度不收录怎么办？来，看看他们怎么做的'" :src="'/images/h2.jpg'" height="125" />
        </div>
      </div>

      <div class="clear-blank"></div>

      <tab-container />

      <special-container />

      <blog-list />

    </div>
  </div>

</template>

<script>
  import {BlogList, SpecialContainer, TabContainer} from "~/components";
  import Carousel from "../components/widgets/carousel";
  import ImageBox from "../components/widgets/imageBox";
  import ArticleNav from "../components/widgets/articleNav";
  export default {
    name: "leftContainer",
    components: {ArticleNav, BlogList, SpecialContainer, TabContainer, ImageBox, Carousel},
  }
</script>

<style scoped>
  .home-view {
    width: 66%;
    margin-left: 100px
  }
</style>
