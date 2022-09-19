import User from './User'

const ListUsers = ({ pacientes }) => {
	return (
		<div className='md:w-1/2 lg:w-3/5'>
			<h2 className='font-black text-3xl text-center'>Listado pacientes</h2>
			<p className='text-lg mt-5 mb-10 text-center'>
				Administra tus <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
			</p>

			{pacientes.map((user) => (
				<User key={user.id} user={user} />
			))}
		</div>
	)
}

export default ListUsers
