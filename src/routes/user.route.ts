import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userRoute = Router();
const userController = new UserController();
// Define routes for User
userRoute.get("/users", (req, res) => {
    userController.getAllUsers(req, res);
});

userRoute.get("/users/:id", (req, res) => {
    userController.getUserById(req, res)
});

userRoute.post("/users", (req, res) => {
    userController.createUser(req, res)
});

userRoute.put("/users/:id", (req, res) => {
    userController.updateUser(req, res)
});

userRoute.delete("/users/:id", (req, res) => {
    userController.deleteUser(req, res)
});

export default userRoute;
