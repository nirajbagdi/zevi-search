import { ReactComponent as SearchSVG } from 'assets/search.svg';

import styles from 'styles/components/search_input.module.scss';

const SearchInput = () => (
	<div className="container">
		<form className={styles.form}>
			<input type="text" placeholder="Search" />
			<SearchSVG />
		</form>
	</div>
);

export default SearchInput;
