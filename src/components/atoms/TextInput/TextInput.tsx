import { TextField } from '@mui/material'
import React from 'react'

interface ITextInput {
    className?: string
    placeholder?: string
    name: string,
    type?: string
}

const TextInput = ({ className, type = 'text', name = '', ...props }: ITextInput) => {
    return (
        <TextField
            type={type}
            hiddenLabel
            variant="filled"
            className={`rounded-md w-full !min-h-[15px] ${className}`}
            name={name}
            {...props}
        />
    )
}

export default TextInput