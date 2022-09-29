import { useState, useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ListUsers from './components/ListUsers'

function App() {
	const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('users')) ?? [])
	const [paciente, setPaciente] = useState({})

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(pacientes))
	}, [pacientes])

	const deleteUser = (id) => {
		const newPacientes = pacientes.filter((x) => x.id !== id)
		setPacientes(newPacientes)
	}
	return (
		<div className='container m-auto mt-20'>
			<Header />
			<div className='mt-12 md:flex'>
				<Form
					pacientes={pacientes}
					setPacientes={setPacientes}
					user={paciente}
					setUser={setPaciente}
				/>
				<ListUsers pacientes={pacientes} setPaciente={setPaciente} deleteUser={deleteUser} />
			</div>
		</div>
	)
}

export default App
