import classNames from 'classnames/bind';

import styles from './CardTag.module.scss';

export const CardTag = ({ dateOfBirth, gender }) => {
	const cx = classNames.bind(styles);
	return (
		<span
			className={cx('tag', {
				tag__date: dateOfBirth,
				tag__male: gender,
				tag__male_male: gender === 'male',
				tag__male_female: gender === 'female',
				tag__male_herma: gender === 'hermaphrodite',
			})}
		>
			{gender !== 'n/a' && gender !== 'none' ? gender : null}
			{dateOfBirth}
		</span>
	);
};
