import * as sinon from 'sinon';
import chai from 'chai';
import Product from '../../../models/products';
import { Model } from 'mongoose';
import { productMockWithID, productMock } from '../../mocks/productMock';
const { expect } = chai;

describe('Testa product model', () => {
  const productModel = new Product();

  before(async () => {
    sinon.stub(Model, 'create').resolves(productMockWithID);
    sinon.stub(Model, 'find').resolves([productMockWithID]);
    sinon.stub(Model, 'findOne').resolves(productMockWithID);
  });

  after(()=>{
    sinon.restore();
  })

  describe('ao cadastrar novo produto', () => {
    it('É cadastrado com sucesso', async () => {
      const newProduct = await productModel.create(productMock);
      expect(newProduct).to.be.deep.equal(productMockWithID);
    })
  });

  describe('Ao listar os produtos', () => {
    it('Retorna um array ', async () => {
      const listProducts = await productModel.read();
      expect(listProducts).to.be.deep.equal([productMockWithID]);
    })
  })

  describe('Ao buscar pelo _id', () => {
    it('Retorna um objeto ', async () => {
      const listProduct = await productModel.readOne('62cf1fc6498565d94eba52cd');
      expect(listProduct).to.be.deep.equal(productMockWithID);
    })

    it('Retorna um erro em caso de _id inválido', async () => {
      try {
        await productModel.readOne('62cf1fc6');
      } catch (error) {
        expect(error.message).to.be.equal('InvalidMongoId');
      }
    })
  })

});