<template>
  <div class="whitebg blog-list">
    <h2 class="card-title">最新博文</h2>
    <ul>
      <!--多图模式 置顶设计-->
      <li>
        <h3 class="blog-item-title">
          <a href="/" target="_blank"><b>【顶】</b>别让这些闹心的套路，毁了你的网页设计!</a></h3>
        <span class="blog-item-images">
          <a href="/"><img src="/images/b02.jpg" alt=""></a>
          <a href="/"><img src="/images/b03.jpg" alt=""></a>
          <a href="/"><img src="/images/b04.jpg" alt=""></a>
          <a href="/"><img src="/images/b05.jpg" alt=""></a>
        </span>
        <p class="blog-item-text">
          如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if
          来判断，输出。思路已打开，样式调用就可以多样化啦！... </p>
        <p class="blog-item-info"><i class="avatar">
          <img src="images/avatar.jpg" alt=""></i><span>杨青青</span><span>2018-10-28</span><span>【<a href="/">原创模板</a>】</span>
        </p>
      </li>
      <!--单图-->
      <post />
    </ul>
  </div>
</template>

<script>
	import Post from "./post";
  export default {
    components: {Post}
  }
</script>
