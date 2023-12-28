import { ReactComponent as StarSVG } from 'assets/star.svg';

import styles from 'styles/components/SearchResults.module.scss';

type Props = {
	rating: number;
	totalRatings?: number;
};

const Rating: React.FC<Props> = ({ rating, totalRatings }) => (
	<div className={styles.rating}>
		{[...Array(5)].map((_, idx) => (
			<StarSVG key={idx} className={idx + 1 <= rating ? styles.filled : ''} />
		))}

		{totalRatings && <span>({totalRatings})</span>}
	</div>
);

export default Rating;
