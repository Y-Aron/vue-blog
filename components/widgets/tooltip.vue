<template>
  <div class="tooltip tooltip-error fade right" :style="tooltipCls">
    <div class="tooltip-arrow tooltip-arrow-border" style="top: 50%;"></div>
    <div class="tooltip-arrow tooltip-arrow-bg" style="top: 50%;"></div>
    <div class="tooltip-inner">
      <i class="fa fa-exclamation-triangle"></i>
      <span>{{message}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tooltip",
    props: {
      message: String,
      show: false,
      top: 0,
      left: 0
    },
    computed: {
      tooltipCls() {
        return {
          'opacity': this.show ? '0.9' : '0',
          'top': this.top + 'px',
          'left': this.left + 'px'
        }
      }
    }
  }
</script>

<style scoped>
  .tooltip-error .tooltip-inner i {
    position: static;
    margin-right: 5px;
    font-size: 20px;
    color: #ea6f5a;
    vertical-align: middle;
  }
  .tooltip-error .tooltip-inner {
    max-width: 280px;
    color: #333;
    border: 1px solid #ea6f5a;
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
  }
  .tooltip-error.right .tooltip-arrow-bg {
    left: 2px !important;
    border-right-color: #fff;
  }
  .tooltip-error.right .tooltip-arrow-border {
    border-right-color: #ea6f5a;
  }
  .tooltip.right .tooltip-arrow {
    left: 0;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
  }
  .tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .tooltip-error {
    font-size: 14px;
    line-height: 25px;
    white-space: nowrap;
    background: none;
  }
  .tooltip.right {
    margin-left: 3px;
    padding: 0 5px;
  }
  .tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-break: auto;
    line-height: 1.42857;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    font-size: 12px;
    opacity: 0;
    filter: alpha(opacity=0);
  }
</style>
