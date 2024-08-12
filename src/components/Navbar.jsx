import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/Context'

const Navbar = () => {

  const {searchParams,setSearchParams,handleSubmit}=useGlobalContext();
  return (
    <nav className='flex justify-between bg-blue-500'>
      <div className='bg-slate-700'>
        <Link to='/'>LOGO</Link>
      </div>
      <div className='flex gap-2' >
        <input type="search"  placeholder='Search' value={searchParams} className='font-medium  border-blue-500 rounded-2xl m-3 p-3 w-full '
        onChange={(e)=>setSearchParams(e.target.value)}
        />
        <button className='border-2 rounded' onClick={handleSubmit}>Search</button>
      </div>
      <div className='bg-red-300'>
        <Link to='/'>Home</Link>
        <Link to='/favorite'>Favorite</Link>
      </div>
     
      
    </nav>
  )
}

export default Navbar