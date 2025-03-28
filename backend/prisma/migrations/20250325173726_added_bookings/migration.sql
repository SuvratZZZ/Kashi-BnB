-- AlterTable
ALTER TABLE `hotels` ADD COLUMN `rate` DECIMAL(65, 30) NOT NULL DEFAULT 0.0,
    ADD COLUMN `s1` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `s2` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `s3` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `s4` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE `bookings` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `time` DATETIME(3) NOT NULL,
    `hotelId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `hotels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
