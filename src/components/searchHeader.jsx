import React from "react";

const SearchHeader = (props) => {
  const inputRef = React.createRef();
  const { onSearch, onMain } = props;
  const handleSearch = (event) => {
    event.preventDefault();
    const search = inputRef.current.value;
    search && onSearch(search);
    inputRef.current.value = "";
  };
  return (
    <div className="search-wrap">
      <span className="title" onClick={onMain}>
        YouTube
      </span>
      <form className="search-form" onSubmit={handleSearch}>
        <input type="text" className="search-input" ref={inputRef} />
        <button className="search-button">
          <i class="fa fa-search" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};

export default SearchHeader;
