<template>
  <div class="app-search">
    <div class="search" :class="{'open': $store.state.config.opSearch}">
      <form action="/" method="post">
        <input name="keyboard" id="keyboard" class="input_text" placeholder="请输入关键字词"
               style="color: rgb(153, 153, 153);" type="text">
        <input name="show" value="title" type="hidden">
        <input name="tempid" value="1" type="hidden">
        <input name="tbname" value="news" type="hidden">
        <input name="Submit" class="input_submit" style="cursor: pointer;" value="搜索" type="submit">
      </form>
    </div>
    <div class="app-search-close" @click="$store.commit('config/TOGGLE_SEARCH', false)"></div>
  </div>
</template>

<script>
	export default {
		name: "layoutSearch",
    mounted() {
		  console.log(this.$store.state.config.opSearch)
    }

  }
</script>
