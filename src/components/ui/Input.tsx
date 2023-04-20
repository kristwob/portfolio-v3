'use client'
import React from "react"

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => <input ref={ref} {...props} />)

Input.displayName = 'Input'
export type Option = {
  label: React.ReactNode
  value: string | number | string[]
}

export type SelectProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & { options: Option[] }

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ options, ...props }, ref) => (
  <select ref={ref} {...props}>
    {options.map(({ label, value }, index) => (
      <option key={index} value={value}>{label}</option>
    ))}
  </select>
))

Select.displayName = 'Select'

export type TextAreaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  return <textarea {...props} ref={ref} />
})

TextArea.displayName = 'TextArea'