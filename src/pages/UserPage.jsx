import React, { useContext, useState } from 'react'
import { UserContext } from '../App'
import {  useParams    } from 'react-router-dom'
import UserDetails from './UserDetails'
import UserPosts from './UserPosts'
import UserGallery from './UserGallery'
import UserTodo from './UserTodo' 
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ChatBox from '../components/ChatBox'
import BottomBar from '../components/BottomBar'

const UserPage = () => {
    const [ route, setRoute] = useState('') 
    const params = useParams()
    const users = useContext(UserContext) 

    const data = users.find((x)=>x.username===params.id)
    console.log(params)
 

    const pages = {
        '':{
            element:<UserDetails user={data} />,
            name:'Profile'
        },
        'posts':{
            element:<UserPosts user={data}/>,
            name:'Posts'
        },
        'gallery':{
            element:<UserGallery user={data}/>,
            name:'Gallery'
        },
        'todo':{
            element: <UserTodo user={data}/>,
            name:'ToDo'
        }
    }

    const handleRoute = (e) => {
        setRoute(e.target.dataset.route)
    }
    
    return (
        <>
            <div className='w-full h-full lg:px-2 md:p-4 flex overflow-x-hidden'>
                <Sidebar handleRoute={handleRoute} route={route}/>
                <div className='md:px-2 md:py-2 lg:w-10/12 lg:px-6  h-full bg-white relative'> 
                    <Navbar data={data} title={pages[route].name} />
                    {pages[route].element}
                </div>
                
                <ChatBox data={data}/>
            </div>
            <BottomBar handleRoute={handleRoute} route={route}/>
        </>
  )
}

export default UserPage