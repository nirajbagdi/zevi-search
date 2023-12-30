import ProductItem from './ProductItem';
import { Product } from 'models';
import styles from 'styles/components/ProductResults.module.scss';

type Props = {
	items: Product[];
};

const ResultsList: React.FC<Props> = ({ items }) => (
	<section className={styles.results}>
		{items.map(product => (
			<ProductItem key={product.id} product={product} />
		))}
	</section>
);

export default ResultsList;
