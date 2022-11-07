import React, { useContext } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import ByIdContext from '../context/byId/context';

export default function MakeProducts(product, index) {
  const { setId } = useContext(ByIdContext);
  const { produto, _id, valor } = product;
  return (
    <ListGroup key={ index } className="d-flex">
      <ListGroupItem>
        <h3>{ produto }</h3>
        <p>Eletônico</p>
        <h4>{ `R$ ${valor}` }</h4>
      </ListGroupItem>
      <ListGroupItem className="cardButton">
        <Button
          id={ _id }
          color="secondary"
          name="sobre"
          onClick={ ({ target: { id } }) => setId(id) }

        >
          Sobre
        </Button>
      </ListGroupItem>
    </ListGroup>
  );
}
