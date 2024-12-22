import { Request, Response } from "express";
import { PenilaianService } from "../services/penilaian.service";

export class PenilaianController {
  private service: PenilaianService;

  constructor() {
    this.service = new PenilaianService();
  }

  async getAllPenilaian(req: Request, res: Response) {
    try {
      const penilaian = await this.service.getAllPenilaian();
      res.status(200).json(penilaian);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getPenilaianById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const penilaian = await this.service.getPenilaianById(parseInt(id));
      res.status(200).json(penilaian);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async createPenilaian(req: Request, res: Response) {
    try {
      const { siswaId, kriteriaId, nilai_kriteria } = req.body;
      const penilaian = await this.service.createPenilaian(
        parseInt(siswaId),
        parseInt(kriteriaId),
        parseFloat(nilai_kriteria)
      );
      res.status(201).json(penilaian);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async updatePenilaian(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { siswaId, kriteriaId, nilai_kriteria } = req.body;
      const penilaian = await this.service.updatePenilaian(
        parseInt(id),
        parseInt(siswaId),
        parseInt(kriteriaId),
        parseFloat(nilai_kriteria)
      );
      res.status(200).json(penilaian);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async deletePenilaian(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.service.deletePenilaian(parseInt(id));
      res.status(204).send();
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }
}
