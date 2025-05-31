import { TextFieldProps, TextFieldVariants } from '@mui/material'

/*TODO: type to generic for filled */
interface ITextInputProps extends Omit<TextFieldProps<'filled'>, 'variant'> {
    className?: string
    variant?: TextFieldVariants
}

export default ITextInputProps
