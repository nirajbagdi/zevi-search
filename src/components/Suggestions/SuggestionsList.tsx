import { Variants, motion } from 'framer-motion';

import { fadeInUpVariants } from 'constants/index';
import styles from 'styles/components/Suggestions.module.scss';

type Props = {
	items: string[];
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
	const itemsJSX = items.map((suggestion, idx) => (
		<motion.li
			key={idx}
			variants={variants}
			initial="hidden"
			animate={isOpen ? 'visible' : 'hidden'}
			transition={{ duration: 0.6 }}
			whileHover="hover"
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

export default SuggestionsList;