import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem('storagedPatients')) ?? []
  )
  const [patientToEdit, setPatientToEdit] = useState(null)

  useEffect(() => {
    localStorage.setItem('storagedPatients', JSON.stringify(patients))
  }, [patients])

  const createPatient = (form) => {
    setPatients([...patients, { ...form, id: crypto.randomUUID() }])
  }

  const updatePatient = (patientToEdit) => {
    const editedPatients = patients.map((patient) =>
      patient.id === patientToEdit.id ? patientToEdit : patient
    )
    setPatients(editedPatients)
  }

  const deletePatient = (patientToDelete) => {
    const newPatients = patients.filter(
      (patient) => patient.id !== patientToDelete.id
    )
    setPatients(newPatients)
  }

  return (
    <div className='container mx-auto mt-8'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          createPatient={createPatient}
          updatePatient={updatePatient}
          patientToEdit={patientToEdit}
          setPatientToEdit={setPatientToEdit}
        />
        <ListadoPacientes
          patients={patients}
          patientToEdit={patientToEdit}
          setPatientToEdit={setPatientToEdit}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
