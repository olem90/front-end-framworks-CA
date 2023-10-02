import { useState, useEffect, useRef } from "react";
import { SearchBarStyle } from "./SearchBar.styles";
import { Link } from "react-router-dom";

function SearchBar({ products }) {
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const searchRef = useRef(null);

    useEffect(() => {
      function handleClickOutsideSearch(event) {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setFilteredProducts([]);
        }
      }
      document.addEventListener('mousedown', handleClickOutsideSearch);

      return ()=> {
        document.removeEventListener('mousedown', handleClickOutsideSearch);
      };
    }, []);

    useEffect(() => {
        if (products) { 
          setFilteredProducts(
            products.filter((product) =>
              product.title.toLowerCase().includes(search.toLowerCase())
            )
          );
        }
      }, [search, products]);

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    return (
    <SearchBarStyle ref={searchRef}>
      <input
        type="text"
        value={search} 
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {search && filteredProducts.length > 0 ? (
        <div className="searchResults">
        {filteredProducts.map((product) => (
          <Link className="searchBarLink" to={`/product/${product.id}`} key={product.id}>
            { product.title }
          </Link>
        ))}
      </div>
      ) : <div></div>}
    </SearchBarStyle>

    )
}
export default SearchBar;



