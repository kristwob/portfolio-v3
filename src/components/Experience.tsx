import Link from 'next/link'
import Button from '@/ui/Button'
import type { Resume } from '@/types'
import { headingVariants } from '@/ui/Heading'
import Paragraph from '@/ui/Paragraph'

type Props = {
  resume: Resume
}

const Experience = ({ resume }: Props) => {
  return (
    <section id='experience' className='md:mt-[8em] container'>
      <h2 className='text-center mb-20'>experience</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {resume.display.map((item) => (
          <div key={item._key}>
            <h3 className={headingVariants({ size: 'md' })}>{item.heading}</h3>
            <Paragraph size='lg'>@ {item.location}</Paragraph>
            <Paragraph size='sm' className='mt-2'>
              {item.description}
            </Paragraph>
          </div>
        ))}
        <Link href='/resume' className='sm:col-start-1 md:col-start-2 md:place-self-center mt-10 md:mt-40 lg:mt-60'>
          <Button tabIndex={-1}>my cv</Button>
        </Link>
      </div>
    </section>
  )
}

export default Experience
