import { FC, ButtonHTMLAttributes } from 'react'
import Icons from './Icons'
import { cn } from '@/lib/utils'

interface LinkedInButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const LinkedInButton: FC<LinkedInButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        'p-5 bg-slate-900 hover:bg-slate-700 dark:bg-orange-400 dark:hover:bg-orange-300 dark:focus:bg-orange-300 dark:active:bg-orange-500 rounded-[100%]',
        className
      )}
      {...props}
    >
      <Icons.LinkedinIcon className='text-slate-50 dark:text-slate-900 w-10 h-10' />
    </button>
  )
}

export default LinkedInButton
