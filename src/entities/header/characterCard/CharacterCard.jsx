import classNames from "classnames/bind"

import styles from './CharacterCard.module.scss'

export const CharacterCard = () => {
	const cx = classNames.bind(styles);

  return (
	<div className={cx('card')}>
		<h4 className={cx('card__title')}></h4>
		<div className={cx('card__sizes')}>
			
		</div>
	</div>
  )
}
