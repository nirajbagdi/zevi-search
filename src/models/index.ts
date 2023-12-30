export type Product = {
	id: string;
	name: string;
	image: string;

	price: {
		original: number;
		discounted: number;
	};

	rating: {
		value: number;
		count: number;
	};
};

export type FetchedDataResponse = {
	id: number;
	title: string;
	price: number;
	images: string[];
	description: string;
	creationAt: Date;
	updatedAt: Date;
	category: {};
}[];
