import ProductItem from './ProductItem';

import products from 'data/products.json';
import styles from 'styles/components/ProductResults.module.scss';

const ResultsList = () => (
	<section className={styles.results}>
		{products.items.map(product => (
			<ProductItem key={product.id} product={product} />
		))}
	</section>
);

export default ResultsList;
