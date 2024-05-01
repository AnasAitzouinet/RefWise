/*
  Warnings:

  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `candidateId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fullname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `google_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `refereeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Advertisments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Candidates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comapnies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Connections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Jobs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Referees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CandidatesToJobs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `companyName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Advertisments" DROP CONSTRAINT "Advertisments_byRefereeId_fkey";

-- DropForeignKey
ALTER TABLE "Candidates" DROP CONSTRAINT "Candidates_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Connections" DROP CONSTRAINT "Connections_connectedByRefereeId_fkey";

-- DropForeignKey
ALTER TABLE "Connections" DROP CONSTRAINT "Connections_connectedCandidateId_fkey";

-- DropForeignKey
ALTER TABLE "Jobs" DROP CONSTRAINT "Jobs_HiringManagerID_fkey";

-- DropForeignKey
ALTER TABLE "Jobs" DROP CONSTRAINT "Jobs_advertismentsId_fkey";

-- DropForeignKey
ALTER TABLE "Referees" DROP CONSTRAINT "Referees_user_id_fkey";

-- DropForeignKey
ALTER TABLE "_CandidatesToJobs" DROP CONSTRAINT "_CandidatesToJobs_A_fkey";

-- DropForeignKey
ALTER TABLE "_CandidatesToJobs" DROP CONSTRAINT "_CandidatesToJobs_B_fkey";

-- DropIndex
DROP INDEX "User_candidateId_key";

-- DropIndex
DROP INDEX "User_google_id_key";

-- DropIndex
DROP INDEX "User_linkedin_id_key";

-- DropIndex
DROP INDEX "User_refereeId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
DROP COLUMN "candidateId",
DROP COLUMN "created_at",
DROP COLUMN "emailVerified",
DROP COLUMN "fullname",
DROP COLUMN "google_id",
DROP COLUMN "image",
DROP COLUMN "linkedin_id",
DROP COLUMN "password",
DROP COLUMN "phone",
DROP COLUMN "refereeId",
DROP COLUMN "type",
DROP COLUMN "updated_at",
DROP COLUMN "verified",
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "phone_number" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Advertisments";

-- DropTable
DROP TABLE "Candidates";

-- DropTable
DROP TABLE "Comapnies";

-- DropTable
DROP TABLE "Connections";

-- DropTable
DROP TABLE "Jobs";

-- DropTable
DROP TABLE "Referees";

-- DropTable
DROP TABLE "_CandidatesToJobs";

-- DropEnum
DROP TYPE "ConnectionType";

-- DropEnum
DROP TYPE "JobType";

-- DropEnum
DROP TYPE "UserType";
