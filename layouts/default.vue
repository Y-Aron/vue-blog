<template>
  <div>
    <layout-header />
    <layout-search />
    <layout-article />
    <layout-footer />
  </div>
</template>

<script>
  import layoutHeader from "../components/layout/layoutHeader";
  import LayoutSearch from "../components/layout/layoutSearch";
  import LayoutArticle from "../components/layout/layoutArticle";
  import LayoutFooter from "../components/layout/layoutFooter";

  export default {
    components:  {LayoutFooter, LayoutArticle, LayoutSearch, layoutHeader},
  }
</script>
