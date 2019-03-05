<template>
  <section class="v-modal-wrap" v-show="vShow">
    <div class="v-modal-mask"></div>
    <transition enter-active-class="animated slideInDown fast"
                leave-active-class="animated slideOutUp fast">
      <div class="v-modal" v-show="vShow">
        <header>
          <h4 style="font-weight: 400;font-size: 18px">绑定邮箱</h4>
          <a class="close" @click="close">×</a>
        </header>
        <main>
          <div class="form-main">
            <div>
              <i class="fa fa-envelope"></i>
              <div class="input-wrap">
                <input type="text" placeholder="请输入你的常用邮箱">
              </div>
            </div>
            <div class="form-item">
              <i class="fa fa-expeditedssl"></i>
              <button class="btn">发送验证码</button>
              <div class="input-wrap">
                <input type="text" placeholder="验证码">
              </div>
            </div>
          </div>
          <button class="submit_btn btn">确认</button>
        </main>
      </div>
    </transition>

  </section>
</template>

<script>
  export default {
    name: "VModal",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      show(val) {
        this.vShow = val
      }
    },
    data() {
      return {
        vShow: this.show
      }
    },
    methods: {
      close() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  .v-modal-wrap .btn {
    color: #fff;
    background: #3194d0;
    border-style: none;
    outline: none;
  }

  .v-modal-wrap .submit_btn {
    margin-top: 20px;
    width: 100%;
    font-size: 18px;
    border-radius: 25px;
    padding: 9px 18px;
    text-align: center;
  }

  .v-modal-wrap .v-modal .form-item button {
    float: right;
    margin: 7px;
    height: 36px;
    line-height: 19px;
    border-radius: 18px;
    width: 120px;
  }

  .v-modal-wrap .v-modal .form-main .form-item {
    border-top: 1px solid #c8c8c8;
  }

  .v-modal-wrap .input-wrap > input {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border: none;
    background-color: transparent;
    padding-left: 0;
  }

  .v-modal-wrap .input-wrap {
    overflow: hidden;
  }

  .v-modal-wrap .fa {
    float: left;
    font-size: 18px;
    color: #969696;
    display: block;
    width: 40px;
    text-align: center;
    line-height: 50px;
  }

  .v-modal-wrap .v-modal .form-main {
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    background-color: rgba(181, 181, 181, 0.1);
    overflow: hidden;
  }

  .v-modal-wrap .v-modal main {
    padding: 20px 20px 20px 20px;
    font-size: 15px;
  }

  .v-modal-wrap .v-modal .close:hover {
    cursor: pointer;
    opacity: 1;
  }

  .v-modal-wrap .v-modal .close {
    position: absolute;
    right: 16px;
    top: 20px;
    font-size: 26px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.8);
    opacity: .2;
  }

  .v-modal header {
    padding: 20px;
    border-bottom: 1px solid #F0F0F0;
  }

  .v-modal {
    width: 420px;
    position: absolute;
    left: 50%;
    top: 25%;
    margin-left: -240px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    opacity: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .v-modal-mask {
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    -webkit-transition: opacity 0.3s;
    -o-transition: opacity 0.3s;
    transition: opacity 0.3s;
    opacity: 1;
  }

  .v-modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: transparent;
  }
</style>
