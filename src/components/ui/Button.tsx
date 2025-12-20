import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import Icons from '@/components/Icons'

export const buttonVariants = cva('inline-flex font-mono items-center text-base transition-colors disabled:opacity-50 disabled:pointer-events-none cursor-pointer', {
  variants: {
    variant: {
      default: 'bg-slate-900 text-slate-50 hover:bg-slate-800 dark:text-black dark:bg-orange-400 dark:hover:bg-orange-300 dark:active:bg-orange-500 transition px-5 py-2',
      outline:
        'border border-slate-900 text-slate-900 hover:border-slate-700 active:border-slate-800 dark:border-orange-400 dark:hover:border-orange-300 dark:active:border-orange-500 dark:text-orange-400 dark:hover:text-orange-300 dark:active:text-orange-500 px-5 py-2',
      subtle: 'bg-slate-300 hover:bg-slate-200',
      destructive: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
      ghost:
        'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-white data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
      link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
      rounded: 'p-5 bg-orange-400 hover:bg-orange-300 focus:bg-orange-300 active:bg-orange-500 rounded-[100%]',
    },
    size: {
      default: 'h-10 py-2 px-4',
      none: 'p-0',
      sm: 'h-9 px-2',
      lg: 'h-11 px-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, variant, isLoading, size, ...props }, ref) => {
  return (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} disabled={isLoading} {...props}>
      {isLoading ? <Icons.Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
