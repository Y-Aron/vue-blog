<template>
    <div class="app-settings">
      <div class="aside">
        <ul>
          <li v-for="(vol, index) in settings">
            <nuxt-link :class="{'active': current === index}"
                       :to="{name: 'settings-target', params: {target: vol.target}}">
              <div class="setting-icon"><i :class="vol.icon"></i></div> <span>{{vol.name}}</span></nuxt-link>
          </li>
        </ul>
      </div>

      <div class="setting-container">
        <basic v-show="target === defaultTarget[0]"/>
        <profile v-show="target === defaultTarget[1]"/>
        <blacklist v-show="target === defaultTarget[2]"/>
        <misc v-show="target === defaultTarget[3]"/>
      </div>

    </div>
</template>

<script>
	import Basic from "../../components/settings/basic";
  import Profile from "../../components/settings/profile";
  import Blacklist from "../../components/settings/blacklist";
  import Misc from "../../components/settings/misc";
  export default {
    components: {Misc, Blacklist, Profile, Basic},
    beforeMount() {
      const target = this.$route.params.target
      const pos = this.defaultTarget.indexOf(target)
      if (pos !== -1) {
        this.target = target
        this.current = pos
      } else {
        this.target = 'basic'
      }
    },
    data() {
      const defaultTarget = [
        'basic','profile','blacklist','misc'
      ]
      return {
        defaultTarget,
        target: '',
        settings: [{
          icon: 'fa fa-list-ul',
          name: '基础设置',
          target: defaultTarget[0]
        },{
          icon: 'fa fa-user-o',
          name: '个人资料',
          target: defaultTarget[1]
        },{
          icon: 'fa fa-ban',
          name: '黑名单',
          target: defaultTarget[2]
        },{
          icon: 'fa fa-cog',
          name: '账号设置',
          target: defaultTarget[3]
        },],
        current: 0,
      }
    }
  }
</script>

<style>
  .app-header-nav,.app-search,#app-container {
    width: 960px ;
  }
  .app-settings tbody td {
    padding: 20px 0;
  }
  .app-settings .top-line {
    padding-top: 0;
  }
</style>

<style scoped>

  .setting-icon i {
    margin: 6px 0 0 1px;
    font-size: 18px;
    display: block;
  }
  .setting-icon {
    margin-right: 15px;
    width: 32px;
    height: 32px;
    text-align: center;
    color: #fff;
    background-color: #a0a0a0;
    border-radius: 4px;
    display: inline-block;
    vertical-align: middle;
  }
  .app-settings .active {
    background-color: #f0f0f0;
  }
  .app-settings .aside li > a:hover {
    background-color: #f0f0f0;
  }
  .app-settings .aside li > a {
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 15px;
    display: block;
  }

  .app-settings .setting-container {
    flex: 8.7;
    padding: 0 30px;
  }
  .app-settings .aside {
    flex: 2.3;
  }
  .app-settings {
    display: flex;
    margin-top: 15px;
  }

  span {
    font-family: Georgia,Times New Roman,Times,Songti SC,serif;
  }
</style>
