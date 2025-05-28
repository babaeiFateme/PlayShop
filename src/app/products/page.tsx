import { dehydrate, QueryClient } from '@tanstack/react-query'
import React from 'react'
import Products from '@/template/Products'
import ReactQueryProvider from '@/lib/react-query-provider'

const fetchProducts = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/products')
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}

const Page = async () => {
  const queryClient = new QueryClient()

  await queryClient.ensureQueryData({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <ReactQueryProvider state={dehydratedState}>
      <Products />
    </ReactQueryProvider>
  )
}

export default Page
