import { TextFieldProps } from '@mui/material'

/*TODO: type to generic for filled */
interface ITextInputProps extends TextFieldProps<'filled'> {
    className?: string
}

export default ITextInputProps
