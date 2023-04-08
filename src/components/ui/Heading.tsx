import { FC } from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

export const headingVariants = cva('font-display text-slate-900 dark:text-orange_400', {
  variants: {
    size: {
      default: 'text-4xl md:text-5xl lg:text-6xl mb-2',
      lg: 'text-5xl md:text-6xl lg:text-7xl mb-4',
      md: 'text-3xl md:text-4xl lg:text-5xl mb-4',
      sm: 'text-2xl md:text-3xl lg:text-4xl mb-1',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = ({ children, className, size, ...props }) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  );
};

export default Heading;
