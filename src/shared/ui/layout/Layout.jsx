import classNames from 'classnames/bind';

import styles from './Layout.module.scss';
import { Header } from '@/entities/header/Header';

export const Layout = ({ children }) => {
	const cx = classNames.bind(styles);

	return (
		<main className={cx('layout')}>
			<Header />
			{children}
		</main>
	);
};
