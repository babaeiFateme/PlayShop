import { getCookie } from 'cookies-next'

const fetchHandler = async (url: string, options: { method?: string; data?: unknown } = {}) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const { method = 'GET', data } = options

    let token = null

    if (getCookie('token')) {
        token = getCookie('token')
    }

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {})
    }

    const config: RequestInit = {
        method,
        headers
    }

    if (data && method !== 'GET') {
        config.body = JSON.stringify(data)
    }

    const res = await fetch(`${baseUrl}${url}`, config)

    if (!res.ok) {
        const errorText = await res.text()
        let errorMessage = 'Network error'

        try {
            const errorData = JSON.parse(errorText)
            errorMessage = errorData.message || errorMessage
        } catch {
            // ignore JSON parse error
        }
        throw new Error(errorMessage)
    }

    const text = await res.text()
    return text ? JSON.parse(text) : null
}

export default fetchHandler
