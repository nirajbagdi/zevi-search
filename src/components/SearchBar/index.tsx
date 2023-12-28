import { ReactComponent as SearchSVG } from 'assets/search.svg';
import Container from 'components/Container';

import styles from 'styles/components/SearchBar.module.scss';

type Props = {
	onFocus?: () => void;
	className?: string;
};

const SearchBar: React.FC<Props> = ({ onFocus, className }) => (
	<Container size="sm">
		<form className={`${styles.form} ${className || ''}`} onClick={onFocus}>
			<input type="text" placeholder="Search" />
			<SearchSVG />
		</form>
	</Container>
);

export default SearchBar;
