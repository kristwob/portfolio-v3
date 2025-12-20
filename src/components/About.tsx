import Button, { buttonVariants } from '@/components/ui/Button';
import Paragraph from '@/ui/Paragraph';
import { headingVariants } from '@/ui/Heading';
import { cn } from '@/lib/utils';
import SanityImage from './SanityImage';
import type { About as AboutType } from '@/types';

type Props = {
  about: AboutType;
};

const About = ({ about }: Props) => {
  return (
    <section id='about' className='mt-[8em] mb-[8em] container'>
      <h2 className='text-center mb-20'>about</h2>
      <div className='flex flex-col justify-center items-center md:grid md:grid-cols-2 md:gap-4 md:place-items-stretch'>
        <SanityImage image={about.image} alt={about.imageAlt} />
        <div className='mt-5 md:mt-0 grid'>
          <h3 className={cn(headingVariants({ size: 'sm' }), 'mb-2')}>{about.heading}</h3>
          {about.paragraphs.map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}
          <a href={about.buttonLink} className={cn(buttonVariants({ variant: 'outline' }), 'mt-2 md:mt-5 place-self-start md:place-self-end')}>
            {about.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
