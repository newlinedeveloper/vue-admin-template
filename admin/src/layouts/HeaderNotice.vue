<template>
  <a-dropdown :trigger="['click']">
    <template slot="overlay">
      <a-spin :spinning="loadding">
        <div
          :tabBarStyle="{textAlign: 'center'}"
          :style="{backgroundColor: 'white', width: '297px', padding: '0 24px'}"
        >
          <a-list>
            <a-list-item>
              <a-list-item-meta
                title="You received 14 new weekly newspapers"
                description="Description"
              >
                <a-avatar
                  :src="require('@/assets/images/png/email.png')"
                  style="background-color: white"
                  slot="avatar"
                />
              </a-list-item-meta>
            </a-list-item>
            <a-list-item>
              <a-list-item-meta title="New Notification" description="description">
                <a-avatar
                  style="background-color: white"
                  slot="avatar"
                  :src="require('@/assets/images/png/add.png')"
                />
              </a-list-item-meta>
            </a-list-item>
            <a-list-item>
              <a-list-item-meta title="New Notification" description="description">
                <a-avatar
                  style="background-color: white"
                  slot="avatar"
                  :src="require('@/assets/images/png/noti.png')"
                />
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </div>
      </a-spin>
    </template>
    <span @click="fetchNotice" class="header-notice">
      <a-badge count="12">
        <a-icon :class="['header-notice-icon', theme]" type="bell" />
      </a-badge>
    </span>
  </a-dropdown>
</template>

<script>
export default {
  name: "HeaderNotice",
  data() {
    return {
      loadding: false
    };
  },
  computed: {
    theme() {
      return this.$store.state.AppSetting.layout === "side"
        ? "light"
        : this.$store.state.AppSetting.theme;
    }
  },
  methods: {
    fetchNotice() {
      if (this.loadding) {
        this.loadding = false;
        return;
      }
      this.loadding = true;
      setTimeout(() => {
        this.loadding = false;
      }, 2000);
    }
  }
};
</script>

<style lang="less">
.header-notice {
  display: inline-block;
  transition: all 0.3s;
  span {
    vertical-align: initial;
  }
  .header-notice-icon {
    font-size: 16px;
    padding: 4px;
    &.dark {
      color: #fff;
    }
    &.light {
      color: rgba(0, 0, 0, 0.65);
    }
  }
}
.ant-dropdown-menu-container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
