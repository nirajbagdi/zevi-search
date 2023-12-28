import { Variants, motion } from 'framer-motion';

import { fadeInUpVariants } from 'constants/index';

import styles from 'styles/components/SuggestionsCard.module.scss';

type Props = {
	items: string[];
	show: boolean;
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

const Suggestions: React.FC<Props> = ({ items, show }) => {
	const itemsJSX = items.map((suggestion, idx) => (
		<motion.li
			key={idx}
			variants={variants}
			initial="hidden"
			animate={show ? 'visible' : 'hidden'}
			whileHover="hover"
			transition={{ duration: 0.6 }}
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
