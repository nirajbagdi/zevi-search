import Results from './Results';
import Filters from './Filters';

import styles from 'styles/components/SearchResults.module.scss';
import SearchBar from 'components/SearchBar';

const SearchResults = () => {
	return (
		<div className={styles.container}>
			<SearchBar className={styles.search} />

			<div className={styles.grid}>
				<h2>Search Results</h2>
				<Filters />
				<Results />
			</div>
		</div>
	);
};

export default SearchResults;
