import Image from 'next/image'
import Paragraph from '@/ui/Paragraph'
import Heading from '@/ui/Heading'
import { buttonVariants } from '@/ui/Button'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <section className='flex items-center justify-center h-[70vh] container pt-32'>
      <div className='w-72 md:w-[35rem] h-72 md:h-[35rem] rounded-[100%] border dark:border-slate-700 border-slate-300 flex items-center justify-center'>
        <div className='flex flex-col items-center text-center'>
          <Image
            alt='Picture of Kristian smiling'
            priority
            src='/images/hero.jpg'
            width={200}
            height={200}
            style={{ borderRadius: '100%' }}
            className='hidden md:block mb-4'
          />
          <Paragraph className='font-mono'>fullstack developer</Paragraph>
          <Heading className='mt-4'>Hi, I am Kristian Wobbes</Heading>
          <ul className='flex justify-center font-mono text-center mt-8 text-sm sm:text-base'>
            <li>
              <a className={cn(buttonVariants({ variant: 'link', size: "none" }), 'mr-3')} href='#about'>
                about
              </a>
            </li>
            <li>
              <a className={cn(buttonVariants({ variant: 'link', size: "none" }), 'mr-3')} href='#experience'>
                experience
              </a>
            </li>
            <li>
              <a className={cn(buttonVariants({ variant: 'link', size: "none" }), 'mr-3')} href='#projects'>
                projects
              </a>
            </li>
            <li>
              <a className={buttonVariants({ variant: 'link', size: "none" })} href='#contact'>
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
