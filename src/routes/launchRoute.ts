import { Router } from "express";
import { LaunchController } from "../controller/launchController";
import { userController } from "../controller/userController";
import { Launch } from "../entity/Launch";

export const launchRouter = Router();
const launchCtlr = new LaunchController();
const userCrlr = new userController();

launchRouter.post('/', async (req, res) => {
    try {
        const { id, value, description, date } = req.body;
        const user = await userCrlr.retrieveById(id);
        if (user) {
            const launch = new Launch(value, description, date, user);
            const savedLaunch = await launchCtlr.save(launch);
            res.status(201).send(savedLaunch);
        } else res.json("User doesn't exist");
    } catch (err) {
        res.status(500).send({ message: err.message, error: err.stack });
    }
});