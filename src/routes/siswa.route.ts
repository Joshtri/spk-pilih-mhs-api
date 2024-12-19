import { Router, Request, Response } from "express";
import { SiswaController } from "../controllers/siswa.controller";

const siswaRoute = Router();
const siswaController = new SiswaController();

// Define routes for Siswa
siswaRoute.get("/siswa", async (req: Request, res: Response) => {
  await siswaController.getAllSiswa(req, res);
});

siswaRoute.get("/siswa/:id", async (req: Request, res: Response) => {
  await siswaController.getSiswaById(req, res);
});

siswaRoute.post("/siswa", async (req: Request, res: Response) => {
  await siswaController.createSiswa(req, res);
});

siswaRoute.put("/siswa/:id", async (req: Request, res: Response) => {
  await siswaController.updateSiswa(req, res);
});

siswaRoute.delete("/siswa/:id", async (req: Request, res: Response) => {
  await siswaController.deleteSiswa(req, res);
});

export default siswaRoute;
