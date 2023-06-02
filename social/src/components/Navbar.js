import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='fixed bg-white z-30 flex items-center w-full border-b h-[61px]'>
      <nav className='flex items-center justify-between w-full px-6 mx-auto'>
        <div className=''>
            <h2>Social  Site</h2>
        </div>
        <div class="flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full">
          <Link href="/create" className='flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100'>Create</Link>
          <Link href="/create" className='flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100'>Logout</Link>
          <Link href="/login" className='flex items-center bg-[#F02C56] text-white border rounded-md px-3 py-[6px]'>Login</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar