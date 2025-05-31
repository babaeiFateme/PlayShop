import API_ENDPOINTS from '@/core/constants/api-endpoints/api-endpoints.constants'
import fetchHandler from '@/core/helpers/fetchHandler'
import Landing from '@/template/Landing'

const Home = async () => {
    const fetchResponse = await fetchHandler(API_ENDPOINTS.products)

    return <Landing initialData={fetchResponse} />
}

export default Home
