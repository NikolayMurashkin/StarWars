import classNames from 'classnames/bind';
import Image from 'next/image';

import styles from './CharacterModal.module.scss';
import { CardTag } from '@/shared/ui/cardTag/CardTag';

export const CharacterModal = ({
	gender,
	date,
	name,
	hairColor,
	skinColor,
	eyeColor,
	height,
	mass,
}) => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('char-modal')}>
			<div className={cx('char-modal__gender')}>
				{gender === 'hermaphrodite' ? (
					<Image
						src={'/hermaphrodite.png'}
						alt={'hermaphrodite gender'}
						width={300}
						height={300}
					/>
				) : gender === 'male' ? (
					<Image
						src={'/male.png'}
						alt={'male gender'}
						width={300}
						height={300}
					/>
				) : gender === 'n/a' ? (
					<Image
						src={'/Robot.png'}
						alt={'male n/a'}
						width={300}
						height={300}
					/>
				) : (
					<Image
						src={'/female.png'}
						alt={'female gender'}
						width={300}
						height={300}
					/>
				)}
				<div className={cx('char-modal__gender_info')}>
					{date !== 'unknown' && date ? (
						<CardTag dateOfBirth={date !== 'unknown' && date} />
					) : null}
					{gender !== 'n/a' && gender !== 'none' ? (
						<CardTag gender={gender} />
					) : null}
				</div>
			</div>
			<div className={cx('char-modal__info')}>
				<h4 className={cx('char-modal__name')}>{name}</h4>
				<div className={cx('char-modal__colors-wrapper')}>
					<div className={cx('char-modal__colors')}>
						{hairColor && hairColor !== 'n/a' && (
							<span className={cx('char-modal__color')}>
								hair color: {hairColor}
							</span>
						)}
						{skinColor && skinColor !== 'n/a' && (
							<span className={cx('char-modal__color')}>
								skin color: {skinColor}
							</span>
						)}
						{eyeColor && eyeColor !== 'n/a' && (
							<span className={cx('char-modal__color')}>
								eye color: {eyeColor}
							</span>
						)}
					</div>
				</div>
				<div className={cx('char-modal__params')}>
					{height && (
						<div className={cx('char-modal__param')}>
							<span className={cx('char-modal__round')}>
								{height}
							</span>
							<span className={cx('char-modal__text')}>
								height
							</span>
						</div>
					)}
					{mass && (
						<div className={cx('char-modal__param')}>
							<span className={cx('char-modal__round')}>
								{mass}
							</span>
							<span className={cx('char-modal__text')}>mass</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
