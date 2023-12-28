import { Variants, motion } from 'framer-motion';

import Container from 'components/Container';
import Trends from './Trends';
import Suggestions from './Suggestions';

import products from 'data/products.json';

import styles from 'styles/components/SuggestionsCard.module.scss';

type Props = {
	show: boolean;
};

const variants: Variants = {
	hidden: { opacity: 0, y: -20, visibility: 'hidden' },
	visible: { opacity: 1, y: 0, visibility: 'visible' },
};

const SuggestionsCard: React.FC<Props> = ({ show }) => (
	<Container>
		<motion.div
			className={styles.card}
			variants={variants}
			initial="hidden"
			animate={show ? 'visible' : 'hidden'}
			exit="hidden"
			transition={{ duration: 0.5 }}
		>
			<Trends items={products.trends} show={show} />
			<Suggestions items={products.suggestions} show={show} />
		</motion.div>
	</Container>
);

export default SuggestionsCard;
