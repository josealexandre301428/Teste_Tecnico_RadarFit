import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductContext from './context';

function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);

  return (
    <ProductContext.Provider value={ { product, setProduct } }>
      { children }
    </ProductContext.Provider>
  );
}

export default ProductProvider;

ProductProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
