<template>
  <div id="app-header">
    <div class="app-header-nav">
      <h2 id="app-min-nav"><span class="app-min-icon"></span></h2>
      <div class="logo"><a href="http://www.yangqq.com">{{$t('header.logo')}}</a></div>
      <nav id="app-nav">
        <ul id="app-nav-list">
          <li><a href="index.html"><i class="fa fa-home"></i> {{$t('header.home')}}</a></li>
          <li><a href="list.html">个人博客日记</a></li>
          <li class="menu"><a href="list2.html">博客网站制作</a>
            <ul class="sub">
              <li><a href="/6">推荐工具</a></li>
              <li><a href="/7">JS经典实例</a></li>
              <li><a href="/8">网站建设</a></li>
              <li><a href="/7">CSS3|Html5</a></li>
              <li><a href="/8">心得笔记</a></li>
            </ul>
            <span></span></li>
          <li><a href="list3.html">网页设计心得</a></li>
          <li><a href="daohang.html">优秀个人博客</a></li>
          <li><a href="about.html">关于我</a></li>
          <li><a class="write-post" style="cursor: pointer;"><i></i>写博客</a></li>
          <li><a href="about.html">登录</a></li>
          <li><a href="about.html">注册</a></li>
        </ul>
      </nav>

      <div class="app-header-search" @click="showSearch"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layoutHeader",
    methods: {
      showSearch() {
        this.$store.commit('config/TOGGLE_SEARCH', !this.$store.state.config.opSearch)
      }
    }
  }
</script>
