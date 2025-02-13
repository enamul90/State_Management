import {create} from "zustand";
import axios from "axios";


const myBrandList = create((set)=>({

    brands:null,
    brandReq: async ()=>{
    let res =  await axios.get('http://localhost:3001/api/BrandList')
    let result = res.data.data;
        set({brands:result});
}
}))

export default myBrandList;


