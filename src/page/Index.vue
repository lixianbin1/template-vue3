<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="navbar">
          <div class="icon">Template-vue3</div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="defaultPath"
            router
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Element Plus</span>
              </template>
              <el-sub-menu index="1-1">
                <template #title>基础组件</template>
                <el-menu-item index="/Buttom">按钮</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-container class="main">
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores';
const route = useRoute()
const Store = useStore()
const {counter} = storeToRefs(Store)

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
// 菜单路由配置
const defaultPath = ref(route.path)
watch(()=>route.path,(path)=>{
  defaultPath.value = path
})
</script>
  
<style scoped>
.icon{
  height: 100%;
  line-height: 50px;
}
</style>
  