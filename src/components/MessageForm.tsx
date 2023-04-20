'use client'

import React, { useState } from 'react'
import Button from '@/ui/Button'
import { toast } from '@/ui/toast'
import { Input, TextArea } from '@/ui/Input'
import { Form } from './ui/Form'

type FormValues = {
  email: string
  name: string
  message: string
}

export default function MessageForm() {
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'post',
        body: new URLSearchParams(data),
      })

      if (!res.ok || res.status == 400) {
        throw new Error(`Invalid response: ${res.status}`)
      }

      toast({ message: 'I look forward to contacting you', type: 'success', title: 'Thanks for the message' })
      setLoading(false)
    } catch (error) {
      console.error(error)
      toast({ title: 'There seems to be an error', message: 'Please try again later', type: 'error' })
      setLoading(false)
    }
  }

  return (
    <Form<FormValues> onSubmit={onSubmit}>
      {({ register }) => (
        <div className='text-mono'>
          <div className='flex flex-col gap-2 mt-2'>
            <label htmlFor='name'>name</label>
            <Input id='name' type='text' {...register('name')} />
          </div>
          <div className='flex flex-col gap-2 mt-2'>
            <label htmlFor='email'>email</label>
            <Input id='email' type='email' {...register('email')} />
          </div>
          <div className='flex flex-col gap-2 mt-2'>
            <label htmlFor='message'>message</label>
            <TextArea {...register('message')} id='message' name='message' />
          </div>
          <Button onClick={() => setLoading((prev) => !prev)} isLoading={loading} className='mt-4' type='submit'>
            send
          </Button>
        </div>
      )}
    </Form>
  )
}
