import Link from 'next/link';
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <nav className='flex justify-between items-center p-1'>
          <div className='logo'>
            <h1>Malahim.Dev</h1>
          </div>
          <ul className='flex gap-5'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/About'>About</Link>
            </li>
            <li>
              <Link href='/Skills'>Skills</Link>
            </li>
            <li>
              <Link href='/Projects'>Projects</Link>
            </li>
            <li>
              <Link href='/Contact'>Contact</Link>
            </li>

          </ul>
          <div className='flex gap-5 items-center'>
            <FaGithub style={{ width: '22px', height: '22px' }} />
            <FaInstagram style={{ width: '22px', height: '22px' }} />
            <FaLinkedin style={{ width: '22px', height: '22px' }} />

          </div>
        </nav>
      </div>

    </>
  )
}

export default Navbar