import React, { memo } from 'react'
import { BsFillFileEarmarkPostFill, BsFillPersonFill } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { MdPhotoSizeSelectActual } from 'react-icons/md' 
import {AiOutlineCheck} from 'react-icons/ai'

const Sidebar = ({handleRoute, route}) => {
    const routes = [
        {
            name:'Profile',
            route:''   ,
            icon:<><BsFillPersonFill/></>
        },
        {
            name:'Posts',
            route:'posts',  
            icon:<BsFillFileEarmarkPostFill/>
        },
        {
            name:'Gallery',
            route:'gallery',  
            icon:<MdPhotoSizeSelectActual/>
        },
        {
            name:'ToDo',
            route:'todo',  
            icon:<AiOutlineCheck/>
        },

    ]
  return (
    <div className='hidden lg:flex w-2/12 h-full bg-blue-300 nav-bar rounded-3xl flex flex-col items-center justify-center p-6 relative' >
            {routes.map((x)=>(
                <>
                    <span onClick={handleRoute} data-route={x.route} key={x.route} className='text-white text-xl py-4 w-full border-b border-white font-semibold cursor-pointer flex items-center'>
                        {x.name} 
                        {route===x.route ? 
                        <div className='opacity-0 lg:opacity-100 w-10 h-10 bg-white text-slate-400 flex items-center justify-center absolute right-0 rounded-l-full pointer-events-none	'>
                            <IoIosArrowForward/>
                        </div> : ''}
                        
                    </span >
                </>
            ))}
    </div>
  )
}

export default memo(Sidebar)