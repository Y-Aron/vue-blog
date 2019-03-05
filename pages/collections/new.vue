<template>
    <div class="new-collection">
      <h3>{{$t('collections.new')}}</h3>
      <table>
        <thead><tr><th style="width: 150px;text-align: left"></th></tr></thead>
        <tbody>
          <tr>
            <td>
              <div class="avatar-collection"><img ref="avatar" src="/images/avatar-collection.png" alt=""></div>
            </td>
            <td>
              <upload-btn :value="$t('collections.upload')" @change="changeImage"/>
            </td>
          </tr>

          <tr>
            <td class="title">{{$t('collections.name')}}</td>
            <td>
              <input type="text" name="name" :placeholder="$t('collections.name_pl')" autocomplete="off">
            </td>
          </tr>
          <tr>
            <td class="title fl">{{$t('collections.describe')}}</td>
            <td>
              <textarea :placeholder="$t('collections.describe_pl')"></textarea>
            </td>
          </tr>
          <tr>
            <td class="title">{{$t('collections.other_admin')}}</td>
            <td>
              <input type="text" name="username" v-model="other_admin" :placeholder="$t('collections.username')" autocomplete="off">
              <transition name="fade" >
                <ul class="dropdown-menu" v-show="userList.length > 0">
                  <li v-for="vol in userList">
                    <nuxt-link :to="{name: 'user-id', params: {id: vol.id}}">
                      <img :src="vol.picture" alt="">
                      <span>{{vol.nickname}}</span>
                    </nuxt-link>
                  </li>
                </ul>
              </transition>
            </td>
          </tr>

          <tr>
            <td class="title">{{$t('collections.submission.title')}}</td>
            <td class="radio-group" >
              <label><input type="radio" name="push" :value="submission"
                            @change="submission=true">{{$t('collections.submission.yes')}}</label>
              <label><input type="radio" name="push" :value="submission"
                            @change="submission=false">{{$t('collections.submission.no')}}</label>
            </td>
          </tr>

          <tr :class="{'disabled': disabled}">
            <td class="title" :class="{'disabled': disabled}">{{$t('collections.check.title')}}	</td>
            <td class="radio-group">
              <label><input type="radio" name="check" :disabled="disabled">{{$t('collections.check.yes')}}</label>
              <label><input type="radio" name="check" :disabled="disabled">{{$t('collections.check.no')}}</label>
            </td>
          </tr>

        </tbody>
      </table>
      <button class="new_btn"> {{$t('collections.new_btn')}} </button>
    </div>
</template>

<script>
	import UploadBtn from "../../components/widgets/uploadBtn";
  export default {
    components: {UploadBtn},
    watch:  {
      submission(val) {
        console.log(val)
        this.disabled = !val;
      },
      other_admin(val) {
        if (val === '') {
          this.userList = []
          return
        }
        this.userList = [{
          id: 1,
          picture: '/images/avatar.jpg',
          nickname: 'yyyy1' + val
        }, {
          id: 2,
          picture: '/images/avatar.jpg',
          nickname: 'yyyy2' + val
        }]
      }
    },
    methods: {
      changeImage(e) {
        this.$utils.previewPicture(e.target.files, this.$refs['avatar'])
      }
    },
	  data() {
	    return {
        submission: true,
        disabled: false,
        userList: [],
        other_admin: ''
      }
    }
	}
</script>

<style>
  .app-header-nav,.app-search,#app-container {
    width: 960px ;
  }
</style>

<style scoped>
  .new-collection .dropdown-menu img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    float: left;
    margin-right: 5px;
  }
  .new-collection .dropdown-menu>li>a {
    display: block;
    padding: 3px 20px;
    color: #333;
    white-space: nowrap;
  }
  .new-collection .dropdown-menu>li:hover {
    background-color: rgb(245,245,245);
  }
  .new-collection .dropdown-menu  {
    position: absolute;
    z-index: 1000;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    background-clip: padding-box;
    display: block;
  }
  .new-collection .disabled {
    color: #ddd !important;
  }
  .new-collection .new_btn:hover {
    background-color: #3EB42B;
    cursor: pointer;
  }
  .new-collection .new_btn {
    margin: 20px 0 50px;
    border-radius: 20px;
    border-color: #42c02e;
    color: #fff;
    padding: 8px 22px;
    outline: none;
    font-size: 16px;
    border-style: none;
    background-color: #42c02e;
  }
  .new-collection .radio-group input {
    margin-right: 5px;
  }
  .new-collection .radio-group > label {
    flex: 1;
  }
  .new-collection .radio-group {
    display: flex; padding-left: 15px;
  }
  .new-collection input[type=text] {
    width: 100%;
  }
  .new-collection textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    padding: 10px 15px;
    font-size: 15px;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
    display: block;
    resize: none;
    outline-style: none;
  }
  .new-collection input {
    padding: 10px 15px;
    font-size: 15px;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
    outline: none;
  }
  .new-collection td.title {
    font-size: 15px;
    color: #969696;
  }

  .avatar-collection img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 10%;
  }
  .new-collection .avatar-collection {
    cursor: default;
    width: 100px;
    height: 100px;
  }
  .new-collection td {
    padding: 16px 0;
    font-size: 15px;
  }
  .new-collection > table  {
    width: 100%;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .new-collection > h3 {
    margin: 10px 0 20px;
    font-size: 21px;
    font-weight: 700;
    color: #333;
  }
  .new-collection {
    margin-left: 12.5%;
    width: 75%;
    margin-bottom: 60px;
  }
  * {
    font-family: Georgia,Times New Roman,Times,Songti SC,serif;
  }
</style>
