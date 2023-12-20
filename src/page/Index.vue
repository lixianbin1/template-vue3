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
          <Menu/>
        </el-aside>
        <el-container class="main">
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores';

const Store = useStore()
const {counter} = storeToRefs(Store)
</script>
  
<style scoped>
.icon{
  height: 100%;
  line-height: 50px;
}
</style>
  