import { ReactComponent as StarSVG } from 'assets/star.svg';
import styles from 'styles/components/ProductResults.module.scss';

type Props = {
	value: number;
	count?: number;
};

const Rating: React.FC<Props> = ({ value, count }) => {
	const stars = new Array(5).fill(null);

	const starsJSX = stars.map((_, idx) => {
		const currentRating = idx + 1;
		return <StarSVG key={idx} className={currentRating <= value ? styles.filled : ''} />;
	});

	return (
		<div className={styles.rating} data-value={value}>
			{starsJSX}
			{count && <span>({count})</span>}
		</div>
	);
};

export default Rating;
