import { useState } from 'react';

import SearchBar from 'components/SearchBar';
import SuggestionsCard from 'components/SuggestionsCard';

const App = () => {
	const [showSuggestions, setShowSuggestions] = useState(false);

	const toggleShowSuggestions = () => setShowSuggestions(show => !show);

	return (
		<div className="app">
			<SearchBar onFocus={toggleShowSuggestions} />
			<SuggestionsCard show={showSuggestions} />
		</div>
	);
};

export default App;
