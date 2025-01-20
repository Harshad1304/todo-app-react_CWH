import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between bg-zinc-900 text-white px-28 py-4 w-full'>
        <div className='cursor-pointer logo'>
            <span className='font-bold text-xl '>Todo-List</span>
        </div>
        <ul className='cursor-pointer flex gap-10'>
            <li className='hover:font-bold duration-500  '>Your Tasks</li>
            <li className='hover:font-bold duration-500  '>Home</li>
        </ul>
    </nav>
)
}

export default Navbar