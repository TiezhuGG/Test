<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu
        router
        default-active="/router2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <el-menu-item-group>
            <el-menu-item index="/router1">路由1</el-menu-item>
            <el-menu-item index="/router2">路由2</el-menu-item>
            <el-menu-item index="/router3">路由3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-row>
        <el-button @click="transformMenu" v-model="isCollapse" style="margin-left: 20px; margin-right: 100px;">点击我折叠侧边栏</el-button>
        <el-button class="btn1" @click="tabPush1">Tab1</el-button>
        <el-button class="btn2" @click="tabPush2">Tab2</el-button>
        <el-button class="btn3" @click="tabPush3">Tab3</el-button>

        <el-popover title="通知" width="200" trigger="hover" content="移动鼠标到标签上激活。">
          <el-button class="popover" slot="reference">hover激活</el-button>
        </el-popover>
        <el-popover
          placement="bottom"
          title="通知"
          width="200"
          trigger="click"
          content="点击鼠标激活。"
        >
          <el-button slot="reference">click激活</el-button>
        </el-popover>
        <el-popover
          ref="popover"
          placement="right"
          title="通知"
          width="200"
          trigger="focus"
          content="长按鼠标激活。"
        ></el-popover>
        <el-button v-popover:popover>focus 激活</el-button>
      </el-row>
      <el-header style="text-align: right; font-size: 18px">
        <el-dropdown>
          <span>
            下拉菜单
            <i style="margin-right: 30px"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>选项1</el-dropdown-item>
            <el-dropdown-item>选项2</el-dropdown-item>
            <el-dropdown-item>选项3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
      <el-footer style="text-align: center; font-size: 18px">footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    transformMenu() {
      this.isCollapse = !this.isCollapse;
    },
    tabPush1() {
      this.$router.push("/router1");
    },
    tabPush2() {
      this.$router.push("/router2");
    },
    tabPush3() {
      this.$router.push("/router3");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-row {
  background-color: #fff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 300px;
}

.btn1 {
  position: absolute;
  top: 70px;
  left: 10px;
}

.btn2 {
  position: absolute;
  top: 70px;
  left: 102px;
}

.btn3 {
  position: absolute;
  top: 70px;
  left: 194px;
}
</style>