import Rating from '../Rating';
import FilterItem from './FilterItem';

import styles from 'styles/components/ProductResults.module.scss';

type Props = {
	onFilterSelect: (filterType: string, filterValue: string) => void;
};

const Filters: React.FC<Props> = ({ onFilterSelect }) => {
	const handleFilterChange = (event: React.ChangeEvent) => {
		const currentEl = event.target;

		const filterType = currentEl.getAttribute('name');
		const filterValue = currentEl.parentElement?.getAttribute('data-value');

		if (!filterType || !filterValue) return null;
		onFilterSelect(filterType, filterValue);
	};

	return (
		<section className={styles.filters}>
			<FilterItem
				title="Brand"
				name="brand"
				items={[
					{ value: 'Mango', content: 'Mango' },
					{ value: 'HM', content: 'H&M' },
				]}
				onFilterChange={handleFilterChange}
			/>

			<FilterItem
				title="Price Range"
				name="priceRange"
				items={[
					{ value: 'Under 500', content: 'Under 500' },
					{ value: '1000 to 3000', content: '1000 to 3000' },
				]}
				onFilterChange={handleFilterChange}
			/>

			<FilterItem
				title="Ratings"
				name="rating"
				items={[
					{ value: '5', content: <Rating value={5} /> },
					{ value: '4', content: <Rating value={4} /> },
					{ value: '3', content: <Rating value={3} /> },
					{ value: '2', content: <Rating value={2} /> },
					{ value: '1', content: <Rating value={1} /> },
				]}
				onFilterChange={handleFilterChange}
			/>
		</section>
	);
};

export default Filters;
