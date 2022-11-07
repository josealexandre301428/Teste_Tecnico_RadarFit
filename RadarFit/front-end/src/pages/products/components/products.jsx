import React, { useContext, useState } from 'react';
import { Button, Modal, ModalHeader, Form, FormGroup, Label, Input } from 'reactstrap';
import api from '../../../services/Api';
import ProductContext from '../../../context/products/context';
import SearchContext from '../../../context/search/context';
import makeProducts from '../../../services/handlerProduct';
import { validateFields } from '../../../services/validate';

export default function Products() {
  const { product } = useContext(ProductContext);
  const { isSearching, productSearch } = useContext(SearchContext);
  const [produto, setNewProd] = useState('');
  const [valor, setNewValue] = useState('');
  const [descricao, setNewDescription] = useState('');
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
    setNewProd('')
    setNewValue('')
    setNewDescription('')
  }


  const newProduct = async (obj) => {
    const options = {
      "produto": obj.produto, 
      "valor": Number(obj.valor),
      "descricao": obj.descricao
    };
    try {
      const result = await api.post('/produtos', options);
      return result
    } catch (error) {
      console.log(error.message);;
    }
  };


  return (
    <main>
      <div>
        <h3>Produtos</h3>
        <Button color="dark" onClick={ toggle }>
          +
        </Button>
        <Modal isOpen={ modal } toggle={ toggle }>
          <ModalHeader toggle={ toggle }>Novo Produto</ModalHeader>
          <Form>
            <FormGroup>
              <Label for="Produto">
                Produto
              </Label>
              <Input
                name="Produto"
                placeholder="Nome do Produto"
                type="text"
                onChange={ ({ target: { value } }) => setNewProd(value) }
              />
            </FormGroup>
            <FormGroup>
              <Label for="valor">
                Valor(R$)
              </Label>
              <Input
                name="valor"
                placeholder="Valor(R$)"
                type="number"
                onChange={ ({ target: { value } }) => setNewValue(value) }
              />
            </FormGroup>
            <FormGroup>
              <Label for="descricao">
                Descrição
              </Label>
              <Input
                name="descricao"
                placeholder="Descrição"
                type="text"
                onChange={ ({ target: { value } }) => setNewDescription(value) }
              />
            </FormGroup>
          </Form>
          <Button
            color="secondary"
            onClick={ () => newProduct({produto, valor, descricao}) }
            disabled={ validateFields(produto, valor, descricao) }
          >
            ADD
          </Button>
          {' '}
          <Button color="secondary" onClick={ toggle }>
            Fechar
          </Button>
        </Modal>
      </div>
      <div className="container cardGroup">
        <h3>Lista de Produtos</h3>
        { isSearching ? productSearch
          .map((prod, index) => makeProducts(prod, index)) : product
          .map((prod, index) => makeProducts(prod, index)) }
      </div>
    </main>
  );
}
