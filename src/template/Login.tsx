'use client'
import TextInput from '@/components/atoms/TextInput/TextInput'
import Field from '@/components/molecules/Field/Field'
import DEFAULT_VALUES from '@/core/constants/Login.constants'
import ILoginFormType from '@/core/types/login-form.types'
import loginSchema from '@/core/validations/login.validation'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@/components/atoms/Button/Button'
const Login = () => {
    const {
        control,
        handleSubmit,
        formState:
        { errors }
    }
        = useForm<ILoginFormType>(
            {
                defaultValues: DEFAULT_VALUES,
                resolver: yupResolver(loginSchema)
            }
        )

    const handleFormSubmit = (values: ILoginFormType) => {
        console.log(values);
    }

    return (
        <div className="bg-gray-50 max-w-[800px] mx-auto border border-gray-300 rounded-md p-4">
            <h1 className='mb-6 text-sm md:text-3xl font-black text-center'>LOGIN FORM</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='flex flex-col gap-6 mb-6'>
                    <Controller
                        control={control}
                        name='email'
                        render={({ field }) => (
                            <Field fieldError={errors} fieldName='email' label='Email'>
                                <TextInput  {...field} />
                            </Field>
                        )}
                    />

                    <Controller
                        control={control}
                        name='password'
                        render={({ field }) => (
                            <Field fieldError={errors} fieldName='password' label='Password'>
                                <TextInput type='password'  {...field} />
                            </Field>
                        )}
                    />
                </div>

                <Button type='submit' variant='contained' color='primary'
                    className='mt-10 !mr-0 !ml-auto !block'>
                    Login
                </Button>
            </form>
        </div>
    )
}

export default Login