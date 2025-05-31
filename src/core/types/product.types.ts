interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: {
        name: string,
        id?: string
    }
}

export default IProduct