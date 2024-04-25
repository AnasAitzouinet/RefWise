/*
  Warnings:

  - You are about to drop the column `jobTitleId` on the `Candidates` table. All the data in the column will be lost.
  - You are about to drop the column `specialityId` on the `Candidates` table. All the data in the column will be lost.
  - You are about to drop the `JobTitle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Speciality` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `speciality` to the `Comapnies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speciality` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "JobType" ADD VALUE 'Remote';

-- DropForeignKey
ALTER TABLE "Candidates" DROP CONSTRAINT "Candidates_jobTitleId_fkey";

-- DropForeignKey
ALTER TABLE "Candidates" DROP CONSTRAINT "Candidates_specialityId_fkey";

-- DropForeignKey
ALTER TABLE "Comapnies" DROP CONSTRAINT "Comapnies_specialityId_fkey";

-- DropForeignKey
ALTER TABLE "JobTitle" DROP CONSTRAINT "JobTitle_specialityId_fkey";

-- DropForeignKey
ALTER TABLE "Jobs" DROP CONSTRAINT "Jobs_specialityId_fkey";

-- AlterTable
ALTER TABLE "Candidates" DROP COLUMN "jobTitleId",
DROP COLUMN "specialityId",
ADD COLUMN     "job_title" TEXT,
ADD COLUMN     "speciality" TEXT;

-- AlterTable
ALTER TABLE "Comapnies" ADD COLUMN     "speciality" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "speciality" TEXT NOT NULL;

-- DropTable
DROP TABLE "JobTitle";

-- DropTable
DROP TABLE "Speciality";
