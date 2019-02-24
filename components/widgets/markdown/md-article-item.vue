<template>
  <div :class="{'md-article-item':true, 'toggle': current === model.id}" @click="toggle">
    <a href="javascript:void (0)">
      <i class="fa fa-file-text-o" style="font-size: 18px"></i>
      <span class="article-title">{{model.title}}</span>
    </a>
    <!--<v-menu offset-y v-if="current === model.id" class="action-menu">-->
      <!--<i class="fa fa-cog" slot="activator"></i>-->
      <!---->
    <!--</v-menu>-->
  </div>
</template>

<script>
  export default {
    name: "md-article-item",
    props: {
      model: {},
      current: ''
    },
    data(){
      return {
        actions: [
          { title: '直接发布', icon: 'fa fa-mail-forward' },
          { title: '删除文章', icon: 'fa fa-trash-o' }
        ],
      }
    },
    methods: {
      toggle(){
        // this.$emit('update:current', this.model.id)
      }
    }
  }
</script>

<style scoped>
  .toggle {
    background-color: #E6E6E6;
  }
  .md-article-item{
    padding: 15px 0 15px 25px;
  }
  .md-article-item .action-menu{
    float: right;
    margin-right: 15px;
    margin-top: 5px;
  }
  .md-article-item .article-title{
    display: inline-block;
    width: 140px;
    margin-left: 8px;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: middle;
    text-overflow: ellipsis;
  }
</style>
