import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IProduct } from '../interface/IProduct';
import MongoModel from './mongoModels';

const productSchema = new Schema<IProduct>({
  produto: String,
  valor: Number,
  descricao: String,
  created: Date,
  updated: Date,
}, { versionKey: false });

export default class Cars extends MongoModel<IProduct> {
  constructor(model = mongooseCreateModel('Products', productSchema)) {
    super(model);
  }
}