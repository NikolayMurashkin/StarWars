import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/NotFound.module.scss';

const NotFound = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('not-found')}>
			<Image className={cx('not-found__img')} alt='not found' src={'/404.png'} width={1200} height={670} />
			<Link className={cx('not-found__btn')} href={'/'}>Return</Link>
		</div>
	);
};
export default NotFound;
