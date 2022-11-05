import IService from '../interface/IService';
import { IProduct, productSchema } from '../interface/IProduct';
import { IModel } from '../interface/IModel';
import { ErrorTypes } from '../errors/catalogy';

class ProductService implements IService<IProduct> {
  constructor(private _product: IModel<IProduct>) {}

  public async create(obj: unknown): Promise<IProduct> {
    const parsed = productSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }
 
    parsed.data.created = new Date();
    parsed.data.updated = new Date();

    return this._product.create(parsed.data);
  }

  public async read(): Promise<Array<IProduct>> {
    return this._product.read();
  }

  public async readOne(_id: string): Promise<IProduct | null> {
    const product = await this._product.readOne(_id);
    if (!product) throw new Error(ErrorTypes.EntityNotFound);
    return product;
  }

  public async readOneQuery(q: string): Promise<IProduct | null> {
    const product = await this._product.find({ produto: { $in: [q]}}, {produto: 1, valor: 1, descricao: 1, created: 1, updated: 1});
    if (!product) throw new Error(ErrorTypes.EntityNotFound);
    return product;
  }

  public async update(_id: string, obj: IProduct): Promise<IProduct | null> {
    if (Object.keys(obj).length === 0) throw new Error(ErrorTypes.ObjectEmpty);

    obj.updated = new Date();
    const update = await this._product.update(_id, obj);
    if (!update) throw new Error(ErrorTypes.EntityNotFound);
    return update;
  }

  public async delete(_id: string): Promise<IProduct | null> {
    const deleted = await this._product.delete(_id);
    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);
    return deleted;
  }
}

export default ProductService;