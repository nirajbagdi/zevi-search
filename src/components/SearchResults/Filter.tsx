import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';

import styles from 'styles/components/SearchResults.module.scss';

type Props = {
	title: string;
	items: React.ReactNode[] | string[];
};

const Filter: React.FC<Props> = ({ title, items }) => (
	<div className={styles.filter}>
		<header>
			<button>
				<p className={styles.title}>{title}</p>
				<ArrowDown />
			</button>
		</header>

		<ul className={styles.filterNames}>
			{items.map((item, idx) => (
				<li key={idx}>
					<input type="checkbox" id={idx + Date.now() + ''} />
					<label htmlFor={idx + Date.now() + ''} className={styles.label}>
						{item}
					</label>
				</li>
			))}
		</ul>
	</div>
);

export default Filter;
