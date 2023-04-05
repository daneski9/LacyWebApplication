import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={props.query}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;