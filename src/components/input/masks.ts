export function cep(e: React.FormEvent<HTMLInputElement>){
  e.currentTarget.maxLength = 9

  let value = e.currentTarget.value
  value = value.replace(/\D/g, ''); // Trocando caracters que nao sejam numeros por NADA
  value = value.replace(/^(\d{5})(\d)/, "$1-$2") // contando 5 numeros do começo, e colocando um traço
  e.currentTarget.value = value // devolvo o value, e confiro se ficou atualizado

  return e;
}


export function cpf(e :React.FormEvent<HTMLInputElement>){
  e.currentTarget.maxLength = 14
  
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2')
  value = value.replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada

  e.currentTarget.value = value
  return e

}

export function cnpj(e : React.FormEvent<HTMLInputElement>){
  e.currentTarget.maxLength = 18;

  let value = e.currentTarget.value;

  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5")

  e.currentTarget.value = value
  return e
}

