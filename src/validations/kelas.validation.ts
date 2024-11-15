import Joi from "joi";

// Skema validasi untuk data kelas
export const createKelasSchema = Joi.object({
  nama_kelas: Joi.string().max(50).required().messages({
    "string.base": "Nama kelas harus berupa teks.",
    "string.empty": "Nama kelas tidak boleh kosong.",
    "string.max": "Nama kelas tidak boleh lebih dari 50 karakter.",
    "any.required": "Nama kelas wajib diisi.",
  }),
});

// Skema validasi untuk data pembaruan kelas (partial update)
export const updateKelasSchema = Joi.object({
  nama_kelas: Joi.string().max(50).optional().messages({
    "string.base": "Nama kelas harus berupa teks.",
    "string.max": "Nama kelas tidak boleh lebih dari 50 karakter.",
  }),
});

// Skema validasi untuk ID kelas
export const idKelasSchema = Joi.object({
  id_kelas: Joi.number().integer().positive().required().messages({
    "number.base": "ID kelas harus berupa angka.",
    "number.integer": "ID kelas harus berupa bilangan bulat.",
    "number.positive": "ID kelas harus berupa angka positif.",
    "any.required": "ID kelas wajib diisi.",
  }),
});
