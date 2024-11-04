import { useState } from "react"

export default function Exemplo2() {

  //Hook-useState- manipula o estado da variavel
  const [cliente, setCliente]=useState({
    nome:'',
    email:''
  })

    //criando a função handleChange( vai pegar o que passar no input)
    const handleChange=(e)=>{
      setCliente({...cliente,[e.target.name]:e.target.value})
    }
  
    //criando a função  handleSubmit

const handleSubmit=(e)=>{
  e.preventDefault()
  fetch(`http://localhost:5000/cliente`,{
    method:"post",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(cliente),
  }).then(()=>{
    alert("Cliente cadastrado com sucesso")
  })

}


  return (
    <form onSubmit={handleSubmit}>
    <h1>Cadastro de Cliente</h1>
    <p>
      Nome Cliente:
      <input 
      type="text"
      name="nome"
      placeholder="Digite o Nome do Cliente" 
      onChange={handleChange}
      value={cliente.nome}
    
       />
    </p>

    <p>
      Email Cliente:
      <input 
      type="text"
      name="email"
      placeholder="Digite o email do cliente" 
      onChange={handleChange}
      value={cliente.unidade}
    
       />
    </p>
    <button type="submit">Cadastrar</button>
</form>
  )
}
