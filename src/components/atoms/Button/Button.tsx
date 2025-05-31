import { Button as MUIButton, ButtonProps } from '@mui/material'

const Button = ({ children, ...props }: ButtonProps) => <MUIButton {...props}>{children}</MUIButton>

export default Button
