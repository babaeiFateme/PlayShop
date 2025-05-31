const CardSkeleton = () => {
    return (
        <div className='h-[495px]'>
            <div className='h-[351px] bg-gray-200 rounded-md'></div>

            <div className='flex flex-col gap-3 mt-3'>
                <div className='h-[24px] bg-gray-200'> </div>
                <div className='h-[48px] bg-gray-200'> </div>
                <div className='h-[32px] bg-gray-200'> </div>
            </div>
        </div>
    )
}

export default CardSkeleton
