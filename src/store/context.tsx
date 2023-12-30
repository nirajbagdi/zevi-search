import { createContext, useContext } from 'react';
import { Product } from 'models';

type ContextState = {
	products: Product[];
};

const initialState: ContextState = {
	products: [],
};

export const AppContext = createContext(initialState);
export const useAppCtx = () => useContext(AppContext);
