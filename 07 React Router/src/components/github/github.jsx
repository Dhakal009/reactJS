import react from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Dhakal009')
    //         .then((response)=>response.json())
    //         .then((data)=>{
    //             console.log(data);
    //             setData(data)
    //         })
    //     },[])
    return(
    <>

            <img src={data.avatar_url} className=' rounded-full w-40 h-40 mx-auto mt-10' alt="Github profile" />
            <h1 className='bg-gray-600 text-white p-5 text-3xl flex items-center justify-center'>Github followers: {data.followers}</h1>
            <h1 className='bg-gray-600 text-white p-5 text-3xl flex items-center justify-center'>Github following: {data.following}</h1>
            <h1 className='bg-gray-600 text-white p-5 text-3xl flex items-center justify-center'>Github public repos: {data.public_repos}</h1>
    </>
    )
    
}

export default Github


export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Dhakal009')
    return  response.json()
}