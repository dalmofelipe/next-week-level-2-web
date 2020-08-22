import React from 'react'
import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/46388974?s=460&u=b4aa7f0e129324a59e566f363fd3aa69d892e75b&v=4" alt="Dalmo Felipe"/>
        <div>
          <strong>Dalmo Felipe</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        <br/> <br/>
        Perferendis iure voluptate commodi obcaecati animi vitae reprehenderit ab. Voluptatibus iure cupiditate, quis eveniet amet pariatur, quaerat aliquid quo, ipsum hic aperiam.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 120,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato pelo WhatsApp"/>
          Entrar em Contato
        </button>

      </footer>
    </article>
  )
}

export default TeacherItem