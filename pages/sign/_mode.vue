<template>
    <div id="sign">
      <div class="sign-main">
        <h4 class="title">
          <div class="normal-title">
            <a :class="{'active': showSignIn}" @click="showSignIn = true">{{$t('sign.in')}}</a>
            <b>·</b>
            <a :class="{'active': !showSignIn}" @click="showSignIn = false">{{$t('sign.up')}}</a>
          </div>
        </h4>

        <tooltip v-bind="tooltip" />

        <div class="sign-in-container" :style="{'display': showSignIn?'block': 'none'}">
          <label class="first-container label-container">
            <input type="text" ref="user" :placeholder="$t('signIn.user')" v-model="user">
            <i class="fa fa-user"></i>
          </label>
          <label class="label-container no-container">
            <input type="password" :placeholder="$t('signIn.password')">
            <i class="fa fa-lock"></i>
          </label>

          <label class="label-container">
            <input type="password" :placeholder="$t('signIn.captcha')">
            <i class="fa fa-lock"></i>
            <img id="captcha" src="/images/author.jpg">

          </label>

          <label class="remember" >
            <div style="display: inline-flex">
              <input type="checkbox" style="width: 18px;height: 18px;margin-top: 2px">
              <div style="margin-left: 5px">{{$t('signIn.remember')}}</div>
            </div>
          </label>

          <div class="no-user" @click="showSignIn = false">
            {{$t('signIn.noUser')}} <i class="fa fa-arrow-right"></i>
          </div>

          <button class="sign-in-btn sign-btn" @click="transaction(login)">
            <i class="fa fa-spinner fa-pulse fa-fw" v-show="loading"></i>
            {{$t('signIn.submit')}}</button>
        </div>

        <div class="sign-up-container" :style="{'display': showSignIn?'none': 'block'}">
          <label class="first-container label-container">
            <input type="text" :placeholder="$t('signUp.nickname')">
            <i class="fa fa-user"></i>
          </label>
          <label class="label-container no-container" >
            <input type="text" v-model="mobile" :placeholder="$t('signUp.mobile')">
            <i class="fa fa-mobile"></i>
          </label>

          <label class="label-container no-container" v-show="showCaptcha">
            <input type="text" :placeholder="$t('signUp.captcha')" v-model="captcha">
            <i class="fa fa-shield"></i>
            <a :class="captchaCls" @click="sendCaptcha">
              {{sending ? $t('signUp.newSend')+ '('+ seconds +')' :$t('signUp.sendCaptcha')}}
            </a>
          </label>

          <label class="label-container">
            <input type="text" :placeholder="$t('signUp.password')">
            <i class="fa fa-lock"></i>
          </label>
          <button class="sign-btn sign-up-btn" @click="transaction(register)">
            <i class="fa fa-spinner fa-pulse fa-fw" v-show="loading"></i>
            {{$t('signUp.submit')}}
          </button>

          <p class="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书<br>
            <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a> 和
            <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。</p>
        </div>

        <div class="more-sign">
          <h6>{{$t('sign.more')}}</h6>
          <ul>
            <li><a class="weixin"><i class="fa fa-weixin"></i></a></li>
            <li><a class="qq"><i class="fa fa-qq"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
	import Tooltip from "../../components/widgets/tooltip";

  export default {
    components: {Tooltip},
    layout: 'simple',
    beforeMount() {
      const mode = this.$route.params.mode
      if ('in' === mode) {
        this.showSignIn = true
      }
      if ('up' === mode) {
        this.showSignIn = false
      }
    },
    watch: {
		  user(val) {
		    this.changeTooltip('user', '用户名已存在 ')
      },
      mobile(val) {
        this.showCaptcha = true
		    this.captchaCls['disable'] = !this.$verify.verifyMobile(val);
      },
      captcha(val) {

      }
    },
    methods: {
      transaction(func) {
        if (this.loading) {
          return
        }
        this.loading = true
        func()
        setTimeout(() => {
          this.loading = false
        }, 1000)
      },

      register() {
        console.log('注册')
      },
      sendCaptcha() {
        if (this.sending) {
          return
        }
        const seconds = this.seconds
        this.sending = true
        const interval = setInterval(() => {
          this.seconds -= 1
        }, 1000)

        setTimeout(() => {
          clearInterval(interval)
          console.log('发送成功')



          this.sending = false
          this.seconds = seconds
        }, seconds * 1000)
      },
		  login() {
        console.log('登陆')
      },
      changeTooltip(refName, message) {
        const e = this.$refs[refName].getBoundingClientRect()
        this.tooltip.top = e.top + e.height / 7
        this.tooltip.left = e.left + e.width
        this.tooltip.show = true
        this.tooltip.message = message
      },
    },
    data() {
		  return {
        seconds: 60,
		    sending: false,
		    loading: false,
        showCaptcha: false,
		    showSignIn: true,
        user: '',
        captcha: '',
        mobile: '',
        captchaCls: {
          'btn-up-resend': true,
          'disable': true
        },
        tooltip: {
		      show: false,
          top: 0,
          left: 0,
          message: ''
        }
      }
    }
	}
</script>

<style scoped>
  #captcha {
    position: absolute;
    width: 115px;
    height: 35px;
    right: 10px;
    top: -7px;
  }
  #sign .more-sign .weixin {
    color: #00bb29;
  }
  #sign .more-sign .qq {
    color: #498ad5;
  }
  #sign .more-sign ul li i {
    font-size: 25px;
  }
  #sign .more-sign ul li {
    margin: 0 5px;
    display: inline-block;
  }
  #sign .more-sign>h6:before, #sign .more-sign>h6:after {
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 60px;
    top: 5px;
  }
  #sign .more-sign>h6:before {
    left: 30px;
  }
  #sign .more-sign>h6:after {
    right: 30px;
  }
  #sign .more-sign>h6 {
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
  }
  #sign .more-sign {
    margin-top: 50px;
  }
  #sign .disable {
    opacity: .5;
    pointer-events: none;
  }
  .sign-up-container .btn-up-resend {
    position: absolute;
    top: -6px;
    right: -290px;
    width: 100px;
    height: 36px;
    font-size: 13px;
    color: #fff;
    background-color: #42c02e;
    border-radius: 20px;
    line-height: 36px;
  }
  .no-user:hover {
    color: black;
  }
  .no-user {
    cursor: pointer;
    margin: 15px 0;
    color: #969696;
    float: right;
    font-size: 12px;
  }
  .sign-up-msg a {
    color: #3194d0;
  }
  .sign-up-msg {
    margin: 10px 0;
    padding: 0;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
  }
  .sign-in-btn:hover {
    background: #187cb7;
  }
  .sign-in-btn {
    background: #3194d0;
  }
  .sign-up-btn {
    background: #42c02e;
  }
  .sign-up-btn:hover {
    background: #1C9317;
  }
  .sign-btn {
    clear: both;
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    outline: none;
    display: block;
  }
  .remember {
    float: left;
    margin: 15px 0;
    color: #969696;
    cursor: pointer;
  }
  .first-container input {
    border-bottom: none !important;
    border-radius: 4px 4px 0 0 !important;
  }
  .no-container input {
    border-radius: 0 !important;
    border-bottom: none !important;
  }

  .sign-main input{
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    outline: none;
  }
  .label-container i {
    position: absolute;
    top: 4px;
    left: 18px;
    font-size: 18px;
    color: #969696;
  }
  .label-container input{
    width: 100%;
    height: 47px;
    font-size: 14px !important;
    margin-bottom: 0;
    padding: 4px 12px 4px 40px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
  }
  .label-container {
    position: relative;
    width: 100%;
  }
  .sign-main .title, .sign-in-btn {
    font-family: Georgia,Times New Roman,Times,Songti SC,serif;
  }
  a{
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
  }
  .sign-main .active {
    font-weight: 700;
    color: #ea6f5a !important;
    border-bottom: 2px solid #ea6f5a;
  }
  .sign-main .title b {
    padding: 10px;
  }
  .sign-main .title a {
    padding: 10px;
    color: #969696;
    font-size: 18px;
  }
  .sign-main .title {
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
  }
  *, :after, :before {
    box-sizing: border-box;
  }

  #sign {
    height: 100%;
    text-align: center;
    font-size: 14px;
  }

  #sign .sign-main {
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
  }
</style>
