'use client'

import { useEffect } from 'react'
import Button from '../../components/ui/Button'

const Error = ({ error, reset }: { error: Error; reset: void }) => {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div>
      <h1>Something went wrong!</h1>
      <Button variant='default' onClick={() => reset}>
        Reset
      </Button>
    </div>
  )
}

export default Error
