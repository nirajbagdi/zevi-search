import { useAppCtx } from 'store/context';
import ProductItem from './ProductItem';

import styles from 'styles/components/ProductResults.module.scss';

const ResultsList = () => {
	const { products } = useAppCtx();

	return (
		<section className={styles.results}>
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</section>
	);
};

export default ResultsList;
