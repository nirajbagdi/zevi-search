import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from 'pages/Home';
import Products from 'pages/Products';

const App = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route index element={<Home />} />
				<Route path="/products" element={<Products />} />
			</Routes>
		</AnimatePresence>
	);
};

export default App;
