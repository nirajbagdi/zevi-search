import { motion } from 'framer-motion';

import styles from 'styles/components/SuggestionsCard.module.scss';

type Props = {
	items: {
		id: string;
		name: string;
		image: string;
	}[];
	show: boolean;
};

const Trends: React.FC<Props> = ({ items, show }) => {
	const itemsJSX = items.map(trend => (
		<motion.article
			key={trend.id}
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: show ? 1 : 0, y: show ? 0 : 40 }}
			transition={{ duration: 0.6 }}
			whileHover={{
				scale: 1.15,
				transition: {
					duration: 0.8,
					ease: 'backOut',
				},
			}}
			whileTap={{ scale: 0.98 }}
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
