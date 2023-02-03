const Search = ({ searchText, handleSearchText }) => {
  return (
    <div className="search">
      <h1>👴🏿Emoji Search👴🏿</h1>
      <input
        type="text"
        name="searchbar"
        placeholder="Entrez votre texte ici"
        onChange={handleSearchText}
        value={searchText}
      />
    </div>
  );
};

export default Search;
