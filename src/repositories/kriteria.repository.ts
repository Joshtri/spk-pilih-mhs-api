import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class KriteriaRepository {
  // Fetch all criteria
  async getAllKriteria() {
    return await prisma.kriteria.findMany({
      include: {
        penilaian: true, // Include related Penilaian data
      },
    });
  }

  // Get a single criterion by ID
  async getKriteriaById(id: number) {
    return await prisma.kriteria.findUnique({
      where: {
        id,
      },
      include: {
        penilaian: true, // Include related Penilaian data
      },
    });
  }

  // Create a new criterion
  async createKriteria(data: { nama: string; jenis: string; bobot: number }) {
    return await prisma.kriteria.create({
      data,
    });
  }

  // Update an existing criterion
  async updateKriteria(
    id: number,
    data: { nama?: string; jenis?: string; bobot?: number }
  ) {
    return await prisma.kriteria.update({
      where: {
        id,
      },
      data,
    });
  }

  // Delete a criterion
  async deleteKriteria(id: number) {
    return await prisma.kriteria.delete({
      where: {
        id,
      },
    });
  }
}

