import Rating from '../Rating';
import FilterItem from './FilterItem';

import { ProductFilters } from 'models';
import { productBrands, productPriceRanges, productRatingLevels } from 'constants/index';

import styles from 'styles/components/ProductResults.module.scss';

type Props = {
	onFilterSelect: (type: keyof ProductFilters, value: string) => void;
};

const Filters: React.FC<Props> = ({ onFilterSelect }) => {
	const brandItems = productBrands.map(brand => ({
		value: brand,
		content: brand,
	}));

	const priceRangeItems = Object.keys(productPriceRanges).map(priceStr => ({
		value: priceStr,
		content: priceStr,
	}));

	const ratingItems = productRatingLevels.map(rating => ({
		value: rating + '',
		content: <Rating value={rating} />,
	}));

	const handleFilterChange = (event: React.ChangeEvent) => {
		const currentEl = event.target;

		const type = currentEl.getAttribute('name');
		const value = currentEl.parentElement?.getAttribute('data-value');

		if (!type || !value) return null;

		onFilterSelect(type as keyof ProductFilters, value);
	};

	return (
		<section className={styles.filters}>
			<FilterItem
				title="Brand"
				name="brand"
				items={brandItems}
				onFilterChange={handleFilterChange}
			/>

			<FilterItem
				title="Price Range"
				name="priceRange"
				items={priceRangeItems}
				onFilterChange={handleFilterChange}
			/>

			<FilterItem
				title="Ratings"
				name="rating"
				items={ratingItems}
				onFilterChange={handleFilterChange}
			/>
		</section>
	);
};

export default Filters;
