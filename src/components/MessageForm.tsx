/* 'use client'

import React from 'react'


const DEFAULT_STATE = {
  name: '',
  email: '',
  message: '',
  error: null,
}

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.nameRef = React.createRef()
    this.emailRef = React.createRef()
    this.messageRef = React.createRef()

    this.state = {
      ...DEFAULT_STATE,
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault()

    const data = this.state
    if (data.name == '') {
      this.setState({
        error: 'Name is required',
      })
      this.nameRef.current.focus()
      return
    } else if (!this.isValidEmail(data.email)) {
      this.setState({
        error: 'Invalid email, please check again',
      })
      this.emailRef.current.focus()
      return
    } else if (data.message == '') {
      this.setState({
        error: 'Message is required',
      })
      this.messageRef.current.focus()
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'post',
        body: new URLSearchParams(data),
      })

      if (!res.ok || res.status == 400) {
        throw new Error(`Invalid response: ${res.status}`)
      }
      this.setState({ ...DEFAULT_STATE })
      toast({ message: 'I look forward to contacting you', type: 'success', title: 'Thanks for the message' })
    } catch (error) {
      console.error(error)
      this.setState({ ...DEFAULT_STATE, error })
      toast({ message: 'There seems to be an error, please try again later', type: 'error' })
    }
  }

  handleInputChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  isValidEmail = (email: string) => {
    // Regular expression for matching email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Test the email against the pattern and return the result
    return emailPattern.test(email)
  }

  render() {
    return (
      <form className='text-mono' onSubmit={this.handleSubmit}>
        <div className='flex flex-col gap-2 mt-2'>
          <label className='font-mono' htmlFor='name'>
            name
          </label>
          <input type='text' name='name' id='name' onChange={this.handleInputChange} value={this.state.name} ref={this.nameRef} />
        </div>
        <div className='flex flex-col gap-2 mt-2'>
          <label className='font-mono' htmlFor='email'>
            email
          </label>
          <input type='text' name='email' id='email' onChange={this.handleInputChange} value={this.state.email} ref={this.emailRef} />
        </div>
        <div className='flex flex-col gap-2 mt-2 mb-5'>
          <label className='font-mono' htmlFor='message'>
            message
          </label>
          <textarea type='text' name='message' id='message' onChange={this.handleInputChange} value={this.state.message} ref={this.messageRef} />
        </div>
        <Button type='submit'>send message</Button>
      </form>
    )
  }
}
 */
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
