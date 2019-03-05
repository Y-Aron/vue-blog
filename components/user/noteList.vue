<template>
  <ul class="note-list">
    <li>
      <div class="author">
        <a href=""><img src="/images/author.jpg" alt=""></a>
        <div class="info">
          <a class="nickname" href="/">Y先生_ce2c</a>
          <span> 发表了评论 · 03.2 19:53</span>
        </div>
      </div>
      <p class="comment">
        <a href="">@某人</a>
        测试
      </p>
      <blockquote>
        <a href="" class="title">标题标题标题标题标题标题标题</a>
        <p class="text">相信大家都会对Linux系统有一定程度的需求，但是目前所有Linux发行版的桌面环境实在是不太友好</p>
        <div class="meta">
          <a href="">Y-Aron1</a>
          <a href=""><i class="fa fa-eye"></i> 10</a>
          <a href=""><i class="fa fa-commenting"></i> 30</a>
          <a href=""><i class="fa fa-heart"></i> 34</a>
        </div>
      </blockquote>
    </li>

    <li>
      <div class="author">
        <a href=""><img src="/images/author.jpg" alt=""></a>
        <div class="info">
          <a class="nickname" href="/">Y先生_ce2c</a>
          <span> 发表了评论 · 03.2 19:53</span>
        </div>
      </div>
      <div style="display: flex">
        <div class="content">
          <a class="title" href="/">全程手写Spring MVC有多难？</a>
          <p class="text">人见人爱的Spring已然不仅仅只是一个框架了。如今，Spring已然成为了一个生态。但深入了解Spring的却寥寥无几。这里，我带大家一起来看看，我是如何手写Spring的...</p>
          <div class="meta">
            <a href="">Y-Aron1</a>
            <a href=""><i class="fa fa-eye"></i> 10</a>
            <a href=""><i class="fa fa-commenting"></i> 30</a>
            <a href=""><i class="fa fa-heart"></i> 34</a>
          </div>
        </div>
        <a href="" class="wrap-img"><img src="/images/text04.jpg" alt=""></a>
      </div>
    </li>

  </ul>
</template>

<script>
	export default {
		name: "noteList",

    data() {
		  return {
		    list: [{

        }]
      }
    }
	}
</script>

<style scoped>
  .note-list a.wrap-img img{
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
  .note-list a.wrap-img {
    width: 186px;
    height: 100px;
    margin-top: -25px;
  }
  .note-list .content .title:hover{
    text-decoration: underline;
  }
  .note-list .content .title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }
  .note-list .content {
    padding-right: 8px;
  }
  .note-list .meta > a {
    font-size: 13px;
    color: #969696;
    margin-right: 10px;
  }
  .note-list p.text {
    font-size: 13px;
    line-height: 24px;
    color: #999;
    margin-bottom: 8px;
  }
  .note-list blockquote>a.title:hover {
    text-decoration: underline;
  }
  .note-list blockquote>a.title {
    font-family: Georgia,Times New Roman,Times,Songti SC,serif;
    color: #969696;
    margin: 0 0 4px;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.5;
  }
  .note-list blockquote {
    color: #969696;
    border-left: 3px solid #d9d9d9;
    padding: 10px 20px;
    font-size: 17px;
  }
  .note-list .comment>a {
    color: #3194d0;
  }
  .note-list .comment {
    font-size: 15px;
    line-height: 1.7;
    margin: 0 0 10px;
  }
  .note-list .author img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .note-list .author .info span {
    display: inline-block;
    padding-left: 3px;
    color: #969696;
    vertical-align: middle;
    font-size: 13px;
    font-family: Georgia,Times New Roman,Times,Songti SC,serif;
  }
  .note-list .author a, .note-list .author .info {
    display: inline-block;
    vertical-align: middle;
    margin: 0 5px 0 0;
  }
  .note-list .author>a{
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .note-list .author {
    margin-bottom: 14px;
    font-size: 13px;
  }
  .note-list li{
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 18px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
  }
</style>
