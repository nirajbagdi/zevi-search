import { ReactComponent as SearchSVG } from 'assets/search.svg';
import Container from 'components/Container';

import styles from 'styles/components/SearchBar.module.scss';

type Props = {
	onSearch: () => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => (
	<Container size="sm">
		<form className={styles.form} onClick={onSearch}>
			<input type="text" placeholder="Search" />
			<SearchSVG />
		</form>
	</Container>
);

export default SearchBar;
