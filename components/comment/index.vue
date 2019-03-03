<template>
  <div class="app-comment whitebg">

    <h2 class="card-title"><i class="fa fa-pencil"></i> {{$t('comment.post')}}</h2>
    <p style="height: 13px;"></p>

    <post-comment :show-image="true" :receiver="author" />

    <div class="comment-list">
      <div class="top-title">
        <span>6{{$t('comment.list.info')}}</span>
        <a :class="{'author-only': true, 'active': active}"
           @click="onlyAuthor">{{$t('comment.list.author')}}</a>

        <div class="date-sort">
          <a :class="{'active': desc}" @click="descOrder">{{$t('comment.sort.desc')}}</a>
          <a :class="{'active': !desc}" @click="ascOrder">{{$t('comment.sort.asc')}}</a>
        </div>
      </div>
      <template v-for="vol in list">
        <comment :model="vol" :sub-comments="subList[vol.id]"/>
      </template>
    </div>
  </div>
</template>

<script>
  import PostComment from "./post";
  import Comment from "./comment";

  export default {
    components: {Comment, PostComment},
    props: {
      comments: {
        type: Array,
        default: () => {
          return []
        }
      },
      author: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        active: false,
        list: [],
        subList: {},
        top_id: 0,
        desc: true
      }
    },
    methods: {
      onlyAuthor() {
        this.active = !this.active
        this.$store.dispatch('comment/onlyAuthor', this.active)
      },
      descOrder() {
        this.desc = true
        this.$store.dispatch('comment/descOrder')
      },
      ascOrder() {
        this.desc = false
        this.$store.dispatch('comment/ascOrder')
      }
    },
    mounted() {
      let list = [], subList = {}
      const comments = this.comments
      if (Array.isArray(comments)) {
        comments.forEach(vol => {
          if (!vol.hasOwnProperty('pid')) {
            return;
          }
          if (vol.pid === this.top_id) {
            list.push(vol)
          } else {
            if (!subList.hasOwnProperty(vol.pid)) {
              subList[vol.pid] = []
            }
            subList[vol.pid].push(vol)
          }
        })
        this.list = list;
        this.subList = subList
      }
    }
  }
</script>

<style>
  .comment-author > img {
    width: 38px;
    height: 38px;
    margin-right: 10px;
    margin-left: 5px;
    border-radius: 50%;
    float: left;
  }
</style>

<style scoped>
  .comment-list .top-title > a.active {
    color: #fff;
    border: 1px solid #ea6f5a;
    background-color: #ea6f5a;
  }
  .comment-list .date-sort > a.active {
    color: #1C2327;
  }
  .comment-list .date-sort > a:hover {
    color: #1C2327;
  }
  .comment-list .date-sort > a {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #969696;
    cursor: pointer;
    display: inline-block;
  }
  .comment-list .date-sort {
    float: right;
  }
  .comment-list .author-only {
    margin-left: 10px;
    padding: 4px 8px;
    font-size: 12px;
    color: #969696;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    cursor: pointer;
  }
  .comment-list .top-title {
    padding-bottom: 18px;
    font-size: 17px;
    font-weight: 700;
    border-bottom: 1px solid #f0f0f0;
  }
  .comment-list {
    margin-top: 30px;
    padding: 0 10px;
  }
</style>
