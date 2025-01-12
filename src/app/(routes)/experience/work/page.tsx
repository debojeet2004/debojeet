import { ExperienceCard } from "../_components/experienceCard";
import {workExperiences} from "./workData";
// This would typically come from your data source


export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-[2rem] md:mt-[4rem]">
      <h1 className="text-5xl font-bold mb-8">Work Experience</h1>
      <div className="space-y-6">
        {workExperiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}