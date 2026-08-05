import react from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <div className='flex justify-between pl-4 pr-4 items-center bg-gray-200'>
            <h1 className='text-2xl font-bold p-4'>LOGO</h1>
            <div className='flex justify-center gap-4 p-4 bg-gray-200'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
