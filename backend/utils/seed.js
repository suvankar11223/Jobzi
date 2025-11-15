import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import { Company } from "../models/company.model.js";
import { Job } from "../models/job.model.js";
import { Application } from "../models/application.model.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB for seeding...");

        // Clear existing data
        await User.deleteMany({});
        await Company.deleteMany({});
        await Job.deleteMany({});
        await Application.deleteMany({});
        console.log("Cleared existing data...");

        // Hash password function
        const hashPassword = async (password) => {
            const salt = await bcrypt.genSalt(10);
            return await bcrypt.hash(password, salt);
        };

        // Create Users
        const hashedPassword1 = await hashPassword("password123");
        const hashedPassword2 = await hashPassword("password123");
        const hashedPassword3 = await hashPassword("password123");

        const users = [
            {
                _id: "68920be67b74daf1059164e0",
                fullname: "Admin Recruiter",
                email: "admin@jobportal.com",
                phoneNumber: 1234567890,
                password: hashedPassword1,
                role: "recruiter",
                profile: {
                    bio: "Admin recruiter for job portal",
                    profilePhoto: ""
                }
            },
            {
                fullname: "John Doe",
                email: "john.doe@example.com",
                phoneNumber: 1234567890,
                password: hashedPassword2,
                role: "student",
                profile: {
                    bio: "Aspiring software developer",
                    skills: ["JavaScript", "React"],
                    profilePhoto: ""
                }
            },
            {
                fullname: "Jane Smith",
                email: "jane.smith@example.com",
                phoneNumber: 1234567891,
                password: hashedPassword3,
                role: "student",
                profile: {
                    bio: "Full-stack developer",
                    skills: ["Python", "Django"],
                    profilePhoto: ""
                }
            }
        ];

        const createdUsers = await User.insertMany(users);
        console.log("Users created:", createdUsers.length);

        // Create Companies
        const companies = [
            {
                _id: "689218e269eb08e7794428de",
                name: "TechCorp Solutions",
                description: "Leading technology solutions provider",
                website: "https://techcorp.com",
                location: "Hyderabad",
                logo: "",
                userId: createdUsers[0]._id
            },
            {
                _id: "6892179b69eb08e7794428da",
                name: "InnovateLabs",
                description: "Innovation-driven startup",
                website: "https://innovatelabs.com",
                location: "Bangalore",
                logo: "",
                userId: createdUsers[0]._id
            },
            {
                _id: "689218eb69eb08e7794428e1",
                name: "DataSys Inc",
                description: "Data analytics company",
                website: "https://datasys.com",
                location: "Delhi",
                logo: "",
                userId: createdUsers[0]._id
            },
            {
                _id: "689265f831cf4683ae378a11",
                name: "NVIDIA",
                description: "Leading AI and graphics company",
                website: "https://nvidia.com",
                location: "Hyderabad",
                logo: "",
                userId: createdUsers[0]._id
            },
            {
                _id: "689265e631cf4683ae378a0e",
                name: "Google",
                description: "Tech giant",
                website: "https://google.com",
                location: "Bangalore",
                logo: "",
                userId: createdUsers[0]._id
            },
            {
                _id: "689265be31cf4683ae378a0b",
                name: "Microsoft",
                description: "Software company",
                website: "https://microsoft.com",
                location: "Delhi",
                logo: "",
                userId: createdUsers[0]._id
            },
            {
                _id: "6892e735a03c69e87d58b064",
                name: "Tesla",
                description: "Electric vehicle company",
                website: "https://tesla.com",
                location: "Mumbai",
                logo: "",
                userId: createdUsers[0]._id
            },
            {
                _id: "6892e76aa03c69e87d58b067",
                name: "Apple",
                description: "Consumer electronics company",
                website: "https://apple.com",
                location: "Pune",
                logo: "",
                userId: createdUsers[0]._id
            },
            {
                _id: "6892e778a03c69e87d58b06a",
                name: "Meta",
                description: "Social media company",
                website: "https://meta.com",
                location: "Hyderabad",
                logo: "",
                userId: createdUsers[0]._id
            }
        ];

        const createdCompanies = await Company.insertMany(companies);
        console.log("Companies created:", createdCompanies.length);

        // Update user profiles with company references
        // No need to update since all companies are under the same admin user

        // Create Jobs
        const jobs = [
            {
                _id: "689221afd46015bf82474856",
                title: "Frontend Developer",
                description: "As the comapny needs frontend developer for the upcoming projects",
                requirements: ["React", "JavaScript", "HTML", "CSS", "Redux", "Responsive Design"],
                salary: 12,
                experienceLevel: 1,
                location: "Hyderabad",
                jobType: "Full Time",
                position: 12,
                company: createdCompanies[0]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "68922223d46015bf82474858",
                title: "Backend Developer",
                description: "As the comapny needs backend developer for the upcoming projects",
                requirements: ["Node.js", "Express", "MongoDB", "REST APIs", "Authentication"],
                salary: 12,
                experienceLevel: 1,
                location: "Hyderabad,Bangalore",
                jobType: "Full Time",
                position: 13,
                company: createdCompanies[0]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "68922242d46015bf8247485a",
                title: "Backend Developer",
                description: "As the comapny needs backend developer for the upcoming projects",
                requirements: ["Node.js", "Express", "MongoDB", "REST APIs", "Authentication"],
                salary: 12,
                experienceLevel: 1,
                location: "Hyderabad,Bangalore",
                jobType: "Full Time",
                position: 13,
                company: createdCompanies[1]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "68922292d46015bf8247485c",
                title: "Data Analytics",
                description: "As the comapny needs Data Analyst for the upcoming projects",
                requirements: ["SQL", "Python", "Data Visualization", "Analytics"],
                salary: 12,
                experienceLevel: 1,
                location: "Hyderabad,Bangalore",
                jobType: "Full Time",
                position: 13,
                company: createdCompanies[1]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "689222a2d46015bf8247485e",
                title: "Data Analytics",
                description: "As the comapny needs Data Analyst for the upcoming projects",
                requirements: ["SQL", "Python", "Data Visualization", "Analytics"],
                salary: 12,
                experienceLevel: 1,
                location: "Hyderabad,Bangalore",
                jobType: "Full Time",
                position: 13,
                company: createdCompanies[2]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "689222f0d46015bf82474860",
                title: "AI Engineer",
                description: "As the comapny needs AI expert for the upcoming projects",
                requirements: ["Machine Learning", "Python", "TensorFlow", "AI Models", "Data Science", "Neural Networks"],
                salary: 12,
                experienceLevel: 1,
                location: "Hyderabad,Bangalore,Delhi",
                jobType: "Full Time",
                position: 13,
                company: createdCompanies[2]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "68922343d46015bf82474862",
                title: "DevOps",
                description: "As the comapny needs Devops for the upcoming projects",
                requirements: ["AWS", "Docker", "CI/CD", "Kubernetes"],
                salary: 12,
                experienceLevel: 1,
                location: "Hyderabad,Bangalore,Delhi",
                jobType: "Full Time",
                position: 15,
                company: createdCompanies[2]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "6892235bd46015bf82474864",
                title: "DevOps",
                description: "As the comapny needs Devops for the upcoming projects",
                requirements: ["AWS", "Docker", "CI/CD", "Kubernetes"],
                salary: 12,
                experienceLevel: 1,
                location: "Hyderabad,Bangalore,Delhi",
                jobType: "Full Time",
                position: 15,
                company: createdCompanies[0]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "689226303ad48d2380e13bbb",
                title: "DevOps",
                description: "As the comapny needs Devops for the upcoming projects",
                requirements: ["AWS", "Docker", "CI/CD", "Kubernetes"],
                salary: 12,
                experienceLevel: 1,
                location: "Hyderabad,Bangalore,Delhi",
                jobType: "Full Time",
                position: 15,
                company: createdCompanies[0]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "68926abf31cf4683ae378a1a",
                title: "Software Developer",
                description: "Design, develop, test, and maintain software applications. Work on fro…",
                requirements: ["Programming", "Software Development", "Testing", "Maintenance"],
                salary: 12,
                experienceLevel: 2,
                location: "Hyderabad,Bangalore,Delhi,Mumbai",
                jobType: "Full Time",
                position: 16,
                company: createdCompanies[3]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "68926b0331cf4683ae378a1c",
                title: "Software Developer",
                description: "Design, develop, test, and maintain software applications. Work on fro…",
                requirements: ["Programming", "Software Development", "Testing", "Maintenance"],
                salary: 12,
                experienceLevel: 2,
                location: "Hyderabad,Bangalore,Delhi,Mumbai",
                jobType: "Full Time",
                position: 16,
                company: createdCompanies[4]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "68926b5031cf4683ae378a1e",
                title: "Digital Marketing Specialist",
                description: "Plan and execute digital marketing campaigns, analyze performance metr…",
                requirements: ["Digital Marketing", "Campaigns", "Analytics"],
                salary: 12,
                experienceLevel: 2,
                location: "Honkong,Amsterdam",
                jobType: "Full Time",
                position: 16,
                company: createdCompanies[4]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "68926ba331cf4683ae378a20",
                title: "Financial Analyst",
                description: "Evaluate financial data, prepare reports, forecast trends, and assist …",
                requirements: ["Financial Analysis", "Reporting", "Forecasting"],
                salary: 12,
                experienceLevel: 2,
                location: "Honkong,Amsterdam",
                jobType: "Full Time",
                position: 16,
                company: createdCompanies[4]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "68926bcb31cf4683ae378a22",
                title: "Financial Analyst",
                description: "Evaluate financial data, prepare reports, forecast trends, and assist …",
                requirements: ["Financial Analysis", "Reporting", "Forecasting"],
                salary: 12,
                experienceLevel: 2,
                location: "Honkong,Amsterdam",
                jobType: "Full Time",
                position: 16,
                company: createdCompanies[5]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "6892f54ceb313477b1a50983",
                title: "Financial Analyst",
                description: "Evaluate financial data, prepare reports, forecast trends, and assist …",
                requirements: ["Financial Analysis", "Reporting", "Forecasting"],
                salary: 12,
                experienceLevel: 2,
                location: "Honkong,Amsterdam",
                jobType: "Full Time",
                position: 16,
                company: createdCompanies[6]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "6892f5cfeb313477b1a50985",
                title: "Software Engineer",
                description: "NVIDIA, you will be part of a dynamic team responsible for developing …",
                requirements: ["Software Engineering", "Development", "Teamwork"],
                salary: 18,
                experienceLevel: 2,
                location: "Honkong,Amsterdam,Pune,Hyderabad",
                jobType: "Full Time",
                position: 18,
                company: createdCompanies[6]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "6892f5f9eb313477b1a50987",
                title: "Software Engineer",
                description: "NVIDIA, you will be part of a dynamic team responsible for developing …",
                requirements: ["Software Engineering", "Development", "Teamwork"],
                salary: 18.5,
                experienceLevel: 2,
                location: "Honkong,Amsterdam,Pune,Hyderabad",
                jobType: "Full Time",
                position: 19,
                company: createdCompanies[7]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "6892f665eb313477b1a50989",
                title: "Senior Software Engineer",
                description: "As a Senior Software Engineer specializing in frontend development at …",
                requirements: ["Senior Software Engineering", "Frontend", "Leadership"],
                salary: 18.5,
                experienceLevel: 2,
                location: "Honkong,Amsterdam,Pune,Hyderabad,Mumbai",
                jobType: "Full Time",
                position: 19,
                company: createdCompanies[7]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "6892f69feb313477b1a5098b",
                title: "Senior Software Engineer",
                description: "As a Senior Software Engineer specializing in frontend development at …",
                requirements: ["Senior Software Engineering", "Frontend", "Leadership"],
                salary: 18.5,
                experienceLevel: 2,
                location: "Honkong,Amsterdam,Pune,Hyderabad,Mumbai",
                jobType: "Full Time",
                position: 19,
                company: createdCompanies[8]._id,
                created_by: createdUsers[0]._id,
                applications: []
            },
            {
                _id: "6892f6f1eb313477b1a5098d",
                title: "Data Scientist",
                description: "ou will work closely with product, engineering, and business teams to …",
                requirements: ["Data Science", "Machine Learning", "Analytics", "Team Collaboration", "Product Development", "Engineering"],
                salary: 24,
                experienceLevel: 2,
                location: "Honkong,Amsterdam,Pune,Hyderabad,Mumbai",
                jobType: "Full Time",
                position: 20,
                company: createdCompanies[8]._id,
                created_by: createdUsers[0]._id,
                applications: []
            }
        ];

        const createdJobs = await Job.insertMany(jobs);
        console.log("Jobs created:", createdJobs.length);

        // Create Applications
        const applications = [
            {
                job: createdJobs[0]._id, // Frontend Developer
                applicant: createdUsers[1]._id, // John Doe
                status: "pending"
            },
            {
                job: createdJobs[1]._id, // Backend Developer
                applicant: createdUsers[1]._id, // John Doe
                status: "pending"
            },
            {
                job: createdJobs[0]._id, // Frontend Developer
                applicant: createdUsers[2]._id, // Jane Smith
                status: "accepted"
            },
            {
                job: createdJobs[1]._id, // Backend Developer
                applicant: createdUsers[2]._id, // Jane Smith
                status: "pending"
            },
            {
                job: createdJobs[2]._id, // Backend Developer
                applicant: createdUsers[1]._id, // John Doe
                status: "pending"
            }
        ];

        const createdApplications = await Application.insertMany(applications);
        console.log("Applications created:", createdApplications.length);

        // Update jobs with applications
        for (const application of createdApplications) {
            await Job.findByIdAndUpdate(application.job, {
                $push: { applications: application._id }
            });
        }

        console.log("Database seeded successfully!");
        console.log("\nSample Login Credentials:");
        console.log("Student: john.doe@example.com / password123");
        console.log("Student: jane.smith@example.com / password123");
        console.log("Recruiter: hr@techcorp.com / password123");
        console.log("Recruiter: hr@innovatelabs.com / password123");

    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await mongoose.connection.close();
        console.log("Database connection closed.");
    }
};

// Run the seed function
seedDatabase();
