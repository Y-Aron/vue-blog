<template>
  <div id="user-container">
    <div class="left-container">
      <div class="main-top">
        <a class="avatar"><img src="/images/author.jpg" alt=""></a>
        <div class="title">
          <a class="name" href="/u/93eb5786199b">Y先生</a>
          <i class="fa fa-mars man"></i>
        </div>
        <div class="info">
          <ul>
            <li><a class="meta-block"><p>10</p> {{$t('userPage.concern')}} <i class="fa fa-angle-right"></i></a></li>
            <li><a class="meta-block"><p>10</p> {{$t('userPage.fans')}} <i class="fa fa-angle-right"></i></a></li>
            <li><a class="meta-block"><p>10</p> {{$t('userPage.posts')}} <i class="fa fa-angle-right"></i></a></li>
            <li><a class="meta-block"><p>10</p> {{$t('userPage.words')}}</a></li>
            <li><a class="meta-block no-border"><p>10</p> {{$t('userPage.harvest_love')}}</a></li>
          </ul>
        </div>
      </div>

      <tabs v-show="showDefaultTabs">
        <tab-panel v-for="(vol, index) in defaultTabs" :label="vol.label" :name="index" :style="{'display': index===0?'block':'none'}">
          <note-list />
        </tab-panel>
      </tabs>

      <tabs v-show="!showDefaultTabs" :width="200" v-model="postIndex">
        <tab-panel v-for="(vol, index) in postTabs" :label="vol.label" :name="index" :style="{'display': index===0?'block':'none'}">
          <note-list />
        </tab-panel>
      </tabs>

    </div>

    <div class="right-container aside">
      <div class="title">个人介绍</div>
      <a class="edit" @click="showEdit=true"><i class="fa fa-edit"></i> 编辑</a>
      <div class="description">
        <p v-show="!showEdit">{{description}}</p>
        <div v-show="showEdit">
          <textarea v-model="description" ></textarea>
          <input type="submit" class="save" value="保存">
          <a class="cancel" @click="showEdit=false">取消</a>

        </div>
      </div>
      <ul class="user-dynamic">
        <li>
          <a @click="showPostTabs(0)"><i class="fa fa-book"></i> {{$t('userPage.postTabs.my_focus')}}</a>
        </li>
        <li>
          <a @click="showPostTabs(1)"><i class="fa fa-heart-o"></i> {{$t('userPage.postTabs.my_like_articles')}}</a>
        </li>
      </ul>
      <div class="user-special">
        <div class="title">我创建的专题</div>
        <a href=""><i class="fa fa-plus"></i> 创建一个新专题</a>
        <ul class="list">
          <li><a href="" class="img"><img src="/images/author.jpg" alt=""></a> <a href="" class="name">Java架构</a></li>
          <li><a href="" class="img"><img src="/images/author.jpg" alt=""></a> <a href="" class="name">Java架构</a></li>
          <li><a href="" class="img"><img src="/images/author.jpg" alt=""></a> <a href="" class="name">Java架构</a></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import Tabs from "../../components/tabs/tabs";
  import TabPanel from "../../components/tabs/tabPanel";
  import NoteList from "../../components/user/noteList";
  export default {
    components: {NoteList, TabPanel, Tabs},
    methods: {
      showPostTabs(pos) {
        this.showDefaultTabs = false
        this.postIndex = pos
      }
    },
    data() {
      return {
        uid: 0,
        description: '简介 ',
        showEdit: false,
        showDefaultTabs: true,
        postIndex: 0,
        defaultTabs: [{
          label: `<i class='fa fa-file-text'></i> ${this.$t('userPage.defaultTabs.post')}`,
          list: [

          ]
        }, {
          label: `<i class='fa fa-bell' style='transform: rotate(30deg);'></i> ${this.$t('userPage.defaultTabs.dynamic')}`,
        },{
          label: `<i class='fa fa-comments'></i> ${this.$t('userPage.defaultTabs.comment')}`,
        }, {
          label: `<i class='fa fa-magic'></i> ${this.$t('userPage.defaultTabs.hot')}`
        }],
        postTabs: [{
          label: `${this.$t('userPage.postTabs.focus')} 6`
        },{
          label: `${this.$t('userPage.postTabs.like_articles')} 12`
        }],

      }
    },

    mounted() {
      this.id = this.$route.params.id
      window.addEventListener('resize', () => {
        let width = window.innerWidth
        if (width <= 380) { width = 380}
        document.querySelector('.tab-labels > ul').style.cssText = `width: ${width}px`
      })
    }
  }
</script>

<style>
  .left-container {
    width: 66.6%;
  }
  body {
    background-color: white;
  }

  .tab-labels > ul li {
    color: #969696;
    font-size: 15px;
    /*margin: 0 20px;*/
  }
  .tab-label-current {
    color: #646464 !important;
  }
  .whitebg {
    padding: 0 !important;
  }
</style>

<style scoped>
  .description .cancel:hover {
    color: black;
  }
  .description .cancel {
    margin-left: 10px;
    font-size: 14px;
    color: #969696;
    line-height: 34px;
    vertical-align: middle;
    cursor: pointer;
  }
  .description .save:hover {
    background-color: #F3F3F3;
    cursor: pointer;
  }
  .description .save {
    border: 1px solid rgba(59,194,29,.7);
    color: #42c02e!important;
    padding: 5px 20px;
    font-size: 14px;
    outline: none;
    border-radius: 40px;
    background: none;
  }
  .description textarea {
    margin-bottom: 5px;
    width: 90%;
    height: 125px;
    padding: 5px 10px;
    font-size: 14px;
    background-color: hsla(0,0%,71%,.1);
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    resize: none;
    outline: none;
  }
  .user-special .list .name {
    font-size: 14px;
    color: #333;
    margin-top: 8px;
  }
  .user-special .list img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 10%;
  }
  .user-special .list .img {
    height: 32px;
    width: 32px;
    margin-right: 5px;
  }
  .user-special .list li {
    display: flex;
    margin-bottom: 10px;
  }
  .user-special>a {
    color: #42c02e;
    font-size: 13px;
    margin-bottom: 10px;
    display: block;
  }
  .user-special > .title{
    margin-bottom: 10px;
    font-size: 14px;
    color: #969696;
  }
  .user-special {
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
  .user-dynamic a {
    font-size: 14px;
    color: #333;
    line-height: 30px;
  }
  .user-dynamic i {
    margin-right: 10px;
    font-size: 20px;
    vertical-align: middle;
  }
  .user-dynamic li{
    margin-bottom: 10px;
    cursor: pointer;
  }
  .user-dynamic {
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 16px;
    padding-bottom: 6px;
  }
  #user-container .aside > div.description {
    clear: both;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 16px;
    padding-bottom: 16px;
    word-break: break-word !important;
  }
  #user-container .aside > a.edit:hover {
    color: black;
    cursor: pointer;
  }
  #user-container .aside > a.edit {
    float: right;
    font-size: 13px;
    color: #969696;
  }
  #user-container .aside > div.title {
    float: left;
    margin-bottom: 10px;
    font-size: 14px;
    color: #969696;
  }
  .no-border {
    border-right: none !important;
  }
  .meta-block p{
    margin-bottom: -3px;
    font-size: 15px;
    color: #333;
    font-family: Georgia,Times New Roman,Times,Songti SC,serif;
  }
  .meta-block {
    font-size: 12px;
    margin: 0 7px 6px 0;
    padding: 0 7px 0 0;
    border-right: 1px solid #DBDBDB;
    color: #969696;
    display: block;
  }
  .main-top .info li {
    display: inline-block;
    line-height: 20px;
  }
  .main-top .info {
    margin-top: 5px;
    padding-left: 100px;
    font-size: 14px;
  }
  .main-top .title>.man {
    color: #3194d0;
    font-size: 17px;
    vertical-align: middle;
  }
  .main-top .title>.name {
    display: inline;
    font-size: 21px;
    font-weight: 700;
    vertical-align: middle;
  }
  .main-top .title {
    padding: 5px 0 0 100px;
  }
  .main-top .avatar>img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .main-top a.avatar {
    float: left;
    width: 80px;
    height: 80px;
    margin-left: -2px;
  }
  #user-container div.main-top{
    margin-bottom: 20px;
  }
  #user-container {
    padding: 0 8px;
  }
</style>
