import Image from 'next/image';
import Button from '@/components/ui/Button';
import Paragraph from '@/ui/Paragraph';
import { headingVariants } from '@/ui/Heading';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <section id='about' className='mt-[8em] mb-[8em]'>
      <h2 className='text-center mb-20'>about</h2>
      <div className='flex flex-col justify-center items-center md:grid md:grid-cols-2 md:gap-4 md:place-items-stretch'>
        <Image
          alt='Picture of Kristian in a traditional Norwegian sweater'
          src='/images/about.jpg'
          width={350}
          height={350}
          className='block'
          style={{ height: 'auto' }}
          priority
        />
        <div className='mt-5 md:mt-0 grid'>
          <h3 className={cn(headingVariants({ size: 'sm' }), 'mb-2')}>Here is a background</h3>
          <Paragraph>
            I am currently working on my Bachelor’s degree in Web Development, which will make me a Full Stack Developer, on the Norwegian University
            of Science and Technology located in Gjøvik, Norway.
          </Paragraph>
          <Paragraph>
            I spend most of my time either coding a side-project and working on different web-applications in languages such as React, CSS, Node.js. I
            am currently learning about carbon footprint and its impact on the web.
          </Paragraph>
          <Paragraph>
            During my spare-time I play football and walk my girlfriend’s dogs. I also have spent a year in His Majesty the King’s Guard of Norway, in
            the Drill Platoon.
          </Paragraph>
          <a href='#projects' className='md:place-self-end'>
            <Button variant='outline'>
              my projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
