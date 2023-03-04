import { createSlice } from '@reduxjs/toolkit';

const charactersSlice = createSlice({
	name: 'characters',
	initialState: [],
	reducers: {
		firstCharacters(state, action) {
			console.log([...action.payload]);
			state.push([...state, ...action.payload]);
		},
		addNewCharacters(state, action) {
			// state = [...state, ...action.payload];
			state.push(action.payload);
		},
	},
});

export const { firstCharacters, addNewCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
