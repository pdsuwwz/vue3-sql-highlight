<template>
  <NavigationSideLogo />
  <div class="nav-s-menu">
    <div class="nav-s-menu-inner">
      <!-- <div
        v-for="(menuItem, index) in menuList"
        :key="index"
        class="nav-s-menu__item"
      >
        <el-button @click="handleToTarget(menuItem)">{{ menuItem.name }}</el-button>
      </div> -->
      <el-menu
        :default-active="$route.path"
        background-color="#36383d"
        @select="handleToTarget"
      >
        <el-menu-item
          v-for="(menuItem, index) in menuList"
          :key="index"
          :index="'/target-module/' + menuItem.path"
        >
          <span>{{ menuItem.meta.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import NavigationSideLogo from './SideLogo.vue'

import { getTargetModuleRoutes } from '@/modules/TargetModule/utils'

export default defineComponent({
  name: 'NavigationSideMenu',
  components: {
    NavigationSideLogo
  },
  setup() {
    const router = useRouter()
    const menuList = getTargetModuleRoutes()

    const handleToTarget = (path) => {
      router.push({
        path
      })
    }
    return {
      menuList,
      handleToTarget
    }
  }
})
</script>

<style lang="scss" scoped>
// navigation-side-menu
$ns: "nav-s-menu";
.#{$ns} {
  width: 224px;
  flex: 1;
  min-height: 0;
  color: #fff;

  &-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar-thumb {
      background: $color-primary;
      border-radius: 3px;
    }

    &:deep() {

      .el-menu {
        width: 100%;
        border-right: transparent;
      }

      .el-menu-item {
        color: #fff;

        &.is-active {
          color: #fff;
          font-weight: bolder;
          background-color: $color-primary;
        }
      }
    }

    // border: 1px solid red;
  }
}
</style>
