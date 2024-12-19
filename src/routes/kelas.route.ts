import { Router, Request, Response } from "express";
import { KelasController } from "../controllers/kelas.controller";

const kelasRoute = Router();
const kelasController = new KelasController();

// Define routes for Kelas
kelasRoute.get("/kelas", async (req: Request, res: Response) => {
  await kelasController.getAllKelas(req, res);
});

kelasRoute.get("/kelas/:id", async (req: Request, res: Response) => {
  await kelasController.getKelasById(req, res);
});

kelasRoute.post("/kelas", async (req: Request, res: Response) => {
  await kelasController.createKelas(req, res);
});

kelasRoute.put("/kelas/:id", async (req: Request, res: Response) => {
  await kelasController.updateKelas(req, res);
});

kelasRoute.delete("/kelas/:id", async (req: Request, res: Response) => {
  await kelasController.deleteKelas(req, res);
});

export default kelasRoute;
