import Image from 'next/image'
import NextLink from 'next/link'
import img from "../../public/images/_general/404.png"
import { Button } from '@mui/material'
const NotFound = () => {
    return (
        <div className='!min-h-full text-center'>
            <h2>Not Found</h2>
            <Image
                src={img.src}
                alt='page not found'
                width={300}
                height={300}
                className='mx-auto'

            />
            <Button
                component={NextLink}
                href="/"
                variant="contained"
                color="primary"
            >
                Return Home
            </Button>
        </div>
    )
}

export default NotFound