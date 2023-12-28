import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';

import styles from 'styles/components/ProductResults.module.scss';

type Props = {
	title: string;
	name: string;
	items: {
		value: string;
		content: string | React.ReactNode;
	}[];
	onFilterChange: (event: React.ChangeEvent) => void;
};

const FilterItem: React.FC<Props> = ({ title, name, items, onFilterChange }) => {
	const headerJSX = (
		<header>
			<button>
				<p className={styles.title}>{title}</p>
				<ArrowDown />
			</button>
		</header>
	);

	const itemsJSX = items.map(item => (
		<li key={item.value} data-value={item.value}>
			<input type="checkbox" id={item.value} name={name} onChange={onFilterChange} />

			<label htmlFor={item.value} className={styles.label}>
				{item.content}
			</label>
		</li>
	));

	return (
		<div className={styles.filter}>
			{headerJSX}
			<ul className={styles.filterNames}>{itemsJSX}</ul>
		</div>
	);
};

export default FilterItem;
