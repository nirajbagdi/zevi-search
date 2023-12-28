import ResultsList from './ResultsList';
import FiltersList from './FiltersList';

import styles from 'styles/components/ProductResults.module.scss';
import SearchBar from 'components/SearchBar';

const ProductResults = () => (
	<div className={styles.container}>
		<SearchBar className={styles.search} />

		<div className={styles.grid}>
			<h2>Search Results</h2>

			<FiltersList />
			<ResultsList />
		</div>
	</div>
);

export default ProductResults;
