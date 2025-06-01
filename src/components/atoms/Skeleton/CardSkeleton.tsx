const CardSkeleton = () => {
    return (
        <div className='h-[295px] md:[495px]'>
            <div className='h-[151px] md:h-[295px] bg-gray-200 rounded-md'></div>

            <div className='flex flex-col gap-3 mt-3'>
                <div className='h-[28px] md:h-[24px] bg-gray-200'> </div>
                <div className='h-[48px] bg-gray-200'> </div>
                <div className='h-[32px] bg-gray-200'> </div>
            </div>
        </div>
    )
}

export default CardSkeleton
