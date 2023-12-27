import { RiSearchLine } from 'react-icons/ri';
import { ReactComponent as SearchSVG } from 'assets/search.svg';

import styles from 'styles/components/search_input.module.scss';

const SearchInput = () => (
	<form className={styles.form}>
		<input type="text" placeholder="Search" />
		{/* <RiSearchLine size={30} fill="#aaa"  */}
		<SearchSVG />
	</form>
);

export default SearchInput;
