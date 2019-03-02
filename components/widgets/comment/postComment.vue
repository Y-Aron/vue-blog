<template>
  <div class="post-comment">
    <div style="display: flex;">
      <a class="comment-author" v-show="showAuthor">
        <img src="/images/author.jpg">
      </a>

      <textarea class="comment-text" v-model="text"
                @focus="showBtn = true"
                :placeholder="$t('comment.new.placeholder')"></textarea>
    </div>
    <transition name="fade">
      <div class="post-comment-btn" v-show="showBtn">
        <a class="cancel" @click="cancel">{{$t('comment.new.cancel')}}</a>
        <a class="send" @click="send">
          <i class="fa fa-spinner fa-pulse fa-fw" v-show="sending"></i>
          {{$t('comment.new.send')}}
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
	export default {
		name: "postComment",
    props: {
		  showAuthor: false
    },
    data() {
		  return {
		    text: '',
        sending: false,
        showBtn: false
      }
    },
    methods: {
		  send() {
        this.sending = true

        setTimeout(() => {
          this.sending = false
        }, 1000)
      },
      cancel() {
        this.showBtn = false
        this.$emit('cancel')
      }
    }
	}
</script>

<style scoped>
  .post-comment-btn>a.send{
    width: 78px;
    padding: 8px 18px;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    color: #fff!important;
    background-color: #42c02e;
    cursor: pointer;
    outline: none;
  }
  .post-comment-btn>a {
    cursor: pointer;
  }
  .post-comment-btn>a.cancel:hover {
    color: #1C2327;
  }
  .post-comment-btn>a.cancel{
    margin: 10px 30px 0 0;
    font-size: 16px;
    color: #969696;
    display: inline-block;
  }
  .post-comment-btn {
    text-align: right;
    margin: 5px 0;
  }

  textarea.comment-text {
    padding: 10px 15px;
    width: 87%;
    height: 80px;
    font-size: 13px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
    resize: none;
    display: inline-block;
    vertical-align: top;
    outline-style: none;
    flex: 9.3;
  }
  .comment-author {
    flex: .7;
  }
</style>
