import { Request, Response } from 'express';
import IService from '../interface/IService';
import { IProduct } from '../interface/IProduct';

export default class ProductController {
  private _controller: IService<IProduct>;

  constructor(controller: IService<IProduct>) {
    this._controller = controller;
  }

  public async create(req: Request, res: Response<IProduct>) {
    const result = await this._controller.create(req.body);
    return res.status(201).json(result);
  }

  public async read(req: Request, res: Response<IProduct[]>) {
    const result = await this._controller.read();
    return res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response<IProduct | null>) {
    const result = await this._controller.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async update(req: Request, res: Response<IProduct | null>) {
    const result = await this._controller.update(req.params.id, req.body);
    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response<IProduct | null>) {
    await this._controller.delete(req.params.id);
    return res.status(204).end();
  }
}