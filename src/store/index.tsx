import { useEffect, useState } from 'react';

import { AppContext } from './context';
import { fetchProducts } from 'api';
import { ProductType } from 'models';

type Props = { children: React.ReactNode };

const AppProvider: React.FC<Props> = ({ children }) => {
	const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		(async () => {
			const fetchedProducts = await fetchProducts();
			setProducts(fetchedProducts);
		})();
	}, []);

	const contextValue = { products: products.slice(0, 25) };
	return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
