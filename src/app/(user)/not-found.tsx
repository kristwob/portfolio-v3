import Icons from '@/components/Icons'
import { buttonVariants } from '@/ui/Button'
import Heading from '@/ui/Heading'
import Paragraph from '@/ui/Paragraph'
import Link from 'next/link'
import { FC } from 'react'

const PageNotFound: FC = () => {
  return (
    <section className='container pt-32 max-w-7xl mx-auto text-center flex flex-col gap-6 items-center'>
      <Heading>Site not found...</Heading>
      <Paragraph size='lg'>The site you&apos;re searching for does not exist.</Paragraph>
      <Link
        className={buttonVariants({
          variant: 'ghost',
          className: 'flex items-center',
        })}
        href='/'>
        <Icons.ChevronLeft className='mr-2 h-8 w-8' />
        Back to home
      </Link>
    </section>
  )
}

export default PageNotFound