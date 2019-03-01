<template>
  <div class="left-container post-view">
    <post-container />

    <div class="whitebg">
      <h2 class="card-title">{{$t('postView.relation')}}</h2>
      <ul class="otherlink">
        <li v-for="vol in 10">
          <nuxt-link :to="{name: 'post-id', params: {id: vol}}">html5 个人博客模板《蓝色畅想》</nuxt-link>
        </li>

      </ul>
    </div>

    <div class="whitebg gbook">
      <h2 class="card-title">文章评论</h2>
      <ul>
      </ul>
    </div>
  </div>
</template>

<script>
  import postContainer from "../../components/containers/postContainer";
  export default {
    components: {postContainer}
  }

</script>

<style scoped>
  .post-view {
    width: 75%;
  }
</style>
