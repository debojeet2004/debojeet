"use client";
import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectDetailsProps } from '../../data/projectData';
export default function ProjectDetails({ project }: { project: ProjectDetailsProps }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto px-4 py-8"
        >
            <ProjectHeader
                name={project.title}
                deployedUrl={project.deployedUrl}
                githubUrl={project.githubUrl}
                startDate={project.startDate}
                endDate={project.endDate}
            />

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {project.images && project.images.map((image, index: number) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech:string, index:number) => (
                        <Badge key={index} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Project Description */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
                <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                </p>
            </div>

            {/* Case Study */}
            <div className="space-y-8">
                <h2 className="text-2xl font-semibold">Case Study</h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-medium mb-2">The Challenge</h3>
                        <p className="text-muted-foreground">
                            {project.caseStudy.challenge}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-2">The Solution</h3>
                        <p className="text-muted-foreground">
                            {project.caseStudy.solution}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-2">The Outcome</h3>
                        <p className="text-muted-foreground">
                            {project.caseStudy.outcome}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}


interface ProjectHeaderProps {
    name: string;
    deployedUrl: string;
    githubUrl: string;
    startDate: string; // Format: "JAN 2024"
    endDate: string | "Ongoing"; // Format: "MAR 2024" or "Ongoing"
}

function ProjectHeader({ name, deployedUrl, githubUrl, startDate, endDate }: ProjectHeaderProps) {
    return (
        <div className="space-y-4 mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h1 className="text-4xl font-bold">{name}</h1>
                <p className="text-muted-foreground font-medium">
                    {startDate} - {endDate}
                </p>
            </div>

            <div className="flex gap-4">
                <Button asChild variant="outline">
                    <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                    </a>
                </Button>
                <Button asChild variant="outline">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                    </a>
                </Button>
            </div>
        </div>
    );
}