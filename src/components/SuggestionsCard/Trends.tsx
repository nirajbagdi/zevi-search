import styles from 'styles/components/SuggestionsCard.module.scss';

type Props = {
	items: {
		id: string;
		name: string;
		image: string;
	}[];
};

const Trends: React.FC<Props> = ({ items }) => {
	const itemsJSX = items.map(trend => (
		<article key={trend.id}>
			<img src={require(`assets/${trend.image}`)} alt={trend.name} />
			<p>{trend.name}</p>
		</article>
	));

	return (
		<div className={styles.trends}>
			<p className={styles.title}>Latest Trends</p>
			<div className={styles.items}>{itemsJSX}</div>
		</div>
	);
};

export default Trends;
