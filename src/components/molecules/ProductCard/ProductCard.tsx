import Image from "next/image"

const ProductCard = ({ src, title }: { src: string, title: string }) => {
  return (
    <div className='rounded-md bg-white'>
      <div className="bg-gray-100 rounded-lg">
        <Image
          src={src}
          alt={title}
          width={300}
          height={200}
          loading="lazy"
          className="block mx-auto max-w-[300px] aspect-[1] object-cover w-full"
        />
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <h3>Lorem ipsum dolor sit.</h3>
        <div className="font-semibold text-2xl">$120</div>
      </div>
    </div>
  )
}

export default ProductCard