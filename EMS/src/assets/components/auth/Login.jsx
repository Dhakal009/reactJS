import React, { useState } from 'react'

function Login() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const loginHandler = (e)=>{
        e.preventDefault();


        
        setemail('')
        setpassword('')
    }

  return (
    <>
        <div className='flex items-center justify-center h-screen w-screen bg-black'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form
                    onSubmit={(e)=>{
                        loginHandler(e)
                    }}
                
                    className='flex flex-col items-center justify-center'>
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }}
                    required 
                    className='text-white  border-2 outline-none border-emerald-600 text-xl py-3 px-5 rounded-2xl placeholder:text-grey-500' type="email" placeholder='Enter Your Email'
                     />
                    <input
                    value={password}
                    onChange={(e)=>{
                        setpassword(e.target.value)
                    }}
                    required 
                    className='text-white  border-2 outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-2xl placeholder:text-grey-500 mt-6' type='password' placeholder='Enter Password' 
                    />
                    <button className='text-white  bg-emerald-600 cursor-pointer text-xl py-3 px-5 rounded-2xl placeholder:text-white mt-10' >Login</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login    