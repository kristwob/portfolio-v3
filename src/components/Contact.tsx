import Form from './MessageForm';
import IconButton from '@/components/BackButton';
import Paragraph from './ui/Paragraph';
import GithubButton from './GithubButton';
import LinkedInButton from './LinkedInButton';

const Contact = () => {
  return (
    <section id='contact'>
      <h2 className='text-center'>contact</h2>
      <div className='grid md:grid-cols-2 gap-5 mt-[8em]'>
        <div>
          <h3>Send me an email</h3>
          <Form />
        </div>
        <div>
          <h3>My socials</h3>
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
