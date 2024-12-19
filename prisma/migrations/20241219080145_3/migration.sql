/*
  Warnings:

  - You are about to drop the column `bobot` on the `kriteria` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `kriteria` table. All the data in the column will be lost.
  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bobotKriteria` to the `Kriteria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namaKriteria` to the `Kriteria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `kriteria` DROP COLUMN `bobot`,
    DROP COLUMN `nama`,
    ADD COLUMN `bobotKriteria` DOUBLE NOT NULL,
    ADD COLUMN `namaKriteria` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `admin`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
