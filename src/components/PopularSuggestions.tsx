import productsData from 'data/products.json';

import styles from 'styles/components/popular_suggestions.module.scss';

const PopularSuggestions = () => {
	return (
		<div className={styles.container}>
			<div className={styles.trends}>
				<p className={styles.title}>Latest Trends</p>

				<div className={styles.items}>
					{productsData.trends.map(trend => (
						<article key={trend.id}>
							<img src={require(`assets/${trend.img}`)} alt={trend.name} />
							<p>{trend.name}</p>
						</article>
					))}
				</div>
			</div>

			<div className={styles.suggestions}>
				<p className={styles.title}>Popular Suggestions</p>

				<ul className={styles.items}>
					{productsData.suggestions.map(suggestion => (
						<li>{suggestion}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PopularSuggestions;
