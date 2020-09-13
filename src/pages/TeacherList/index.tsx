import React from 'react'
import './styles.css'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'


function TeacherList() {
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
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
          <Select
            label="Dia da semana" 
            name="week_day" 
            options={[
              {value: "1", label: "Segunda-feira"},
              {value: "2", label: "Terça-feira"},
              {value: "3", label: "Quarta-feira"},
              {value: "4", label: "Quinta-feira"},
              {value: "5", label: "Sexta-feira"},
              {value: "6", label: "Sábado"},
            ]} 
          />
          <Input label="Hora" name="time" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList