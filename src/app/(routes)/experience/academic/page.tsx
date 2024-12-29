import { EducationCard } from "../_components/educationCard";
import {educationHistory} from "./educationData";
export default function EducationPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-8">Education</h1>
      <div className="space-y-6">
        {educationHistory.map((education, index) => (
          <EducationCard key={index} education={education} />
        ))}
      </div>
    </div>
  );
}