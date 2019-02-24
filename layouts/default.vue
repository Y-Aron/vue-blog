<template>
  <div>
    <md-editor />
    <!--<layout-header />-->
    <!--<layout-search />-->
    <!--<layout-article />-->
    <!--<layout-footer />-->
    <!--<nuxt/>-->

    <!--<div class="lang-mermaid">-->
      <!--graph LR-->
      <!--A -&#45;&#45; B-->
      <!--B&ndash;&gt;C[fa:fa-ban forbidden]-->
      <!--B&ndash;&gt;D(fa:fa-spinner);-->
    <!--</div>-->
    <!--<div class="mermaid">-->
      <!--graph LR-->
      <!--A -&#45;&#45; B-->
      <!--B&ndash;&gt;C[fa:fa-ban forbidden]-->
      <!--B&ndash;&gt;D(fa:fa-spinner);-->
    <!--</div>-->

  </div>
</template>

<script>
  import layoutHeader from "../components/layout/layoutHeader";
  import LayoutSearch from "../components/layout/layoutSearch";
  import LayoutArticle from "../components/layout/layoutArticle";
  import LayoutFooter from "../components/layout/layoutFooter";
  import MdEditor from "../components/widgets/markdown/mdEditor";

  let mermaid
  if (process.client) {
    mermaid = require('mermaid')
    mermaid.initialize({startOnLoad:true})
    mermaid.init({noteMargin: 10}, '.lang-mermaid')
  }

  export default {
    components: {MdEditor, LayoutFooter, LayoutArticle, LayoutSearch, layoutHeader},
    data() {
      return {
        md: ''
      }
    },
    beforeMount() {
      // const ms = document.querySelectorAll('.lang-mermaid');
      //
      // console.log(ms)
      // // var insertSvg = function(svgCode, bindFunctions){
      // //   element.innerHTML = svgCode;
      // // };
      // ms.forEach((vol, index) => {
      //   mermaid.render(`mermaid${index}`, vol.innerHTML, (svgCode, bindFunctions) => {
      //     vol.innerHTML = svgCode
      //     console.log(svgCode)
      //     console.log(bindFunctions)
      //   })
      // })
      // var element = document.querySelector("#graphDiv");
      //

      //
      // const graphDefinition = 'graph TB\na-->b';
      // const graphDefinition = this.$refs['graphDiv'].innerHTML;

      // mermaid.init(undefined, '#graphDiv')
      // var graph = mermaid.render('graphDiv', graphDefinition, insertSvg);

    }
  }
</script>
