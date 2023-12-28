import { useState } from 'react';

import SearchBar from 'components/SearchBar';
import Suggestions from 'components/Suggestions';

import { framerPageTransition } from 'utils';

const Home = () => {
	const [showSuggestions, setShowSuggestions] = useState(false);
	const toggleShowSuggestions = () => setShowSuggestions(show => !show);

	return (
		<div className="app">
			<SearchBar onFocus={toggleShowSuggestions} />
			<Suggestions isOpen={showSuggestions} />
		</div>
	);
};

export default framerPageTransition(Home);
