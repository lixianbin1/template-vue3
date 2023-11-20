import { createPinia,defineStore } from "pinia";
export const Store = createPinia()
export const useStore = defineStore('main',{
    state:()=>({
        counter:0
    }),
    getters:{
        double:(state)=> state.counter + 1,
    },
    actions:{
        addNum(){
            
            this.counter++
            console.log(this.counter)
        }
    }
})