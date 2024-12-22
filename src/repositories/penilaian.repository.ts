import { PrismaClient } from "@prisma/client";

export class PenilaianRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllPenilaian() {
    return await this.prisma.penilaian.findMany({
      include: {
        siswa: true,
        kriteria: true,
      },
    });
  }

  async getPenilaianById(id: number) {
    return await this.prisma.penilaian.findUnique({
      where: {
        id,
      },
      include: {
        siswa: true,
        kriteria: true,
      },
    });
  }

  async createPenilaian(siswaId: number, kriteriaId: number, nilai_kriteria: number) {
    return await this.prisma.penilaian.create({
      data: {
        siswaId,
        kriteriaId,
        nilai_kriteria,
      },
    });
  }

  async updatePenilaian(
    id: number,
    siswaId: number,
    kriteriaId: number,
    nilai_kriteria: number
  ) {
    return await this.prisma.penilaian.update({
      where: {
        id,
      },
      data: {
        siswaId,
        kriteriaId,
        nilai_kriteria,
      },
    });
  }

  async deletePenilaian(id: number) {
    return await this.prisma.penilaian.delete({
      where: {
        id,
      },
    });
  }
}
