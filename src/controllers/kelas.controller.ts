import type { Request, Response } from "express";
import kelasService from "../services/kelas.service.js";

/**
 * Controller untuk membuat kelas baru
 */
export const createKelas = async (req: Request, res: Response) : Promise<void> => {
  try {
    const data = req.body;
    const result = await kelasService.createKelasHandler(data);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Controller untuk mendapatkan semua kelas
 */
export const findAllKelas = async (req: Request, res: Response) : Promise<void> => {
  try {
    const result = await kelasService.findAllKelasHandler();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Controller untuk mendapatkan kelas berdasarkan ID
 */
export const findKelasById = async (req: Request, res: Response) : Promise<void> => {
  try {
    const { id_kelas } = req.params;
    const result = await kelasService.findKelasByIdHandler(Number(id_kelas));

    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: "Kelas not found" });
    }
  } catch (error: any) {
        res.status(400).json({ error: error.message });
  }
};

/**
 * Controller untuk memperbarui kelas
 */
export const updateKelas = async (req: Request, res: Response) => {
  try {
    const { id_kelas } = req.params;
    const data = req.body;
    const result = await kelasService.updateKelasHandler(Number(id_kelas), data);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Controller untuk menghapus kelas berdasarkan ID
 */
export const deleteKelas = async (req: Request, res: Response) : Promise<void> => {
  try {
    const { id_kelas } = req.params;
    const result = await kelasService.deleteKelasHandler(Number(id_kelas));
    res.status(200).json({ message: "Kelas deleted successfully", deleted: result });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
