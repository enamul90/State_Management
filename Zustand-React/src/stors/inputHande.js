import {create} from "zustand";


let myFormData = create((set)=>({


    email:"",
    description:"",
    todos:[],
    setMail:(e)=> set({email:e}),
    setDescription:(e)=> set({description:e}),
    addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo], })),




}))


export default myFormData;

