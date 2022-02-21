import { Router } from "express";
import { userController } from "../controller/userController";
import { User } from "../entity/User";

export const userRouter = Router();
const userCrlr = new userController();

userRouter.post('/', async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = new User(name, email);
        const savedUser = await userCrlr.saveUser(user);
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json({ message: err.message, error: err.stack })
    }
});

userRouter.get('/', async (req, res) => {
    try {
        const users = await userCrlr.retrieveAll();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send({ message: err.message, err: err.stack });
    }
});

userRouter.get('/launch/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const launch = await userCrlr.retrieveLaunchByUser(id);
        res.status(200).json(launch);
    } catch (err) {
        res.status(500).json({ message: err.message, err: err.stack });
    }
});