<template>
  <div class="md-container">
    <div class="md-header">
      <div class="md-title">
        <input type="text" class="md-title-text" :value="title" :placeholder="$t('markdown.inputPlaceholder')">
      </div>
      <div class="md-info">
        <button class="md-post" @click="publishPost">{{$t('markdown.publish')}}</button>
        <div class="user-box">
          <div class="btn_user-info" @mouseenter="showUserBox=true" @mouseleave="showUserBox = false">
            <img width="32" height="32" :src="author.image">
            <div class="user-option-box" :style="{'display': showUserBox?'unset':'none'}">
              <a href="https://mp.csdn.net">{{$t('markdown.postManager')}}</a>
              <a href="https://mp.csdn.net">{{$t('markdown.myBlog')}}</a>
              <a href="https://mp.csdn.net">{{$t('markdown.exit')}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="clear-blank"></span>

    <div class="md-left">
      <div class="md-posts-info">
        <div class="md-corpus">
          <a class="new-corpus" href="javascript:void(0)" @click="showCorPusForm = true">
            <i class="fa fa-plus-circle" style="margin-right: 5px"></i>
            {{$t('markdown.newCorpus')}}
          </a>
          <div class="md-corpus-form" :style="{'display' : showCorPusForm? 'block' : 'none'}">
            <input type="text" v-model="corpusText">
            <div class="operate">
              <button class="submit" @click="newCorpus">{{$t('markdown.corpusSubmit')}}</button>
              <button class="cancel" @click="showCorPusForm = false">{{$t('markdown.corpusCancel')}}</button>
            </div>
          </div>

          <ul>
            <li :class="{'corpus-selected': currentCorpus === index}" v-for="(vol, index) in corpusList"
                @click="selectCorpus(index)">
              <i class="fa fa-book"></i> {{vol.name}} <i class="fa fa-minus-circle"></i></li>
          </ul>
        </div>

        <div class="md-posts">
          <a class="new-article" href="javascript:void(0)" @click="newPost">
            <i class="fa fa-plus-circle" style="margin-right: 5px"></i>
            {{ isNewPost? $t('markdown._newPost') :$t('markdown.newPost')}}
          </a>
          <i class="md-line"></i>
          <ul>
            <li :class="{'post-selected': currentPost === index}" v-for="(vol, index) in postList"
                @click="selectPost(index)">
              <i class="fa fa-file-text-o" style="margin-right: 5px"></i>
              {{vol.title}}
              <i class="fa fa-minus-circle" @click="deletePost(index)"></i>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="md-body">
      <no-ssr>
        <mavon-editor
          @imgAdd="$imgAdd"
          ref="md"
          class="md"
          :codeStyle="'atom-one-dark'"
          @save="save"
          v-model="text"
          :toolbars="toolbars"/>
      </no-ssr>
    </div>
  </div>
</template>

<script>
  let mermaid
  if (process.client) {
    mermaid = require('mermaid')
    mermaid.initialize({
      theme: 'default',
    })
  }
  export default {
    name: "mdEditor",
    layout: 'simple',
    watch: {
      text() {
        this.$nextTick(() => {
          const mermaidList = document.querySelectorAll('.v-note-show pre>code.lang-mermaid')
          mermaidList.forEach(element => {
            element.parentNode.setAttribute('style', 'background: #FBFBFB !important;')
            let txt = element.innerHTML
            txt = txt.replace(/[\r\n]/g, "").trimEnd(); //去掉回车换行
            if ("``" === txt.substring(txt.length - 2, txt.length) || "`" === txt.substring(txt.length - 1, txt.length)) {
            } else {
              try {
                mermaid.init(undefined, element);
              } catch (e) {
              }
            }
          })
        })
      },
    },
    computed: {
      corpusList() {
        return this.$store.getters.getCorpusList
      },
      postList() {
        return this.$store.getters.getPostList
      }
    },
    data: () => ({
      corpusText: '',
      showCorPusForm: false,
      currentCorpus: '',
      isNewPost: false,
      showUserBox: false,
      currentPost: '',
      current: '',
      title: '欢迎使用Kodear-markdown编辑器',
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: false, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        // navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      author: {
        id: 1,
        image: '/images/author.jpg'
      },
      text: ''
    }),

    methods: {
      newCorpus() {
        const corpus = {
          name: this.corpusText,
          userId: this.author.id
        }
        this.$store.dispatch('article/newCorpus', corpus)
          .then(() => {
            console.log('新增文集完毕！')
          })
      },
      publishPost() {
        const post = {
          userId: this.author.id,
          title: this.title,
          text: this.text,
          corpusId: this.currentCorpus
        }
        this.$store.dispatch('article/publishPost', post)
          .then(resp => {
            console.log('发布完成')
          })
      },
      deletePost(index) {
        this.$store.dispatch('article/deletePost')
          .then(() => {
            this.postList.splice(index, 1)
          })
      },
      selectCorpus(index) {
        console.log(index)
        this.currentCorpus = index
      },
      selectPost(index) {
        this.$store.dispatch('article/selectPost', index)
          .then(resp => {
            this.currentPost = index
          })
      },
      newPost() {
        this.isNewPost = true
        setTimeout(() => {
          this.$store.dispatch('article/newPost')
            .then(() => {
              this.isNewPost = false
            })
        }, 1000)
      },

      // 绑定@imgAdd event
      $imgAdd(pos, $file) {
        // 第一步.将图片上传到服务器.
        const formdata = new FormData();
        formdata.append('file', $file);
        // this.$store.dispatch('uploadFile', formdata)
        //   .then( resp => {
        //     console.log(resp)
        //     if (resp) {
        //       this.$refs.md.$img2Url(pos, `/api${resp}`)
        //     }
        //   })
      },
      save(value) {
        // if (!this.title) {
        //   this.$toast.success({
        //     title: '操作失败',
        //     message: '文章标题不能为空~'
        //   })
        //   return
        // }
        // const ex = 60 * 60 * 24
        // this.$utils.Cache.setCache('article-content', value, ex)
        // this.$utils.Cache.setCache('article-title', this.title, ex)
        // this.$toast.success({
        //   title: '操作成功',
        //   message: "保存成功~"
        // })
      }
    }
  }
</script>

<style>
  @media screen and (max-width: 768px) {
    .md-container .md-left {
      display: none;
    }

    .md-container .md-body {
      margin-left: 0 !important;
    }

    .v-note-edit {
      flex: 0 0 100% !important;
    }

    .v-note-show {
      display: none !important;
    }
  }

  .v-note-wrapper .v-note-panel.shadow {
    box-shadow: none !important;
    border: 1px solid #E8E8E8 !important;
  }

  .v-note-wrapper .v-note-op.shadow {
    box-shadow: unset !important;
  }

  .v-note-show ol li {
    list-style: decimal;
  }

  .v-note-show ul, .v-note-show ul li {
    list-style: unset !important;
  }
  .v-note-show .contains-task-list li {
    list-style: none !important;
  }

  .v-note-wrapper .v-note-op.shadow {
    background-color: #E8E8E8 !important;
  }

  .v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper {
    background-color: #F5F5F5 !important;
  }

  .auto-textarea-wrapper .auto-textarea-input.no-resize {
    background-color: #F5F5F5 !important;
  }

  .v-note-show blockquote {
    background-color: rgba(0, 0, 0, .05);
  }

  .v-note-show pre {
    color: #c7254e;
  }
  .markdown-body pre code {
    display: block !important;
    padding: 7px !important;
  }
  .markdown-body .highlight pre, .markdown-body pre {
    padding: 0 !important;
    background: #F2F2F2 !important;
  }

  .v-note-show table thead tr {
    background-color: rgba(0, 0, 0, .05);
  }
</style>

<style scoped>
  .md-corpus-form .operate {
    display: flex;
    margin: 0 5px 10px 10px;
  }

  .md-corpus-form button {
    outline: none;
    padding: 3px;
    border-radius: 10px;
    background-color: #404040;
    cursor: pointer;
  }

  .md-corpus-form .submit {
    flex: 1;
    color: #42c02e;
    border: 1px solid #42c02e;
  }

  .md-corpus-form .cancel {
    border: none;
    flex: 1;
    color: #999999;
  }

  .md-corpus-form > input {
    width: 90%;
    outline: none;
    height: 30px;
    color: #ccc;
    background-color: #595959;
    border: 1px solid #333;
    padding: 4px 6px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
  }

  .md-corpus-form {
    text-align: center;
    margin-bottom: 15px;
  }

  .md-info .user-option-box a {
    display: block;
    margin-top: 4px;
    font-size: 14px;
    color: #3c3c3c;
    text-decoration: none;
  }

  .md-info .user-option-box:before {
    content: "";
    display: block;
    position: absolute;
    left: 46px;
    top: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
  }

  .md-info .user-option-box {
    display: none;
    position: absolute;
    top: 36px;
    left: -35px;
    padding: 16px;
    width: 96px;
    height: 110px;
    background: #fff;
    border: 1px solid #ebebeb;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2);
    border-radius: 4px;
    z-index: 99999;
  }

  .md-info .btn_user-info {
    cursor: pointer;
  }

  .md-info .user-box img {
    display: block;
    border-radius: 16px;
  }

  .md-info .user-box {
    position: relative;
    margin-left: 32px;
    margin-top: 4px;
  }

  .md-posts-info {
    display: flex;
    height: 100%;
  }

  .md-posts-info .md-posts {
    flex: 1;
  }

  .md-posts-info .md-corpus {
    height: 100%;
    flex: 1;
    background-color: #404040;
    color: white;
  }

  .md-posts-info ul > li {
    padding: 10px 16px;
    cursor: pointer;
  }

  .md-posts-info ul li i:nth-child(2) {
    float: right;
  }

  .md-posts-info ul li i:nth-child(1) {
    font-size: 1.3em;
    margin-right: 5px;
  }

  .md-posts-info .md-corpus ul li:hover {
    background: #666666;
    cursor: pointer;
  }

  .md-posts-info .md-posts ul li:hover {
    background: #E6E6E6;
    cursor: pointer;
  }

  .md-left .new-corpus {
    display: block;
    color: white;
    padding: 15px 20px 10px 10px;
    font-size: 15px;
    font-weight: 400;
  }

  .md-left .new-article {
    display: block;
    padding: 15px 20px 10px 10px;
    font-size: 15px;
    font-weight: 400;
  }

  .md-left .corpus-selected {
    border-left: 3px solid #ec7259;
    background: #666666;

  }

  .md-left .post-selected {
    background: #E6E6E6;
    border-left: 3px solid #ec7259;
  }

  .md-left .md-line {
    height: 1px;
    background: #E5E5E5;
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  .md-container .md-left {
    float: left;
    background: white;
    height: 100%;
    width: 400px;
    overflow-y: scroll;
  }

  .md-body .md {
    position: relative;
    height: 100% !important;
  }

  .md-container .md-body {
    margin-left: 400px;
    height: 100%;
  }

  .md-info .md-post:hover {
    background: #A20C1A;
  }

  .md-info .md-post {
    padding: 8px 16px;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    border: none;
    border-radius: 4px;
    white-space: nowrap;
    background-color: #ca0c16;
  }

  .md-title .md-title-text {
    margin: 4px 0;
    padding: 8px;
    font-size: 18px;
    line-height: 24px;
    background-color: #fff;
    border: 1px solid #ccc;
    display: block;
    outline: none;
    width: 100%;
    height: 36px;
    border-radius: 4px;
    background-image: none;
    color: inherit;
  }

  .md-header .md-info {
    padding: 8px 32px 8px 0;
    width: 232px;
    display: flex;
  }

  .md-header .md-title {
    width: 100%;
    padding: 8px 24px;
  }

  .md-container .md-header {
    display: flex;
    width: 100%;
    height: 56px;
    background: #f3f3f3;
  }

  .md-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
