<template>
  <div>
    <layout-header />
    <layout-search />
    <layout-container />
    <!--<layout-footer />-->
  </div>
</template>

<script>
  import {LayoutContainer, LayoutFooter, LayoutHeader, LayoutSearch} from "~/components";

  export default {
    components:  {LayoutFooter, LayoutContainer, LayoutSearch, LayoutHeader},
  }
</script>
