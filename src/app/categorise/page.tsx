import API_ENDPOINTS from '@/core/constants/api-endpoints/api-endpoints.constants'
import fetchHandler from '@/core/helpers/fetchHandler'
import Categories from '@/template/Categories'

const page = async () => {
      const fetchResponse = await fetchHandler(API_ENDPOINTS.categories)

    return (
            <Categories initialData={fetchResponse} />
    )
}

export default page
