/*
  Warnings:

  - Added the required column `fortitudeSave` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gold` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iniciative` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reflexSave` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondAtk` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `willSave` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "fortitudeSave" INTEGER NOT NULL,
ADD COLUMN     "gold" INTEGER NOT NULL,
ADD COLUMN     "iniciative" INTEGER NOT NULL,
ADD COLUMN     "reflexSave" INTEGER NOT NULL,
ADD COLUMN     "secondAtk" INTEGER NOT NULL,
ADD COLUMN     "willSave" INTEGER NOT NULL;
