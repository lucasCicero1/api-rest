import { getManager } from "typeorm";
import { Launch } from "../entity/Launch";

export class LaunchController {
    async save(launch: Launch) {
        const savedLaunch = await getManager().save(launch);
        return savedLaunch;
    }    
}