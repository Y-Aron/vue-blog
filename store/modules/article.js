
const state = {
  postList: [
    {
      id: 1,
      title: '文章一'
    },
    {
      id: 2,
      title: '文章二'
    },
    {
      id: 3,
      title: '文章三'
    }
  ],

  corpusList: [
    {
      id: 1,
      name: '文集一'
    },
    {
      id: 2,
      name: '文集二'
    },
    {
      id: 3,
      name: '文集三'
    }
  ],
}

const mutations = {


}

const actions = {

  newCorpus({}, corpus) {
    console.log('文集：' + corpus)

  },

  publishPost({}, post) {
    console.log(post)
    console.log('发布文章中 ...')
  },

  newPost({state}) {
    console.log('new Post')
    const end = state.postList.length + 1
    state.postList.push({
      id: end,
      title: '文章' + end
    })
  },

  deletePost() {
    console.log('delete post')
  },

  selectPost({ state },index) {
    console.log(index)
    console.log(state.postList[index])
  }


}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

