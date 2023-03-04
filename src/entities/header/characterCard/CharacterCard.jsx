import classNames from 'classnames/bind';

import styles from './CharacterCard.module.scss';
import { CardTag } from '@/shared/ui/cardTag/CardTag';

export const CharacterCard = ({
	name,
	height,
	mass,
	date,
	gender,
	onClick,
}) => {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('card')} onClick={onClick}>
			<h4 className={cx('card__title')}>{name}</h4>
			<div className={cx('card__sizes')}>
				{height !== 'unknown' && (
					<div className={cx('card__round')}>
						<span className={cx('card__label')}>{height}</span>
						<span className={cx('card__text')}>height</span>
					</div>
				)}
				{mass !== 'unknown' && (
					<div className={cx('card__round')}>
						<span className={cx('card__label')}>{mass}</span>
						<span className={cx('card__text')}>mass</span>
					</div>
				)}
			</div>
			<div className={cx('card__tags')}>
				{date !== 'unknown' && date ? (
					<CardTag dateOfBirth={date !== 'unknown' && date} />
				) : null}
				{gender !== 'n/a' && gender !== 'none' ? (
					<CardTag gender={gender} />
				) : null}
			</div>
		</div>
	);
};
