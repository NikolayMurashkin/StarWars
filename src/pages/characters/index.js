import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from 'react-modal';

import styles from '@/styles/Characters.module.scss';
import { CharacterCard } from '@/entities/header/characterCard/CharacterCard';
import { Spinner } from '@/shared/ui/spinner/Spinner';
import { CloseIcon } from '@/shared/ui/icons/CloseIcon';
import { CharacterModal } from '@/entities/characterModal/CharacterModal';

const Characters = ({ data }) => {
	const [characters, setCharacters] = useState(data.results);
	const [pageNumber, setPageNumber] = useState(2);
	const [hasMore, setHasMmore] = useState(true);
	const [filter, setFilter] = useState('all');
	const [modalIsOpen, setIsOpen] = useState(false);
	const [singleCharInfo, setSingleCharInfo] = useState();
	const [title, setTitle] = useState();
	const [language, setLanguage] = useState('en');

	const getMoreCharacters = async () => {
		const res = await fetch(
			`https://swapi.dev/api/people?page=${pageNumber}`
		).then((response) => response.json());
		if (!res.next) {
			setHasMmore(false);
		}
		const newCharacters = await res.results;
		setCharacters((characters) => [...characters, ...newCharacters]);
		setPageNumber((pageNumber) => pageNumber + 1);
	};

	const filteredCharacters = characters.filter((char) => {
		if (filter === 'all') {
			return char;
		}

		return char.eye_color === filter;
	});

	const eyeColors = new Set(characters.map((char) => char.eye_color));
	const transformTextToWookiee = async () => {
		// const res = await fetch(
		// 	`https://swapi.dev/api/people?format=wookiee`
		// ).then((response) => response.json());
		// const title = await res.whrascwo;
		setTitle('Lhuorwo Sorroohraanorworc');
		setLanguage((state) => {
			if (state === 'en') {
				return 'wookiee';
			} else {
				return 'en';
			}
		});
	};

	function openModal(character) {
		setSingleCharInfo(character);
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	if (!characters) {
		return <Spinner />;
	}
	const cx = classNames.bind(styles);

	return (
		<div className={cx('characters')}>
			<span className={cx('characters__language')}>
				language: {language}
			</span>
			{language === 'en' ? (
				<h1 className={cx('characters__title')}>
					{data.count}{' '}
					<strong className={cx('characters__title_strong')}>
						Peoples
					</strong>{' '}
					for you to choose your favorite
				</h1>
			) : (
				<h1 className={cx('characters__title')}>
					{' '}
					{data.count} {title}
				</h1>
			)}
			<div className={cx('characters__filters')}>
				<span>color eye</span>
				<select
					defaultValue={'all'}
					onChange={(e) => setFilter(e.target.value)}
				>
					<option value='all'>all</option>
					{[...eyeColors].map((color) => {
						return (
							<option value={color} key={color}>
								{color}
							</option>
						);
					})}
				</select>
			</div>
			<div className={cx('characters__content')}>
				<InfiniteScroll
					dataLength={characters.length}
					next={getMoreCharacters}
					refreshFunction={getMoreCharacters}
					hasMore={hasMore}
					loader={<Spinner />}
					endMessage={<h4>Nothing more to show</h4>}
					className={cx('content')}
				>
					{filteredCharacters.map((character) => {
						return (
							<CharacterCard
								onClick={() => openModal(character)}
								key={character.name}
								name={character.name}
								date={character.birth_year}
								gender={character.gender}
								height={character.height}
								mass={character.mass}
							/>
						);
					})}
				</InfiniteScroll>
				{filteredCharacters.length <= 9 && (
					<p className={cx('characters__info')}>
						You should set filter to `all` and scroll down if you
						want to get more filtered characters
					</p>
				)}
			</div>
			<button
				className={cx('characters__button')}
				onClick={transformTextToWookiee}
			>
				<Image
					src={'/change_lang.png'}
					alt={'change language'}
					className={cx('characters__button_img')}
					width={100}
					height={100}
				/>
			</button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				className={cx('characters__modal')}
				contentLabel='Example Modal'
				ariaHideApp={false}
			>
				<CloseIcon onClick={closeModal} />
				<CharacterModal
					date={singleCharInfo ? singleCharInfo.birth_year : null}
					eyeColor={singleCharInfo ? singleCharInfo.eye_color : null}
					gender={singleCharInfo ? singleCharInfo.gender : null}
					hairColor={
						singleCharInfo ? singleCharInfo.hair_color : null
					}
					height={singleCharInfo ? singleCharInfo.height : null}
					mass={singleCharInfo ? singleCharInfo.mass : null}
					name={singleCharInfo ? singleCharInfo.name : null}
					skinColor={
						singleCharInfo ? singleCharInfo.skin_color : null
					}
				/>
			</Modal>
		</div>
	);
};

export default Characters;

export async function getStaticProps() {
	const data = await fetch('https://swapi.dev/api/people')
		.then((response) => response.json())
		.then((data) => data);

	return {
		props: {
			data,
		},
		revalidate: 1,
	};
}
