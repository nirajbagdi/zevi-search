import { Variants, motion } from 'framer-motion';

import { fadeInUpVariants } from 'constants/index';

import styles from 'styles/components/SuggestionsCard.module.scss';

type Props = {
	items: {
		id: string;
		name: string;
		image: string;
	}[];
	show: boolean;
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

const Trends: React.FC<Props> = ({ items, show }) => {
	const itemsJSX = items.map(trend => (
		<motion.article
			key={trend.id}
			variants={variants}
			initial="hidden"
			animate={show ? 'visible' : 'hidden'}
			whileHover="hover"
			whileTap="tap"
			transition={{ duration: 0.6 }}
		>
			<img src={require(`assets/${trend.image}`)} alt={trend.name} />
			<p>{trend.name}</p>
		</motion.article>
	));

	return (
		<motion.div className={styles.trends}>
			<p className={styles.title}>Latest Trends</p>
			<div className={styles.items}>{itemsJSX}</div>
		</motion.div>
	);
};

export default Trends;
