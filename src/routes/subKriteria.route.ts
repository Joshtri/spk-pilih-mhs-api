import { Router, Request, Response } from "express";
import { SubKriteriaController } from "../controllers/subKriteria.controller";

const subKriteriaRoutes = Router();

const subKriteriaController = new SubKriteriaController();

subKriteriaRoutes.get("/subkriteria", (req: Request, res: Response) => {
    subKriteriaController.getAllSubKriteria(req, res)
});

subKriteriaRoutes.get("/subkriteria/:id", (req: Request, res: Response) => {
    subKriteriaController.getSubKriteriaById(req, res)
});


subKriteriaRoutes.post("/subkriteria", (req: Request, res: Response) => {
    subKriteriaController.createSubKriteria(req, res)
});

subKriteriaRoutes.put("/subkriteria/:id", (req: Request, res: Response) => {
    subKriteriaController.updateSubKriteria(req, res)
});


subKriteriaRoutes.delete("/subkriteria/:id", (req: Request, res: Response) => {
    subKriteriaController.deleteSubKriteria(req, res)
});

export default subKriteriaRoutes;
