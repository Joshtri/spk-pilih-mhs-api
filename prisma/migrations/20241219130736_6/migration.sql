/*
  Warnings:

  - Added the required column `bobot_sub_kriteria` to the `SubKriteria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subkriteria` ADD COLUMN `bobot_sub_kriteria` DOUBLE NOT NULL;
