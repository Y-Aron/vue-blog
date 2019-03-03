<template>
  <tabs v-model="tabName">
    <tab-panel v-for="(item, index) in tabs"
               :key="index" :label="item.label" :name="index"
               :style="{'display': index !== 0?'none':'block'}">
      <div class="tab-panel-picture" >
        <div class="picture-list">
          <image-box v-for="vol in item.imageList" :src="vol.src" :key="vol.title" :title="vol.title" :height="100"/>
        </div>
      </div>

      <ul class="tab-panel-item-list">
        <li v-for="(vol, index) in item.list">
          <i><span>{{index+1}}</span></i>
          <a href="/" style="-webkit-box-orient: vertical;">{{vol.title}}</a>
          <p style="-webkit-box-orient: vertical;">{{vol.details}}</p>
        </li>
      </ul>
    </tab-panel>
  </tabs>

</template>

<script>
	import Tabs from "./tabs";
  import TabPanel from "./tabPanel";
  import ImageBox from "../widgets/imageBox";
  export default {
    components: {ImageBox, TabPanel, Tabs},
    data() {
      return {
        tabName: 0,
        tabs: [
          {
            label: '个人博客',
            list: [
              {details: '个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。', title: '个人博客，属于我的小世界！'},
              {details: '自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。', title: '安静地做一个爱设计的女子'},
              {details: '为了挨打轻一些，问我哪里来的，我瞎说了一个说那个谁家的，结果，打得更凶。最后事情还原了真相，我妈说，你要说说奶奶家的，都不会打你了。从此以后，我知道撒谎是会付出更惨痛的代价的，我不再撒谎，也不喜欢爱撒谎的人。', title: '我是怎么评价自己的？'},
              {details: '不管你是学前端的还是后端的，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了', title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。'},
              {details: '帝国cms的留言板系统很简单，用户名，邮箱，电话，没有头像显示，如果要增加头像选择，而又不增加表或者字段的情况下，选择改用其中一个字段，比如电话这个，修改一下即可', title: '做个人博客如何用帝国cms美化留言增加头像选择'},
            ],
            imageList: [
              { src: '/images/1.jpg', title: '个人博客，属于我的小世界！'},
              { src: '/images/2.jpg', title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的'},
            ]
          },
          {
            label: '工作日记',
            list: [
              {details: '工作日记，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。', title: '个人博客，属于我的小世界！'},
              {details: '工作日记，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。', title: '安静地做一个爱设计的女子'},
              {details: '工作日记，问我哪里来的，我瞎说了一个说那个谁家的，结果，打得更凶。最后事情还原了真相，我妈说，你要说说奶奶家的，都不会打你了。从此以后，我知道撒谎是会付出更惨痛的代价的，我不再撒谎，也不喜欢爱撒谎的人。', title: '我是怎么评价自己的？'},
              {details: '工作日记，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了', title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。'},
              {details: '工作日记，用户名，邮箱，电话，没有头像显示，如果要增加头像选择，而又不增加表或者字段的情况下，选择改用其中一个字段，比如电话这个，修改一下即可', title: '做个人博客如何用帝国cms美化留言增加头像选择'},
            ],
            imageList: [
              { src: '/images/3.jpg', title: '个人博客，属于我的小世界！'},
              { src: '/images/4.jpg', title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的'},
            ]
          },
          {
            label: '心路历程',
            list: [
              {details: '心路历程，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。', title: '个人博客，属于我的小世界！'},
              {details: '心路历程，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。', title: '安静地做一个爱设计的女子'},
              {details: '心路历程，问我哪里来的，我瞎说了一个说那个谁家的，结果，打得更凶。最后事情还原了真相，我妈说，你要说说奶奶家的，都不会打你了。从此以后，我知道撒谎是会付出更惨痛的代价的，我不再撒谎，也不喜欢爱撒谎的人。', title: '我是怎么评价自己的？'},
              {details: '心路历程，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了', title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。'},
              {details: '心路历程，用户名，邮箱，电话，没有头像显示，如果要增加头像选择，而又不增加表或者字段的情况下，选择改用其中一个字段，比如电话这个，修改一下即可', title: '做个人博客如何用帝国cms美化留言增加头像选择'},
            ],
            imageList: [
              { src: '/images/1.jpg', title: '个人博客，属于我的小世界！'},
              { src: '/images/3.jpg', title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的'},
            ]
          },
          {
            label: '我的博客',
            list: [
              {details: '我的博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。', title: '个人博客，属于我的小世界！'},
              {details: '我的博客，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。', title: '安静地做一个爱设计的女子'},
              {details: '我的博客，问我哪里来的，我瞎说了一个说那个谁家的，结果，打得更凶。最后事情还原了真相，我妈说，你要说说奶奶家的，都不会打你了。从此以后，我知道撒谎是会付出更惨痛的代价的，我不再撒谎，也不喜欢爱撒谎的人。', title: '我是怎么评价自己的？'},
              {details: '我的博客，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了', title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。'},
              {details: '我的博客，用户名，邮箱，电话，没有头像显示，如果要增加头像选择，而又不增加表或者字段的情况下，选择改用其中一个字段，比如电话这个，修改一下即可', title: '做个人博客如何用帝国cms美化留言增加头像选择'},
            ],
            imageList: [
              { src: '/images/2.jpg', title: '个人博客，属于我的小世界！'},
              { src: '/images/3.jpg', title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的'},
            ]
          },
          {
            label: '前端技术',
            list: [
              {details: '前端技术，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。', title: '个人博客，属于我的小世界！'},
              {details: '前端技术，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。', title: '安静地做一个爱设计的女子'},
              {details: '前端技术，问我哪里来的，我瞎说了一个说那个谁家的，结果，打得更凶。最后事情还原了真相，我妈说，你要说说奶奶家的，都不会打你了。从此以后，我知道撒谎是会付出更惨痛的代价的，我不再撒谎，也不喜欢爱撒谎的人。', title: '我是怎么评价自己的？'},
              {details: '前端技术，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了', title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。'},
              {details: '前端技术，用户名，邮箱，电话，没有头像显示，如果要增加头像选择，而又不增加表或者字段的情况下，选择改用其中一个字段，比如电话这个，修改一下即可', title: '做个人博客如何用帝国cms美化留言增加头像选择'},
            ],
            imageList: [
              { src: '/images/4.jpg', title: '个人博客，属于我的小世界！'},
              { src: '/images/1.jpg', title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的'},
            ]
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .tab-panel-item:nth-child(1) {
    display: block;
  }

  .tab-panel-item-list li i {
    display: block;
    width: 20px;
    height: 20px;
    background: #9a9a9a;
    float: left;
    margin-top: 6px;
    margin-right: 20px;
    position: relative;
    font-style: normal
  }

  .tab-panel-item-list li i>span {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 9px;
    color: #fff;
    line-height: 20px;
    width: 20px;
    text-align: center
  }

  .tab-panel-item-list li:first-child i {
    background: #222;
  }

  .tab-panel-item-list {
    float: right;
    width: 66%
  }

  .tab-panel-item-list li {
    overflow: hidden;
    line-height: 32px;
    padding: 0 20px 10px 20px;
  }

  .tab-panel-item-list li a {
    height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }

  .tab-panel-item-list li img {
    width: 100%
  }

  .tab-panel-item-list li {
    height: 22px;
  }

  .tab-panel-item-list li:hover {
    height: 100%;
    background: #f7f7f7
  }

  .tab-panel-item-list li:hover a {
    color: #000;
    font-weight: bold
  }

  .tab-panel-item-list li:hover i {
    background: #222;
  }

  .tab-panel-item-list li:nth-child(1) {
    height: 100%;
    background: #f7f7f7
  }

  .tab-panel-item-list li:nth-child(1) a {
    color: #000;
    font-weight: bold
  }

  .tab-panel-item-list li:nth-child(1) i {
    background: #9a9a9a;
  }

  .tab-panel-item-list:hover li:nth-child(1) {
    height: 22px;
    background: none;
  }

  .tab-panel-item-list:hover li:nth-child(1) a {
    color: #333;
    font-weight: normal
  }

  .tab-panel-item-list:hover li:nth-child(1) i {
    background: #9a9a9a;
  }

  .tab-panel-item-list:hover li:nth-child(1):hover {
    height: 100%;
    background: #f7f7f7;
  }

  .tab-panel-item-list:hover li:nth-child(1):hover a {
    color: #000;
    font-weight: bold
  }

  .tab-panel-item-list:hover li:nth-child(1):hover i {
    background: #222;
  }

  .tab-panel-item-list p {
    line-height: 24px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    height: 48px;
  }
</style>
