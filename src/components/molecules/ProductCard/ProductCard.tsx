import Image from "next/image"
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='rounded-md bg-white'>
      <div className="bg-gray-100 rounded-lg">
        <Image
          src={product.images?.[0]}
          alt={product.title}
          width={300}
          height={200}
          loading="lazy"
          className="block mx-auto rounded-md aspect-[1] object-cover w-full"
        />
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <h3>{product.title}</h3>
        <div className="font-semibold text-2xl">${product.price}</div>
      </div>
    </div>
  )
}

export default ProductCard