import React, { useState } from 'react'

import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import warningImg from '../../assets/images/icons/warning.svg'

import mockSubjects from '../../utils/subjects'
import mockWeekDays from '../..//utils/weekDays'

import './styles.css'


function TeacherForm() {

  let [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  function addScheduleItem() {
    setScheduleItems([
      { week_day: 3, from: '', to: '' },
      ...scheduleItems
    ])
  }
  
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
            options={mockSubjects} 
          />
          <Input label="Custo da sua hora por aula" name="cost" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis

            <button type="button" onClick={addScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  label="Dia da semana" 
                  name="week_day" 
                  options={mockWeekDays} 
                />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            )
          })}
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