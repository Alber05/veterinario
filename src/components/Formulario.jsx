import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const initialState = {
  id: '',
  petName: '',
  ownerName: '',
  date: '',
  email: '',
  symptoms: ''
}

const Formulario = ({
  createPatient,
  updatePatient,
  patientToEdit,
  setPatientToEdit
}) => {
  const [form, setForm] = useState(initialState)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (patientToEdit === null) {
      setForm(initialState)
    } else {
      setForm(patientToEdit)
    }
  }, [patientToEdit])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !form.petName ||
      !form.ownerName ||
      !form.date ||
      !form.email ||
      !form.symptoms
    ) {
      setError(true)
      return
    } else {
      setError(false)
      if (patientToEdit === null) {
        createPatient(form)
      } else {
        updatePatient(form)
      }
    }

    setForm(initialState)
    setPatientToEdit(null)
  }
  return (
    <div className='md:w-1/2 lg:w-2/5 '>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y{' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='mb-5'>
          <label
            htmlFor='mascota'
            className='block text-gray-700 uppercase font-bold'
          >
            Nombre Mascota
          </label>
          <input
            id='mascota'
            type='text'
            name='petName'
            value={form.petName}
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='propietario'
            className='block text-gray-700 uppercase font-bold'
          >
            Nombre Propietario
          </label>
          <input
            id='propietario'
            type='text'
            name='ownerName'
            value={form.ownerName}
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'
          >
            Email del propietario
          </label>
          <input
            id='email'
            type='email'
            name='email'
            value={form.email}
            placeholder='Email de contacto'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='alta'
            className='block text-gray-700 uppercase font-bold'
          >
            Fecha de alta
          </label>
          <input
            id='alta'
            type='date'
            name='date'
            value={form.date}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='sintomas'
            className='block text-gray-700 uppercase font-bold'
          >
            Sintomas
          </label>
          <textarea
            id='sintomas'
            name='symptoms'
            value={form.symptoms}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los sintomas'
            onChange={(e) => handleChange(e)}
          />
        </div>
        {error && (
          <div className='w-full bg-red-600 mb-5 rounded-md'>
            <p className=' text-white uppercase font-bold  text-center'>
              Complete todos los campos
            </p>
          </div>
        )}

        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 rounded-md transition-colors duration-300'
          value={
            patientToEdit === null ? 'Agregar Paciente' : 'Editar paciente'
          }
        />
      </form>
    </div>
  )
}

Formulario.propTypes = {
  createPatient: PropTypes.func.isRequired,
  updatePatient: PropTypes.func.isRequired,
  patientToEdit: PropTypes.object,
  setPatientToEdit: PropTypes.func.isRequired
}

export default Formulario
