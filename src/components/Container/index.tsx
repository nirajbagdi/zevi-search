import styles from 'styles/components/Container.module.scss';

type Props = {
	children: React.ReactNode;
	size?: 'sm' | 'md';
};

const Container: React.FC<Props> = ({ children, size = 'md' }) => (
	<div className={`${styles.container} ${styles[size]}`}>{children}</div>
);

export default Container;
