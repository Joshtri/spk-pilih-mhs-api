import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class KelasRepository {
  // Fetch all classes
  async getAllKelas() {
    return await prisma.kelas.findMany({
      include: {
        siswa: true, // Include associated students
      },
    });
  }

  // Get a single class by ID
  async getKelasById(id: number) {
    return await prisma.kelas.findUnique({
      where: {
        id,
      },
      include: {
        siswa: true, // Include associated students
      },
    });
  }

  // Create a new class
  async createKelas(nama: string) {
    return await prisma.kelas.create({
      data: {
        nama,
      },
    });
  }

  // Update an existing class
  async updateKelas(id: number, nama: string) {
    return await prisma.kelas.update({
      where: {
        id,
      },
      data: {
        nama,
      },
    });
  }

  // Delete a class
  async deleteKelas(id: number) {
    return await prisma.kelas.delete({
      where: {
        id,
      },
    });
  }
}

// export default new KelasRepository();
