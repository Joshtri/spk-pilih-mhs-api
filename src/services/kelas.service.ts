import { KelasRepository } from "../repositories/kelas.repository";
import { Kelas } from "@prisma/client";
import { Response } from "../interfaces/response.interface";

// Define the structure of the response
// interface Response<T> {
//   status: string;
//   message: string;
//   data?: T;
//   error?: string;
// }

export class KelasService {
  private kelasRepo: KelasRepository;

  constructor(kelasRepo: KelasRepository = new KelasRepository()) {
    this.kelasRepo = kelasRepo;
  }

  // Fetch all classes
  async getAllKelas(): Promise<Response<Kelas[]>> {
    try {
      const classes = await this.kelasRepo.getAllKelas();
      return {
        status: "success",
        message: "Data kelas berhasil diambil.",
        data: classes,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal mengambil data kelas.",
        error: error.message,
      };
    }
  }

  // Get a single class by ID
  async getKelasById(id: number): Promise<Response<Kelas>> {
    try {
      const kelas = await this.kelasRepo.getKelasById(id);

      if (!kelas) {
        return {
          status: "error",
          message: `Kelas dengan ID ${id} tidak ditemukan.`,
        };
      }

      return {
        status: "success",
        message: "Data kelas berhasil ditemukan.",
        data: kelas,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal mengambil data kelas.",
        error: error.message,
      };
    }
  }

  // Create a new class
  async createKelas(nama: string): Promise<Response<Kelas>> {
    try {
      // Check if the class name already exists
      const existingClasses = await this.kelasRepo.getAllKelas();
      if (existingClasses.some((kelas) => kelas.nama === nama)) {
        return {
          status: "error",
          message: `Kelas dengan nama "${nama}" sudah ada.`,
        };
      }

      const newClass = await this.kelasRepo.createKelas(nama);
      return {
        status: "success",
        message: "Kelas baru berhasil dibuat.",
        data: newClass,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal membuat kelas baru.",
        error: error.message,
      };
    }
  }

  // Update an existing class
  async updateKelas(id: number, nama: string): Promise<Response<Kelas>> {
    try {
      // Check if the class exists
      const existingClass = await this.kelasRepo.getKelasById(id);

      if (!existingClass) {
        return {
          status: "error",
          message: `Kelas dengan ID ${id} tidak ditemukan.`,
        };
      }

      const updatedClass = await this.kelasRepo.updateKelas(id, nama);
      return {
        status: "success",
        message: "Data kelas berhasil diperbarui.",
        data: updatedClass,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal memperbarui data kelas.",
        error: error.message,
      };
    }
  }

  // Delete a class
  async deleteKelas(id: number): Promise<Response<null>> {
    try {
      // Check if the class exists
      const existingClass = await this.kelasRepo.getKelasById(id);

      if (!existingClass) {
        return {
          status: "error",
          message: `Kelas dengan ID ${id} tidak ditemukan.`,
        };
      }

      await this.kelasRepo.deleteKelas(id);
      return {
        status: "success",
        message: "Kelas berhasil dihapus.",
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal menghapus kelas.",
        error: error.message,
      };
    }
  }
}
