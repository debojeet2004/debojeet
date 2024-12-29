import { ExperienceCard } from "../_components/experienceCard";

// This would typically come from your data source
const experiences = [
  {
    companyName: "HyrecruitAi",
    position: "Full Stack Developer Intern",
    companyWebsite: "https://hyrecruitai.com/",
    location: "Remote",
    startDate: "JAN 2025",
    endDate: "Present",
    description: "An AI-powered interview platform that streamlines recruitment processes, utilizing advanced algorithms and machine learning models for candidate assessment and automated interview scheduling.",
    achievements: [
      "User Experience: Designed for a seamless and user-friendly platform experience.",
      "Feature Implementation: Implemented key features like Resume Builder and AI Interview.",
      "Platform Development: Played a key role in developing the entire Hyrecuit AI platform from scratch.",
    ],
    skills: ["React", "TypeScript", "Next.js", "TailwindCSS", "Prisma","Drizzle","PostgreSQL","Azure"],
  },
  {
    companyName: "Training Mug",
    position: "Full Stack Developer Intern",
    companyWebsite: "https://trainingmug.com/",
    location: "Remote",
    startDate: "SEP 2024",
    endDate: "DEC 2024",
    description: "A pioneering ed-tech platform offering byte-sized courses and personalized career paths for college students. The platform features comprehensive learning tracks, industry-aligned curriculum, and interactive content to bridge the gap between academic learning and industry requirements.",
    achievements: [
      "Landing Page Development: Designed and developed the company's landing page. ",
      "UI/UX Enhancements: Implemented UI/UX improvements for a better user experience." 
    ],
    skills: ["Figma", "React", "Nextjs", "Tailwindcss", "shadcn Ui library","strapi"],
  }
];

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-8">Work Experience</h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}