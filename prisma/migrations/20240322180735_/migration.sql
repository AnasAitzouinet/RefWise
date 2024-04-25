/*
  Warnings:

  - Added the required column `job_title` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "job_title" TEXT NOT NULL;
