// prisma/seed.js

import data from '../db/adjusted_dummy_users.json'
import prisma from "../lib/prisma";
import { UserType, JobType } from "@prisma/client";
import bcrypt from "bcryptjs";

async function main() {
    // Destructure the data
    const { candidates, referees } = data;
    const password = await bcrypt.hash("123456", 10);
    // Use a transaction if you want to ensure all inserts are successful
    await prisma.$transaction([
        // Loop through candidates and create each
        ...candidates.map(candidate =>
            prisma.user.create({
                data: {
                    fullname: candidate.fullname,
                    email: candidate.email,
                    type: candidate.type as UserType,
                    password,
                    candidate: {
                        create:
                        {
                            job_title: candidate.candidate.job_title,
                            description: candidate.candidate.description,
                            speciality: candidate.candidate.speciality,
                            location: candidate.candidate.location,
                            employment_type: candidate.candidate.employment_type as JobType,
                            experience: candidate.candidate.experience,
                        },
                    },
                },
            })
        ),

        // Loop through referees and create each
        ...referees.map(referee =>
            prisma.user.create({
                data: {
                    fullname: referee.fullname,
                    email: referee.email,
                    type: referee.type as UserType,
                    referee: {
                        create: referee.referee,
                    },
                },
            })
        ),
    ]);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
