import { Product, FetchedDataResponse } from 'models';
import { randomIntFromRange } from 'utils';

const URL = 'https://api.escuelajs.co/api/v1/products';

export const fetchProducts = async (): Promise<Product[]> => {
	const response = await fetch(URL);
	const fetchedData: FetchedDataResponse = await response.json();

	const products: Product[] = fetchedData.map(result => ({
		id: result.id + '',
		name: result.title,
		image: result.images[0],

		price: {
			original: result.price + 132,
			discounted: result.price,
		},

		rating: {
			value: randomIntFromRange(1, 5),
			count: randomIntFromRange(200, 300),
		},
	}));

	return products;
};
