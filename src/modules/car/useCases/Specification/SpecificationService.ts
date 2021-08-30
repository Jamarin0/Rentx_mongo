import { ISpecification, specificationModel } from "../../entities/Specification";

interface ISpecificationService {
    create(specification: ISpecification): Promise<ISpecification>;
    findByName(name: string): Promise<ISpecification>;
    list(): Promise<ISpecification[]>;
    delete(name: string): Promise<any>;
}


class SpecificationService implements ISpecificationService {

    async create({ name, description }: ISpecification): Promise<ISpecification> {
        return specificationModel.create({ name, description });
    }
    async findByName(name: string): Promise<ISpecification> {
        return specificationModel.findOne({ name });
    }
    async list(): Promise<ISpecification[]> {
        return specificationModel.find();
    }
    // async findById(CategoryId: string): Promise<void> {
    //    const category = await categoryModel.findById(CategoryId)
    // category.description
    // }
    async delete(name: string): Promise<any> {
        const deleteSpecification = await specificationModel.findOneAndDelete({ name });
         return deleteSpecification;
    }
}

export default new SpecificationService();