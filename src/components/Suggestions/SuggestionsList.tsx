import { Variants, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { fadeInUpVariants } from 'utils';
import { Product } from 'models';

import styles from 'styles/components/Suggestions.module.scss';

type Props = {
	items: Product[];
	isOpen: boolean;
};

const variants: Variants = {
	...fadeInUpVariants,
	hover: {
		x: 10,
		transition: {
			duration: 0.8,
			ease: 'backOut',
		},
	},
};

const SuggestionsList: React.FC<Props> = ({ items, isOpen }) => {
	const itemsJSX = items.map(product => (
		<Link key={product.id} to="/products">
			<motion.li
				variants={variants}
				initial="hidden"
				animate={isOpen ? 'visible' : 'hidden'}
				transition={{ duration: 0.6 }}
				whileHover="hover"
			>
				{product.name}
			</motion.li>
		</Link>
	));

	return (
		<div className={styles.suggestions}>
			<p className={styles.title}>Popular Suggestions</p>
			<div className={styles.items}>{itemsJSX}</div>
		</div>
	);
};

export default SuggestionsList;
