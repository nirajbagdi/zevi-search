import { Variants, motion } from 'framer-motion';

import Container from 'components/Container';
import TrendsList from './TrendsList';
import SuggestionsList from './SuggestionsList';

import products from 'data/products.json';
import styles from 'styles/components/Suggestions.module.scss';

type Props = {
	isOpen: boolean;
};

const variants: Variants = {
	hidden: { opacity: 0, y: -20, pointerEvents: 'none' },
	visible: { opacity: 1, y: 0, pointerEvents: 'auto' },
};

const Suggestions: React.FC<Props> = ({ isOpen }) => (
	<Container>
		<motion.div
			className={styles.card}
			variants={variants}
			initial="hidden"
			animate={isOpen ? 'visible' : 'hidden'}
			transition={{ duration: 0.5 }}
			exit="hidden"
		>
			<TrendsList items={products.trends} isOpen={isOpen} />
			<SuggestionsList items={products.suggestions} isOpen={isOpen} />
		</motion.div>
	</Container>
);

export default Suggestions;
