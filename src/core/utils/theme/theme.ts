'use client';
import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';
import { grey } from '@mui/material/colors';

// theme.d.ts
import { PaletteColor, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      black: PaletteColor;
    };
  }
  interface PaletteOptions {
    custom?: {
      black: PaletteColorOptions;
    };
  }
}


const RubikFont = localFont({
    src: [
        {
            path: '../../../../public/fonts/rubik/Rubik-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/rubik/Rubik-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/rubik/Rubik-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/rubik/Rubik-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/rubik/Rubik-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/rubik/Rubik-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/rubik/Rubik-Black.ttf',
            weight: '800',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-rubik'
});

const theme = createTheme({
    colorSchemes: { light: true },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    palette: {
        primary: {
            main: '#3c6e71',
            contrastText: '#fff',
        },

        secondary: {
            main: '#353535',
            contrastText: '#fff',
        },
        custom: {
            black: {
                main: grey[900],
                contrastText: '#fff',
            },
        }
    },



    typography: {
        fontFamily: RubikFont.style.fontFamily,
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