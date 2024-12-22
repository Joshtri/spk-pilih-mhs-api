import express from "express";
import { PenilaianController } from "../controllers/penilaian.controller";

const penilaianRoute = express.Router();
const controller = new PenilaianController();

penilaianRoute.get("/penilaian", controller.getAllPenilaian.bind(controller));
penilaianRoute.get("/penilaian/:id", controller.getPenilaianById.bind(controller));
penilaianRoute.post("/penilaian", controller.createPenilaian.bind(controller));
penilaianRoute.put("/penilaian/:id", controller.updatePenilaian.bind(controller));
penilaianRoute.delete("/penilaian/:id", controller.deletePenilaian.bind(controller));

export default penilaianRoute;
