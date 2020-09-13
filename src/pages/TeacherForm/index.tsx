import React from 'react'

import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

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
          <Textarea label="Biografia" name="bio"/>
        </fieldset>

        <fieldset>
          <legend>Sobre a Aula</legend>
          <Select 
            label="Matéria" 
            name="subject" 
            options={[
              {value: "Matemática", label: "Matemática"},
              {value: "Inglês", label: "Inglês"},
              {value: "Física", label: "Física"},
              {value: "Química", label: "Química"},
              {value: "Economia", label: "Economia"},
            ]} 
          />
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