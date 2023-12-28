import { useState } from 'react';

import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';

import styles from 'styles/components/SearchResults.module.scss';

type Props = {
	title: string;
	items: React.ReactNode[] | string[];
	isOpen?: boolean;
};

const Filter: React.FC<Props> = ({ title, items, isOpen = false }) => {
	const [isExpand, setIsExpand] = useState(isOpen);

	const toggleIsExpand = () => setIsExpand(expand => !expand);

	const itemsListJSX = items.map((item, idx) => (
		<li key={idx}>
			<input type="checkbox" id={idx + Date.now() + ''} />
			<label htmlFor={idx + Date.now() + ''} className={styles.label}>
				{item}
			</label>
		</li>
	));

	return (
		<div className={styles.filter}>
			<header>
				<button onClick={toggleIsExpand}>
					<p className={styles.title}>{title}</p>
					<ArrowDown />
				</button>
			</header>

			{isExpand && <ul className={styles.filterNames}>{itemsListJSX}</ul>}
		</div>
	);
};

export default Filter;
