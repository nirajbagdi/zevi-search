import { motion } from 'framer-motion';

import Container from 'components/Container';
import Trends from './Trends';
import Suggestions from './Suggestions';

import products from 'data/products.json';

import styles from 'styles/components/SuggestionsCard.module.scss';

type Props = {
	show: boolean;
};

const SuggestionsCard: React.FC<Props> = ({ show }) => (
	<Container>
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: show ? 1 : 0, y: show ? 0 : -20 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
			className={styles.card}
		>
			<Trends items={products.trends} show={show} />
			<Suggestions items={products.suggestions} show={show} />
		</motion.div>
	</Container>
);

export default SuggestionsCard;
