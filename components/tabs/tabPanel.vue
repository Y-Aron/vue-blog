<template>
    <div v-show="show">
      <slot></slot>
    </div>
</template>

<script>
	export default {
    name: 'tabPanel',
    props: {
		  name: {
		    type: [String, Number]
      },
      label: {
		    type: String,
        default: ''
      }
    },
    mounted() {
      this.updateTab()
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
    }
  }
</script>
