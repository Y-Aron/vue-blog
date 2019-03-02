<template>
  <div class="post-container whitebg">
    <h2 class="card-title"><span class="con_nav">{{$t('postView.location')}}：
      <a href="/">网站首页</a>><a href="/">个人博客模板</a></span>个人博客模板
    </h2>

    <h1 class="post-title">{{title}}</h1>

    <p class="blog-item-info"><i class="avatar">
      <img src="/images/avatar.jpg"></i><span>杨青青</span><span>2018-10-28</span>
      <span>【<a href="/">程序人生</a>】</span><span>109990人已围观</span>
    </p>

    <div class="post-text">
      <div id="test"></div>

      <no-ssr>
        <mavon-editor :value="content"
                      :subfield="false"
                      :codeStyle="'atom-one-dark'"
                      :defaultOpen="'preview'"
                      :toolbarsFlag="false"/>
      </no-ssr>

      <p><span class="give-like">{{$t('postView.nice')}} (74)</span></p>
      <div class="next-info">
        <p>{{$t('postView.pre')}}：
          <nuxt-link :to="{name: 'post-id', params: {id: '10'}}">html5 个人博客模板《蓝色畅想》</nuxt-link>
        </p>
        <p>{{$t('postView.next')}}：
          <nuxt-link :to="{name: 'post-id', params: {id: '12'}}">个人博客模板《tree》-响应式个人网站模板</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

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
		  document.querySelector('.v-note-wrapper .v-note-panel.shadow')
        .style.cssText = 'box-shadow: unset !important;border:none !important'
		  this.interval = setInterval(() => {
        const mermaidList = document.querySelectorAll('.v-note-show pre>code.lang-mermaid')
        mermaidList.forEach(e => {
          e.parentElement.style.cssText='background: white !important;'
          mermaid.init(undefined, e);
        })
      },50)
      setTimeout(() => {
        clearInterval(this.interval)
      }, 1000)
    },

    data() {
		  return {
		    interval: undefined,
		    title: '个人博客，属于我的小世界！',
        content: '@[TOC](这里写自定义目录标题)\n' +
          '\n' +
          '# 欢迎使用Markdown编辑器\n' +
          '\n' +
          '你好！ 这是你第一次使用 **Markdown编辑器** 所展示的欢迎页。如果你想学习如何使用Markdown编辑器, 可以仔细阅读这篇文章，了解一下Markdown的基本语法知识。\n' +
          '\n' +
          '## 新的改变\n' +
          '\n' +
          '我们对Markdown编辑器进行了一些功能拓展与语法支持，除了标准的Markdown编辑器功能，我们增加了如下几点新功能，帮助你用它写博客：\n' +
          '\n' +
          ' 1. **全新的界面设计** ，将会带来全新的写作体验；\n' +
          ' 2. 在创作中心设置你喜爱的代码高亮样式，Markdown **将代码片显示选择的高亮样式** 进行展示；\n' +
          ' 3. 增加了 **图片拖拽** 功能，你可以将本地的图片直接拖拽到编辑区域直接展示；\n' +
          ' 4. 全新的 **KaTeX数学公式** 语法；\n' +
          ' 5. 增加了支持**甘特图的mermaid语法[^1]** 功能；\n' +
          ' 6. 增加了 **多屏幕编辑** Markdown文章功能；\n' +
          ' 7. 增加了 **焦点写作模式、预览模式、简洁写作模式、左右区域同步滚轮设置** 等功能，功能按钮位于编辑区域与预览区域中间；\n' +
          ' 8. 增加了 **检查列表** 功能。\n' +
          ' [^1]: [mermaid语法说明](https://mermaidjs.github.io/)\n' +
          '\n' +
          '## 功能快捷键\n' +
          '\n' +
          '撤销：<kbd>Ctrl/Command</kbd> + <kbd>Z</kbd>\n' +
          '重做：<kbd>Ctrl/Command</kbd> + <kbd>Y</kbd>\n' +
          '加粗：<kbd>Ctrl/Command</kbd> + <kbd>B</kbd>\n' +
          '斜体：<kbd>Ctrl/Command</kbd> + <kbd>I</kbd>\n' +
          '标题：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd>\n' +
          '无序列表：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd>\n' +
          '有序列表：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd>\n' +
          '检查列表：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>\n' +
          '插入代码：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd>\n' +
          '插入链接：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd>\n' +
          '插入图片：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd>\n' +
          '\n' +
          '\n' +
          '## 合理的创建标题，有助于目录的生成\n' +
          '\n' +
          '直接输入1次<kbd>#</kbd>，并按下<kbd>space</kbd>后，将生成1级标题。\n' +
          '输入2次<kbd>#</kbd>，并按下<kbd>space</kbd>后，将生成2级标题。\n' +
          '以此类推，我们支持6级标题。有助于使用`TOC`语法后生成一个完美的目录。\n' +
          '\n' +
          '\n' +
          '\n' +
          '## 如何改变文本的样式\n' +
          '\n' +
          '*强调文本* _强调文本_\n' +
          '\n' +
          '**加粗文本** __加粗文本__\n' +
          '\n' +
          '==标记文本==\n' +
          '\n' +
          '~~删除文本~~\n' +
          '\n' +
          '> 引用文本\n' +
          '\n' +
          'H~2~O is是液体。\n' +
          '\n' +
          '2^10^ 运算结果是 1024.\n' +
          '\n' +
          '\n' +
          '\n' +
          '## 插入链接与图片\n' +
          '\n' +
          '链接: [link](https://mp.csdn.net).\n' +
          '\n' +
          '图片: ![Alt](https://avatar.csdn.net/7/7/B/1_ralf_hx163com.jpg)\n' +
          '\n' +
          '带尺寸的图片: ![Alt](https://avatar.csdn.net/7/7/B/1_ralf_hx163com.jpg =30x30)\n' +
          '\n' +
          '居中的图片: ![Alt](https://avatar.csdn.net/7/7/B/1_ralf_hx163com.jpg#pic_center)\n' +
          '\n' +
          '居中并且带尺寸的图片: ![Alt](https://avatar.csdn.net/7/7/B/1_ralf_hx163com.jpg#pic_center =30x30)\n' +
          '\n' +
          '当然，我们为了让用户更加便捷，我们增加了图片拖拽功能。\n' +
          '\n' +
          '\n' +
          '## 如何插入一段漂亮的代码片\n' +
          '\n' +
          '去[博客设置](https://mp.csdn.net/configure)页面，选择一款你喜欢的代码片高亮样式，下面展示同样高亮的 `代码片`.\n' +
          '```javascript\n' +
          '// An highlighted block\n' +
          'var foo = \'bar\';\n' +
          '```\n' +
          '\n' +
          '```\n' +
          '// An highlighted block\n' +
          'var foo = \'bar\';\n' +
          '```\n' +
          '\n' +
          '\n' +
          '\n' +
          '## 生成一个适合你的列表\n' +
          '\n' +
          '- 项目\n' +
          '  - 项目\n' +
          '    - 项目\n' +
          '\n' +
          '1. 项目1\n' +
          '2. 项目2\n' +
          '3. 项目3\n' +
          '\n' +
          '- [ ] 计划任务\n' +
          '- [x] 完成任务\n' +
          '\n' +
          '\n' +
          '## 创建一个表格\n' +
          '一个简单的表格是这么创建的：\n' +
          '项目     | Value\n' +
          '-------- | -----\n' +
          '电脑  | $1600\n' +
          '手机  | $12\n' +
          '导管  | $1\n' +
          '\n' +
          '### 设定内容居中、居左、居右\n' +
          '使用`:---------:`居中\n' +
          '使用`:----------`居左\n' +
          '使用`----------:`居右\n' +
          '| 第一列       | 第二列         | 第三列        |\n' +
          '|:-----------:| -------------:|:-------------|\n' +
          '| 第一列文本居中 | 第二列文本居右  | 第三列文本居左 | \n' +
          '\n' +
          '\n' +
          '### SmartyPants\n' +
          'SmartyPants将ASCII标点字符转换为“智能”印刷标点HTML实体。例如：\n' +
          '|    TYPE   |ASCII                          |HTML                         \n' +
          '|----------------|-------------------------------|-----------------------------|\n' +
          '|Single backticks|`\'Isn\'t this fun?\'`            |\'Isn\'t this fun?\'            |\n' +
          '|Quotes          |`"Isn\'t this fun?"`            |"Isn\'t this fun?"            |\n' +
          '|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|\n' +
          '\n' +
          '\n' +
          '## 创建一个自定义列表\n' +
          'Markdown\n' +
          ':  Text-to-HTML conversion tool\n' +
          '\n' +
          'Authors\n' +
          ':  John\n' +
          ':  Luke\n' +
          '\n' +
          '\n' +
          '## 如何创建一个注脚\n' +
          '\n' +
          '一个具有注脚的文本。[^2]\n' +
          '\n' +
          '[^2]: 注脚的解释\n' +
          '\n' +
          '\n' +
          '##  注释也是必不可少的\n' +
          '\n' +
          'Markdown将文本转换为 HTML。\n' +
          '\n' +
          '*[HTML]:   超文本标记语言\n' +
          '\n' +
          '\n' +
          '## KaTeX数学公式\n' +
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
          '> 你可以找到更多关于的信息 **LaTeX** 数学表达式[here][1].\n' +
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
          '- 关于 **甘特图** 语法，参考 [这儿][2],\n' +
          '\n' +
          '## UML 图表\n' +
          '\n' +
          '可以使用UML图表进行渲染。 [Mermaid](https://mermaidjs.github.io/). 例如下面产生的一个序列图：:\n' +
          '\n' +
          '```mermaid\n' +
          'sequenceDiagram\n' +
          '张三 ->> 李四: 你好！李四, 最近怎么样?\n' +
          '李四-->>王五: 你最近怎么样，王五？\n' +
          '李四--x 张三: 我很好，谢谢!\n' +
          '李四-x 王五: 我很好，谢谢!\n' +
          'Note right of 王五: 李四想了很长时间,<br> 文字太长了<br/>不适合放在一行.\n' +
          '\n' +
          '李四-->>张三: 打量着王五...\n' +
          '张三->>王五: 很好... 王五, 你怎么样?\n' +
          '```\n' +
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
          '- 关于 **Mermaid** 语法，参考 [这儿][3],\n' +
          '\n' +
          '## 导出与导入\n' +
          '\n' +
          '###  导出\n' +
          '如果你想尝试使用此编辑器, 你可以在此篇文章任意编辑。当你完成了一篇文章的写作, 在上方工具栏找到 **文章导出** ，生成一个.md文件或者.html文件进行本地保存。\n' +
          '\n' +
          '### 导入\n' +
          '如果你想加载一篇你写过的.md文件或者.html文件，在上方工具栏可以选择导入功能进行对应扩展名的文件导入，\n' +
          '继续你的创作。\n' +
          '\n' +
          ' [1]: http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference\n' +
          ' [2]: https://mermaidjs.github.io/\n' +
          ' [3]: https://mermaidjs.github.io/\n' +
          ' [4]: http://adrai.github.io/flowchart.js/',
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
