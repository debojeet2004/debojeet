export interface ProjectDetailsProps {
        id: number;
        slug: string;
        title: string;
        description: string;
        thumbnail: string;
        images: string[];
        techStack: string[];
        caseStudy: {
            challenge: string;
            solution: string;
            outcome: string;
        };
        deployedUrl: string;
        githubUrl: string;
        startDate: string; // Format: "JAN 2024"
        endDate: string ; // Format: "MAR 2024" or "Ongoing"
};
    

export const projectsData: ProjectDetailsProps[] = [
    {
        id: 3,
        slug: 'smart-task-manager',
        title: 'Smart Task Manager',
        description: 'An AI-powered task management system with intelligent prioritization and team collaboration features.',
        thumbnail: 'https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww',
        images: [
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
            "https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
        ],
        techStack: ['Vue.js', 'Express', 'PostgreSQL', 'Redis', 'AWS'],
        caseStudy: {
            challenge: 'Developing an intuitive task management system that learns from user behavior.',
            solution: 'Built a machine learning model to analyze task patterns and suggest optimal workflows.',
            outcome: 'Improved team productivity by 35% and reduced task completion time.'
        },
        deployedUrl: 'https://smart-task-manager.cloud',
        githubUrl: 'https://github.com/username/smart-task-manager',
        startDate: 'OCT 2023',
        endDate: 'DEC 2023'
    },
    {
        id: 4,
        slug: 'healthcare-management-system',
        title: 'Healthcare Management System',
        description: 'A comprehensive platform for managing patient records, appointments, and medical services.',
        thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
            "https://images.unsplash.com/photo-1579684385752-f0f9dade43d4",
            "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b",
            "https://images.unsplash.com/photo-1505751172876-0cc1a7d5e8b4",
            "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7"
        ],
        techStack: ['Next.js', 'PostgreSQL', 'GraphQL', 'TypeScript', 'Prisma'],
        caseStudy: {
            challenge: 'Developing a secure and efficient healthcare management solution.',
            solution: 'Created a HIPAA-compliant system with robust patient data management.',
            outcome: 'Improved healthcare provider efficiency and patient care coordination.'
        },
        deployedUrl: 'https://healthcare-management.app',
        githubUrl: 'https://github.com/debojeet2004/healthcare-management-system',
        startDate: 'AUG 2023',
        endDate: 'NOV 2023'
    },
    {
        id: 5,
        slug: 'ai-content-generator',
        title: 'AI Content Generator',
        description: 'An advanced AI-powered platform for generating creative and contextually relevant content across various domains.',
        thumbnail: 'https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww',
        images: [
            "https://images.unsplash.com/photo-1516737490857-848138dace26",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
        ],
        techStack: ['Python', 'OpenAI', 'React', 'Django', 'GPT-3'],
        caseStudy: {
            challenge: 'Creating an AI tool that generates high-quality, original content with minimal human intervention.',
            solution: 'Developed a sophisticated AI model using advanced natural language processing techniques.',
            outcome: 'Reduced content creation time by 70% while maintaining high-quality output.'
        },
        deployedUrl: 'https://ai-content-generator.app',
        githubUrl: 'https://github.com/username/ai-content-generator',
        startDate: 'JAN 2024',
        endDate: 'Ongoing'
    },
    {
        id: 6,
        slug: 'e-learning-platform',
        title: 'Interactive E-Learning Platform',
        description: 'A comprehensive online learning ecosystem with personalized learning paths and interactive course modules.',
        thumbnail: 'https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww',
        images: [
            "https://images.unsplash.com/photo-1501504905252-473c47ba9ddc",
            "https://images.unsplash.com/photo-1517842645767-c639042777db",
            "https://images.unsplash.com/photo-1488521787991-ed70c0a2e7b2",
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
        ],
        techStack: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Socket.io'],
        caseStudy: {
            challenge: 'Creating an engaging and adaptive online learning experience.',
            solution: 'Implemented machine learning algorithms to personalize learning paths and content recommendation.',
            outcome: 'Increased student engagement by 50% and improved learning outcomes.'
        },
        deployedUrl: 'https://interactive-learning.platform',
        githubUrl: 'https://github.com/username/e-learning-platform',
        startDate: 'NOV 2023',
        endDate: 'FEB 2024'
    }
];

