import CBadge from '@/components/atoms/CBadge/CBadge'
import ROUTES from '@/core/constants/routes/routes.constant'
import IProduct from '@/core/types/product.types'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ product }: { product: IProduct }) => {
    const imageUrl = product?.images?.[0]

    const validImageSrc =
        imageUrl && imageUrl !== 'string.png'
            ? imageUrl.startsWith('http')
                ? imageUrl
                : `https://fakeapi.platzi.com/${imageUrl}`
            : '/placeholder.png'

    return (
        <div className='rounded-md bg-white'>
            <div className='bg-gray-100 rounded-lg relative'>
                <Image
                    src={validImageSrc}
                    alt={product?.title}
                    width={100}
                    height={100}
                    loading='lazy'
                    className='block mx-auto rounded-md aspect-[1] object-cover w-full'
                />

                <CBadge className='text-white text-sm' color='primary'>
                    {product?.category?.name}
                </CBadge>
            </div>

            <div className='flex flex-col gap-3 mt-3'>
                <h3 className='line-clamp-1 font-semibold text-lg'>
                    <Link href={`${ROUTES.Products}/${product?.slug}`}>{product?.title}</Link>
                </h3>

                <div className='line-clamp-2'>{product?.description}</div>

                <div className='font-semibold text-2xl'>${product?.price}</div>
            </div>
        </div>
    )
}

export default ProductCard
