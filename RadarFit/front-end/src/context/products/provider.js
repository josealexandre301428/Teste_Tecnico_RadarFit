import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/Api';
import ProductContext from './context';

function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);

  const handleFetch = async () => {
    try {
      const result = await api.get('/produtos');
      setProduct(result.data);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

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
