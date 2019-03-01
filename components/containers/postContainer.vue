<template>
  <div class="post-container whitebg">
    <h2 class="card-title"><span class="con_nav">您现在的位置是：<a href="/">网站首页</a>><a href="/">个人博客模板</a></span>个人博客模板</h2>

    <h1 class="post-title">{{title}}</h1>

    <p class="blog-item-info"><i class="avatar">
      <img src="/images/avatar.jpg"></i><span>杨青青</span><span>2018-10-28</span>
      <span>【<a href="/">程序人生</a>】</span><span>109990人已围观</span>
    </p>

    <div class="post-text">
      <div id="test"></div>

      <no-ssr>
        <mavon-editor :value="kx"

                      :subfield="false"
                      :ishljs="false"
                      :defaultOpen="'preview'"
                      :toolbarsFlag="false"/>
      </no-ssr>

      <p><span class="diggit">很赞哦！ (74)</span></p>
      <div class="nextinfo">
        <p>上一篇：<a href="/download/f/886.html">html5 个人博客模板《蓝色畅想》</a></p>
        <p>下一篇：<a href="/download/f/907.html">个人博客模板《tree》-响应式个人网站模板</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  import katex from 'katex';
  import hljs from 'highlight.js'
  import 'highlight.js/styles/atom-one-dark.css'

  let mermaid
  if (process.client) {
    mermaid = require('mermaid')
    mermaid.initialize({
      theme: 'default',
      // startOnLoad:true
    })
  }

	export default {
		name: "postContainer",
    updated() {
      // katex.render("Gamma(n) = (n-1)!\quad\foralln\in\mathbb N", document.querySelector('#test'), {
      //   throwOnError: false
      // });
      this.$nextTick(() => {
        let blocks = document.querySelectorAll(".v-note-show pre>code");
        blocks.forEach(block => {
          hljs.highlightBlock(block);
        });
        const mermaidList = document.querySelectorAll('.v-note-show pre>code.lang-mermaid')
        mermaidList.forEach((e) => {
          mermaid.init(undefined, e);
        })
      })
    },
    data() {
		  return {
		    title: '个人博客，属于我的小世界！',
        kx: '## KaTeX数学公式\n' +
          '\n' +
          '您可以使用渲染LaTeX数学表达式 [KaTeX](https://khan.github.io/KaTeX/):\n' +
          '\n' +
          'Gamma公式展示 $\\Gamma(n) = (n-1)!\\quad\\forall\n' +
          'n\\in\\mathbb N$ 是通过欧拉积分\n' +
          '\n' +
          '$$\n' +
          '\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.\n' +
          '$$\n' +
          '\n' +
          '> 你可以找到更多关于的信息 **LaTeX** 数学表达式[here][1].' +
          '\n' +
          '## 如何插入一段漂亮的代码片\n' +
          '\n' +
          '去[博客设置](https://mp.csdn.net/configure)页面，选择一款你喜欢的代码片高亮样式，下面展示同样高亮的 `代码片`.\n' +
          '```javascript\n' +
          '// An highlighted block\n' +
          'var foo = \'bar\';\n' +
          '```' +
          '\n' +
          '## 新的甘特图功能，丰富你的文章\n' +
          '\n' +
          '```mermaid\n' +
          'gantt\n' +
          '        dateFormat  YYYY-MM-DD\n' +
          '        title Adding GANTT diagram functionality to mermaid\n' +
          '        section 现有任务\n' +
          '        已完成               :done,    des1, 2014-01-06,2014-01-08\n' +
          '        进行中               :active,  des2, 2014-01-09, 3d\n' +
          '        计划一               :         des3, after des2, 5d\n' +
          '        计划二               :         des4, after des3, 5d\n' +
          '```\n' +
          '- 关于 **甘特图** 语法，参考 [这儿][2],',
        content:'## KaTeX数学公式\n' +
          '\n' +
          '您可以使用渲染LaTeX数学表达式 [KaTeX](https://khan.github.io/KaTeX/):\n' +
          '\n' +
          'Gamma公式展示 $\\Gamma(n) = (n-1)!\\quad\\forall\n' +
          'n\\in\\mathbb N$ 是通过欧拉积分\n' +
          '\n' +
          '$$\n' +
          '\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.\n' +
          '$$\n' +
          '\n' +
          '> 你可以找到更多关于的信息 **LaTeX** 数学表达式[here][1].' +
          '\n' +
          '## 如何插入一段漂亮的代码片\n' +
          '\n' +
          '去[博客设置](https://mp.csdn.net/configure)页面，选择一款你喜欢的代码片高亮样式，下面展示同样高亮的 `代码片`.\n' +
          '```javascript\n' +
          '// An highlighted block\n' +
          'var foo = \'bar\';\n' +
          '```' +
          '\n' +
          '\n' +
          '## 新的甘特图功能，丰富你的文章\n' +
          '\n' +
          '```mermaid\n' +
          'gantt\n' +
          '        dateFormat  YYYY-MM-DD\n' +
          '        title Adding GANTT diagram functionality to mermaid\n' +
          '        section 现有任务\n' +
          '        已完成               :done,    des1, 2014-01-06,2014-01-08\n' +
          '        进行中               :active,  des2, 2014-01-09, 3d\n' +
          '        计划一               :         des3, after des2, 5d\n' +
          '        计划二               :         des4, after des3, 5d\n' +
          '```\n' +
          '- 关于 **甘特图** 语法，参考 [这儿][2],' +
          '\n' +
          '这将产生一个流程图。:\n' +
          '\n' +
          '```mermaid\n' +
          'graph LR\n' +
          'A[长方形] -- 链接 --> B((圆))\n' +
          'A --> C(圆角长方形)\n' +
          'B --> D{菱形}\n' +
          'C --> D\n' +
          '```\n' +
          '\n' +
          '```mermaid\n' +
          'sequenceDiagram\n' +
          '张三 ->> 李四: 你好！李四, 最近怎么样?\n' +
          '李四-->>王五: 你最近怎么样，王五？\n' +
          '李四--x 张三: 我很好，谢谢!\n' +
          '李四-x 王五: 我很好，谢谢!\n' +
          'Note right of 王五: 李四想了很长时间, <br>文字太长了<br/>不适合放在一行.\n' +
          '\n' +
          '李四-->>张三: 打量着王五...\n' +
          '张三->>王五: 很好... 王五, 你怎么样?\n' +
          '```',
        toolbars: {

        }
      }
    }
	}
</script>
<style>
  .v-note-wrapper {
    z-index: 0 !important;
  }
  .v-note-wrapper .v-note-panel .v-note-show .v-show-content {
    background: white !important;
  }

  .hljs > code {
    font-size: 14px !important;
  }

</style>
