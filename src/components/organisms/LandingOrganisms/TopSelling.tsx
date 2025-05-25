import ProductCard from "@/components/molecules/ProductCard/ProductCard"

const TopSelling = () => {

    return (
        <div className=" mt-16">
            <h2 className="text-center font-bold text-4xl">TOP SELLING</h2>

            <div>
                <ProductCard />
            </div>
        </div>
    )
}

export default TopSelling