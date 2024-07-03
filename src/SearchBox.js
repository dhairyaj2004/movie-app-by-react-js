const Search = (props) => {
  return (
    <div className="Search-field">
      <input id="search-bar"
        type
        placeholder="Search for Movie..."
        value={props.value}
        onChange={(e) => props.setSearchvalue(e.target.value)}
      />
       
    </div>
  );
};

export default Search;
