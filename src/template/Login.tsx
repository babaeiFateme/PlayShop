'use client'
import TextInput from '@/components/atoms/TextInput/TextInput'
import Field from '@/components/molecules/Field/Field'
import DEFAULT_VALUES from '@/core/constants/Login.constants'
import ILoginFormType from '@/core/types/login-form.types'
import loginSchema from '@/core/validations/login.validation'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@/components/atoms/Button/Button'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import fetchHandler from '@/core/helpers/fetchHandler'
import { toast } from 'react-hot-toast'
import useUserStore from '@/core/store/user/user-store'
import { useState } from 'react'
import ROUTES from '@/core/constants/routes/routes.constant'
import { setCookie } from 'cookies-next'
import API_ENDPOINTS from '@/core/constants/api-endpoints/api-endpoints.constants'
const Login = () => {
    const setUserReducer = useUserStore((state) => state.setUserReducer)

    const router = useRouter()

    const [userData, setUserData] = useState<ILoginFormType | null>(null)

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<ILoginFormType>({
        defaultValues: DEFAULT_VALUES,

        resolver: yupResolver(loginSchema)
    })

    const { mutate } = useMutation({
        mutationFn: (data: ILoginFormType) => fetchHandler(API_ENDPOINTS.login, { method: 'POST', data }),

        onSuccess: (res) => {
            if (res.access_token) {
                setCookie('token', res.access_token, {
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
                })

                if (userData) {
                    setUserReducer(userData)
                }
                toast.success('Login success!')

                router.push(ROUTES.Landing)
            } else {
                toast.error('Login failed!')
            }
        },
        onError: (error: unknown) => {
            const message = error instanceof Error ? error.message : 'خطایی رخ داده'
            console.log(message)
            toast.error('Login failed!')
        }
    })

    const handleFormSubmit = (values: ILoginFormType) => {
        setUserData(values) // داده‌های فرم رو ذخیره کن
        mutate(values) // API call کن
    }

    return (
        <div className='bg-gray-50 max-w-[800px] mx-auto border border-gray-300 rounded-md p-8 my-[100px]'>
            <h1 className='mb-6 text-sm md:text-3xl font-black text-center'>LOGIN FORM</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='flex flex-col gap-6 mb-6'>
                    <Controller
                        control={control}
                        name='email'
                        render={({ field }) => (
                            <Field fieldError={errors} fieldName='email' label='Email'>
                                <TextInput {...field} />
                            </Field>
                        )}
                    />
                    <Controller
                        control={control}
                        name='password'
                        render={({ field }) => (
                            <Field fieldError={errors} fieldName='password' label='Password'>
                                <TextInput type='password' {...field} />
                            </Field>
                        )}
                    />
                </div>
                <Button type='submit' variant='contained' color='primary' className='mt-10 !mr-0 !ml-auto !block'>
                    Login
                </Button>
            </form>
        </div>
    )
}

export default Login
