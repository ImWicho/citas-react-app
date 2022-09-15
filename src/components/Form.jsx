import { useState } from 'react'

const Form = () => {
	const [nombreMascota, setNombreMascota] = useState('')
	const [propietario, setPropietario] = useState('')
	const [email, setEmail] = useState('')
	const [fecha, setFecha] = useState('')
	const [sintomas, setSintomas] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Enviando formulario')
	}

	return (
		<div className='md:w-1/2 lg:w-2/5 mx-5'>
			<h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
			<p className='text-lg mt-5 mb-10 text-center'>
				Añade Pacientes y <span className='text-indigo-600 font-bold'>Administrarlos</span>
			</p>

			<form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
				<div className='mb-5'>
					<label htmlFor='nombreMascota' className='block text-gray-700 uppercase font-bold'>
						Nombre Mascota
					</label>
					<input
						id='nombreMascota'
						type='text'
						placeholder='Nombre de la mascota'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={nombreMascota}
						onInput={(e) => setNombreMascota(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='nombreCliente' className='block text-gray-700 uppercase font-bold'>
						Nombre Propietario
					</label>
					<input
						id='nombreCliente'
						type='text'
						placeholder='Nombre del Propietario'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={propietario}
						onInput={(e) => setPropietario(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
						Email
					</label>
					<input
						id='email'
						type='email'
						placeholder='Email de contacto'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={email}
						onInput={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
						Alta
					</label>
					<input
						id='alta'
						type='date'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
						Síntomas
					</label>
					<textarea
						id='sintomas'
						placeholder='Describe los síntomas'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={sintomas}
						onInput={(e) => setSintomas(e.target.value)}
					/>
				</div>

				<input
					type='submit'
					className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-lg'
					value='Agregar Paciente'
				/>
			</form>
		</div>
	)
}

export default Form
