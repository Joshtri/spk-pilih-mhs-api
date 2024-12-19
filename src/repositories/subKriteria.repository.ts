import { PrismaClient, SubKriteria } from "@prisma/client";

export class SubKriteriaRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // Fetch all SubKriteria
  async getAllSubKriteria(): Promise<SubKriteria[]> {
    return await this.prisma.subKriteria.findMany({
      include: {
        kriteria: true, // Include related Kriteria data
      },
    });
  }

  // Get a single SubKriteria by ID
  async getSubKriteriaById(id: number): Promise<SubKriteria | null> {
    return await this.prisma.subKriteria.findUnique({
      where: {
        id,
      },
      include: {
        kriteria: true, // Include related Kriteria data
      },
    });
  }

  // Create a new SubKriteria
  async createSubKriteria(data: {
    nama_sub_kriteria: string;
    bobot_sub_kriteria: number;
    kriteriaId: number;
  }): Promise<SubKriteria> {
    return await this.prisma.subKriteria.create({
      data,
    });
  }

  // Update an existing SubKriteria
  async updateSubKriteria(
    id: number,
    data: Partial<{
      nama_sub_kriteria: string;
      bobot_sub_kriteria: number;
      kriteriaId: number;
    }>
  ): Promise<SubKriteria> {
    return await this.prisma.subKriteria.update({
      where: {
        id,
      },
      data,
    });
  }

  // Delete a SubKriteria by ID
  async deleteSubKriteria(id: number): Promise<SubKriteria> {
    return await this.prisma.subKriteria.delete({
      where: {
        id,
      },
    });
  }
}

// export default new SubKriteriaRepository();
