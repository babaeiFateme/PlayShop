import fetchHandler from '@/core/helpers/fetchHandler'
import ReactQueryProvider from '@/lib/react-query-provider'
import Categories from '@/template/Categories'
import { dehydrate, QueryClient } from '@tanstack/react-query'

const page = async () => {
    const queryClient = new QueryClient()

    await queryClient.ensureQueryData({
        queryKey: ['categories'],
        queryFn: () => fetchHandler('categories')
    })

    const dehydratedState = dehydrate(queryClient)
    return (
        <ReactQueryProvider state={dehydratedState}>
            <Categories />
        </ReactQueryProvider>
    )
}

export default page
