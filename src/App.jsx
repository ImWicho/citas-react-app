import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ListUsers from './components/ListUsers'

function App() {
	const [pacientes, setPacientes] = useState([])
	const [paciente, setPaciente] = useState({})

	return (
		<div className='container m-auto mt-20'>
			<Header />
			<div className='mt-12 md:flex'>
				<Form pacientes={pacientes} setPacientes={setPacientes} user={paciente} />
				<ListUsers pacientes={pacientes} setPaciente={setPaciente} />
			</div>
		</div>
	)
}

export default App
