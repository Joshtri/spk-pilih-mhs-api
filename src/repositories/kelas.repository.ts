import Kelas from "../models/kelas.model.js"; // Pastikan model sudah benar dengan TypeScript
import {BaseError } from 'sequelize';
// Interface untuk data kelas
interface KelasData {
  nama_kelas: string;
}

// Kelas Repository
class KelasRepository {
  /**
   * Create a new class entry
   * @param data - Data kelas yang akan dibuat
   * @returns Kelas
   */
  async createKelas(data: KelasData): Promise<Kelas> {
    try {
      const kelas = await Kelas.create(data);
      return kelas;
    } catch (error: any) {
      throw new Error("Failed to create class: " + error.message);
    }
  }

  /**
   * Find all classes
   * @returns List semua kelas
   */
  async findAllKelas(): Promise<Kelas[]> {
    try {
      const kelasList = await Kelas.findAll();
      return kelasList;
    } catch (error: any) {
      throw new Error("Failed to retrieve classes: " + error.message);
    }
  }

  /**
   * Find a class by ID
   * @param id_kelas - ID kelas
   * @returns Kelas atau null jika tidak ditemukan
   */
  async findKelasById(id_kelas: number): Promise<Kelas | null> {
    try {
      const kelas = await Kelas.findByPk(id_kelas);
      return kelas;
    } catch (error: any) {
      throw new Error("Failed to find class: " + error.message);
    }
  }

  /**
   * Update a class by ID
   * @param id_kelas - ID kelas
   * @param data - Data kelas untuk di-update
   * @returns Kelas yang diperbarui atau null jika tidak ditemukan
   */
  async updateKelas(id_kelas: number,data: Partial<KelasData>): Promise<Kelas | null> {
    try {
      const [updated] = await Kelas.update(data, {
        where: { id_kelas },
      });

      if (updated) {
        const updatedKelas = await this.findKelasById(id_kelas);
        return updatedKelas;
      }

      throw new Error("Class not found");
    } catch (error: unknown) {
        if (error instanceof BaseError) {
          // Tangani error spesifik dari Sequelize
          throw new Error("Sequelize Error: " + error.message);
        } else if (error instanceof Error) {
          // Tangani error umum
          throw new Error("Failed to update class: " + error.message);
        } else {
          // Jika error tidak diketahui
          throw new Error("An unknown error occurred.");
        }
      }
  }

  /**
   * Delete a class by ID
   * @param id_kelas - ID kelas
   * @returns Jumlah kelas yang dihapus
   */
  async deleteKelas(id_kelas: number): Promise<number> {
    try {
      const deleted = await Kelas.destroy({
        where: { id_kelas },
      });
      return deleted;
    } catch (error: any) {
      throw new Error("Failed to delete class: " + error.message);
    }
  }
}

export default new KelasRepository();
