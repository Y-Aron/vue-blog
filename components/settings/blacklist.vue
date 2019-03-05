<template>
    <div>blacklist
      <button @click="show=!show">点击</button>
      <message :show="show" :value="'vShow'"/>

    </div>
</template>

<script>
	import Message from "../widgets/message";
  export default {
		name: "blacklist",
    components: {Message},
    data() {
		  return {
		    show: true
      }
    }
  }
</script>

<style scoped>

</style>
