import { UserRepository } from "../repositories/user.repository";
import { User, Role } from "@prisma/client";
import { Response } from "../interfaces/response.interface";

export class UserService {
  private userRepo: UserRepository;

  constructor(userRepo: UserRepository = new UserRepository()) {
    this.userRepo = userRepo;
  }

  // Fetch all users
  async getAllUsers(): Promise<Response<User[]>> {
    try {
      const users = await this.userRepo.getAllUsers();
      return {
        status: "success",
        message: "Data pengguna berhasil diambil.",
        data: users,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal mengambil data pengguna.",
        error: error.message,
      };
    }
  }

  // Get a single user by ID
  async getUserById(id: number): Promise<Response<User>> {
    try {
      const user = await this.userRepo.getUserById(id);

      if (!user) {
        return {
          status: "error",
          message: `Pengguna dengan ID ${id} tidak ditemukan.`,
        };
      }

      return {
        status: "success",
        message: "Data pengguna berhasil ditemukan.",
        data: user,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal mengambil data pengguna.",
        error: error.message,
      };
    }
  }

  // Create a new user
  async createUser(data: {
    nama: string;
    username: string;
    email: string;
    password: string;
    nomorWa?: string;
    role?: Role;
  }): Promise<Response<User>> {
    try {
      const newUser = await this.userRepo.createUser(data);
      return {
        status: "success",
        message: "Pengguna baru berhasil dibuat.",
        data: newUser,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal membuat pengguna baru.",
        error: error.message,
      };
    }
  }

  // Update an existing user
  async updateUser(
    id: number,
    data: Partial<{
      nama: string;
      username: string;
      email: string;
      password: string;
      nomorWa: string;
      role: Role;
    }>
  ): Promise<Response<User>> {
    try {
      const existingUser = await this.userRepo.getUserById(id);

      if (!existingUser) {
        return {
          status: "error",
          message: `Pengguna dengan ID ${id} tidak ditemukan.`,
        };
      }

      const updatedUser = await this.userRepo.updateUser(id, data);
      return {
        status: "success",
        message: "Data pengguna berhasil diperbarui.",
        data: updatedUser,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal memperbarui data pengguna.",
        error: error.message,
      };
    }
  }

  // Delete a user by ID
  async deleteUser(id: number): Promise<Response<null>> {
    try {
      const existingUser = await this.userRepo.getUserById(id);

      if (!existingUser) {
        return {
          status: "error",
          message: `Pengguna dengan ID ${id} tidak ditemukan.`,
        };
      }

      await this.userRepo.deleteUser(id);
      return {
        status: "success",
        message: "Pengguna berhasil dihapus.",
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal menghapus pengguna.",
        error: error.message,
      };
    }
  }
}
