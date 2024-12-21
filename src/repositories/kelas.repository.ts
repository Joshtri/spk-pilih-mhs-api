import { PrismaClient } from "@prisma/client";


export class KelasRepository {

  private prisma: PrismaClient;

  constructor(){
      this.prisma = new PrismaClient();
  }
  // Fetch all classes
  async getAllKelas() {
    return await this.prisma.kelas.findMany({
      include: {
        siswa: true, // Include associated students
      },
    });
  }

  // Get a single class by ID
  async getKelasById(id: number) {
    return await this.prisma.kelas.findUnique({
      where: {
        id,
      },
      include: {
        siswa: true, // Include associated students
      },
    });
  }

  // Create a new class
  async createKelas(nama_kelas: string) {
    return await this.prisma.kelas.create({
      data: {
        nama_kelas,
      },
    });
  }

  // Update an existing class
  async updateKelas(id: number, nama_kelas: string) {
    return await this.prisma.kelas.update({
      where: {
        id,
      },
      data: {
        nama_kelas,
      },
    });
  }

  // Delete a class
  async deleteKelas(id: number) {
    return await this.prisma.kelas.delete({
      where: {
        id,
      },
    });
  }
}

// export default new KelasRepository();
