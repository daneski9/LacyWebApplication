import React from 'react';

function SearchBar(properties) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={properties.query}
        onChange={(event) => properties.onChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;