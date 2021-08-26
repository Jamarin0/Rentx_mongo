import { Schema } from "mongoose";
import schema from '../../../utils/SchemaUtils';

export interface ICategory {
    _id?: String;
    name?: String;
    description?: String;   
    created_at?: Date;
}

const categorySchema: Schema<ICategory> = schema({
     
    name: { type: String, required: true },

    email:  { type: String, required: true },

    password:  { type: String, required: true },

    driver_license:  { type: String, required: true },

    isAdmin:  { type: Boolean, required: false },

    avatar: { type: String, required: true },

    created_at: { type: String, dafault: Date.now },
});

export default categorySchema
