<template>
  <div>
    <transition enter-active-class="animated zoomIn fast"
                leave-active-class="animated zoomOut fast">
      <div v-show="vShow" class="app-message" :style="initClass()">
        {{val}}
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "message",
    methods: {
      initClass() {
        return {
          'width': this.width + 'px',
          'margin-left': (-this.width / 2) + 'px',
          'color': this.color,
          'border-color': this.color
        }
      }
    },
    props: {
      type: {
        type: String,
        default: 'info',
        // validator: val => ['info', 'success', 'warn', 'error'].includes(val)
      },
      value: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 310
      },
      color: {
        type: String,
        default: '#de533a'
      }
    },
    watch: {
      show(val) {
        this.vShow = val
      },
      value(val) {
        this.val = val
      }
    },
    data() {
      return {
        vShow: this.show,
        val: this.value,
      }
    }
  }
</script>

<style scoped>
  .app-message {
    position: fixed;
    top: 60px;
    left: 50%;
    border: 1px solid;
    border-radius: 8px;
    font-size: 13px;
    padding: 6px 10px;
    background-color: white;
    z-index: 999999;
    text-align: center;
    font-weight: bold;
  }
</style>
