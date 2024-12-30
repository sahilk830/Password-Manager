import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items center px-4 py-5 h-14">

        <div className="logo font-bold text-white text-2xl">
          <span className='text-green-500'> &lt;</span>
          <span>Pass</span>
          <span className='text-green-500'>OP/&gt;</span>

        </div>
        {/* <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold' href="/"> Home</a>
            <a className='hover:font-bold' href="#"> about</a>
            <a className='hover:font-bold' href="#"> contact</a>
          </li>
        </ul> */}
        <button className="flex items-center justify-between  text-white rounded-full">
          <img className="w-5 h-5 mr-2 invert " src="/github.png" alt="GitHub" />
          <span className="font-semibold">GitHub</span>
        </button>




      </div>
    </nav>
  )
}

export default Navbar
