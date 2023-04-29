import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsFillFileEarmarkPostFill, BsFillPersonFill } from 'react-icons/bs'
import { MdPhotoSizeSelectActual } from 'react-icons/md'
import { Link } from 'react-router-dom'

const BottomBar = ({handleRoute}) => {
    const routes = [
        {
            name:'Profile',
            route:''   ,
            icon:<><BsFillPersonFill size={25}/></>
        },
        {
            name:'Posts',
            route:'posts',  
            icon:<BsFillFileEarmarkPostFill size={25}/>
        },
        {
            name:'Gallery',
            route:'gallery',  
            icon:<MdPhotoSizeSelectActual size={25}/>
        },
        {
            name:'ToDo',
            route:'todo',  
            icon:<AiOutlineCheck size={25}/>
        },

    ]
  return (
    <div className='fixed flex lg:hidden text-white justify-evenly w-full bottom-0 p-3 bg-blue-600'>
        {routes.map((x)=> 
            <button onClick={handleRoute} data-route={x.route} key={x.route} >
                <span className='pointer-events-none	'>
                    {x.icon}
                </span>
        </button> )}
    </div>
  )
}

export default BottomBar