import { Schema } from "mongoose";
import schema from '../../../utils/SchemaUtils';

export interface ISpecification {
    _id?: String;
    name?: String;
    description?: String;   
    created_at?: Date;
}

const specificationSchema: Schema<ISpecification> = schema({
     
    name: { type: String, required: true },

    email:  { type: String, required: true },

    password:  { type: String, required: true },

    driver_license:  { type: String, required: true },

    isAdmin:  { type: Boolean, required: false },

    avatar: { type: String, required: true },

    created_at: { type: String, dafault: Date.now },
});

export default specificationSchema

