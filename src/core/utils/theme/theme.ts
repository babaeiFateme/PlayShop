'use client';
import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';

const PinarFont = localFont({
    src: [
        {
            path: '../../../../public/fonts/pinar/woff2/Pinar-FD-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/pinar/woff2/Pinar-FD-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/pinar/woff2/Pinar-FD-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/pinar/woff2/Pinar-FD-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/pinar/woff2/Pinar-FD-Bold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/pinar/woff2/Pinar-FD-Black.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-pinar'
});

const theme = createTheme({
    colorSchemes: { light: true },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    
    typography: {
        fontFamily: PinarFont.style.fontFamily,
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { severity: 'info' },
                            style: {
                                backgroundColor: '#60a5fa',
                            },
                        },
                    ],
                },
            },
        },
    },
});

export default theme;