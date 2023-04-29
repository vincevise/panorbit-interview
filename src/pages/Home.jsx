import React, { useContext } from 'react' 
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

const Home = () => {
   
    const users = useContext(UserContext)
    return (
        
        <div className=' shadow-xl w-4/6 lg:w-1/3 h-4/6 mx-auto  absolute inset-0 my-auto text-center rounded-xl overflow-hidden   '>
            <h3 className='font-semibold h-20 flex items-center justify-center text-lg bg-gray-100 rounded-t-lg'>Select an account</h3>
            <div className='overflow-y-scroll  h-full px-3 pb-24 customscroll'>

                {users.map((x)=>(
                    <Link to={`/${x.username}`} className='flex items-center gap-4 border-b border-slate-100 p-2' key={x.id}>
                        <img src={x.profilepicture} className='w-10 rounded-full' alt="" />
                        <p>{x.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home