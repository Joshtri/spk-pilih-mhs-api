import { Request, Response } from "express";
import { SubKriteriaService } from "../services/subKriteria.service";

export class SubKriteriaController {
  private subKriteriaService: SubKriteriaService;

  constructor() {
    this.subKriteriaService = new SubKriteriaService();
  }

  // Handler to fetch all SubKriteria
  async getAllSubKriteria(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.subKriteriaService.getAllSubKriteria();
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat mengambil data SubKriteria.",
        error: error.message,
      });
    }
  }

  // Handler to get a single SubKriteria by ID
  async getSubKriteriaById(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const result = await this.subKriteriaService.getSubKriteriaById(id);

      if (result.status === "error") {
        return res.status(404).json(result);
      }

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat mengambil data SubKriteria.",
        error: error.message,
      });
    }
  }

  // Handler to create a new SubKriteria
  async createSubKriteria(req: Request, res: Response): Promise<Response> {
    try {
      const { nama_sub_kriteria, bobot_sub_kriteria, kriteriaId } = req.body;
      const result = await this.subKriteriaService.createSubKriteria({
        nama_sub_kriteria,
        bobot_sub_kriteria,
        kriteriaId,
      });

      if (result.status === "error") {
        return res.status(400).json(result);
      }

      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat membuat SubKriteria.",
        error: error.message,
      });
    }
  }

  // Handler to update an existing SubKriteria
  async updateSubKriteria(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { nama_sub_kriteria, bobot_sub_kriteria, kriteriaId } = req.body;

      const result = await this.subKriteriaService.updateSubKriteria(id, {
        nama_sub_kriteria,
        bobot_sub_kriteria,
        kriteriaId,
      });

      if (result.status === "error") {
        return res.status(404).json(result);
      }

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat memperbarui data SubKriteria.",
        error: error.message,
      });
    }
  }

  // Handler to delete a SubKriteria by ID
  async deleteSubKriteria(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const result = await this.subKriteriaService.deleteSubKriteria(id);

      if (result.status === "error") {
        return res.status(404).json(result);
      }

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat menghapus SubKriteria.",
        error: error.message,
      });
    }
  }
}

