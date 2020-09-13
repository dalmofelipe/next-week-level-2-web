import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

/* Extende a interface para receber todos os atributos que pertence 
a tag Textarea */ 
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string,
  name: string
}

/* Com spread ope pega todos attribs extras que não for explicitos 
pela interface */
const Textarea:React.FC<TextareaProps> = ({label, name, ...rest}) => {
  return(
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      {/* assim, as props são adicionados no Textarea */}
      <textarea id={name} {...rest} />
    </div>
  )
}

export default Textarea