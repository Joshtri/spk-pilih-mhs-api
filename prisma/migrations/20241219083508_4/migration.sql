/*
  Warnings:

  - You are about to drop the column `skorAkhir` on the `hasil` table. All the data in the column will be lost.
  - You are about to drop the column `skorNormal` on the `hasil` table. All the data in the column will be lost.
  - You are about to drop the column `bobotKriteria` on the `kriteria` table. All the data in the column will be lost.
  - You are about to drop the column `jenis` on the `kriteria` table. All the data in the column will be lost.
  - You are about to drop the column `namaKriteria` on the `kriteria` table. All the data in the column will be lost.
  - You are about to drop the column `jenisKelamin` on the `siswa` table. All the data in the column will be lost.
  - You are about to drop the column `namaSubKriteria` on the `subkriteria` table. All the data in the column will be lost.
  - Added the required column `skor_akhir` to the `Hasil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skor_normal` to the `Hasil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bobot_kriteria` to the `Kriteria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jenis_kriteria` to the `Kriteria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_kriteria` to the `Kriteria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jenis_kelamin` to the `Siswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_sub_kriteria` to the `SubKriteria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hasil` DROP COLUMN `skorAkhir`,
    DROP COLUMN `skorNormal`,
    ADD COLUMN `skor_akhir` DOUBLE NOT NULL,
    ADD COLUMN `skor_normal` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `kriteria` DROP COLUMN `bobotKriteria`,
    DROP COLUMN `jenis`,
    DROP COLUMN `namaKriteria`,
    ADD COLUMN `bobot_kriteria` DOUBLE NOT NULL,
    ADD COLUMN `jenis_kriteria` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama_kriteria` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `siswa` DROP COLUMN `jenisKelamin`,
    ADD COLUMN `jenis_kelamin` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `subkriteria` DROP COLUMN `namaSubKriteria`,
    ADD COLUMN `nama_sub_kriteria` VARCHAR(191) NOT NULL;
