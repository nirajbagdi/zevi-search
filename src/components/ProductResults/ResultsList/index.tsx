import ProductItem from './ProductItem';
import { ProductType } from 'models';
import styles from 'styles/components/ProductResults.module.scss';

type Props = {
	items: ProductType[];
};

const ResultsList: React.FC<Props> = ({ items }) => (
	<section className={styles.results}>
		{items.map(product => (
			<ProductItem key={product.id} product={product} />
		))}
	</section>
);

export default ResultsList;
