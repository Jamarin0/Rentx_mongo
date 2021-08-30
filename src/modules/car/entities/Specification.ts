import { Document, model, Schema } from "mongoose";

export interface ISpecification extends Document {
    _id?: String;
    name?: String;
    description?: String;
    created_at?: Date;
}

const SpecificationSchema = new Schema(
    {
        name: { type: String, required: true },

        description: { type: String, required: true },

        created_at: { type: String, dafault: Date.now },
    }
);

export const specificationModel = model<ISpecification>('Specification', SpecificationSchema);

