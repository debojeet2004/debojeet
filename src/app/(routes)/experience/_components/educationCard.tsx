"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react';

interface EducationCardProps {
    education: {
        institution: string;
        degree: string;
        field: string;
        location: string;
        startDate: string; // Format: "JAN 2024"
        endDate: string | "Present";
        gpa?: string;
        website: string;
        achievements?: string[];
        relevantCourses: string[];
    };
}

export function EducationCard({ education }: EducationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-stone-500/20 to-transparent rounded-2xl p-4 sm:p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start w-full">
                    {/* Institution & Degree Info */}
                    <div className="w-full">
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        {education.degree} {education.field}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                        <GraduationCap className="w-5 h-5 text-primary/70" />
                        <span className="text-xs md:text-sm text-foreground/80 font-medium">{education.institution}</span>
                        <span className="text-primary/40 hidden sm:inline">•</span>
                        <span className="text-xs md:text-sm text-foreground/70">{education.location}</span>
                    </div>
                    </div>
                </div>

                {/* External Link */}
                <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-xl hover:bg-primary/10 transition-colors"
                    asChild
                >
                    <a href={education.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 text-primary" />
                    </a>
                </Button>
            </div>

            {/* Duration & GPA */}
            <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-6 text-sm font-medium">
            <Calendar className="w-4 h-4 text-primary/70" />
            <span className="text-foreground/70">{education.startDate} - {education.endDate}</span>
            {education.gpa && (
                <>
                <span className="text-primary/40">•</span>
                <span className="text-foreground/70">Score: {education.gpa}</span>
                </>
            )}
            </div>

            {/* Achievements */}
            <div className="mt-4 sm:mt-6">
            <h4 className="font-semibold text-base sm:text-lg mb-3">{education.achievements && "Academic Achievements"}</h4>
            <ul className="space-y-2 text-foreground/70 text-sm sm:text-base">
                {education.achievements?.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{achievement}</span>
                </li>
                ))}
            </ul>
            </div>

            {/* Relevant Courses */}
            <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
            {education.relevantCourses.map((course, index) => (
                <Badge 
                key={index} 
                variant="secondary"
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                {course}
                </Badge>
            ))}
            </div>
        </motion.div>
    );
}
