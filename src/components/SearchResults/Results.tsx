import Product from './Product';

import products from 'data/products.json';

import styles from 'styles/components/SearchResults.module.scss';

const Results = () => (
	<section className={styles.results}>
		{products.items.map(product => (
			<Product key={product.id} product={product} />
		))}
	</section>
);

export default Results;
