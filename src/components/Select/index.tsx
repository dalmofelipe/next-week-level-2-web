import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

/* Extende a interface para receber todos os atributos que pertence 
a tag Select */ 
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string,
  name: string,
  options: Array<{
    value: string, 
    label: string
  }>
}

/* Com spread ope pega todos attribs extras que não for explicitos 
pela interface */
const Select:React.FC<SelectProps> = ({label, name, options, ...rest}) => {
  return(
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      {/* assim, as props são adicionados no Select */}
      <select id={name} {...rest}>
        <option defaultValue="" hidden>Selecione uma {label}</option>
        {options && options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  )
}

export default Select