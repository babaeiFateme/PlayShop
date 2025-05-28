import Button from "@/components/atoms/Button/Button"
// import ProductCard from "@/components/molecules/ProductCard/ProductCard"

// import p1 from '@images/pages/products/p1.png'

const NewArrivals = () => {

    return (
        <div className="px-5 md:px-10 mt-16">
            <h2 className="text-center font-bold text-4xl mb-10 mt-20">NEW ARRIVALS</h2>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <ProductCard src={p1.src} title='loremdfbsmdbf sjkdfsdjf sjdfbsdjf'/>
                <ProductCard src={p1.src} title='loremdfbsmdbf sjkdfsdjf sjdfbsdjf'/>
                <ProductCard src={p1.src} title='loremdfbsmdbf sjkdfsdjf sjdfbsdjf'/>
                <ProductCard src={p1.src} title='loremdfbsmdbf sjkdfsdjf sjdfbsdjf'/>
            </div> */}

            <Button variant="outlined" color="secondary" className="!rounded-xl !block !mx-auto !my-20 !px-10 !py-2">
                View All
            </Button>
        </div>
    )
}

export default NewArrivals