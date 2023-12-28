import { useState } from 'react';

import ResultsList from './ResultsList';
import FiltersList from './FiltersList';

const ProductResults = () => {
	const [selectedFilters, setSelectedFilters] = useState({
		brand: null,
		priceRange: null,
		rating: null,
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
			<ResultsList />
		</>
	);
};

export default ProductResults;
