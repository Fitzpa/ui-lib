import React from 'react'

export interface IProps {
  name: string
  label: string
}

const InputField = ({ name, label }: IProps) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} />
    </div>
  )
}

export default InputField
