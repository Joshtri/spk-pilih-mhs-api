import { PrismaClient, Prisma } from "@prisma/client";

export class SiswaRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // Fetch all students
  async getAllSiswa() {
    try {
      return await this.prisma.siswa.findMany({
        include: {
          kelas: true, // Include related class data
        },
      });
    } catch (error) {
      throw new Error(`Gagal mengambil data siswa: ${(error as Error).message}`);
    }
  }

  // Get a single student by ID
  async getSiswaById(id: number) {
    try {
      return await this.prisma.siswa.findUnique({
        where: {
          id,
        },
        include: {
          kelas: true, // Include related class data
        },
      });
    } catch (error) {
      throw new Error(`Gagal mengambil data siswa dengan ID ${id}: ${(error as Error).message}`);
    }
  }

  // Create a new student
  async createSiswa(data: Prisma.SiswaCreateInput) {
    try {
      return await this.prisma.siswa.create({
        data,
      });
    } catch (error) {
      throw new Error(`Gagal membuat data siswa: ${(error as Error).message}`);
    }
  }

  // Update an existing student
  async updateSiswa(
    id: number,
    data: Prisma.SiswaUpdateInput
  ) {
    try {
      return await this.prisma.siswa.update({
        where: {
          id,
        },
        data,
      });
    } catch (error) {
      throw new Error(`Gagal memperbarui data siswa dengan ID ${id}: ${(error as Error).message}`);
    }
  }

  // Delete a student
  async deleteSiswa(id: number) {
    try {
      return await this.prisma.siswa.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(`Gagal menghapus data siswa dengan ID ${id}: ${(error as Error).message}`);
    }
  }
}
