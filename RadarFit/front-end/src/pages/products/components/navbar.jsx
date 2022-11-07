import React, { useContext, useState } from 'react';
import { Button, Input, Form } from 'reactstrap';
import api from '../../../services/Api';
import SearchContext from '../../../context/search/context';

export default function NavBar() {
  const [search, setSearch] = useState('');
  const { setProductSearch, setSeraching } = useContext(SearchContext);

  const handleSearch = async (value) => {
    try {
      const products = await api.get(`/produtos/find?search=${value}`);
      console.log(products.data);
      setProductSearch(products.data);
      setSeraching(true);
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
            type="button"
            onClick={ () => handleSearch(search) }
          >
            Buscar por um Produto
          </Button>
        </Form>
      </div>
    </nav>
  );
}
