import Rating from './Rating';
import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';

import styles from 'styles/components/ProductResults.module.scss';

const Filters = () => {
	return (
		<section className={styles.filters}>
			<div className={styles.filter}>
				<header>
					<button>
						<p className={styles.title}>Brand</p>
						<ArrowDown />
					</button>
				</header>

				<ul className={styles.filterNames}>
					<li>
						<input type="checkbox" id="mango" />
						<label htmlFor="mango" className={styles.label}>
							Mango
						</label>
					</li>

					<li>
						<input type="checkbox" id="HM" />
						<label htmlFor="HM" className={styles.label}>
							H&M
						</label>
					</li>
				</ul>
			</div>

			<div className={styles.filter}>
				<header>
					<button>
						<p className={styles.title}>Price Range</p>
						<ArrowDown />
					</button>
				</header>

				<ul className={styles.filterNames}>
					<li>
						<input type="checkbox" id="price1" />
						<label htmlFor="price1" className={styles.label}>
							Under 500
						</label>
					</li>

					<li>
						<input type="checkbox" id="price2" />
						<label htmlFor="price2" className={styles.label}>
							1000 to 3000
						</label>
					</li>
				</ul>
			</div>

			<div className={styles.filter}>
				<header>
					<button>
						<p className={styles.title}>Ratings</p>
						<ArrowDown />
					</button>
				</header>

				<ul className={styles.filterNames}>
					<li>
						<input type="checkbox" id="5" />
						<label htmlFor="5" className={styles.label}>
							<Rating rating={5} />
						</label>
					</li>
					<li>
						<input type="checkbox" id="4" />
						<label htmlFor="4" className={styles.label}>
							<Rating rating={4} />
						</label>
					</li>
					<li>
						<input type="checkbox" id="3" />
						<label htmlFor="3" className={styles.label}>
							<Rating rating={3} />
						</label>
					</li>
					<li>
						<input type="checkbox" id="2" />
						<label htmlFor="2" className={styles.label}>
							<Rating rating={2} />
						</label>
					</li>
					<li>
						<input type="checkbox" id="1" />
						<label htmlFor="1" className={styles.label}>
							<Rating rating={1} />
						</label>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Filters;
