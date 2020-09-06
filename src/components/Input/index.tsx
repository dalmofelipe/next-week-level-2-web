import React, { InputHTMLAttributes } from 'react'

import './styles.css'

/* Extende a interface para receber todos os atributos que pertence 
a tag input */ 
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  name: string
}

/* Com spread ope pega todos attribs extras que não for explicitos 
pela interface */
const Input:React.FC<InputProps> = ({label, name, ...rest}) => {
  return(
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      {/* assim, as props são adicionados no input */}
      <input type="text" id={name} {...rest} />
    </div>
  )
}

export default Input