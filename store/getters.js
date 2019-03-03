export default {

  getLocale: state => {
    return state.config.locale
  },

  getPostList: state => {
    return state.article.postList
  },

  getCorpusList: state => {
    return state.article.corpusList
  },

  getCommentList: state => {
    return state.comment.commentList
  }

}
