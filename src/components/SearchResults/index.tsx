import Results from './Results';
import Filters from './Filters';

import styles from 'styles/components/SearchResults.module.scss';

const SearchResults = () => {
	return (
		<div className={styles.container}>
			<Filters />
			{/* <Results /> */}
		</div>
	);
};

export default SearchResults;
