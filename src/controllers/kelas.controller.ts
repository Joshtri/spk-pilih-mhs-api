import { Request, Response } from "express";
import { KelasService } from "../services/kelas.service";

export class KelasController {
  private kelasService: KelasService;

  constructor() {
    this.kelasService = new KelasService();
  }

  // Handler to fetch all classes
  async getAllKelas(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.kelasService.getAllKelas();
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat mengambil data kelas.",
        error: error.message,
      });
    }
  }

  // Handler to get a class by ID
  async getKelasById(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id); // Parse ID from URL params
      const result = await this.kelasService.getKelasById(id);

      if (result.status === "error") {
        return res.status(404).json(result); // Return 404 if not found
      }

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat mengambil data kelas.",
        error: error.message,
      });
    }
  }

  // Handler to create a new class
  // Handler to create a new class
  async createKelas(req: Request, res: Response): Promise<Response> {
    try {
      const { nama_kelas } = req.body; // Get 'nama_kelas' from request body

      // Validate request body
      if (!nama_kelas || typeof nama_kelas !== "string" || nama_kelas.trim() === "") {
        return res.status(400).json({
          status: "error",
          message: "Nama kelas tidak valid. Pastikan nama_kelas berupa string dan tidak kosong.",
        });
      }

      // Call the service to create the class
      const result = await this.kelasService.createKelas(nama_kelas);

      if (result.status === "error") {
        return res.status(400).json(result); // Return 400 if validation fails
      }

      return res.status(201).json(result); // Return 201 for successful creation
    } catch (error: any) {
      console.error("[CONTROLLER] Error creating Kelas:", error.message);
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat membuat kelas baru.",
        error: error.message,
      });
    }
  }


  // Handler to update an existing class
  async updateKelas(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id); // Parse ID from URL params
      const { nama_kelas } = req.body; // Get 'nama_kelas' from request body
      const result = await this.kelasService.updateKelas(id, nama_kelas);

      if (result.status === "error") {
        return res.status(404).json(result); // Return 404 if not found
      }

      return res.status(200).json(result); // Return 200 for successful update
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat memperbarui data kelas.",
        error: error.message,
      });
    }
  }

  // Handler to delete a class
  async deleteKelas(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id); // Parse ID from URL params
      const result = await this.kelasService.deleteKelas(id);

      if (result.status === "error") {
        return res.status(404).json(result); // Return 404 if not found
      }

      return res.status(200).json(result); // Return 200 for successful deletion
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat menghapus data kelas.",
        error: error.message,
      });
    }
  }
}
