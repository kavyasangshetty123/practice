import { useEffect, useState } from "react"
import { flipkartApi } from "../../service/flipkart.service"

export const MyUseEffect:React.FC<{}>=()=>{
let [data,setData]=useState<any>([]);
  
useEffect(()=>{
    (async()=>{
        let data1= await flipkartApi()
        setData(data1)
        console.log("-->inside",data1)
     })()
},[]);
    
    console.log("-->outside",data)
    return <>
   {data.map((item:any)=>{return <img width='200px' src={`${item.image}`}/>})}
   
    </>
}