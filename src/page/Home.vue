<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="navbar">

        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container class="main">
          <el-main style="height: 1200px;">
            <div>
              <p><router-link to="/about">about</router-link></p>
              <p><router-link to="/about/word">word</router-link></p>
            </div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
  
<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { ref,reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores';
const Store = useStore()
const {counter} = storeToRefs(Store)

const addNum=()=>{
  Store.addNum()
  console.log(counter)
  console.log(Store.counter)
}
</script>
  
<style scoped>

</style>
  