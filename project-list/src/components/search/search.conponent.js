import "./search.css";

const Search = ({placeholder, handleChange}) => {
    return (
        <input  
        className="search-box-style"
        placeholder={placeholder}
        type="search"
        onChange={handleChange}
        />
    );
};

export default Search;