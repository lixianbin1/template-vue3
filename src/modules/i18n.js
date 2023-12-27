import { createI18n } from 'vue-i18n'

console.log("读取模块",import.meta.glob('./../language/*.y(a)?ml',{ eager: true }))

const messages = Object.fromEntries(
  Object.entries(import.meta.glob('./../language/*.y(a)?ml'))
  .map(([key,value]) => {
    
    //判断文件的后缀名称是什么，用来定位剪切
    const yaml = key.endsWith('.yaml')
    console.log("循环处理",key,value)
    return [key.slice(12, yaml ? -5 : -4), value.default]
  })
)
console.log(messages)

export const install = (app) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })
  app.use(i18n)
}
export default install