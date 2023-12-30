import { useState } from 'react';
import { motion } from 'framer-motion';

import { Product } from 'models';

import Rating from '../Rating';
import { ReactComponent as HeartSVG } from 'assets/heart.svg';

import styles from 'styles/components/ProductResults.module.scss';

type Props = {
	product: Product;
};

const ProductItem: React.FC<Props> = ({ product }) => {
	const [hasLiked, setHasLiked] = useState(false);

	const toggleHasLiked = () => setHasLiked(liked => !liked);

	const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
		const articleElement = event.currentTarget.closest('article');
		articleElement!.style.display = 'none';
	};

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
			<span>Rs.{product.price.original}</span>
			<span>Rs.{product.price.discounted}</span>
		</div>
	);

	return (
		<article className={styles.product}>
			<section className={styles.imgContainer}>
				<figure>
					<img src={product.image} alt={product.name} onError={handleImageError} />
					<figcaption>{product.name}</figcaption>
				</figure>

				{actionsJSX}
			</section>

			{priceJSX}

			<Rating value={product.rating.value} count={product.rating.count} />
		</article>
	);
};

export default ProductItem;
