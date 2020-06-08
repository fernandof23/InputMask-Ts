import React, { InputHTMLAttributes, useCallback } from 'react'
import {cep, cpf, cnpj} from './masks'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: 'cep' | 'cpf' | 'cnpj'
}

const Input : React.FC<InputProps> = ({mask,...props})=>{
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>)=>{
  
    if(mask === 'cep'){
      cep(e)
    }

    if(mask === 'cpf'){
      cpf(e)
    }
    if(mask === 'cnpj'){
      cnpj(e)
    }
    
    
  },[mask])
  return(
    <input {...props} onKeyUp={handleKeyUp}/>
  )
}

export default Input