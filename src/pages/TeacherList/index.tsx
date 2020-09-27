import React from 'react'
import './styles.css'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import mockSubjects from '../../utils/subjects'
import mockWeekDays from '../../utils/weekDays'


function TeacherList() {
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            label="Matéria" 
            name="subject" 
            options={mockSubjects} 
          />
          <Select
            label="Dia da semana" 
            name="week_day" 
            options={mockWeekDays} 
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