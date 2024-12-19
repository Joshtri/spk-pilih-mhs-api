import { Router, Request, Response } from "express";
import { KriteriaController } from "../controllers/kriteria.controller";

const kriteriaRoute = Router();
const kriteriaController = new KriteriaController();

kriteriaRoute.get("/kriteria", (req: Request, res: Response) => {
    kriteriaController.getAllKriteria(req, res)
});

kriteriaRoute.get("/kriteria/:id", (req, res) => {
    kriteriaController.getKriteriaById(req, res)
});

kriteriaRoute.post("/kriteria", (req, res) => {
    kriteriaController.createKriteria(req, res)

});

kriteriaRoute.put("/kriteria/:id", (req, res) => {
    kriteriaController.updateKriteria(req, res)
});

kriteriaRoute.delete("/kriteria/:id", (req, res) => {
    kriteriaController.deleteKriteria(req, res)
});

export default kriteriaRoute;
