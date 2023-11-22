import PropTypes from 'prop-types'

const Paciente = ({ patient, setPatientToEdit, deletePatient }) => {
  const { petName, ownerName, date, email, symptoms } = patient

  return (
    <div className='mt-5 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre: <span className='font-normal normal-case'>{petName}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario:{' '}
        <span className='font-normal normal-case'>{ownerName}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        E-mail: <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha alta: <span className='font-normal normal-case'>{date}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Sintomas: <span className='font-normal normal-case'>{symptoms}</span>
      </p>
      <div className='w-full flex justify-center gap-4'>
        <button
          className='bg-indigo-600 text-white py-2 px-4 w-1/2 font-bold rounded-md'
          onClick={() => setPatientToEdit(patient)}
        >
          Editar
        </button>
        <button
          className='bg-red-600  text-white py-2 px-4 w-1/2 font-bold rounded-md'
          onClick={() => deletePatient(patient)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

Paciente.propTypes = {
  patient: PropTypes.object.isRequired,
  setPatientToEdit: PropTypes.func.isRequired,
  deletePatient: PropTypes.func.isRequired
}

export default Paciente
