<template>
    <div v-show="show">
      <slot></slot>
    </div>
</template>

<script>
	export default {
		name: "tabPanel",
    props: {
		  name: {
		    type: [String, Number]
      },
      label: {
		    type: String,
        default: ''
      }
    },
    data() {
		  return {
		    show: true
      }
    },
    methods: {
		  updateTab() {
		    this.$parent.updateTab()
      }
    },
    watch: {
      label() {
        this.updateTab()
      }
    },
    mounted() {
		  this.updateTab()
    }
  }
</script>
