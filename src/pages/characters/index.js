import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from '@/styles/Characters.module.scss';

const Characters = () => {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('characters')}>
			<span className={cx('characters__language')}>language: en</span>
			<h1 className={cx('characters__title')}>
				60 Peoples for you to choose your favorite
			</h1>
			<div className={cx('characters__filters')}>
				<span>color eye</span>
				<select defaultValue={'all'}>
					<option value='all'>all</option>
					<option value='brown'>brown</option>
					<option value='red'>red</option>
					<option value='blue'>blue</option>
					<option value='white'>white</option>
				</select>
			</div>
			<div className={cx('characters__content')}></div>
			<button className={cx('characters__button')}>
				<Image
					src={'/change_lang.png'}
					alt={'change language'}
					className={cx('characters__button_img')}
					width={100}
					height={100}
				/>
			</button>
		</div>
	);
};

export default Characters;
