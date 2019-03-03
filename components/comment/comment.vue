<template>
  <div class="comment" >
    <div class="author">
      <a class="comment-author">
        <img :src="model.sender.picture" :alt="model.sender.nickname">
      </a>
      <div class="info">
        <a class="name">{{model.sender.nickname}}</a>
        <div class="meta"><span>{{model.floor}} {{$t('comment.floor')}} · {{model.createTime}}</span></div>
      </div>
    </div>

    <div class="comment-wrap">
      <p> {{model.content}} </p>
      <div class="tool-group">
        <a @click="giveLike">
          <i :class="{'fa': true, 'fa-thumbs-o-up': !like, 'fa-thumbs-up': like}"></i> 1{{$t('comment.actions.like')}}
        </a>
        <a @click="reply(model.sender)"> <i class="fa fa-comment-o"></i> {{$t('comment.actions.reply')}}</a>
      </div>
    </div>

    <div class="sub-comment-list" v-show="hasSubList">
      <div class="sub-comment" v-for="vol in subComments">
        <p>
          <nuxt-link class="sender"  :to="{name: 'user-id', params: {id: vol.sender.id}}">
            {{vol.sender.nickname}}：
          </nuxt-link>
          <nuxt-link class="receiver"  :to="{name: 'user-id', params: {id: vol.receiver.id}}">
            @{{vol.receiver.nickname}}
          </nuxt-link>
          {{vol.content}}
        </p>
        <div class="sub-tool-group">
          <span>{{vol.createTime}}</span>
          <a @click="reply(vol.sender)"> <i class="fa fa-comment-o"></i> {{$t('comment.actions.reply')}}</a>
        </div>
      </div>
      <div class="sub-comment more-comment" @click="reply(model.sender)">
        <i class="fa fa-pencil"></i> {{$t('comment.actions.new')}}
      </div>
      <transition name="fade">
        <post-comment @cancel="cancel" v-show="showPost" :nickname="nickname" :receiver="receiver"/>
      </transition>
    </div>
  </div>
</template>

<script>
	import PostComment from "./post";

  export default {
    components: {PostComment},
    props: {
		  subComments: {
		    type: Array,
        default: () => {
          return []
        }
      },
      model: {
		    type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        like: this.model.like,
        showPost: false,
        hasSubList: false,
        nickname: '',
        receiver: {}
      }
    },
    mounted(){
      if (this.subComments.length > 0) {
        this.hasSubList = true
      }
    },
    methods: {
		  giveLike() {
		    this.like = !this.like
        this.$store.dispatch('comment/giveLike', this.like)
      },
      cancel() {
        this.showPost = false
      },
      // 1. 显示子评论列表
      // 2. 重置接收者id
      reply(user) {
        this.hasSubList = true
        if (this.receiver !== user) {
          if (user === this.model.sender) {
            this.nickname = ''
          } else {
            this.nickname = `@${user.nickname} `
          }
          this.receiver = user
          if (!this.showPost) {
            this.showPost = true
          }
        } else {
          this.showPost = !this.showPost;
        }
      }
    }
	}
</script>

<style scoped>
  .sub-comment .sender:hover, .sub-comment .receiver:hover {
    color: #3194d0;
  }
  .sub-comment .sender, .sub-comment .receiver{
    color: #3194d0;
    cursor: pointer;
  }
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
    color: #000000 !important;
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
