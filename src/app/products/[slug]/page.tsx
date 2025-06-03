import ROUTES from '@/core/constants/routes/routes.constant'
import fetchHandler from '@/core/helpers/fetchHandler'
import ProductDetail from '@/template/ProductDetail'

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params

    const API_ENDPOINTS = `${ROUTES.Products}/slug/${slug}`

    const fetchResponse = await fetchHandler(API_ENDPOINTS)
    return (
        <div className='px-5 md:px-20 py-10'>
            <ProductDetail product={fetchResponse} />
        </div>
    )
}

export default page

