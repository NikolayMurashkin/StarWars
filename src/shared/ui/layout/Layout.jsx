import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

import styles from './Layout.module.scss';
import { Header } from '@/entities/header/Header';

export const Layout = ({ children }) => {
	const cx = classNames.bind(styles);
	const router = useRouter();

	return (
		<main className={cx('layout')}>
			{router.pathname !== '/404' && <Header />}
			{children}
		</main>
	);
};
