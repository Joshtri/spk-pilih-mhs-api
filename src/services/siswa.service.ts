import { SiswaRepository } from "../repositories/siswa.repository";
import { Siswa } from "@prisma/client";
import { Response } from "../interfaces/response.interface";

// Define the structure of the response
// interface Response<T> {
//   status: string;
//   message: string;
//   data?: T;
//   error?: string;
// }

export class SiswaService {
  private siswaRepo: SiswaRepository;

  constructor(siswaRepo: SiswaRepository = new SiswaRepository()) {
    this.siswaRepo = siswaRepo;
  }

  // Fetch all students
  async getAllSiswa(): Promise<Response<Siswa[]>> {
    try {
      const students = await this.siswaRepo.getAllSiswa();
      return {
        status: "success",
        message: "Data siswa berhasil diambil.",
        data: students,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal mengambil data siswa.",
        error: error.message,
      };
    }
  }

  // Get a single student by ID
  async getSiswaById(id: number): Promise<Response<Siswa>> {
    try {
      const student = await this.siswaRepo.getSiswaById(id);

      if (!student) {
        return {
          status: "error",
          message: `Siswa dengan ID ${id} tidak ditemukan.`,
        };
      }

      return {
        status: "success",
        message: "Data siswa berhasil ditemukan.",
        data: student,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal mengambil data siswa.",
        error: error.message,
      };
    }
  }

  // Create a new student
  async createSiswa(data: { nisn: string; nama: string; jenisKelamin: string; alamat: string; kelasId: number }): Promise<Response<Siswa>> {
    try {
      // Check if NISN is already used
      const existingStudents = await this.siswaRepo.getAllSiswa();
      if (existingStudents.some((student) => student.nisn === data.nisn)) {
        return {
          status: "error",
          message: `Siswa dengan NISN "${data.nisn}" sudah ada.`,
        };
      }

      const newStudent = await this.siswaRepo.createSiswa(data);
      return {
        status: "success",
        message: "Siswa baru berhasil ditambahkan.",
        data: newStudent,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal menambahkan siswa baru.",
        error: error.message,
      };
    }
  }

  // Update an existing student
  async updateSiswa(
    id: number,
    data: { nisn?: string; nama?: string; jenisKelamin?: string; alamat?: string; kelasId?: number }
  ): Promise<Response<Siswa>> {
    try {
      // Check if the student exists
      const existingStudent = await this.siswaRepo.getSiswaById(id);

      if (!existingStudent) {
        return {
          status: "error",
          message: `Siswa dengan ID ${id} tidak ditemukan.`,
        };
      }

      const updatedStudent = await this.siswaRepo.updateSiswa(id, data);
      return {
        status: "success",
        message: "Data siswa berhasil diperbarui.",
        data: updatedStudent,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal memperbarui data siswa.",
        error: error.message,
      };
    }
  }

  // Delete a student
  async deleteSiswa(id: number): Promise<Response<null>> {
    try {
      // Check if the student exists
      const existingStudent = await this.siswaRepo.getSiswaById(id);

      if (!existingStudent) {
        return {
          status: "error",
          message: `Siswa dengan ID ${id} tidak ditemukan.`,
        };
      }

      await this.siswaRepo.deleteSiswa(id);
      return {
        status: "success",
        message: "Siswa berhasil dihapus.",
      };
    } catch (error: any) {
      return {
        status: "error",
        message: "Gagal menghapus siswa.",
        error: error.message,
      };
    }
  }
}
