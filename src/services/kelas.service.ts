import kelasRepository from "../repositories/kelas.repository.js";
import { createKelasSchema, updateKelasSchema, idKelasSchema } from "../validations/kelas.validation.js";

/**
 * Handler untuk membuat kelas
 * @param data - Data kelas yang akan dibuat
 * @returns Kelas yang berhasil dibuat
 */
async function createKelasHandler(data: any) {
  // Validasi data menggunakan Joi
  const { error, value } = createKelasSchema.validate(data);

  if (error) {
    throw new Error("Validation Error: " + error.details[0].message);
  }

  // Lanjutkan ke proses berikutnya jika data valid
  const kelas = await kelasRepository.createKelas(value);
  return kelas;
}

/**
 * Handler untuk mendapatkan semua kelas
 * @returns Daftar kelas
 */
async function findAllKelasHandler() {
  return kelasRepository.findAllKelas();
}

/**
 * Handler untuk mendapatkan kelas berdasarkan ID
 * @param id_kelas - ID kelas
 * @returns Kelas atau null jika tidak ditemukan
 */
async function findKelasByIdHandler(id_kelas: number) {
  // Validasi ID kelas
  const { error } = idKelasSchema.validate({ id_kelas });

  if (error) {
    throw new Error("Validation Error: " + error.details[0].message);
  }

  const kelas = await kelasRepository.findKelasById(id_kelas);
  return kelas;
}

/**
 * Handler untuk memperbarui kelas berdasarkan ID
 * @param id_kelas - ID kelas
 * @param data - Data kelas yang ingin diperbarui
 * @returns Kelas yang diperbarui atau null jika tidak ditemukan
 */
async function updateKelasHandler(id_kelas: number, data: any) {
  // Validasi ID kelas
  const { error: idError } = idKelasSchema.validate({ id_kelas });

  if (idError) {
    throw new Error("Validation Error: " + idError.details[0].message);
  }

  // Validasi data kelas untuk pembaruan
  const { error } = updateKelasSchema.validate(data);

  if (error) {
    throw new Error("Validation Error: " + error.details[0].message);
  }

  const updatedKelas = await kelasRepository.updateKelas(id_kelas, data);
  return updatedKelas;
}

/**
 * Handler untuk menghapus kelas berdasarkan ID
 * @param id_kelas - ID kelas
 * @returns Status penghapusan kelas
 */
async function deleteKelasHandler(id_kelas: number) {
  // Validasi ID kelas
  const { error } = idKelasSchema.validate({ id_kelas });

  if (error) {
    throw new Error("Validation Error: " + error.details[0].message);
  }

  const deleted = await kelasRepository.deleteKelas(id_kelas);
  return deleted;
}

export default {
  createKelasHandler,
  findAllKelasHandler,
  findKelasByIdHandler,
  updateKelasHandler,
  deleteKelasHandler,
};
