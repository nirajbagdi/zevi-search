import Rating from './Rating';

import { ReactComponent as HeartSVG } from 'assets/heart.svg';

import styles from 'styles/components/SearchResults.module.scss';

type Props = {
	product: {
		image: string;
		name: string;
		originalPrice: number;
		discountedPrice: number;
		rating: number;
		ratingCount: number;
	};
};

const Product: React.FC<Props> = ({ product }) => (
	<article className={styles.product}>
		<section className={styles.imgContainer}>
			<figure>
				<img src={require(`assets/${product.image}`)} alt={product.name} />
				<figcaption>{product.name}</figcaption>
			</figure>

			<div className={styles.actions}>
				<button className={styles.heartBtn} aria-label="Add to favorites">
					<HeartSVG />
				</button>

				<button className={styles.viewBtn}>View Product</button>
			</div>
		</section>

		<div className={styles.priceContainer}>
			<span>Rs.{product.originalPrice}</span>
			<span>Rs.{product.discountedPrice}</span>
		</div>

		<Rating rating={product.rating} totalRatings={product.ratingCount} />
	</article>
);

export default Product;
