import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/DropdownMenu'
import Button from './ui/Button'
import Icons from './Icons'

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm'>
          <Icons.MenuIcon className='w-6 h-6' />
          <span className='sr-only'>Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem>
          <a href='#about'>About</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href='#experience'>Experience</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href='#projects'>Projects</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href='#contact'>Contact</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNav
