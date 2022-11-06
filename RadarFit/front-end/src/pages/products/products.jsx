import React, { useContext, useEffect } from 'react';
import { Button } from 'reactstrap';
import api from '../../services/Api';
import ProductContext from '../../context/context';
import NavBar from './components/navbar';
import makeProducts from '../../services/handlerProduct';

export default function Products() {
  const { product, setProduct } = useContext(ProductContext);

  const handleFetch = async () => {
    try {
      const products = await api.get('/products');
      console.log(products.data);
      setProduct(products.data);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main>
      <NavBar />
      <div>
        <h3>Produtos</h3>
        <Button>ADD</Button>
        {/* chama a um formulario */}
      </div>
      <div className="container cardGroup">
        { product.map((prod, index) => makeProducts(prod, index)) }
      </div>
    </main>
  );
}
