import PropTypes from 'prop-types'
import Paciente from './Paciente'

const ListadoPacientes = ({ patients, setPatientToEdit, deletePatient }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto ml-3'>
      <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
      <p className='text-center text-xl mt-5 mb-10'>
        Administra{' '}
        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
      {patients.map((patient) => (
        <Paciente
          key={patient.id}
          patient={patient}
          setPatientToEdit={setPatientToEdit}
          deletePatient={deletePatient}
        />
      ))}
    </div>
  )
}

ListadoPacientes.propTypes = {
  patients: PropTypes.array.isRequired,
  setPatientToEdit: PropTypes.func.isRequired,
  deletePatient: PropTypes.func.isRequired
}

export default ListadoPacientes
