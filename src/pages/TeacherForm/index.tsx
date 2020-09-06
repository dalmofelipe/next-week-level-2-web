import React from 'react'

import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'

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
          <legend>Seus dados</legend>
          <Input label="Nome Completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="WhatsApp" name="whatsapp" />
        </fieldset>
      </main>
    </div>
  )
}

export default TeacherForm