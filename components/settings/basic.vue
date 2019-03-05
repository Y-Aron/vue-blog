<template>
  <div>
    <table>
      <thead>
      <tr>
        <td style="width: 125px"></td>
        <td></td>
      </tr>
      </thead>
      <tbody class="setting-base">
      <tr>
        <td class="top-line">
          <div class="avatar">
            <img ref="avatar" src="/images/author.jpg" alt="">
          </div>
        </td>
        <td class="top-line">
          <upload-btn :value="$t('settings.changePicture')" @change="changeImage"/>
        </td>
      </tr>
      <tr>
        <td>昵称</td>
        <td><input type="text"></td>
      </tr>
      <tr>
        <td>电子邮箱</td>
        <td><button class="btn btn-hollow" @click="showModal=true">绑定邮箱</button></td>
      </tr>
      </tbody>
    </table>

    <v-modal :show="showModal" @close="showModal=false"/>
  </div>

</template>

<script>
	import UploadBtn from "../widgets/uploadBtn";
  import VModal from "../widgets/VModal";
  export default {
		name: "basic",
    components: {VModal, UploadBtn},
    data() {
		  return {
		    showModal: false
      }
    },
    methods: {
		  changeImage(e) {
        this.$utils.previewPicture(e.target.files, this.$refs['avatar'])
      }
    }
  }
</script>

<style scoped>
  .setting-base .avatar img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .setting-base .avatar {
    width: 100px;
    height: 100px;
  }


</style>
