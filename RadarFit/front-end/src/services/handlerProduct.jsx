import React, { useContext } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import ByIdContext from '../context/byId/context';

export default function MakeProducts(product, index) {
  const { setId } = useContext(ByIdContext);
  const { produto, _id, valor } = product;
  return (
    <Card
      key={ index }
      style={ {
        width: '18rem',
        marginBottom: '1rem',
        marginLeft: '1rem',
        marginRight: '1rem',
      } }
    >
      <CardBody className="bodyCard text-center">
        <CardTitle
          tag="h5"
        >
          { produto }
        </CardTitle>
        <CardText
          className="text-center"
        >
          Eletônico
        </CardText>
        <CardText
          className="text-center"
        >
          { `R$ ${valor}` }
        </CardText>
        <div className="cardButton d-grid gap-3">
          <Button
            id={ _id }
            color="secondary"
            className="p-2 flex-fill"
            name="sobre"
            onClick={ ({ target: { id } }) => setId(id) }

          >
            Sobre
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
