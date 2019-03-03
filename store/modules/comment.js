const state = {
  commentList: [
    {
      id: 1,
      pid: 0,
      post_id: 1,
      floor: 1,
      sender: {
        id: 1,
        nickname: '作者一',
        picture: '/images/author.jpg'
      },
      receiver: {
        id: 2,
        nickname: '作者二',
        picture: '/images/author.jpg'
      },
      content: '内容1',
      createTime: '2018.09.29 17:27',
      like: false,
    },
    {
      id: 2,
      pid: 1,
      post_id: 1,
      floor: 1,
      sender: {
        id: 3,
        nickname: '作者三',
        picture: '/images/author.jpg'
      },
      receiver: {
        id: 4,
        nickname: '作者四',
        picture: '/images/author.jpg'
      },
      content: '内容1',
      createTime: '2018.09.29 17:27',
      like: true
    },
    {
      id: 3,
      pid: 1,
      post_id: 1,
      floor: 1,
      sender: {
        id: 5,
        nickname: '作者五',
        picture: '/images/author.jpg'
      },
      receiver: {
        id: 6,
        nickname: '作者六',
        picture: '/images/author.jpg'
      },
      content: '内容1',
      createTime: '2018.09.29 17:27',
      like: true
    },
    {
      id: 4,
      pid: 0,
      post_id: 1,
      floor: 1,
      sender: {
        id: 5,
        nickname: '作者7',
        picture: '/images/author.jpg'
      },
      receiver: {
        id: 6,
        nickname: '作者8',
        picture: '/images/author.jpg'
      },
      content: '内容1',
      createTime: '2018.09.29 17:27',
      like: true
    }
  ]
}

const mutations = {
}

const actions = {

  post({state}, data) {
    console.log(data)
  },
  descOrder() {
    console.log('倒序排序')
  },
  ascOrder() {
    console.log('正序排序')
  },
  onlyAuthor({}, mode) {
    console.log('只看作者?', mode)
  },
  giveLike({}, like) {
    console.log('点赞？', like)

  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
