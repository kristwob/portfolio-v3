'use client' // Error components must be Client components

import Heading from '@/ui/Heading'
import { useEffect } from 'react'
import Button from '@/ui/Button'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='container'>
      <Heading>Something went wrong!</Heading>
      <Button
        size='lg'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}
