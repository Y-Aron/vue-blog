<template>
  <div class="app-comment whitebg">

    <h2 class="card-title"><i class="fa fa-pencil"></i> {{$t('comment.post')}}</h2>
    <post-comment :show-author="true" />

    <div class="comment-list">
      <div class="top-title">
        <span>6条评论</span>
        <a class="author-only">只看作者</a>

        <div class="date-sort">
          <a class="active">按时间倒序</a>
          <a class="">按时间正序</a>
        </div>
      </div>

      <comment />

    </div>
  </div>
</template>

<script>
  import PostComment from "../widgets/comment/postComment";
  import Comment from "../widgets/comment/comment";
  export default {
    name: "commentContainer",
    components: {Comment, PostComment},
  }
</script>
<style>
  .comment-author > img {
    width: 38px;
    height: 38px;
    margin-right: 10px;
    margin-left: 5px;
    border-radius: 50%;
    float: left;
  }
</style>
<style scoped>
  .comment-list .date-sort > a.active {
    color: #1C2327;
  }
  .comment-list .date-sort > a:hover {
    color: #1C2327;
  }
  .comment-list .date-sort > a {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #969696;
    cursor: pointer;
    display: inline-block;
  }
  .comment-list .date-sort {
    float: right;
  }
  .comment-list .author-only {
    margin-left: 10px;
    padding: 4px 8px;
    font-size: 12px;
    color: #969696;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    cursor: pointer;
  }
  .comment-list .top-title {
    padding-bottom: 18px;
    font-size: 17px;
    font-weight: 700;
    border-bottom: 1px solid #f0f0f0;
  }
  .comment-list {
    margin-top: 30px;
  }
</style>
