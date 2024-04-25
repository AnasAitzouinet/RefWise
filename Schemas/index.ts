import * as z from "zod"
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
import { UserType, JobType } from "@prisma/client";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    fullname: z.string().min(2),
    avatar: z.any().refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
    ).optional(),
    phone: z.string().optional(),
    type: z.nativeEnum(UserType).optional(),
    resume: z.any().optional(),
})

export const Candidate = z.object({
    job_title: z.string().min(2),
    description: z.string().min(2),
    speciality: z.string().min(2),
    location: z.string().min(2),
    employment_type: z.nativeEnum(JobType),
    experience: z.number().min(1),
    // skills: z.array(z.string()).optional(),
})

export const Job = z.object({
    job_title: z.string().min(2),
    title: z.string().min(2),
    description: z.string().min(2),
    type: z.nativeEnum(JobType),
    location: z.string().min(2),
     speciality: z.string().min(2),
    experience: z.number().min(1),
    benefits: z.array(z.string()).optional(),
    applicationsDeadline: z.date().optional(),
    minSalary: z.number().optional(),
    maxSalary: z.number().optional(),

})