import React, { useState } from 'react';
import { Button, Modal, ModalHeader, Form, Input } from 'reactstrap';
import api from '../../../services/Api';
import { validateFields } from '../../../services/validate';

export default function NewProduct() {
  const [produto, setNewProd] = useState('');
  const [valor, setNewValue] = useState('');
  const [descricao, setNewDescription] = useState('');
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    setNewProd('');
    setNewValue('');
    setNewDescription('');
  };

  const newProduct = async (obj) => {
    const options = {
      produto: obj.produto,
      valor: Number(obj.valor),
      descricao: obj.descricao,
    };
    try {
      const result = await api.post('/produtos', options);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="newProd">
      <div className="d-flex justify-content-around">
        <h3>Produtos</h3>
        <Button color="dark" onClick={ toggle }>
          +
        </Button>
      </div>
      <div>
        <Modal isOpen={ modal } toggle={ toggle }>
          <ModalHeader toggle={ toggle }>Novo Produto</ModalHeader>
          <Form className="d-flex flex-column">
            <Input
              name="Produto"
              placeholder="Nome do Produto"
              type="text"
              className="p-2"
              onChange={ ({ target: { value } }) => setNewProd(value) }
            />
            <Input
              name="valor"
              placeholder="Valor(R$)"
              type="number"
              className="p-2"
              onChange={ ({ target: { value } }) => setNewValue(value) }
            />
            <Input
              name="descricao"
              placeholder="Descrição"
              className="p-2"
              type="text"
              onChange={ ({ target: { value } }) => setNewDescription(value) }
            />
          </Form>
          <div className="d-flex justify-content-around">
            <Button
              color="secondary"
              onClick={ () => newProduct({ produto, valor, descricao }) }
              disabled={ validateFields(produto, valor, descricao) }
            >
              ADD
            </Button>
            {' '}
            <Button color="secondary" onClick={ toggle }>
              Fechar
            </Button>
          </div>
        </Modal>
      </div>
      <hr />
    </main>
  );
}
