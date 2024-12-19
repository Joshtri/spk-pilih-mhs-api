import { PrismaClient, User, Role } from "@prisma/client";

export class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // Fetch all users
  async getAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  // Get a single user by ID
  async getUserById(id: number): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  // Get a single user by username
  async getUserByUsername(username: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        username,
      },
    });
  }

  // Create a new user
  async createUser(data: {
    nama: string;
    username: string;
    email: string;
    password: string;
    nomorWa?: string;
    role?: Role; // Menggunakan tipe enum Role
  }): Promise<User> {
    return await this.prisma.user.create({
      data: {
        ...data,
        role: data.role || Role.GURU, // Default role adalah GURU
      },
    });
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
      role: Role; // Menggunakan tipe enum Role
    }>
  ): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  // Delete a user by ID
  async deleteUser(id: number): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}

export default new UserRepository();
