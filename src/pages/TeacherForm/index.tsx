import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import warningImg from '../../assets/images/icons/warning.svg'

import mockSubjects from '../../utils/subjects'
import mockWeekDays from '../..//utils/weekDays'

import api from '../../services/api'

import './styles.css'


function TeacherForm() {

  const history = useHistory()

  const [name, setName ] = useState('')
  const [avatar, setAvatar ] = useState('')
  const [whatsapp, setWhatsapp ] = useState('')
  const [bio, setBio ] = useState('')

  const [subject, setSubject] = useState('')  
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: '', from: '', to: '' }
  ])

  function addScheduleItem() {  
    setScheduleItems([
      { week_day: '7', from: '', to: '' },
      ...scheduleItems
    ])
  }

  function handleCreateClass(e:FormEvent) {
    e.preventDefault()
    api.post('/classes', {
      name, 
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule: scheduleItems
    })
    .then( _ => {
      alert('Classe cadastrada com sucesso!')
      // redireciona para landing page
      history.push('/') 
    })
    .catch(e => console.log(e))
  }
  
  function setScheduleItemValue(position: number, field: string, value: string) {
    const result = scheduleItems.find(s => s.week_day === value)
    if(!result) {
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if(index === position) {
          return {
            ...scheduleItem, 
            [field]: value
          }
        }
        return scheduleItem
      })
      // console.log(updatedScheduleItems)
      setScheduleItems(updatedScheduleItems)
    } else {
      console.log('Dia já cadastrado! - [usar um Boom ou Toast!]')
    }
  }


  return (
    <div id="page-teacher-form">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input 
              label="Nome Completo" 
              name="name" 
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input 
              label="Avatar" 
              name="avatar" 
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
            <Input 
              label="WhatsApp" 
              name="whatsapp" 
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
            <Textarea 
              label="Biografia" 
              name="bio"
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a Aula</legend>
            <Select 
              label="Matéria" 
              name="subject" 
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={mockSubjects} 
            />
            <Input 
              label="Custo da sua hora por aula" 
              name="cost" 
              value={cost}
              onChange={e => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis

              <button type="button" onClick={addScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    label="Dia da semana" 
                    name="week_day" 
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={mockWeekDays} 
                  />
                  <Input 
                    name="from" 
                    label="Das" 
                    type="time" 
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input 
                    name="to" 
                    label="Até" 
                    type="time" 
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                  />
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

            <button type="submit">
              Salva Cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm