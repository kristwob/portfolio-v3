import { FC, ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LinkedInButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const LinkedInButton: FC<LinkedInButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={cn('p-5 bg-orange_400 hover:bg-orange_300 focus:bg-orange_300 active:bg-orange_500 rounded-[100%]', className)}
      {...props}
    >
      <Image src='/images/linkedin.svg' alt='github icon' width={60} height={60} />
    </button>
  );
};

export default LinkedInButton;
