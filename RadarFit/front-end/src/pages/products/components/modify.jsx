import React, { useState, useContext, useEffect } from 'react';
import { Button, Modal, ModalHeader, Form, Input } from 'reactstrap';
import ByIdContext from '../../../context/byId/context';
import api from '../../../services/Api';

export default function Modify() {
  const {
    prodById,
    setModify,
    id,
  } = useContext(ByIdContext);
  const [produto, setNewProd] = useState('');
  const [valor, setNewValue] = useState('');
  const [descricao, setNewDescription] = useState('');
  const [modal, setModal] = useState(false);
  console.log(produto);

  const toggle = () => {
    setModal(!modal);
  };

  const ModifyProduct = async (number, obj) => {
    const options = {
      produto: obj.produto,
      valor: Number(obj.valor),
      descricao: obj.descricao,
    };
    try {
      const result = await api.put(`/produtos/${number}`, options);
      console.log(result);
      setModify(true);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    setNewProd(prodById.produto);
    setNewValue(prodById.valor);
    setNewDescription(prodById.descricao);
  }, [prodById]);

  return (
    <main>
      <div className="d-flex justify-content-around">
        <Button color="dark" onClick={ toggle }>
          Editar
        </Button>
      </div>
      <div>
        <Modal isOpen={ modal } toggle={ toggle }>
          <ModalHeader toggle={ toggle }>Editar Produto</ModalHeader>
          <Form className="d-flex flex-column">
            <Input
              name="Produto"
              placeholder="Nome do Produto"
              type="text"
              value={ produto }
              className="p-2"
              onChange={ ({ target: { value } }) => setNewProd(value) }
            />
            <Input
              name="valor"
              placeholder="Valor(R$)"
              type="number"
              value={ valor }
              className="p-2"
              onChange={ ({ target: { value } }) => setNewValue(value) }
            />
            <Input
              name="descricao"
              placeholder="Descrição"
              className="p-2"
              type="textarea"
              value={ descricao }
              onChange={ ({ target: { value } }) => setNewDescription(value) }
            />
          </Form>
          <div className="d-flex justify-content-around">
            <Button
              color="secondary"
              onClick={ () => ModifyProduct(id, { produto, valor, descricao }) }
            >
              Editar
            </Button>
            {' '}
            <Button color="secondary" onClick={ toggle }>
              Fechar
            </Button>
          </div>
        </Modal>
      </div>
    </main>
  );
}
