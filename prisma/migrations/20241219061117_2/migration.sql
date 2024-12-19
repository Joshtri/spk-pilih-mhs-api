-- CreateTable
CREATE TABLE `SubKriteria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaSubKriteria` VARCHAR(191) NOT NULL,
    `kriteriaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubKriteria` ADD CONSTRAINT `SubKriteria_kriteriaId_fkey` FOREIGN KEY (`kriteriaId`) REFERENCES `Kriteria`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
