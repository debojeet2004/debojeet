import  ProjectDetails from "./_components/projectDetails";


// This would typically come from your data source
const projectData = {
    name: "AI-Powered Portfolio Analyzer",
    description: "A comprehensive web application that leverages AI to provide in-depth analysis of professional portfolios, offering insights into skill gaps, career potential, and personalized recommendations.",
    images: [
      "https://plus.unsplash.com/premium_photo-1661281403917-7a1d58c5693b",
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "OpenAI API",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Vercel AI SDK",
      "Shadcn UI"
    ],
    caseStudy: {
      challenge: "Developing an intelligent system that can comprehensively analyze professional portfolios while providing actionable insights, balancing complex AI processing with user-friendly interface design.",
      solution: "Created a multi-layered AI-driven platform using Next.js and OpenAI's advanced language models. Implemented a sophisticated algorithm that breaks down portfolio components, cross-references industry trends, and generates personalized career development recommendations.",
      outcome: "Reduced manual portfolio review time by 75%, increased user engagement by 60%, and provided data-driven career guidance for professionals across multiple industries."
    },
    deployedUrl: "https://portfolio-analyzer.vercel.app",
    githubUrl: "https://github.com/debojeet/portfolio-analyzer",
    startDate: "JAN 2024",
    endDate: "Ongoing"
  };
  

export default function ProjectPage() {
  return <ProjectDetails project={projectData} />;
}