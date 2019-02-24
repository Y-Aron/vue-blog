<template>
  <div class="image-box" :style="{'height': height +'px'}">
    <a href="/" :title="title">
      <img :src="src" :alt="title">
      <span style="-webkit-box-orient: vertical;">{{title}}</span>
    </a>
  </div>

</template>

<script>
  export default {
    name: "imageBox",
    props: {
      title: '',
      src: '',
      height: ''
    }
  }
</script>

<style >
  .image-box:hover img {
    transform: scale(1.1);
    opacity: 1
  }

  .image-box {
    width: 100%;
    background: #000;
    overflow: hidden;
    margin-bottom: 10px;
    border-radius: 3px;
    position: relative
  }

  .image-box > a {
    display: block;
    overflow: hidden;
    height: 100%;
  }

  .image-box a img {
    width: 100%;
    height: 100%;
    -moz-transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all 0.5s;
    opacity: .7;
  }

  .image-box a span {
    bottom: 0;
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    color: #FFF;
    text-align: center;
    font-size: 15px;
    margin-top: 5px;
    padding: 0 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-height: 24px;
    height: 48px;
  }
</style>
