import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class SiswaRepository {
  // Fetch all students
  async getAllSiswa() {
    return await prisma.siswa.findMany({
      include: {
        kelas: true, // Include related class data
      },
    });
  }

  // Get a single student by ID
  async getSiswaById(id: number) {
    return await prisma.siswa.findUnique({
      where: {
        id,
      },
      include: {
        kelas: true, // Include related class data
      },
    });
  }

  // Create a new student
  async createSiswa(data: { nisn: string; nama: string; jenisKelamin: string; alamat: string; kelasId: number }) {
    return await prisma.siswa.create({
      data,
    });
  }

  // Update an existing student
  async updateSiswa(
    id: number,
    data: { nisn?: string; nama?: string; jenisKelamin?: string; alamat?: string; kelasId?: number }
  ) {
    return await prisma.siswa.update({
      where: {
        id,
      },
      data,
    });
  }

  // Delete a student
  async deleteSiswa(id: number) {
    return await prisma.siswa.delete({
      where: {
        id,
      },
    });
  }
}
