import { Request, Response } from "express";
import { SiswaService } from "../services/siswa.service";

export class SiswaController {
  private siswaService: SiswaService;

  constructor() {
    this.siswaService = new SiswaService();
  }

  // Handler to fetch all students
  async getAllSiswa(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.siswaService.getAllSiswa();
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat mengambil data siswa.",
        error: error.message,
      });
    }
  }

  // Handler to get a single student by ID
  async getSiswaById(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id); // Parse ID from URL params
      const result = await this.siswaService.getSiswaById(id);

      if (result.status === "error") {
        return res.status(404).json(result); // Return 404 if student not found
      }

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat mengambil data siswa.",
        error: error.message,
      });
    }
  }

  // Handler to create a new student
  async createSiswa(req: Request, res: Response): Promise<Response> {
    try {
      const { nisn, nama, jenisKelamin, alamat, kelasId } = req.body;
      const result = await this.siswaService.createSiswa({
        nisn,
        nama,
        jenisKelamin,
        alamat,
        kelasId,
      });

      if (result.status === "error") {
        return res.status(400).json(result); // Return 400 if validation fails
      }

      return res.status(201).json(result); // Return 201 for successful creation
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat menambahkan siswa.",
        error: error.message,
      });
    }
  }

  // Handler to update an existing student
  async updateSiswa(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id); // Parse ID from URL params
      const { nisn, nama, jenisKelamin, alamat, kelasId } = req.body;

      const result = await this.siswaService.updateSiswa(id, {
        nisn,
        nama,
        jenisKelamin,
        alamat,
        kelasId,
      });

      if (result.status === "error") {
        return res.status(404).json(result); // Return 404 if student not found
      }

      return res.status(200).json(result); // Return 200 for successful update
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat memperbarui data siswa.",
        error: error.message,
      });
    }
  }

  // Handler to delete a student
  async deleteSiswa(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id); // Parse ID from URL params
      const result = await this.siswaService.deleteSiswa(id);

      if (result.status === "error") {
        return res.status(404).json(result); // Return 404 if student not found
      }

      return res.status(200).json(result); // Return 200 for successful deletion
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat menghapus siswa.",
        error: error.message,
      });
    }
  }
}
