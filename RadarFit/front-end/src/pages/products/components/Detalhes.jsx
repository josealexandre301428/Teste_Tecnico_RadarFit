import { useEffect, useContext } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import api from '../../../services/Api';
import ByIdContext from '../../../context/byId/context';
import Modify from './modify';

export default function Detalhes() {
  const {
    prodById,
    setPBId,
    id,
  } = useContext(ByIdContext);

  const handleSearchId = async (number) => {
    try {
      const products = await api.get(`/produtos/${number}`);
      console.log(products.data);
      setPBId(products.data);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    handleSearchId(id);
  }, [id]);

  const { produto, valor, descricao } = prodById;
  return (
    <section className="text-center">
      <h3>Detalhes</h3>
      <Card
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
          <CardText
            className="text-center"
          >
            { descricao }
          </CardText>
          <div className="cardButton d-grid gap-3">
            <Modify />
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
