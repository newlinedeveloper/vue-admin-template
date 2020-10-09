<template>
  <a-layout>
    <drawer v-if="isMobile" :openDrawer="collapsed" @change="onDrawerChange">
      <sider-menu
        :theme="theme"
        :menuData="menuData"
        :collapsed="false"
        :collapsible="false"
        @menuSelect="onMenuSelect"
      />
    </drawer>
    <sider-menu
      :theme="theme"
      v-else-if="layout === 'side'"
      :menuData="menuData"
      :collapsed="collapsed"
      :collapsible="true"
    />
    <!-- :style="{ 'padding-left': collapsed ? '80px': '256px' }" -->
    <a-layout>
      <global-header :menuData="menuData" :collapsed="collapsed" @toggleCollapse="toggleCollapse" />
      <a-layout-content :style="{minHeight: minHeight, margin: '24px 24px 0'}">
        <transition name="page-toggle">
          <keep-alive v-if="multipage">
            <router-view />
          </keep-alive>
          <router-view v-else />
        </transition>
      </a-layout-content>
      <a-layout-footer style="padding: 0px">
        <global-footer :link-list="linkList" :copyright="copyright" />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import GlobalHeader from "./GlobalHeader";
import GlobalFooter from "./GlobalFooter";
import Drawer from "@/components/tool/Drawer";
import SiderMenu from "@/components/menu/SiderMenu";

const minHeight = window.innerHeight - 64 - 24 - 122;

let menuData = [];

export default {
  name: "GlobalLayout",
  components: { SiderMenu, Drawer, GlobalFooter, GlobalHeader },
  data() {
    return {
      minHeight: minHeight + "px",
      collapsed: false,
      menuData: menuData,
      showSetting: false
    };
  },
  computed: {
    isMobile() {
      return this.$store.state.AppSetting.isMobile;
    },
    theme() {
      return this.$store.state.AppSetting.theme;
    },
    layout() {
      return this.$store.state.AppSetting.layout;
    },
    linkList() {
      return this.$store.state.AppSetting.footerLinks;
    },
    copyright() {
      return this.$store.state.AppSetting.copyright;
    },
    multipage() {
      return this.$store.state.AppSetting.multipage;
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
    onDrawerChange(show) {
      this.collapsed = show;
    },
    onMenuSelect() {
      this.toggleCollapse();
    }
  },
  beforeCreate() {
    menuData = this.$router.options.routes.find(item => item.path === "/")
      .children;
  }
};
</script>

<style lang="less" scoped>
.setting {
  background-color: #1890ff;
  color: #fff;
  border-radius: 5px 0 0 5px;
  line-height: 40px;
  font-size: 22px;
  width: 40px;
  height: 40px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
}
</style>
