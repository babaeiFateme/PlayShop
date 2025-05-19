import Image from 'next/image'
import NextLink from 'next/link'
import img from "../../public/images/_general/404.png"
import Button from '@/components/atoms/Button/Button'
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
                variant="contained"
                color="primary"
                component={NextLink}
                href="/"
            > Return Home</Button>
        </div>
    )
}

export default NotFound