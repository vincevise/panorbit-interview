import { createContext, useState } from 'react' 
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useQuery } from 'react-query'
import { fetchUsers } from './api/api'
import UserPage from './pages/UserPage'
import UserPosts from './pages/UserPosts'
import UserDetails from './pages/UserDetails'
import UserGallery from './pages/UserGallery'
import UserTodo from './pages/UserTodo'

export const UserContext = createContext()

function App() {
  const [users, setUsers] = useState([])
  const {data, isLoading, isFetching, isFetched, isError} = useQuery('users',fetchUsers)

  const routes = [
    { 
        route:'detail',
        element:<><UserDetails/></>
    },
    { 
        route:'posts',
        element:<><UserPosts/></>
    },
    { 
        route:'gallery',
        element:<><UserGallery/></>
    },
    { 
        route:'todo',
        element:<><UserTodo/></>
    },

]

  if(isLoading) return <>Loading...</> 
  if(isError) return <>Error</> 

  return (
    <div className='w-screen h-screen'>
      <UserContext.Provider value={data.data.users}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>  
          <Route path='/:id' element={<UserPage/>}/>  
        </Routes> 
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}

export default App
