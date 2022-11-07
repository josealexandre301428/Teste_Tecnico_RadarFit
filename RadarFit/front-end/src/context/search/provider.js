import { useState } from 'react';
import PropTypes from 'prop-types';
import searchContext from './context';

function SearchProvider({ children }) {
  const [productSearch, setProductSearch] = useState([]);
  const [isSearching, setSeraching] = useState(false);

  return (
    <searchContext.Provider
      value={ {
        productSearch,
        setProductSearch,
        isSearching,
        setSeraching,
      } }
    >
      { children }
    </searchContext.Provider>
  );
}

export default SearchProvider;

SearchProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
