-- AlterTable
ALTER TABLE "Candidates" ALTER COLUMN "job_title" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "speciality" DROP NOT NULL,
ALTER COLUMN "employment_type" DROP NOT NULL,
ALTER COLUMN "experience" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL;