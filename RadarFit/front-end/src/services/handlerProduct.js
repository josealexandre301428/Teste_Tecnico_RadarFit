import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default function makeProducts(product, index) {
  const { produto, _id, valor } = product;
  return (
    <Card
      id={ _id }
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
            color="secondary"
            className="p-2 flex-fill"
            name="sobre"
          >
            Sobre
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
