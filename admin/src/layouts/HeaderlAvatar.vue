<template>
  <a-dropdown style="display: inline-block; height: 100%; vertical-align: initial">
    <span style="cursor: pointer">
      <a-avatar class="avatar" size="small" shape="circle" :src="currUserAvatar" />
      <span>{{currUser.name}}</span>
    </span>
    <a-menu style="width: 150px" slot="overlay">
      <!-- <a-menu-item>
        <a-icon type="user" />
        <span>Profile</span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="setting" />
        <span>Setting</span>
      </a-menu-item>
      <a-menu-divider />-->
      <a-menu-item>
        <router-link
          to
          @click.native="()=>{
          $store.dispatch('Account/onLogoutUser')
          }"
        >
          <a-icon type="poweroff" />
          <span>Logout</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: "HeaderAvatar",
  computed: {
    currUser() {
      return this.$store.state.Account.user;
    },
    currUserAvatar() {
      if (
        this.$store.state.Account.user.avatar &&
        String(this.$store.state.Account.user.avatar).length > 0
      ) {
        return this.$store.state.Account.user.avatar;
      } else {
        return require("@/assets/avatars/default-avatar.png");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.avatar {
  margin: 20px 4px 20px 0;
  color: #1890ff;
  background: hsla(0, 0%, 100%, 0.85);
  vertical-align: middle;
}
</style>
