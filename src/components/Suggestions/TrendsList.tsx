import { Variants, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { fadeInUpVariants } from 'constants/index';
import styles from 'styles/components/Suggestions.module.scss';

type Props = {
	items: {
		id: string;
		name: string;
		image: string;
	}[];
	isOpen: boolean;
};

const variants: Variants = {
	...fadeInUpVariants,
	hover: {
		scale: 1.15,
		transition: {
			duration: 0.8,
			ease: 'backOut',
		},
	},
	tap: { scale: 0.98 },
};

const TrendsList: React.FC<Props> = ({ items, isOpen }) => {
	const itemsJSX = items.map(trend => (
		<Link key={trend.id} to="/products">
			<motion.article
				variants={variants}
				initial="hidden"
				animate={isOpen ? 'visible' : 'hidden'}
				transition={{ duration: 0.6 }}
				whileHover="hover"
				whileTap="tap"
			>
				<img src={require(`assets/${trend.image}`)} alt={trend.name} />
				<p>{trend.name}</p>
			</motion.article>
		</Link>
	));

	return (
		<div className={styles.trends}>
			<p className={styles.title}>Latest Trends</p>
			<div className={styles.items}>{itemsJSX}</div>
		</div>
	);
};

export default TrendsList;
