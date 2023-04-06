'use client'

import { FieldValues, UseFormReturn, useForm, SubmitHandler } from 'react-hook-form'

export type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode
}

export const Form = <TFormValues extends FieldValues>({ onSubmit, children }: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>()
  return <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
}
