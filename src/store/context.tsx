import { createContext, useContext } from 'react';
import { ProductType } from 'models';

type ContextState = {
	products: ProductType[];
};

const initialState: ContextState = {
	products: [],
};

export const AppContext = createContext(initialState);
export const useAppCtx = () => useContext(AppContext);
