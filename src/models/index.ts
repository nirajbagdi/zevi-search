export type ProductType = {
	id: string;
	name: string;
	image: string;

	price: {
		original: number;
		discounted: number;
	};

	rating: {
		value: number;
		noOfRatings: number;
	};
};

export type FetchedData = {
	id: number;
	title: string;
	price: number;
	images: string[];
	description: string;
	creationAt: Date;
	updatedAt: Date;
	category: {};
}[];
