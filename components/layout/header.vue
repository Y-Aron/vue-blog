<template>
  <div id="app-header">
    <div class="app-header-nav">
      <h2 id="app-min-nav"><span class="app-min-icon"></span></h2>
      <div class="logo"><a href="http://www.yangqq.com">{{$t('header.logo')}}</a></div>
      <nav id="app-nav-left" class="app-nav">
        <ul class="app-nav-list">
          <li>
            <a href="/"><i class="fa fa-home"></i> {{$t('header.home')}}</a>
          </li>
        </ul>
      </nav>
      <div class="app-header-search" @click="showSearch"></div>
      <nav id="app-nav-right" class="app-nav">
        <ul class="app-nav-list">
          <li class="menu">
            <nuxt-link :to="{name: 'sign-mode', params: {mode: 'in'}}">{{$t('header.sign-in')}}</nuxt-link>
            <ul class="sub">
              <li>
                <nuxt-link :to="{'name': 'user-id', params: {id: 1}}">{{$t('header.myHomePage')}}</nuxt-link>
              <li><a @click="exit">{{$t('header.exit')}}</a></li>
            </ul>
          </li>
          <li><nuxt-link :to="{name: 'sign-mode', params: {mode: 'up'}}">{{$t('header.sign-up')}}</nuxt-link></li>
          <li><nuxt-link class="write-post" to="/mdEditor" style="cursor: pointer;"><i></i>{{$t('header.blogging')}}</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      exit() {
        console.log('退出')
      },
      showSearch() {
        this.$store.commit('config/TOGGLE_SEARCH', !this.$store.state.config.opSearch)
      }
    }
  }
</script>
<style scoped>
  #app-nav-right {
    float: right;
  }

</style>

