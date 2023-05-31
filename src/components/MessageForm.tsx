'use client'

import React, { useState } from 'react'
import Button, { buttonVariants } from '@/ui/Button'
import { toast } from '@/ui/toast'
import { Input, TextArea } from '@/ui/Input'
import { Form } from './ui/Form'
import { cn } from '@/lib/utils'

type FormValues = {
  email: string
  name: string
  message: string
}

export default function MessageForm() {
  const onSubmit = async (data: FormValues) => {
    try {
      console.log(data)

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: new URLSearchParams(data),
      })

      if (!res.ok || res.status == 400) {
        throw new Error(`Invalid response: ${res.status}`)
      }

      toast({ message: 'I look forward to contacting you', type: 'success', title: 'Thanks for the message' })
    } catch (error) {
      console.error(error)
      toast({ title: 'There seems to be an error', message: 'Please try again later', type: 'error' })
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
          <Input className={cn('mt-4 cursor-pointer', buttonVariants({ variant: 'default' }))} type='submit' value='send' />
        </div>
      )}
    </Form>
  )
}
