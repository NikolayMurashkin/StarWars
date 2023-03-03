import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

export const Header = () => {
	const cx = classNames.bind(styles);
	const router = useRouter();

	return (
		<header className={cx('header')}>
			<Image
				src={'/logo.png'}
				alt={'star wars logo'}
				className={cx('header__logo')}
				width={150}
				height={79}
			/>
			<nav className={cx('header__nav')}>
				<ul className={cx('header__links')}>
					<Link
						href={'/'}
						className={cx('header__link', {
							header__link_active: router.pathname === '/',
						})}
					>
						Home
					</Link>
					<Link
						href={'/characters'}
						className={cx('header__link', {
							header__link_active:
								router.pathname === '/characters',
						})}
					>
						Characters
					</Link>
				</ul>
			</nav>
		</header>
	);
};
