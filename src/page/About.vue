<template>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <span @click="addNum">{{counter}} </span>
    <HelloWorld msg="Vite + Vue" />
    <router-link to="/about">about</router-link>
    <router-link to="/about/word">word</router-link>
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
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  </style>
  