import Results from './Results';
import Filters from './Filters';

import styles from 'styles/components/SearchResults.module.scss';

const SearchResults = () => {
	return (
		<div className={styles.container}>
			<h2>Search Results</h2>
			<Filters />
			<Results />
		</div>
	);
};

export default SearchResults;
