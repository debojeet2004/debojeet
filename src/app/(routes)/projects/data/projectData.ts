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
        slug: 'lets-meet-app',
        title: 'Lets Meet App',
        description: 'Lets Meet" is a real-time video conferencing application developed using Stream SDKs, offering a feature set comparable to industry leaders like Zoom and Google Meet. Key features include seamless multi-user video and audio communication, screen sharing, personal meeting rooms, emoji reactions, and support for multiple users within a single meeting room.',
        thumbnail: 'https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/letsmeetimg1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvbGV0c21lZXRpbWcxLnBuZyIsImlhdCI6MTczNTk5MjQwMywiZXhwIjoyMDUxMzUyNDAzfQ.n0YCOfL4BX1cm8Z3xXnhkDKZHBejp9ClNROCbJSqNwA&t=2025-01-04T12%3A06%3A43.932Z',
        images: [
            "https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/letsmeetimg1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvbGV0c21lZXRpbWcxLnBuZyIsImlhdCI6MTczNTk5MjQwMywiZXhwIjoyMDUxMzUyNDAzfQ.n0YCOfL4BX1cm8Z3xXnhkDKZHBejp9ClNROCbJSqNwA&t=2025-01-04T12%3A06%3A43.932Z",
            "https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/personalroomletsmeetimage2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvcGVyc29uYWxyb29tbGV0c21lZXRpbWFnZTIucG5nIiwiaWF0IjoxNzM1OTkyNDY1LCJleHAiOjIwNTEzNTI0NjV9.qNn0z3tfXXlhJuL_OmHpkEwphm2Lle6MDa4sC9RryzY&t=2025-01-04T12%3A07%3A46.033Z",
            "https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/letsmeetimage3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvbGV0c21lZXRpbWFnZTMucG5nIiwiaWF0IjoxNzM1OTkyNDg0LCJleHAiOjIwNTEzNTI0ODR9.hF6KM5_T9qh4DKrxFaPFKq2SMjOfH-HmssUXNfz0neU&t=2025-01-04T12%3A08%3A04.880Z",
            "https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/letsmeetimage4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvbGV0c21lZXRpbWFnZTQucG5nIiwiaWF0IjoxNzM1OTkyNTA2LCJleHAiOjIwNTEzNTI1MDZ9.bTp7Agvh4vs3BX-K0G2aZIgUfJbQfCw1y535vcqCC_c&t=2025-01-04T12%3A08%3A26.772Z"
        ],
        techStack: ['React JS', 'Next Js', 'Javascript', 'TailwindCss' ,'PostgreSQL', 'TailwindCss', 'clerk' , 'stream SDKs' ,'Github'],
        caseStudy: {
            challenge: 'Several challenges were encountered during the development of "Lets Meet." Ensuring smooth and synchronized audio and video streams across multiple participants while minimizing latency and jitter was crucial. Maintaining high performance and scalability under heavy load, with a large number of concurrent users, presented another significant hurdle. Implementing secure and reliable screen sharing functionality while minimizing performance impact on the sharing user posed another challenge. Finally, designing an intuitive and user-friendly interface for seamless meeting navigation, screen sharing, and participant management was essential for a positive user experience.',
            solution: 'These challenges were addressed through a combination of strategic approaches. To ensure high-quality and low-latency video and audio experiences, the development team leveraged the robust real-time communication capabilities of Stream SDKs, which include optimized codecs and adaptive bitrate streaming. To maintain high performance under heavy load, efficient server-side infrastructure was implemented, and client-side rendering was optimized. Secure and reliable screen sharing functionality was achieved by utilizing Stream SDKs secure screen sharing capabilities and optimizing screen encoding/decoding algorithms. Finally, an intuitive and user-friendly interface was developed by prioritizing user-centered design principles, conducting thorough user testing, and iteratively refining the UI/UX.',
            outcome: 'The successful development and deployment of "Lets Meet" have yielded several positive outcomes. The application provides users with a powerful tool for remote communication and collaboration, enhancing productivity and efficiency. By delivering a high-quality user experience with smooth video and audio streams, reliable screen sharing, and intuitive controls, "Lets Meet" has significantly improved remote communication and collaboration capabilities. Moreover, this project has provided valuable learning experiences in real-time communication technologies, video/audio processing, UI/UX design, and software development best practices.'
        },
        deployedUrl: 'https://lets-meet-rust.vercel.app',
        githubUrl: 'https://github.com/debojeet2004/LetsMeet',
        startDate: 'DEC 2023',
        endDate: 'JAN 2024'
    },
    // {
    //     id: 2,
    //     slug: 'safehealth',
    //     title: 'SafeHealth',
    //     description: 'A comprehensive platform for managing patient records, appointments, and medical services.',
    //     thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     images: [
    //         "https://images.unsplash.com/photo-1579684385752-f0f9dade43d4",
    //         "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b",
    //         "https://images.unsplash.com/photo-1505751172876-0cc1a7d5e8b4",
    //         "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7"
    //     ],
    //     techStack: ['Next.js', 'PostgreSQL', 'GraphQL', 'TypeScript', 'Prisma'],
    //     caseStudy: {
    //         challenge: 'Developing a secure and efficient healthcare management solution.',
    //         solution: 'Created a HIPAA-compliant system with robust patient data management.',
    //         outcome: 'Improved healthcare provider efficiency and patient care coordination.'
    //     },
    //     deployedUrl: 'https://healthcare-management.app',
    //     githubUrl: 'https://github.com/debojeet2004/healthcare-management-system',
    //     startDate: 'AUG 2023',
    //     endDate: 'NOV 2023'
    // },
];

