import { useState } from 'react';
import { motion } from 'framer-motion';

import Rating from '../Rating';
import { ReactComponent as HeartSVG } from 'assets/heart.svg';

import styles from 'styles/components/ProductResults.module.scss';

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

const ProductItem: React.FC<Props> = ({ product }) => {
	const [hasLiked, setHasLiked] = useState(false);

	const toggleHasLiked = () => setHasLiked(liked => !liked);

	const actionsJSX = (
		<div className={styles.actions}>
			<motion.button
				whileTap={{ scale: 3 }}
				transition={{ duration: 0.5 }}
				className={`${styles.heartBtn} ${hasLiked ? styles.filled : ''}`}
				aria-label="Add to favorites"
				onClick={toggleHasLiked}
			>
				<HeartSVG />
			</motion.button>

			<button className={styles.viewBtn}>View Product</button>
		</div>
	);

	const priceJSX = (
		<div className={styles.priceContainer}>
			<span>Rs.{product.originalPrice}</span>
			<span>Rs.{product.discountedPrice}</span>
		</div>
	);

	return (
		<article className={styles.product}>
			<section className={styles.imgContainer}>
				<figure>
					<img src={require(`assets/${product.image}`)} alt={product.name} />
					<figcaption>{product.name}</figcaption>
				</figure>

				{actionsJSX}
			</section>

			{priceJSX}

			<Rating rating={product.rating} totalRatings={product.ratingCount} />
		</article>
	);
};

export default ProductItem;
