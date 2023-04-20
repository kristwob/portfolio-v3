// Sanity
import { cvQuery } from '../../../lib/sanity.queries'
import { client } from '../../../lib/sanity.client'
import { CV } from '@/types/Cv'
import Heading from '@/ui/Heading'
import BackButton from '@/components/BackButton'
import Paragraph from '@/ui/Paragraph'

const PageCv = async () => {
  const cv: CV = await client.fetch(cvQuery)

  return (
    <>
      <section className='grid md:grid-cols-2 container pt-16'>
        <div className='col-span-2'>
          <BackButton className='mt-8' />
          <Heading className='mt-2'>Curriculum Vitae</Heading>
        </div>
        <div className='mt-5'>
          <h2 className='mb-2'>Personalia</h2>
          <Paragraph className='mb-2 flex flex-col sm:flex-row sm:gap-2'>
            Name: <span>{cv.personalia.name}</span>
          </Paragraph>
          <Paragraph className='mb-2 flex flex-col sm:flex-row sm:gap-2'>
            DOB: <span>{cv.personalia.DOB}</span>
          </Paragraph>
          <Paragraph className='mb-2 flex flex-col sm:flex-row sm:gap-2'>
            Nationality: <span>{cv.personalia.nationality}</span>
          </Paragraph>
          <Paragraph className='mb-2 flex flex-col sm:flex-row sm:gap-2'>
            Email: <span>{cv.personalia.email}</span>
          </Paragraph>
        </div>
        <div className='mt-5'>
          <h2 className='mb-2'>Experiences</h2>
          {cv.experiences.map((item, index) => (
            <Paragraph key={index} className='mb-2 flex flex-col sm:flex-row sm:gap-2'>
              <span>
                {item.from.split('-')[0]} - {item.to.split('-')[0]}:{' '}
              </span>
              <span>{item.title}</span>
            </Paragraph>
          ))}
        </div>
        <div className='mt-5'>
          <h2 className='mb-2'>Education</h2>
          {cv.education.map((item, index) => (
            <Paragraph key={index} className='mb-2 flex flex-col sm:flex-row sm:gap-2'>
              <span>
                {item.from.split('-')[0]} - {item.to.split('-')[0]}:{' '}
              </span>
              <span>{item.title}</span>
            </Paragraph>
          ))}
        </div>
        <div className='mt-5'>
          <h2 className='mb-2'>Courses</h2>
          {cv.courses.map((item, index) => (
            <Paragraph key={index} className='mb-2 flex flex-col sm:flex-row sm:gap-2'>
              <span>{item.date.split('-')[0]}: </span>
              <span>{item.title}</span>
            </Paragraph>
          ))}
        </div>
        <div className='mt-5'>
          <h2 className='mb-2'>Languages</h2>
          {cv.languages.map((item, index) => (
            <Paragraph key={index} className='flex flex-col mt-2'>
              <span className='text-lg'>{item.language}</span>
              <span>Oral: {item.oral}</span>
              <span>Written: {item.written}</span>
            </Paragraph>
          ))}
        </div>
      </section>
    </>
  )
}

export default PageCv
