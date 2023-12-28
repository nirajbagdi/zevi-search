import Rating from './Rating';
import Filter from './Filter';

import styles from 'styles/components/SearchResults.module.scss';

const Filters = () => {
	return (
		<section className={styles.filters}>
			<Filter isOpen title="Brand" items={['Mango', 'H&M']} />
			<Filter title="Price Range" items={['Under 500', '1000 to 3000']} />
			<Filter
				title="Ratings"
				items={[
					<Rating rating={5} />,
					<Rating rating={4} />,
					<Rating rating={3} />,
					<Rating rating={2} />,
					<Rating rating={1} />,
				]}
			/>
		</section>
	);
};

export default Filters;
