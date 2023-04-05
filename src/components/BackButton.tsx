/* import Image from "next/image";

const IconButton = ({ type = "button", variant }) => {
  switch (variant) {
    case "github":
      return (
        <button tabIndex="-1" type={type} className="p-5 bg-orange_400 hover:bg-orange_300 focus:bg-orange_300 active:bg-orange_500 rounded-[100%]">
          <Image src="/images/github.svg" alt="github icon" width={60} height={60} />
        </button>
      );
    case "linkedin":
      return (
        <button tabIndex="-1" type={type} className="p-5 bg-orange_400 hover:bg-orange_300 focus:bg-orange_300 active:bg-orange_500 rounded-[100%]">
          <Image src="/images/linkedin.svg" alt="linkedin icon" width={60} height={60} />
        </button>
      );
    default:
      break;
  }
};

export default IconButton;
 */

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
    <Button variant='link' {...props} onClick={() => router.back()} className={cn('w-fit', className)}>
      <>
        <Icons.ChevronLeft className='mr-2 h-8 w-8' />
        Back
      </>
    </Button>
  );
};

export default BackButton;
