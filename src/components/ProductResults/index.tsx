import { useState } from 'react';

import { useAppCtx } from 'store/context';
import { Product, ProductFilters } from 'models';
import { productPriceRanges } from 'constants/index';

import ResultsList from './ResultsList';
import FiltersList from './FiltersList';

const ProductResults = () => {
	const [filters, setFilters] = useState<ProductFilters>({
		brand: null,
		rating: null,
		priceRange: null,
	});

	const { products } = useAppCtx();

	const handleFilterSelect = (type: keyof ProductFilters, value: string) => {
		setFilters(prevFilters => ({
			...prevFilters,
			[type]: prevFilters[type] === value ? null : value,
		}));
	};

	const isMatchingRating = (product: Product) => {
		const { rating } = filters;
		return rating ? product.rating.value === +filters.rating! : true;
	};

	const isMatchingPrice = (product: Product) => {
		const { priceRange } = filters;
		if (!priceRange) return true;

		const priceRangeFilter = priceRange as keyof typeof productPriceRanges;
		const priceRangeLimits = productPriceRanges[priceRangeFilter];

		return Array.isArray(priceRangeLimits)
			? product.price.discounted >= priceRangeLimits[0]! &&
					product.price.discounted <= priceRangeLimits[1]
			: product.price.discounted <= priceRangeLimits;
	};

	const getFilteredProducts = () => {
		return products.filter(product => isMatchingPrice(product) && isMatchingRating(product));
	};

	const filteredProducts = getFilteredProducts();

	return (
		<>
			<FiltersList onFilterSelect={handleFilterSelect} />
			<ResultsList items={filteredProducts} />
		</>
	);
};

export default ProductResults;
