import { ReactComponent as StarSVG } from 'assets/star.svg';
import styles from 'styles/components/ProductResults.module.scss';

type Props = {
	rating: number;
	totalRatings?: number;
};

const Rating: React.FC<Props> = ({ rating, totalRatings }) => {
	const stars = new Array(5).fill(null);

	const starsJSX = stars.map((_, idx) => {
		const currentRating = idx + 1;

		return <StarSVG key={idx} className={currentRating <= rating ? styles.filled : ''} />;
	});

	return (
		<div className={styles.rating} data-value={rating}>
			{starsJSX}
			{totalRatings && <span>({totalRatings})</span>}
		</div>
	);
};

export default Rating;
