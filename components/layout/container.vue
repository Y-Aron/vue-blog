<template>
  <article>
    <nuxt />
  </article>
</template>

<script>
  import Carousel from "../widgets/carousel";
  import ImageBox from "../widgets/imageBox";
  import SpecialContainer from "../special";
  import ArticleNav from "../widgets/articleNav";
  import BlogList from "../blog";
  import TabContainer from "../tabs";

  export default {
    components: {TabContainer, BlogList, ArticleNav, SpecialContainer, ImageBox, Carousel},
  }
</script>
