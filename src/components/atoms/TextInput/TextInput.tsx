import { TextField } from '@mui/material'
import React from 'react'

interface ITextInput {
    className?: string
    placeholder?: string
}

const TextInput = ({ className, ...props }: ITextInput) => {
    return (
        <TextField
            hiddenLabel
            variant="filled"
            className={`rounded-md w-full !min-h-[15px] ${className}`}
            {...props}
        />
    )
}

export default TextInput