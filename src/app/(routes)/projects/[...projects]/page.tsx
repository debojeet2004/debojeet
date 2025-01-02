
import  ProjectDetails from "./_components/projectDetails";
import {projectsData} from "../data/projectData";

export default function ProjectPage({ params }: { params: { projects: string[] } }) {
  const projectSlug = params.projects[0];
  const project = projectsData.find(p => p.slug === projectSlug);
  if (!project) {
    return <div>not found</div>;
  }
  return <ProjectDetails project={project} />;
}