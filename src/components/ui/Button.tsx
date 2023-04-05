import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Icons from '@/components/Icons';

export const buttonVariants = cva(
  'text-base transition-colors disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-orange_400 hover:bg-orange_300 active:bg-orange_500 transition px-5 py-2 text-black',
        outline:
          'border border-orange_400 hover:border-orange_300 active:border-orange_500 text-orange_400 hover:text-orange_300 active:text-orange_500 px-5 py-2',
        subtle: 'bg-purple_300 hover:bg-purple_200',
        ghost: 'bg-transparent hover:bg-purple_300 data-[state=open]:bg-transparent',
        link: 'bg-transparent underline-offset-4 hover:underline hover:decoration-2 hover:bg-transparent',
        rounded: 'p-5 bg-orange_400 hover:bg-orange_300 focus:bg-orange_300 active:bg-orange_500 rounded-[100%]',
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
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, variant, isLoading, size, ...props }, ref) => {
  return (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} disabled={isLoading} {...props}>
      {isLoading ? <Icons.Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
