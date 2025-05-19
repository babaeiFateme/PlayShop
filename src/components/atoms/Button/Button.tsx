import React from 'react'
import { Button as MUIButton, ButtonProps } from '@mui/material'

const Button: React.FC<ButtonProps> =
    ({
        color,
        variant,
        children,
        onClick,
        ...props
    }) => {
        return (
            <MUIButton
                variant={variant}
                color={color}
                onClick={onClick}
                {...props}
            >
                {children}
            </MUIButton>
        )
    }

export default Button