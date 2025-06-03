import ROUTES from '@/core/constants/routes/routes.constant'
import fetchHandler from '@/core/helpers/fetchHandler'
import ProductDetail from '@/template/ProductDetail'

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params

    const API_ENDPOINTS = `${ROUTES.Products}/slug/${slug}`
    const fetchResponse = await fetchHandler(API_ENDPOINTS)

    const RELATED_ENDPOINTS = `${ROUTES.Products}/slug/${slug}/related`
    const fetchResponseRelated = await fetchHandler(RELATED_ENDPOINTS)

    return (
        <ProductDetail
            productEndPoint={API_ENDPOINTS}
            product={fetchResponse}
            related={fetchResponseRelated.slice(0,3)}
            relatedEndPoint={RELATED_ENDPOINTS}
        />
    )
}

export default page

