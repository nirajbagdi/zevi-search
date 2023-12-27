import { ReactComponent as SearchSVG } from 'assets/search.svg';
import Container from 'components/Container';

import styles from 'styles/components/search_input.module.scss';

const SearchInput = () => (
	<Container size="sm">
		<form className={styles.form}>
			<input type="text" placeholder="Search" />
			<SearchSVG />
		</form>
	</Container>
);

export default SearchInput;
