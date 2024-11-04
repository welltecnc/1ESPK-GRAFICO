import Grafico from  '../../components/Grafico/Grafico'
import { useState,useEffect } from 'react'

export default function Exemplo1() {

  const [produtos, setProdutos]=useState([])


  useEffect(()=>{
    fetch("http://localhost:5000/produtos")
    .then((res)=>{
      return res.json()
    }).then((res)=>
      setProdutos(res)
    )
  })

  

  return (
    <div>
       <Grafico data={produtos}/>
    </div>
  )
}
