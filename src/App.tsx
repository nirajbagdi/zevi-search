import { useState } from 'react';

import SearchBar from 'components/SearchBar';
import SuggestionsCard from 'components/SuggestionsCard';

const App = () => {
	const [showSuggestions, setShowSuggestions] = useState(false);

	return (
		<div className="app">
			<SearchBar onSearch={() => setShowSuggestions(prev => !prev)} />
			<SuggestionsCard show={showSuggestions} />
		</div>
	);
};

export default App;
