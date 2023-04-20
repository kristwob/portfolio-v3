import Form from './MessageForm';
import Paragraph from './ui/Paragraph';
import GithubButton from './GithubButton';
import LinkedInButton from './LinkedInButton';
import { headingVariants } from './ui/Heading';

const Contact = () => {
  return (
    <section id='contact' className='container'>
      <h2 className='text-center'>contact</h2>
      <div className='grid md:grid-cols-2 gap-5 mt-[8em]'>
        <div>
          <h3 className={headingVariants({size: "md"})}>Send me an email</h3>
          <Form />
        </div>
        <div>
          <h3 className={headingVariants({size: "md"})}>My socials</h3>
          <div className='mt-2'>
            <Paragraph size='lg' className='text-xl'>
              Feel free to contact me on my socials listed below:
            </Paragraph>
            <div className='flex justify-center gap-10 mt-12'>
              <a href='https://www.linkedin.com/in/kristian-wobbes-219098194/' target='_blank' rel='noreferrer'>
                <LinkedInButton tabIndex={-1} />
              </a>
              <a href='https://github.com/kristwob' target='_blank' rel='noreferrer'>
                <GithubButton tabIndex={-1} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
