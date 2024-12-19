import { SubKriteriaRepository } from "../repositories/subKriteria.repository";
import { SubKriteria } from "@prisma/client";
import { Response } from "../interfaces/response.interface";

export class SubKriteriaService {
  private subKriteriaRepo: SubKriteriaRepository;

  constructor(subKriteriaRepo: SubKriteriaRepository = new SubKriteriaRepository()) {
    this.subKriteriaRepo = subKriteriaRepo;
  }

  // Fetch all SubKriteria
  async getAllSubKriteria(): Promise<Response<SubKriteria[]>> {
    try {
      const subKriteriaList = await this.subKriteriaRepo.getAllSubKriteria();
      return {
        status: "success",
        message: "Data SubKriteria berhasil diambil.",
        data: subKriteriaList,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal mengambil data SubKriteria.",
        error: error.message,
      };
    }
  }

  // Get a single SubKriteria by ID
  async getSubKriteriaById(id: number): Promise<Response<SubKriteria>> {
    try {
      const subKriteria = await this.subKriteriaRepo.getSubKriteriaById(id);

      if (!subKriteria) {
        return {
          status: "error",
          message: `SubKriteria dengan ID ${id} tidak ditemukan.`,
        };
      }

      return {
        status: "success",
        message: "Data SubKriteria berhasil ditemukan.",
        data: subKriteria,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal mengambil data SubKriteria.",
        error: error.message,
      };
    }
  }

  // Create a new SubKriteria
  async createSubKriteria(data: {
    nama_sub_kriteria: string;
    bobot_sub_kriteria: number;
    kriteriaId: number;
  }): Promise<Response<SubKriteria>> {
    try {
      const newSubKriteria = await this.subKriteriaRepo.createSubKriteria(data);
      return {
        status: "success",
        message: "SubKriteria baru berhasil dibuat.",
        data: newSubKriteria,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal membuat SubKriteria baru.",
        error: error.message,
      };
    }
  }

  // Update an existing SubKriteria
  async updateSubKriteria(
    id: number,
    data: Partial<{
      nama_sub_kriteria: string;
      bobot_sub_kriteria: number;
      kriteriaId: number;
    }>
  ): Promise<Response<SubKriteria>> {
    try {
      const existingSubKriteria = await this.subKriteriaRepo.getSubKriteriaById(id);

      if (!existingSubKriteria) {
        return {
          status: "error",
          message: `SubKriteria dengan ID ${id} tidak ditemukan.`,
        };
      }

      const updatedSubKriteria = await this.subKriteriaRepo.updateSubKriteria(id, data);
      return {
        status: "success",
        message: "Data SubKriteria berhasil diperbarui.",
        data: updatedSubKriteria,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal memperbarui data SubKriteria.",
        error: error.message,
      };
    }
  }

  // Delete a SubKriteria by ID
  async deleteSubKriteria(id: number): Promise<Response<null>> {
    try {
      const existingSubKriteria = await this.subKriteriaRepo.getSubKriteriaById(id);

      if (!existingSubKriteria) {
        return {
          status: "error",
          message: `SubKriteria dengan ID ${id} tidak ditemukan.`,
        };
      }

      await this.subKriteriaRepo.deleteSubKriteria(id);
      return {
        status: "success",
        message: "SubKriteria berhasil dihapus.",
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal menghapus SubKriteria.",
        error: error.message,
      };
    }
  }
}

export default new SubKriteriaService();
