import { useState, useEffect } from "react";
import { SearchBarStyle } from "./SearchBar.styles";
import { Link } from "react-router-dom";

function SearchBar({ products }) {
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

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
    <SearchBarStyle>
      <input
        type="text"
        value={search} 
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <div>
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            {product.title}
          </Link>
        ))}
      </div>
    </SearchBarStyle>

    )
}
export default SearchBar;