<template>
  <li>
    <h3 class="blog-item-title">
      <a href="/" target="_blank"></a>{{title}}</h3>
    <span class="blog-item-image img-scale">
        <i><a href="/"></a>{{type}}</i>
        <a href="/" title=""><img src="images/b01.jpg" alt=""></a>
    </span>
    <p class="blog-item-text" style="-webkit-box-orient: vertical;">
      {{text}}
    <p class="blog-item-info">
      <i class="avatar"><img src="images/avatar.jpg"></i>
      <span>{{author}}</span>
      <span>{{createdate}}</span>
      <span>【<a href="/">{{type}}</a>】</span>
    </p>
    <nuxt-link :to="{name: 'post-id', params: {id: 1}}" class="blog-item-view-more">{{view_more}}</nuxt-link>
  </li>
</template>

<script>
  export default {
    name: "post",
    data() {
      return {
        hover: false,
        title: '【个人博客网站制作】自己不会个人博客网站制作，你会选择用什么博客程序源码？',
        type: '原创模板',
        text: '这些开源的博客程序源码，都是经过很多次版本测试的，都有固定的使用人群。我所知道的主流的博客程序有，Z-blog，Emlog，WordPress，Typecho等，免费的cms系统有，织梦cms（dedecms），phpcms，帝国cms（EmpireCMS）！... ',
        author: '杨青青',
        createdate: '2018-10-28',
        view_more: '阅读更多'
      }
    }
  }
</script>
