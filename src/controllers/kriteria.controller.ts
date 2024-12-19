import { Request, Response } from "express";
import { KriteriaService } from "../services/kriteria.service";

export class KriteriaController {
  private kriteriaService: KriteriaService;

  constructor() {
    this.kriteriaService = new KriteriaService();
  }

  // Handler to fetch all criteria
  async getAllKriteria(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.kriteriaService.getAllKriteria();
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat mengambil data kriteria.",
        error: error.message,
      });
    }
  }

  // Handler to get a single criterion by ID
  async getKriteriaById(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const result = await this.kriteriaService.getKriteriaById(id);

      if (result.status === "error") {
        return res.status(404).json(result);
      }

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat mengambil data kriteria.",
        error: error.message,
      });
    }
  }

  // Handler to create a new criterion
  async createKriteria(req: Request, res: Response): Promise<Response> {
    try {
      const { nama_kriteria, jenis_kriteria, bobot_kriteria } = req.body;

      // Data langsung diteruskan ke service tanpa perlu mapping karena sesuai dengan model Prisma
      const result = await this.kriteriaService.createKriteria({
        nama_kriteria,
        jenis_kriteria,
        bobot_kriteria,
      });

      if (result.status === "error") {
        return res.status(400).json(result);
      }

      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat membuat kriteria.",
        error: error.message,
      });
    }
  }

  // Handler to update an existing criterion
  async updateKriteria(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { nama_kriteria, jenis_kriteria, bobot_kriteria } = req.body;

      // Data langsung diteruskan ke service tanpa perlu mapping karena sesuai dengan model Prisma
      const result = await this.kriteriaService.updateKriteria(id, {
        nama_kriteria,
        jenis_kriteria,
        bobot_kriteria,
      });

      if (result.status === "error") {
        return res.status(404).json(result);
      }

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat memperbarui data kriteria.",
        error: error.message,
      });
    }
  }

  // Handler to delete a criterion
  async deleteKriteria(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const result = await this.kriteriaService.deleteKriteria(id);

      if (result.status === "error") {
        return res.status(404).json(result);
      }

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat menghapus kriteria.",
        error: error.message,
      });
    }
  }
}
