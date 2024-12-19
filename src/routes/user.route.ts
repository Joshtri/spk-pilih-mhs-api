import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userRoutes = Router();
const userController = new UserController();
// Define routes for User
userRoutes.get("/users", (req, res) => {
    userController.getAllUsers(req, res);
});

userRoutes.get("/users/:id", (req, res) => {
    userController.getUserById(req, res)
});

userRoutes.post("/users", (req, res) => {
    userController.createUser(req, res)
});

userRoutes.put("/users/:id", (req, res) => {
    userController.updateUser(req, res)
});

userRoutes.delete("/users/:id", (req, res) => {
    userController.deleteUser(req, res)
});

export default userRoutes;
