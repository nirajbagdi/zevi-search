import { Variants, motion } from 'framer-motion';

import { useAppCtx } from 'store/context';

import Container from 'components/Container';
import TrendsList from './TrendsList';
import SuggestionsList from './SuggestionsList';

import styles from 'styles/components/Suggestions.module.scss';

type Props = {
	isOpen: boolean;
};

const variants: Variants = {
	hidden: { opacity: 0, y: -20, pointerEvents: 'none' },
	visible: { opacity: 1, y: 0, pointerEvents: 'auto' },
};

const Suggestions: React.FC<Props> = ({ isOpen }) => {
	const { products } = useAppCtx();

	const getTrendItems = () => products.slice(0, 5);

	const getSuggestionItems = () => {
		const items = products.slice(5, 10);
		return items.length ? items : getTrendItems();
	};

	return (
		<Container>
			<motion.div
				className={styles.card}
				variants={variants}
				initial="hidden"
				animate={isOpen ? 'visible' : 'hidden'}
				transition={{ duration: 0.5 }}
				exit="hidden"
			>
				<TrendsList items={getTrendItems()} isOpen={isOpen} />
				<SuggestionsList items={getSuggestionItems()} isOpen={isOpen} />
			</motion.div>
		</Container>
	);
};

export default Suggestions;
