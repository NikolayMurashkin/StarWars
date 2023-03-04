export const CloseIcon = ({ onClick }) => (
	<svg
		width={32}
		height={32}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{ cursor: 'pointer' }}
		onClick={onClick}
	>
		<rect
			width={35.468}
			height={9.213}
			rx={3}
			transform='scale(.99748 1.00251) rotate(45 2.863 8.03)'
			fill='#212121'
		/>
		<rect
			width={35.468}
			height={9.213}
			rx={3}
			transform='scale(-.99748 -1.00251) rotate(-45 -23.662 34.881)'
			fill='#212121'
		/>
	</svg>
);
