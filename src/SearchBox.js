const Search = (props) => {
  return (
    <div className="Search-field">
      <input
        type
        placeholder="Search for movie"
        value={props.value}
        onChange={(e) => props.setSearchvalue(e.target.value)}
      />
    </div>
  );
};

export default Search;
