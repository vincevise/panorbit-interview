import React, { memo, useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

const NavBarProfile = ({user}) => {
    const users = useContext(UserContext)
    const navigate = useNavigate()
    console.log(users)
    const navProfileRef = useRef() 
    const [openModal, setModal] = useState(false)

    useEffect(()=>{
        function handleClickOutside(event) {
            if (navProfileRef.current && !navProfileRef.current.contains(event.target)) { 
                if(openModal){
                    setModal(false)
                    // modalFilterRef.current.style.display = 'none' 
                } 
            }  
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[openModal])

  return (
    <div ref={navProfileRef}>
    <button className='flex relative items-center gap-4 text-md ' onClick={()=>setModal(!openModal)} >
        <img src={user?.profilepicture} className='w-auto h-10 object-cover rounded-full' alt="" />
        <p>{user?.name}</p>
    </button>
    
    {openModal &&  
    <div className='p-4 px-6  w-72  absolute bg-white top-12 right-0 drop-shadow-2xl	shadow-2xl	 rounded-xl text-center z-10'>
        <img src={user.profilepicture} className='w-20 mx-auto rounded-full' alt="" />
        <p className='text-lg font-semibold'>{user.name}</p>
        <p className='text-gray-600 mb-2'>{user.email}</p>
        <Link to={`/${users[user.id+1]?.username}`} className='flex items-center justify-center gap-4 py-2 border-t border-slate-300'>
            <img src={users[user.id+1]?.profilepicture} className='w-10 rounded-full' alt="" />
            <p>{users[user.id+1]?.name}</p>
        </Link>
        <Link to={`/${users[user.id+2]?.username}`} className='flex items-center justify-center gap-4 py-2 border-t border-slate-300'>
            <img src={users[user.id+2]?.profilepicture} className='w-10 rounded-full' alt="" />
            <p>{users[user.id+2]?.name}</p>
        </Link>
        <button onClick={()=> navigate('/')} className='bg-red-600 px-3 py-1 mt-1 rounded-full text-white text-md font-semibold'>Sign out</button>
    </div>}
    </div>
                
  )
}

export default memo(NavBarProfile)