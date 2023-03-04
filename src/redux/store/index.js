import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import charactersReducer from '../slices/index';

export const store = configureStore({
	reducer: {
		characters: charactersReducer,
	},
});

setupListeners(store.dispatch);
