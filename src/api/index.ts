import { ProductType, FetchedData } from 'models';

const URL = 'https://api.escuelajs.co/api/v1/products?price_min=200&price_max=3500';

export const fetchProducts = async (): Promise<ProductType[]> => {
	const response = await fetch(URL);
	const data: FetchedData = await response.json();

	const products: ProductType[] = data.map(result => ({
		id: result.id + '',
		name: result.title,
		image: result.images[0],

		price: {
			original: result.price + 132,
			discounted: result.price,
		},

		rating: {
			value: Math.floor(Math.random() * 5) + 1,
			noOfRatings: 210,
		},
	}));

	return products;
};
