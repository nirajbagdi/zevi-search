import { ReactComponent as SearchSVG } from 'assets/search.svg';
import Container from 'components/Container';

import styles from 'styles/components/SearchBar.module.scss';

type Props = {
	onFocus: () => void;
};

const SearchBar: React.FC<Props> = ({ onFocus }) => (
	<Container size="sm">
		<form className={styles.form} onClick={onFocus}>
			<input type="text" placeholder="Search" />
			<SearchSVG />
		</form>
	</Container>
);

export default SearchBar;
