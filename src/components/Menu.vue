<template>
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
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Vue3</span>
      </template>
      <el-sub-menu index="2-1">
        <template #title>复习笔记</template>
        <el-menu-item index="/">Notion</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'
// Menu事件
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
// 菜单路由配置
const route = useRoute()
const defaultPath = ref(route.path)
watch(()=>route.path,(path)=>{
  defaultPath.value = path
})
</script>

<style scoped>

</style>
