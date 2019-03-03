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
            <li>
              <a class="meta-block">
                <p>10</p> 关注 <i class="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a class="meta-block">
                <p>10</p> 粉丝 <i class="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a class="meta-block">
                <p>10</p> 文章 <i class="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a class="meta-block">
                <p>10</p> 字数
              </a>
            </li>
            <li>
              <a class="meta-block no-border">
                <p>10</p> 收获喜欢
              </a>
            </li>
          </ul>
        </div>
      </div>

      <tabs>
        <tab-panel :label="`<i class='fa fa-file-text'></i> 文章`" :name="0">
          <note-list />


        </tab-panel>
        <tab-panel :label="`<i class='fa fa-bell' style='transform: rotate(30deg);'></i> 动态`" :name="1">
          文章2 ...1111

        </tab-panel>
        <tab-panel :label="`<i class='fa fa-comments'></i> 最新评论`" :name="2">
          文章3 ...

        </tab-panel>
        <tab-panel :label="`<i class='fa fa-magic'></i> 热门`" :name="3">

        </tab-panel>
      </tabs>

    </div>

    <div class="right-container aside">
      <div class="title">个人介绍</div>
      <a class="edit" ><i class="fa fa-edit"></i> 编辑</a>
      <div class="description">
        简介
      </div>
      <ul class="user-dynamic">
        <li>
          <a href=""><i class="fa fa-book"></i> 我关注的专题/文集/连载</a>
        </li>
        <li>
          <a href=""><i class="fa fa-heart-o"></i> 我喜欢的文章</a>
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
    mounted() {
      this.id = this.$route.params.id
    },
    data() {
      return {
        uid: 0
      }
    }
  }
</script>

<style>
  .left-container {
    width: 66.6%;
  }
  body {
    background-color: #fff !important;
  }
  .tab-labels > ul li {
    color: #969696;
    font-size: 15px;
    margin: 0 3px;
  }
  .tab-label-current {
    color: #646464 !important;
  }
  .whitebg {
    padding: 0 !important;
  }
</style>

<style scoped>
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
