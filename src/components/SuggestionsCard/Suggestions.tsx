import styles from 'styles/components/SuggestionsCard.module.scss';

type Props = {
	items: string[];
};

const Suggestions: React.FC<Props> = ({ items }) => {
	const itemsJSX = items.map((suggestion, idx) => <li key={idx}>{suggestion}</li>);

	return (
		<div className={styles.suggestions}>
			<p className={styles.title}>Popular Suggestions</p>
			<div className={styles.items}>{itemsJSX}</div>
		</div>
	);
};

export default Suggestions;
