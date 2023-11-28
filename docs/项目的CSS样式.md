# 项目的CSS样式

## 项目的UI库

常见的UI库挺多的，Bootstrap，Element，Antd，Bootstrap，Unocss等等，带来了各种各样的观点，这里就不详细展开，直接挑个简单的用着

### Element-plus 的导入

> yarn add element-plus
> yarn add @element-plus/icons-vue

```js
// main.js

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)

```

### 国际化的配置

Element Plus 提供了全局配置国际化的配置，默认使用英语，实际上，elementPlus版本有很多问题没人维护，就比如全局配置这个功能已经被删了，但是文档却很久没更新。所以不能使用全局配置国际化。

```js
// App.vue
<el-config-provider :locale="locale">
  <router-view/>
</el-config-provider>

<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = zhCn
</script>
```

### 引入了国际化翻译

> yarn add vue-i18n@9
> yarn add @intlify/unplugin-vue-i18n/vite

```js
// main.js

import i18n from '@/modules/i18n.js'
const app = createApp(App)
app.use(i18n)

```

```js
// modules/i18n.js

import { createI18n } from 'vue-i18n'
const messages = Object.fromEntries(
  Object.entries(import.meta.glob('./../language/*.y(a)?ml'))
  .map(([key,value]) => {
    
    //判断文件的后缀名称是什么，用来定位剪切
    const yaml = key.endsWith('.yaml')
    return [key.slice(12, yaml ? -5 : -4), value.default]
  })
)
export const install = (app) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })
  app.use(i18n)
}
export default install
```

```js
// vite.config.js

import { resolve } from "path"
import VueI18n from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig({
  plugins: [
    VueI18n({
      include: [resolve(__dirname, './src/language/**')],
    }),
  ],
  //...
})
```

### iconify 的导入

Iconify 是一套面向开发人员和设计人员的工具，旨在以一致的方式轻松使用不同的图标集

> yarn add --dev @iconify/vue

```js
// Home.vue

<template>
  <Icon icon="mdi-light:home" />
<template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
```

### 字体的引入

字体的引入就比较简单了，下载好授权的字体文件，然后在CSS文件里引入

```css
// style.css

/*字体*/
@font-face
{
    font-family: 'Banquise';
    src: url('@/assets/fonts/Banquise-Regular.woff');
    font-weight: normal;  
    font-style: normal;  
}
.Banquise{
  font-family:"Banquise"
}
```