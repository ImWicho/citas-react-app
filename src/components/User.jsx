const User = ({ user, setPaciente, deleteUser }) => {
	return (
		<div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Nombre: {''}
				<span className='font-normal normal-case'>{user.nombreMascota}</span>
			</p>

			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Propietario: {''}
				<span className='font-normal normal-case'>{user.propietario}</span>
			</p>

			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Email: {''}
				<span className='font-normal normal-case'>{user.email}</span>
			</p>

			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Fecha Alta: {''}
				<span className='font-normal normal-case'>{user.fecha}</span>
			</p>

			<p className='font-bold mb-3 text-gray-700 uppercase'>
				Síntomas: {''}
				<span className='font-normal normal-case'>{user.sintomas}</span>
			</p>

			<div className='flex justify-between mt-10'>
				<button
					type='button'
					className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
					onClick={() => setPaciente(user)}
				>
					Editar
				</button>
				<button
					type='button'
					className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
					onClick={() => deleteUser(user.id)}
				>
					Eliminar
				</button>
			</div>
		</div>
	)
}

export default User
