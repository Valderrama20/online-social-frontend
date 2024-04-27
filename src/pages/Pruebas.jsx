import { useState } from "react"
import useAxios from "../hooks/useAxios"
import { methods } from "../generalVarianbles"
import { useEffect } from "react"

 
export default function Pruebas() {
     
     let {data,error,fetchData} = useAxios('ultipart/form-data')
     let [img,setImg] = useState()

     useEffect(() => {
       console.log(data)
       console.log(error)
     },[data,error])


     let onchangeInput = async (e) => {
       let file = e.target.files[0]
       const formData = new FormData();
       formData.append('file', file);
       
       await fetchData(methods.post,"/api/v1/cloudinary/upload",formData)

     }

     return<>
       

       <input type="file" onChange={onchangeInput}/>


     </>
    }