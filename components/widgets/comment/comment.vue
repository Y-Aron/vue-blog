<template>
  <div class="comment" >
    <div class="author">
      <a class="comment-author">
        <img src="/images/author.jpg" >
      </a>
      <div class="info">
        <a class="name">小鱼儿他老汉</a>
        <div class="meta"><span>5楼 · 2018.09.29 17:27</span></div>
      </div>
    </div>

    <div class="comment-wrap">
      <p>
        赞。就是无法访问串口和USB串口。所以，我还是得保留虚拟机。此外，ubuntu子系统下编译软件还是不如原生ubuntu速度快。
      </p>
      <div class="tool-group">
        <a>
          <i class="fa fa-thumbs-o-up"></i>
          1人点赞
        </a>
        <a @click="showSublist"> <i class="fa fa-comment-o"></i> 回复</a>
      </div>
    </div>

    <div class="sub-comment-list" v-show="hasSubList">
      <div class="sub-comment">
        <p>测试？？</p>
        <div class="sub-tool-group">
          <span>2019.01.11 16:06</span>
          <a @click="showPost=!showPost"> <i class="fa fa-comment-o"></i> 回复</a>
        </div>
      </div>
      <div class="sub-comment more-comment" @click="showPost=!showPost">
        <i class="fa fa-pencil"></i>
        添加新评论
      </div>
      <transition name="fade">
        <post-comment @cancel="cancel" v-show="showPost"/>
      </transition>

    </div>
  </div>
</template>

<script>
	import PostComment from "./postComment";
  export default {
		name: "comment",
    components: {PostComment},
    data() {
      return {
        showPost: false,
        hasSubList: false,
        subComments: [
          
        ]
      }
    },
    mounted(){
      // this.$store.dispatch('comment/formatComments')
    },
    methods: {
      cancel() {
        this.showPost = false
      },
      showSublist() {
        this.showPost=!this.showPost;
        this.hasSubList=true
      }
    }
	}
</script>

<style scoped>
  .sub-tool-group>span {
    font-size: 12px;
    color: #969696;
    font-family: Georgia,Times New Roman,Times,Songti SC,serif;
  }
  .more-comment:hover {
    color: #1C2327;
    cursor: pointer;
  }
  .more-comment {
    color: #969696;
  }
  .sub-comment > p {
    margin: 0 0 5px;
    font-size: 14px;
    line-height: 1.5;
  }
  .sub-comment {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #f0f0f0;
  }
  .sub-comment-list {
    margin-top: 20px;
    padding: 5px 0 5px 20px;
    border-left: 2px solid #d9d9d9;
  }
  .sub-tool-group> a {
    font-size: 12px;
    margin-left: 10px;
  }
  .tool-group > a:hover, .sub-tool-group> a:hover{
    color: #47B8FB !important;
  }
  .comment-wrap .tool-group > a, .sub-tool-group > a {
    cursor: pointer;
    margin-right: 10px;
    color: #969696;
  }
  .comment-wrap>p{
    font-size: 16px;
    margin: 10px 0;
    line-height: 1.5;
  }
  .comment .meta {
    font-size: 12px;
    color: #969696;
    font-family: Georgia,Times New Roman,Times,Songti SC,serif;
  }
  .comment .info {
    display: inline-block;
    vertical-align: middle;
  }
  .comment>.author {
    margin-bottom: 13px;
  }
  .comment {
    padding: 20px 0 30px;
    border-bottom: 1px solid #f0f0f0;
  }
</style>
