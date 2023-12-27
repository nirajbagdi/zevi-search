import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

import SearchBar from 'components/SearchBar';
import SuggestionsCard from 'components/SuggestionsCard';

const App = () => {
	const [showSuggestions, setShowSuggestions] = useState(false);

	return (
		<motion.div className="app">
			<SearchBar onSearch={() => setShowSuggestions(prev => !prev)} />
			<SuggestionsCard show={showSuggestions} />
		</motion.div>
	);
};

export default App;
