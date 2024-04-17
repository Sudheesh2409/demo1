import React, { useState,useEffect} from 'react';
import axios from "axios";

function App(){
    const [msg,setMsg]=useState(" ")

    const dat={
      "message":msg
    }

   
    const submit=async(e)=>{
      e.preventDefault() 
      console.log(dat)
      alert("submitted")
      
      // await axios.post("https://localhost:5000/",{msg})
      // .then((response)=>{
      //     console.log(response.json())
      // })
      
      fetch('http://localhost:4000/api/data/',{
        method:'POST',
        headers:{
          'Content-Type':'aplication/json'
        },
        body:JSON.stringify(dat),
      })
      .then(response => response.json())
      .then(data => console.log("sended data",data))
      .catch(error => console.error("error",error))
}


  return(
    <div>

     
      <label> <input type="text" onChange={(e)=>{setMsg(e.target.value)}}></input></label> 
      <label> <input type="submit" value="submit" onClick={submit}></input></label> 
    
    </div>
  )
}

export default App



