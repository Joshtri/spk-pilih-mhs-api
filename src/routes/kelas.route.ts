import { Router } from "express";
import {
  createKelas,
  findAllKelas,
  findKelasById,
  updateKelas,
  deleteKelas,
} from "../controllers/kelas.controller"; // Import controller kelas

const kelasRoute = Router();

// Route untuk membuat kelas baru
kelasRoute.post("/kelas", createKelas);

// Route untuk mendapatkan semua kelas
kelasRoute.get("/kelas", findAllKelas);

// Route untuk mendapatkan kelas berdasarkan ID
kelasRoute.get("/kelas/:id_kelas", findKelasById);

// Route untuk memperbarui kelas berdasarkan ID
kelasRoute.put("/kelas/:id_kelas", updateKelas);

// Route untuk menghapus kelas berdasarkan ID
kelasRoute.delete("/kelas/:id_kelas", deleteKelas);

export default kelasRoute;
