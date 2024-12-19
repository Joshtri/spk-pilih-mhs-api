import { KriteriaRepository } from "../repositories/kriteria.repository";
import { Kriteria, Prisma } from "@prisma/client";
import { Response } from "../interfaces/response.interface";

export class KriteriaService {
  private kriteriaRepo: KriteriaRepository;

  constructor(kriteriaRepo: KriteriaRepository = new KriteriaRepository()) {
    this.kriteriaRepo = kriteriaRepo;
  }

  // Fetch all criteria
  async getAllKriteria(): Promise<Response<Kriteria[]>> {
    try {
      const criteria = await this.kriteriaRepo.getAllKriteria();
      return {
        status: "success",
        message: "Data kriteria berhasil diambil.",
        data: criteria,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal mengambil data kriteria.",
        error: error.message,
      };
    }
  }

  // Get a single criterion by ID
  async getKriteriaById(id: number): Promise<Response<Kriteria>> {
    try {
      const criterion = await this.kriteriaRepo.getKriteriaById(id);

      if (!criterion) {
        return {
          status: "error",
          message: `Kriteria dengan ID ${id} tidak ditemukan.`,
        };
      }

      return {
        status: "success",
        message: "Data kriteria berhasil ditemukan.",
        data: criterion,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal mengambil data kriteria.",
        error: error.message,
      };
    }
  }

  // Create a new criterion
  async createKriteria(data: { nama_kriteria: string; jenis_kriteria: string; bobot_kriteria: number }): Promise<Response<Kriteria>> {
    try {
      const newCriterion = await this.kriteriaRepo.createKriteria(data);
      return {
        status: "success",
        message: "Kriteria baru berhasil dibuat.",
        data: newCriterion,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal membuat kriteria baru.",
        error: error.message,
      };
    }
  }

  // Update an existing criterion
  async updateKriteria(
    id: number,
    data: { nama_kriteria?: string; jenis_kriteria?: string; bobot_kriteria?: number }
  ): Promise<Response<Kriteria>> {
    try {
      const existingCriterion = await this.kriteriaRepo.getKriteriaById(id);

      if (!existingCriterion) {
        return {
          status: "error",
          message: `Kriteria dengan ID ${id} tidak ditemukan.`,
        };
      }

      const updatedCriterion = await this.kriteriaRepo.updateKriteria(id, data);
      return {
        status: "success",
        message: "Data kriteria berhasil diperbarui.",
        data: updatedCriterion,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal memperbarui data kriteria.",
        error: error.message,
      };
    }
  }

  // Delete a criterion
  async deleteKriteria(id: number): Promise<Response<null>> {
    try {
      const existingCriterion = await this.kriteriaRepo.getKriteriaById(id);

      if (!existingCriterion) {
        return {
          status: "error",
          message: `Kriteria dengan ID ${id} tidak ditemukan.`,
        };
      }

      await this.kriteriaRepo.deleteKriteria(id);
      return {
        status: "success",
        message: "Kriteria berhasil dihapus.",
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal menghapus kriteria.",
        error: error.message,
      };
    }
  }
}
