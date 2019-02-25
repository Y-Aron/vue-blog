<template>
    <div id="sign">
      <div class="sign-main">
        <h4 class="title">
          <div class="normal-title">
            <a :class="{'active': showSignIn}" @click="showSignIn = true">登录</a>
            <b>·</b>
            <a :class="{'active': !showSignIn}" @click="showSignIn = false">注册</a>
          </div>
        </h4>
        <div class="sign-in-container" :style="{'display': showSignIn?'block': 'none'}">
          <label class="first-container label-container">
            <input type="text"  placeholder="手机号或邮箱">
            <i class="fa fa-user"></i>
          </label>

          <label class="label-container">
            <input type="password" placeholder="密码">
            <i class="fa fa-lock"></i>
          </label>

          <label class="remember" >
            <div style="display: inline-flex">
              <input type="checkbox" style="width: 18px;height: 18px;margin-top: 2px">
              <div style="margin-left: 5px">记住我</div>
            </div>
          </label>

          <div class="no-user">
            没有账号，前往注册
          </div>

          <button class="sign-in-btn sign-btn">登录</button>
        </div>

        <div class="sign-up-container" :style="{'display': showSignIn?'none': 'block'}">
          <label class="first-container label-container">
            <input type="text" placeholder="你的昵称">
            <i class="fa fa-user"></i>
          </label>

          <label class="label-container no-container" >
            <input type="text" placeholder="手机号">
            <i class="fa fa-mobile"></i>
          </label>

          <label class="label-container">
            <input type="text" placeholder="设置密码">
            <i class="fa fa-lock"></i>
          </label>
          <button class="sign-btn sign-up-btn" >注册</button>

          <p class="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书<br>
            <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a> 和
            <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。</p>

        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "login",
    layout: 'simple',
    data() {
		  return {
		    showSignIn: true
      }
    }
	}
</script>

<style scoped>
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
  .sign-main .title, .label-container input, .sign-in-btn {
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
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
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
