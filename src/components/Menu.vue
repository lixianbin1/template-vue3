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
    <el-sub-menu index="0">
      <template #title>
        <el-icon><location /></el-icon>
        <span>测试</span>
      </template>
      <el-menu-item index="/Demo">
        <template #title>Demo</template>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>可视化图表</span>
      </template>
      <el-menu-item index="/">
        <template #title>Echarts</template>
      </el-menu-item>
      <el-menu-item index="/GoJS">
        <template #title>GoJS</template>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Vue3</span>
      </template>
      <el-sub-menu index="2-1">
        <template #title>复习笔记</template>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'
// Menu事件
const handleOpen = (key, keyPath) => {
  console.log('展开',key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log('关闭',key, keyPath)
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
