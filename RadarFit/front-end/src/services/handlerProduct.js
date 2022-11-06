import { Card, CardBody, CardTitle, CardText, Button, NavLink } from 'reactstrap';

function toCart(prod) {
  const { name, id, urlImage, price } = prod;
  const carrinho = JSON.parse(localStorage.getItem('cart'));
  return localStorage.setItem('cart', JSON.stringify({ ...carrinho,
    [name]:
      { name, id, price, urlImage } }));
}

export default function makeProducts(product, index) {
  const { name, id, urlImage, price } = product;
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
      <img
        alt={ name }
        src={ urlImage }
        className="img-responsive imgSize img-fluid img-thumbnail"
      />
      <CardBody className="bodyCard text-center">
        <CardTitle
          tag="h5"
        >
          { name }
        </CardTitle>
        <CardText
          className="text-center"
        >
          { ` a partir de R$ ${price} por ano` }
        </CardText>
        <div className="cardButton d-grid gap-3">
          <Button
            color="success"
            className="p-2 flex-fill"
            name="sobre"
            onClick={ () => toCart(product) }
          >
            Adicionar ao Carrinho
          </Button>
          <NavLink href={ `/about/${id}` }>
            <Button
              color="secondary"
              className="p-2 flex-fill"
              name="sobre"
            >
              Sobre
            </Button>
          </NavLink>
        </div>
      </CardBody>
    </Card>
  );
}
