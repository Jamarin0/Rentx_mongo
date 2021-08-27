import { model } from 'mongoose';
import specificationSchema, { ISpecification } from '../../entities/Specification';

export default model<ISpecification>('category', specificationSchema);