import { PrismaClient , Kriteria} from "@prisma/client";
// import { Kriteria } from "../types/kriteria.type"; // Impor tipe Kriteria

export class KriteriaRepository {

    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }
  // Fetch all criteria
  async getAllKriteria() {
    return await this.prisma.kriteria.findMany({
      include: {
        penilaian: true, // Include related Penilaian data
      },
    });
  }

  // Get a single criterion by ID
  async getKriteriaById(id: number) {
    return await this.prisma.kriteria.findUnique({
      where: {
        id,
      },
      include: {
        penilaian: true, // Include related Penilaian data
      },
    });
  }

  // Create a new criterion
  async createKriteria(data: Omit<Kriteria, 'id'>) { // Menggunakan tipe Kriteria
    return await this.prisma.kriteria.create({
        data,
      });
  }

  // Update an existing criterion
  async updateKriteria(
    id: number,
    data: Partial<Kriteria> // Menggunakan Partial<Kriteria> untuk data opsional
  ) {
    return await this.prisma.kriteria.update({
      where: {
        id,
      },
      data,
    });
  }

  // Delete a criterion
  async deleteKriteria(id: number) {
    return await this.prisma.kriteria.delete({
      where: {
        id,
      },
    });
  }
}
