import React, {useState, useCallback} from 'react';

import Input from './components/input'

interface Usuario {
  cep:string
  cpf: string
  cnpj: string
}


const App : React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario)
  
  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>)=> {
    setUsuario({...usuario,[e.currentTarget.name]: e.currentTarget.value})
  },[usuario])

 
  return (
    <>
    <h1>Mascara Input CEP e CPF</h1>
    <span>CEP: </span>
    <Input placeholder="00000-000" name="cep" mask="cep" onChange={handleChange}/>
    <br/>
    <span>CPF:</span>
    <Input style={{marginTop:'20px'}} placeholder="999.999.999-99" name="cpf" mask="cpf" onChange={handleChange}/>
    
    <br/>
    <span>Cnpj:</span>
    <Input style={{marginTop:'20px'}} placeholder="" name="cnpj" mask="cnpj" onChange={handleChange}/>
  
  <br/>
  <button style={{marginTop:'20px'}} onClick={()=> console.log(usuario)}>Salvar</button>
    </>
  )
}

export default App;
