import { TextField } from '@mui/material'
import ITextInputProps from './ITextInputProps'

/* rename to base input */
const TextInput = ({ className, variant = 'filled', ...props }: ITextInputProps) => {
    return <TextField variant={variant} className={`rounded-md w-full !min-h-[15px] ${className}`} {...props} />
}

export default TextInput
