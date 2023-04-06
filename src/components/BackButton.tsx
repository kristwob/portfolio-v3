'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes, FC } from 'react';
import Icons from './Icons';
import Button from './ui/Button';

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const BackButton: FC<BackButtonProps> = ({ className, ...props }) => {
  const router = useRouter();
  return (
    <Button variant='link' size='none' {...props} onClick={() => router.back()} className={cn('flex items-center justify-start', className)}>
      <>
        <Icons.ChevronLeft className='mr-2 h-6 w-6' />
        Back
      </>
    </Button>
  );
};

export default BackButton;
