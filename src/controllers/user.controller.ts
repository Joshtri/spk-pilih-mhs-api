import { Request, Response } from "express";
import {UserService} from "../services/user.service";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  // Handler to fetch all users
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.userService.getAllUsers();
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat mengambil data pengguna.",
        error: error.message,
      });
    }
  }

  // Handler to get a single user by ID
  async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const result = await this.userService.getUserById(id);

      if (result.status === "error") {
        return res.status(404).json(result);
      }

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat mengambil data pengguna.",
        error: error.message,
      });
    }
  }

  // Handler to create a new user
  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const { nama, username, email, password, nomorWa, role } = req.body;

      const result = await this.userService.createUser({
        nama,
        username,
        email,
        password,
        nomorWa,
        role,
      });

      if (result.status === "error") {
        return res.status(400).json(result);
      }

      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat membuat pengguna.",
        error: error.message,
      });
    }
  }

  // Handler to update an existing user
  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { nama, username, email, password, nomorWa, role } = req.body;

      const result = await this.userService.updateUser(id, {
        nama,
        username,
        email,
        password,
        nomorWa,
        role,
      });

      if (result.status === "error") {
        return res.status(404).json(result);
      }

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat memperbarui data pengguna.",
        error: error.message,
      });
    }
  }

  // Handler to delete a user by ID
  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const result = await this.userService.deleteUser(id);

      if (result.status === "error") {
        return res.status(404).json(result);
      }

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat menghapus pengguna.",
        error: error.message,
      });
    }
  }
}
