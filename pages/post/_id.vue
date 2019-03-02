<template>
  <div class="left-container post-view">
    <!--<post-container />-->

    <!--<div class="whitebg">-->
      <!--<h2 class="card-title">{{$t('postView.relation')}}</h2>-->
      <!--<ul class="other-link">-->
        <!--<li v-for="vol in 10">-->
          <!--<nuxt-link :to="{name: 'post-id', params: {id: vol}}">html5 个人博客模板《蓝色畅想》</nuxt-link>-->
        <!--</li>-->

      <!--</ul>-->
    <!--</div>-->
    <comment-container />
  </div>
</template>

<script>
  import postContainer from "../../components/containers/postContainer";
  import CommentContainer from "../../components/containers/commentContainer";
  export default {
    components: {CommentContainer, postContainer}
  }

</script>

<style scoped>
  .post-view {
    width: 75%;
  }
</style>
