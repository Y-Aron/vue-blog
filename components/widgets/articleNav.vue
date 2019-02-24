<template>
    <div ref="nav" id="article-nav">
      <ul>
        <li class="first"><a href="">推荐</a></li>
        <li><a href="">推荐</a></li>
        <li><a href="">推荐</a></li>
        <li><a href="">推荐</a></li>
        <li><a href="">推荐</a></li>
        <li><a href="">推荐</a></li>
        <li><a href="">推荐</a></li>
        <li><a href="">推荐</a></li>

      </ul>
    </div>
</template>

<script>
	export default {
		name: "articleNav",
    mounted() {

      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop >= 80) {
          this.$refs.nav.style.top = 0
        } else {
          this.$refs.nav.style.top = "80px"
        }
      })
    }
  }
</script>

<style scoped>
  #article-nav .first{
    background: #00c1de;
    margin-top: 3px;
  }
  #article-nav .first a{
    color: white;
  }
  #article-nav li a:hover{
    background: #00c1de;
    color: white;
  }
  #article-nav li a{
    width: 100%;
    height: 100%;
    padding: 8px 0;
    display: block;
    font-size: 14px;
    color: #707070;
    text-align: center;
    margin-bottom: 1px;
  }
  #article-nav {
    width: 96px;
    background: white;
    /*height: 800px;*/
    position: fixed;
    top: 80px;
  }
</style>
