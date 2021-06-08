import { Specification } from "../../entities/Specification";
import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifiactions: Specification[];

    constructor() {
        this.specifiactions = [];
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specifiaction = new Specification();
        Object.assign(specifiaction, {
            name,
            description,
            created_at: new Date(),
        });
        this.specifiactions.push(specifiaction);
    }

    findByName(name: string): Specification {
        const specifiaction = this.specifiactions.find(
            (specifiaction) => specifiaction.name === name
        );
        return specifiaction;
    }
}

export { SpecificationsRepository };
