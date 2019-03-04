<template>
  <div class="tabs-box whitebg">
    <div class="tab-labels">
      <ul>
        <li v-for="(item, index) in tabList"
            :class="tabClass(item)" @click="handlerChange(index)"
            v-html="item.label" :style="{'width': width+'px'}">
        </li>
      </ul>
    </div>
    <div class="tab-panel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
	export default {
    props: {
		  value: {
		    type: [String, Number]
      },
      width: {
		    type: Number,
        default: 100
      }
    },
    mounted() {
		  this.updateStatus()
    },
    data() {
		  return {
		    currentValue: this.value,
        tabList: []
      }
    },
    methods: {
		  tabClass(item) {
		    return {
		      'tab-label-active': item.name === this.currentValue
        }
      },
      handlerChange(index) {
		    const tab = this.tabList[index]
        const name = tab.name
        this.currentValue = name;
		    this.$emit('input', name)
        this.$emit('onClick', name)
      },
      getTabs() {
		    return this.$children.filter(item => {
		      return item.$options.name === 'tabPanel'
        })
      },

      updateTab() {
		    this.tabList = []
		    this.getTabs().forEach((pane, index) => {
          this.tabList.push({
            label: pane.label,
            name: pane.name || index
          })

          if (!pane.name) {
            pane.name = index
          }

          if (index === 0) {
            if (!this.currentValue) {
              this.currentValue = pane.name || index
            }
          }
        })
      },
      updateStatus() {
		    const tabs = this.getTabs()
        tabs.forEach(tab => {
          return tab.show = (tab.name === this.currentValue)
        })
      }
    },
    watch: {
		  value(val) {
		    this.currentValue = val
      },
      currentValue() {
        this.updateStatus()
      }
    }
	}
</script>
<style scoped>
  .tab-label-active {
    border-bottom: 2px solid #646464;
  }
</style>
