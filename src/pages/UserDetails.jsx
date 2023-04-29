import React from 'react'

const UserDetails = ({user}) => {
  console.log(user)
  return (
    <div className='py-20   px-4 md:px-0 md:py-3  lg:flex '>
      <div className='w-full lg:w-2/5  flex flex-col items-center justify-between h-full text-center'>
        <div>
          <img src={user.profilepicture} className='w-48  xl:w-64 rounded-full' alt="" />
          <p className='text-md xl:text-xl font-semibold py-1'>{user.name}</p>
        </div>
        <div className='
          w-fit text-sm xl:text-lg
          [&>div]:flex 
          [&>div]:py-1
          [&>div>span]:w-28 
          [&>div>span]:text-gray-400
          [&>div>span]:font-semibold
          [&>div>span]:text-right   
          [&>div>span]:px-2
          [&>div>p]:px-2
          [&>div>p]:font-semibold
        '>
          <div><span>Username</span> : <p>{user.username}</p></div>
          <div><span>e-mail</span> : <p>{user.email}</p></div>
          <div><span>Phone</span> : <p>{user.phone}</p></div>
          <div><span>Website</span> : <p>{user.website}</p></div>
          <h1 className='border-t border-gray-300 mt-3 text-center mx-4 py-2 font-semibold text-gray-400'>Company</h1>
          <div><span>Name</span> : <p>{user.company.name}</p></div>
          <div><span>catchphrase</span> : <p>{user.company.catchPhrase}</p></div>
          <div><span>bs</span> : <p>{user.company.bs}</p></div>

        </div>
      </div>
      <div className='  w-full lg:w-3/5 border-gray-300 lg:border-l lg:px-4'>
        <h1 className='px-2 text-md xl:text-lg font-semibold text-gray-400 '>Address</h1>
        <div className='
          w-fit text-sm xl:text-lg
          [&>div]:flex  
          [&>div>span]:w-28 
          [&>div>span]:text-gray-400
          [&>div>span]:font-semibold
          [&>div>span]:text-right   
          [&>div>span]:px-2
          [&>div>p]:px-2
          [&>div>p]:font-semibold
        '>
          <div><span>Street</span> : <p>{user.address.street}</p></div>
          <div><span>Suite</span> : <p>{user.address.suite}</p></div>
          <div><span>City</span> : <p>{user.address.city}</p></div>
          <div><span>Zipcode</span> : <p>{user.address.zipcode}</p></div>  

        </div> 
        <div className='p-4 '>
          <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" alt="" className='w-full rounded-2xl  ' /> 
        </div>
        <div className='flex gap-3 justify-end text-sm'>
          <span>Lat: <b>{user.address.geo.lat}</b></span>
          <span>Long: <b>{user.address.geo.lng}</b></span>
        </div>
      </div>
       
    </div>
  )
}

export default UserDetails