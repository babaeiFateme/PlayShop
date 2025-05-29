const fetchHandler = async (params: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    
    const res = await fetch(`${baseUrl}${params}`)

    if (!res.ok) throw new Error('Network error')
    return res.json()
}

export default fetchHandler