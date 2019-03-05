<template>
  <a class="upload_btn btn btn-hollow">
    <input type="file" @change="change($event)" accept="image/*"> {{value}}
  </a>
</template>

<script>
	export default {
		name: "uploadBtn",
    props: {
		  value: {
		    type: String,
        default: ''
      }
    },
    methods: {
		  change(e) {
		    this.$emit('change', e)
      }
    }
	}
</script>

<style scoped>
  .upload_btn input{
    position: absolute;
    display: block!important;
    width: 82px;
    opacity: 0;
    padding-left: 30px;
  }
</style>
