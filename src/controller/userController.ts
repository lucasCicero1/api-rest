import { getManager } from "typeorm";
import { User } from "../entity/User";

export class userController {

    async saveUser(user: User) {
        const savedUser = await getManager().save(user);
        return savedUser;
    }
    
    async retrieveAll() {
        const users = await getManager().find(User);
        return users;
    }

    async retrieveById(id: number) {
        const user = await getManager().findOne(User, id);
        return user;
    }

    async retrieveLaunchByUser(id: number) {
        const user = await getManager().findOne(User, id, { relations: ['launch'] });
        return user.launch;
    }
}