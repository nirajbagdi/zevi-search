import Container from 'components/Container';
import Trends from './Trends';
import Suggestions from './Suggestions';

import products from 'data/products.json';

import styles from 'styles/components/SuggestionsCard.module.scss';

const SuggestionsCard = () => (
	<Container>
		<div className={styles.card}>
			<Trends items={products.trends} />
			<Suggestions items={products.suggestions} />
		</div>
	</Container>
);

export default SuggestionsCard;
