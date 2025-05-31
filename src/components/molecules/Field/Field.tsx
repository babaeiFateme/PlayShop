import IFieldType from '@/core/types/field.types'
import React from 'react'

const Field = ({ children, fieldError, fieldName, label }: IFieldType) => {
    return (
        <div>
            {label && <label className='font-medium text-sm mb-2'>{label}</label>}

            {children}

            {fieldError?.[fieldName]?.message && (
                <span className='text-red-800 text-sm'>{fieldError[fieldName]?.message as string}</span>
            )}
        </div>
    )
}

export default Field
