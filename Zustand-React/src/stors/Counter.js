import {create} from "zustand"

const myCounterStore = create((set)=>({
    count: 0,
    addCount:()=>set((state)=>({
        count: state.count + 1,
    })),

    removeCount:()=>set((state)=>({
        count: state.count - 1,
    })),
    reset:()=>set({count:0}),

}))








export default myCounterStore