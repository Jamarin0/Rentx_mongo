import { model } from 'mongoose';
import categorySchema, { ICategory } from "../../entities/Category";

export default model<ICategory>('category', categorySchema);