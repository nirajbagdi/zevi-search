import ProductResults from 'components/ProductResults';
import SearchBar from 'components/SearchBar';

import { framerPageTransition } from 'utils';
import styles from 'styles/components/ProductResults.module.scss';

const Products = () => (
	<div className={styles.container}>
		<SearchBar className={styles.search} />

		<div className={styles.grid}>
			<h2>Search Results</h2>
			<ProductResults />
		</div>
	</div>
);

export default framerPageTransition(Products);
