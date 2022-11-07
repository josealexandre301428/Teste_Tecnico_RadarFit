import React, { useContext, useEffect } from 'react';
import ProductContext from '../../../context/products/context';
import SearchContext from '../../../context/search/context';
import api from '../../../services/Api';
import makeProducts from '../../../services/handlerProduct';

export default function Products() {
  const { product, setProduct } = useContext(ProductContext);
  const { isSearching, productSearch } = useContext(SearchContext);
  const { hasModify } = useContext(SearchContext);

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
  }, [hasModify]);

  return (
    <main>
      <div className="d-flex flex-column text-center">
        <h3>Lista de Produtos</h3>
        { isSearching ? productSearch
          .map((prod, index) => makeProducts(prod, index)) : product
          .map((prod, index) => makeProducts(prod, index)) }
      </div>
    </main>
  );
}
