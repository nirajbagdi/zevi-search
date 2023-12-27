import { motion } from 'framer-motion';

import styles from 'styles/components/SuggestionsCard.module.scss';

type Props = {
	items: string[];
	show: boolean;
};

const Suggestions: React.FC<Props> = ({ items, show }) => {
	const itemsJSX = items.map((suggestion, idx) => (
		<motion.li
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: show ? 1 : 0, y: show ? 0 : 40 }}
			transition={{ duration: 0.6 }}
			whileHover={{
				x: 10,
				transition: {
					duration: 0.8,
					ease: 'backOut',
				},
			}}
			key={idx}
		>
			{suggestion}
		</motion.li>
	));

	return (
		<div className={styles.suggestions}>
			<p className={styles.title}>Popular Suggestions</p>
			<div className={styles.items}>{itemsJSX}</div>
		</div>
	);
};

export default Suggestions;
