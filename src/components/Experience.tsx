import Link from 'next/link';
import Button from '@/ui/Button';
import type { CV } from '@/types/Cv';
import { headingVariants } from '@/ui/Heading';
import Paragraph from '@/ui/Paragraph';

type Props = {
  cv: CV;
};

const Experience = ({ cv }: Props) => {
  return (
    <section id='experience' className='md:mt-[8em]'>
      <h2 className='text-center mb-20'>experience</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {cv.display.map((item) => (
          <div key={item._key}>
            <h3 className={headingVariants({ size: 'md' })}>{item.heading}</h3>
            <Paragraph size='lg'>@ {item.location}</Paragraph>
            <Paragraph size='sm' className='mt-2'>
              {item.description}
            </Paragraph>
          </div>
        ))}
        <Link href='/cv' className='sm:col-start-1 md:col-start-2 md:place-self-center mt-10 md:mt-[10rem] lg:mt-[15rem]'>
          {/* <Button title="my cv" variant="primary" tabIndex="-1" /> */}
          <Button>my cv</Button>
        </Link>
      </div>
    </section>
  );
};

export default Experience;
