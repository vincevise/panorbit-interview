import React, { useContext, useEffect, useRef, useState } from 'react'
import { BsChatRight} from 'react-icons/bs'
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdSend} from 'react-icons/md'
import { UserContext } from '../App'
import {GrClose} from 'react-icons/gr'
import {IoMdClose} from 'react-icons/io'

const ChatBox = ({data}) => {

    const [openChatBox, setCHatBox] = useState(false)
    const [userChat, setUserChat] = useState()
    const [userChatBox, setUserChatBox] = useState(false)

    const usersRef = useRef() 
    const users = useContext(UserContext)
    const chatBoxRef = useRef()

    useEffect(()=>{
        if(openChatBox){
            usersRef.current.style.height = '300px'
            usersRef.current.display = 'block'
        }else{
            usersRef.current.style.height = '0px'
            
            usersRef.current.display = 'none'

        }
    },[openChatBox]) 

    useEffect(()=>{
        function handleClickOutside(event) {
            if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) { 
                if(openChatBox || userChatBox){
                    setUserChatBox(false)
                    setCHatBox(false)
                    // modalFilterRef.current.style.display = 'none' 
                } 
            }  
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[openChatBox, openChatBox])

  return (
    < div  ref={chatBoxRef}>
    <div className='hidden lg:block fixed bottom-0 right-10 shadow-lg drop-shadow-lg'>
        <button onClick={()=>setCHatBox(!openChatBox)} className='bg-blue-700 text-white flex  items-center w-64 justify-between py-2 px-4 rounded-t-lg'>
            <span className='flex gap-2 flex items-center'>
                <BsChatRight color='white'/> Chats
            </span>
            <span>
                {openChatBox ? 
                    <MdKeyboardArrowDown color='white'/>
                    :
                    <MdKeyboardArrowUp color='white'/>
                }
            </span>
        </button>
        <div className={`w-64 overflow-y-scroll customscroll ${openChatBox ? 'border border-gray-300' : ''} bg-white transition-all`} ref={usersRef}>
            {users.filter((x)=>x.id!==data.id).map((x)=>(
                <button className='flex items-center gap-2 text-sm p-2' onClick={()=>{setUserChat(x); setUserChatBox(true)}}>
                    <img src={x.profilepicture} className='w-8 rounded-full' alt="" />
                    <p>{x.name}</p>
                </button>
            ))}
        </div>
    </div>
    {userChatBox &&
        <div className='right-80 absolute bottom-0 bg-white' >
        <button  className=' bg-blue-700 text-white flex  items-center w-72 justify-between py-2 px-4 rounded-t-lg'>
            <span className='flex gap-2 flex items-center text-md text-white'>
                <img src={userChat.profilepicture} className='w-10 rounded-full' alt="" />
                <span>{userChat.name}</span>
            </span>
            <span className='flex text-white items-center gap-2'> 
                <MdKeyboardArrowDown size={20} color='white'/> 
                <IoMdClose size={20} color='white' onClick={()=>setUserChatBox(false)}/>
            </span>
        </button>
        <div className='h-64 border border-slate-300 relative'>
            
            <div className='w-full flex items-center justify-between px-2  border-t border-slate-300 mt-auto mb-0 absolute bottom-0'>
                <input type="text" className='w-full p-2 outline-none' />
                <MdSend className='cursor-pointer'/>
            </div>
        </div>
    </div>}
    </div >
  )
}

export default ChatBox