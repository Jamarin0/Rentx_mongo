// import { getMongoRepository, getRepository, Repository } from "typeorm";
// import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
// import { userSchema } from "../../entities/User";
// import { IUsersRepository } from "../IUsersRepository";

// class UsersRepository implements IUsersRepository {
//     private repository: Repository<userSchema>;

//     constructor() {
//         this.repository = getMongoRepository(userSchema);
//     }
   
//     async create({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {
//         const user = this.repository.create({
//             name, email, driver_license, password
//         });
// console.log(user);
//         await this.repository.save(user);
//     }

//     async findByEmail(email: string): Promise<userSchema> {
//         const user = await this.repository.findOne({ email });
//         return user;
//     }

//     // async findById(id: string): Promise<UserModel> {
//     //     const user = await this.repository.findOne(id);
//     //     return user;
//     // }
// }


// export { UsersRepository }