import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { ZodError } from 'zod';
import Products from '../../../models/products';
import ProductService from '../../../services/productServices'
import { productMock, productMockWithID } from '../../mocks/productMock';

describe('Testa produto service', () => {
  const newProduct = new Products();
  const productService = new ProductService(newProduct);

  before(async () => {
    sinon
      sinon.stub(newProduct, 'create').resolves(productMockWithID);
      sinon.stub(newProduct, 'read').resolves([productMockWithID]);
      sinon.stub(newProduct, 'readOne').resolves(productMockWithID);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Ao cadastrar um novo produto', () => {
    it('É cadastrado com sucesso', async () => {
      const newProduct = await productService.create(productMock);
      expect(newProduct).to.be.deep.equal(productMockWithID);
    })

    it('se houver erro, é disparado', async () => {
      let error;
      try {
        await productService.create({});
      } catch (err) {
        error = err
      }
      expect(error).to.be.instanceOf(ZodError)
    })
  })

  describe('Ao listar os produtos', () => {
    it('Retorna um array', async () => {
      const listProducts = await productService.read();
      expect(listProducts).to.be.deep.equal([productMockWithID])
    })
  })

  describe('Ao buscar pelo _id', () => {
    it('Retorna um objeto', async () => {
      const listProduct = await productService.readOne('62cf1fc6498565d94eba52cd');
      expect(listProduct).to.be.deep.equal(productMockWithID);
    })
  })

});