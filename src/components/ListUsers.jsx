import User from './User'

const ListUsers = () => {
	return (
		<div className='md:w-1/2 lg:w-3/5'>
			<h2 className='font-black text-3xl text-center'>Listado pacientes</h2>
			<p className='text-lg mt-5 mb-10 text-center'>
				Administra tus <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
			</p>

			<User />
		</div>
	)
}

export default ListUsers
