interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: {
        name: string
    }
}

export default IProduct