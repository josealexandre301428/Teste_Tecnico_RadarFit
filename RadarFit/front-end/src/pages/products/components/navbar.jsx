import React, { useState, useContext } from 'react';
import { Button, Input, Form } from 'reactstrap';
import ProductContext from '../../../context/context';
import api from '../../../services/Api';

export default function NavBar() {
  const { setProduct } = useContext(ProductContext);
  const [search, setSearch] = useState('');

  const handleSearch = async (value) => {
    try {
      const products = await api.get(`/products/?find=${value}`);
      setProduct(products.data);
      console.log(products.data);
    } catch (error) {
      throw new Error();
    }
  };

  return (
    <nav className="nav navbar-dark justify-content-center">
      <div className="container-fluid ">
        <Form className="d-flex form" role="search">
          <Input
            className="input rounded-0 text-white"
            value={ search }
            onChange={ ({ target: { value } }) => setSearch(value) }
            type="search"
            aria-label="Search"
          />
          <Button
            className="submit rounded-0"
            color="Transparent"
            outline
            type="submit"
            onClick={ () => handleSearch(search) }
          >
            Buscar por um Produto
          </Button>
        </Form>
      </div>
    </nav>
  );
}
