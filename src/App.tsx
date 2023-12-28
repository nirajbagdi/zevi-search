import { useState } from 'react';

import SearchBar from 'components/SearchBar';
import SuggestionsCard from 'components/SuggestionsCard';
import SearchResults from 'components/SearchResults';

const App = () => {
	const [showSuggestions, setShowSuggestions] = useState(false);

	const toggleShowSuggestions = () => setShowSuggestions(show => !show);

	return (
		<div>
			{/* <SearchBar onFocus={toggleShowSuggestions} />
			<SuggestionsCard show={showSuggestions} /> */}
			<SearchResults />
		</div>
	);
};

export default App;
