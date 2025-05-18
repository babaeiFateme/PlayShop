import React from 'react'

const FooterBottom = (
    { children }:
        Readonly<{ children: React.ReactNode }>
) => {
    return (
        <div className='mt-4'>{children}</div>
    )
}

export default FooterBottom