import Container from 'components/Container';

import productsData from 'data/products.json';

import styles from 'styles/components/popular_suggestions.module.scss';

const PopularSuggestions = () => {
	return (
		<Container>
			<div className={styles.grid}>
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
						{productsData.suggestions.map((suggestion, idx) => (
							<li key={idx}>{suggestion}</li>
						))}
					</ul>
				</div>
			</div>
		</Container>
	);
};

export default PopularSuggestions;
