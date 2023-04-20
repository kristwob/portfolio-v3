import Paragraph from './ui/Paragraph'

const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <footer className='flex items-center justify-center font-mono mt-10 container'>
      <Paragraph size='sm' className='text-center'>
        © {year} Kristian Wobbes
      </Paragraph>
    </footer>
  )
}

export default Footer
