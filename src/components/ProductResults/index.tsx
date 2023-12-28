import { useState } from 'react';

import { useAppCtx } from 'store/context';

import ResultsList from './ResultsList';
import FiltersList from './FiltersList';

const ProductResults = () => {
	const [selectedFilters, setSelectedFilters] = useState({
		brand: null,
		priceRange: null,
		rating: null,
	});

	const { products } = useAppCtx();

	const filteredProducts = products.filter(product => {
		const isRatingMatch = selectedFilters.rating
			? product.rating.value === +selectedFilters.rating
			: true;

		const isPriceMatch =
			selectedFilters.priceRange === 'Under 500'
				? product.price.discounted <= 500
				: selectedFilters.priceRange === '1000 to 3000'
				? product.price.discounted >= 1000 && product.price.discounted <= 3000
				: true;

		return isRatingMatch && isPriceMatch;
	});

	const handleFilterSelect = (filterType: string, filterValue: string) => {
		if (
			selectedFilters.brand === filterValue ||
			selectedFilters.priceRange === filterValue ||
			selectedFilters.rating === filterValue
		) {
			setSelectedFilters(prevFilters => ({ ...prevFilters, [filterType]: null }));
			return null;
		}

		setSelectedFilters(prevFilters => ({ ...prevFilters, [filterType]: filterValue }));
	};

	return (
		<>
			<FiltersList onFilterSelect={handleFilterSelect} />
			<ResultsList items={filteredProducts} />
		</>
	);
};

export default ProductResults;
