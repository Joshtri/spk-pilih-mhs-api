/*
  Warnings:

  - You are about to drop the column `nama` on the `kelas` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nama_kelas]` on the table `Kelas` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nama_kelas` to the `Kelas` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Kelas_nama_key` ON `kelas`;

-- AlterTable
ALTER TABLE `kelas` DROP COLUMN `nama`,
    ADD COLUMN `nama_kelas` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Kelas_nama_kelas_key` ON `Kelas`(`nama_kelas`);
