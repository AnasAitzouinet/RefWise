/*
  Warnings:

  - You are about to drop the column `job_title` on the `Candidates` table. All the data in the column will be lost.
  - You are about to drop the column `speciality` on the `Candidates` table. All the data in the column will be lost.
  - The `skills` column on the `Candidates` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `speciality` on the `Comapnies` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `Jobs` table. All the data in the column will be lost.
  - You are about to drop the column `speciality` on the `Jobs` table. All the data in the column will be lost.
  - Added the required column `specialityId` to the `Comapnies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialityId` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidates" DROP COLUMN "job_title",
DROP COLUMN "speciality",
ADD COLUMN     "jobTitleId" INTEGER,
ADD COLUMN     "specialityId" INTEGER,
DROP COLUMN "skills",
ADD COLUMN     "skills" TEXT[];

-- AlterTable
ALTER TABLE "Comapnies" DROP COLUMN "speciality",
ADD COLUMN     "specialityId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Jobs" DROP COLUMN "skills",
DROP COLUMN "speciality",
ADD COLUMN     "specialityId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "CompanyType";

-- DropEnum
DROP TYPE "JobTitle";

-- DropEnum
DROP TYPE "Speciality";

-- CreateTable
CREATE TABLE "Speciality" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Speciality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobTitle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "skills" TEXT[],
    "specialityId" INTEGER,

    CONSTRAINT "JobTitle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Candidates" ADD CONSTRAINT "Candidates_jobTitleId_fkey" FOREIGN KEY ("jobTitleId") REFERENCES "JobTitle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidates" ADD CONSTRAINT "Candidates_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "Speciality"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "Speciality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comapnies" ADD CONSTRAINT "Comapnies_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "Speciality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobTitle" ADD CONSTRAINT "JobTitle_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "Speciality"("id") ON DELETE SET NULL ON UPDATE CASCADE;
