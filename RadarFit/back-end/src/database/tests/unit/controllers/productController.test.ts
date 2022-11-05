import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { NextFunction, Request, Response } from 'express';
import { productMock, productMockWithID } from '../../mocks/productMock'
import ProductController from '../../../controllers/productController'
import ProductService from '../../../services/productServices';
import Products from '../../../models/products';

describe('Testa Car Controller', () => {
  const newProduct = new Products();
  const productService = new ProductService(newProduct);
  const productController = new ProductController(productService);
  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(productService, 'create').resolves(productMock);
    sinon.stub(productService, 'read').resolves([productMockWithID]);
    sinon.stub(productService, 'readOne').resolves(productMockWithID);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);  
  });

  after(()=>{
    sinon.restore();
  })

  describe('ao cadastrar novo produto', () => {
    it('É cadastrado com sucesso', async () => {
      req.body = productMock;
      await productController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(productMock)).to.be.true;
    })
  });

  describe('Ao listar os produtos', () => {
    it('Retorna um array com status 200', async () => {
      await productController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([productMockWithID])).to.be.true;
    })
  });

  describe('Ao listar pelo _id', () => {
    it('Retorna um objeto com status 200', async () => {
      req.params = { id: productMockWithID._id };
      await productController.readOne(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(productMockWithID)).to.be.true;
    })
  })

});