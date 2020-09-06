import React from 'react'

import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'

import warningImg from '../../assets/images/icons/warning.svg'

import './styles.css'

function TeacherForm() {
  return (
    <div id="page-teacher-form">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário"
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input label="Nome Completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="WhatsApp" name="whatsapp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a Aula</legend>
          <Input label="Matéria" name="subject" />
          <Input label="Custo da sua hora por aula" name="cost" />
        </fieldset>

        <footer>
          <p>
            <img src={warningImg} alt="Alerta preencha todos os campos!"/>
            Importante! <br />
            Preencha todos os campos!
          </p>

          <button>
            Salva Cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm