import Link from 'next/link'
import NavBar from './NavBar'
import Logo from './Logo'
import { buttonVariants } from './ui/Button'

const Header = () => {
  return (
    <header className='relative h-[72px]'>
      <div className='container flex justify-between items-center py-4 fixed left-0 right-0 top-0 bg-slate-50/75 dark:bg-slate-900/75 backdrop-blur-sm '>
        <Link href='/' className={buttonVariants({ variant: 'link' })}>
          <Logo />
        </Link>
        <NavBar />
      </div>
    </header>
  )
}

export default Header
