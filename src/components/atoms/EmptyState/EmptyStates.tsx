import Image from 'next/image'

import emptyImg from '@images/general/empty-state.png'

type TEmptyState = {
    img?: string
    title?: string
    description?: null | string
}

const EmptyState = ({ img = emptyImg.src, title = 'not found any things', description = null }: TEmptyState) => {
    return (
        <div>
            <Image
                src={img}
                alt={title}
                width={200}
                height={200}
                className='w-full max-w-[200px] mx-auto block'
                loading='lazy'
            />

            <h2 className='text-center font-semibold text-2xl'>{title}</h2>

            <div>{description}</div>
        </div>
    )
}

export default EmptyState

