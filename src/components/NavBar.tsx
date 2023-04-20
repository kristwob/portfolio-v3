'use client'

import { buttonVariants } from './ui/Button'
import ThemeToggle from './ThemeToggle'
import Button from './ui/Button'
import MobileNav from './MobileNav'

const NavBar = () => {

  return (
    <nav className='font-mono'>
      <ul className='md:hidden flex items-center justify-between gap-4'>
        <li>
          <ThemeToggle />
        </li>
        <li>
          <MobileNav />
        </li>
      </ul>

      <ul className='hidden md:flex md:items-center gap-4'>
        <li>
          <ThemeToggle />
        </li>
        <li>
          <a href='/#projects' className={buttonVariants({ variant: 'ghost' })}>
            projects
          </a>
        </li>
        <li>
          <a href='/#contact'>
            <Button tabIndex={-1}>contact</Button>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
