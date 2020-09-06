import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

/* Uma vez, fazendo uso do TypeScript, temos que definir 
tipos das props dos components */ 
interface PageHeaderProps {
  title: string,
  description?: string
}

// FC === FunctionComponent
// const PageHeader:React.FunctionComponent<PageHeaderProps> = () => {
const PageHeader:React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}

        {/* props.children é equivalente ao slot no vue */}
        {props.children}
      </div>
    </header>
  )
}

export default PageHeader