/*
  Warnings:

  - You are about to drop the column `nilai` on the `penilaian` table. All the data in the column will be lost.
  - Added the required column `nilai_kriteria` to the `Penilaian` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `penilaian` DROP COLUMN `nilai`,
    ADD COLUMN `nilai_kriteria` DOUBLE NOT NULL;
