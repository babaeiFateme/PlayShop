import fetchHandler from '@/core/helpers/fetchHandler'
import Landing from '@/template/Landing'

const Home = async () => {
    const fetchResponse = await fetchHandler('/products')

    return <Landing initialData={fetchResponse} />
}

export default Home
