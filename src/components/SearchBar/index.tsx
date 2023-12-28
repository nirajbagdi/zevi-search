import { useNavigate } from 'react-router-dom';

import { ReactComponent as SearchSVG } from 'assets/search.svg';
import Container from 'components/Container';

import styles from 'styles/components/SearchBar.module.scss';

type Props = {
	onFocus?: () => void;
	className?: string;
};

const SearchBar: React.FC<Props> = ({ onFocus, className }) => {
	const navigate = useNavigate();

	const handleFormSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		navigate('/products');
	};

	return (
		<Container size="sm">
			<form
				className={`${styles.form} ${className || ''}`}
				onClick={onFocus}
				onSubmit={handleFormSubmit}
			>
				<input type="text" placeholder="Search" />
				<SearchSVG />
			</form>
		</Container>
	);
};

export default SearchBar;
