import { createContext } from 'react' 
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useQuery } from 'react-query'
import { fetchUsers } from './api/api'
import UserPage from './pages/UserPage' 

export const UserContext = createContext()

function App() { 
  const {data, isLoading,   isError} = useQuery('users',fetchUsers)

 

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
