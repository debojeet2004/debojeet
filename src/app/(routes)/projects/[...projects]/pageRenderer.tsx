
"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { ProjectDetailsProps, projectsData } from '../data/projectData';
import ProjectDetails from './_components/projectDetails';

export default function ProjectPageRenderer() {
    const params = useParams();
    const [project, setProject] = useState<ProjectDetailsProps | null>(null);

    useEffect(() => {
        // Safely extract the slug from the dynamic route
        if (params.projects && params.projects.length > 0) {
            const slug = params.projects[params.projects.length - 1];
            console.log(slug)

            // Find the corresponding project
            const foundProject = projectsData.find(proj => proj.slug === slug);
            console.log(foundProject)

            // Update state
            setProject(foundProject || null);
        }
    }, [params]);

    // Handle loading state
    if (!project) {
        return <div>Loading...</div>;
    }

    // Handle case when project is not found
    if (!project) {
        return <div>Project not found</div>;
    }

    // Render the project details
    return <ProjectDetails project={project} />;
}

