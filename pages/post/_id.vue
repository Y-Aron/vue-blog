<template>
  <div class="left-container post-view">
    <post-container />

    <div class="whitebg">
      <h2 class="card-title">{{$t('postView.relation')}}</h2>
      <ul class="other-link">
        <li v-for="vol in 10">
          <nuxt-link :to="{name: 'post-id', params: {id: vol}}">html5 个人博客模板《蓝色畅想》</nuxt-link>
        </li>
      </ul>
    </div>
    <comment-container :comments="commentList" :author="author"/>
  </div>
</template>

<script>
  import { PostContainer, CommentContainer } from '~/components'

  export default {
    components: { PostContainer, CommentContainer },
    data() {
      return {
        author: {
          id: -1,
          nickname: '我是作者',
          picture: '/images/author.jpg'
        }
      }
    },
    computed: {
      commentList() {
        return this.$store.getters.getCommentList
      }
    }
  }

</script>

<style scoped>
  .post-view {
    width: 75%;
  }
</style>
