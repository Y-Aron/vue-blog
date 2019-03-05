<template>
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
            <img src="/images/author.jpg" alt="">
          </div>

        </td>
        <td class="top-line"></td>
      </tr>



    </tbody>
  </table>
</template>

<script>
	export default {
		name: "basic"
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
