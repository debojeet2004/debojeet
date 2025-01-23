export interface ProjectDetailsProps {
        id: number;
        slug: string;
        title: string;
        category: string;
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
        category: 'Development',
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
    {
        id: 2,
        slug: 'resumebuilder',
        title: 'Resume Builder',
        category: 'Development',
        description: 'This project involved developing a user-friendly and efficient Resume Builder application using a robust tech stack including React.js, Next.js, PostgreSQL, and Zustand. The application focuses on providing users with an intuitive interface to create professional resumes with extensive customization options while ensuring data security and scalability.',
        thumbnail: 'https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/ResumeBuilder1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvUmVzdW1lQnVpbGRlcjEucG5nIiwiaWF0IjoxNzM3NjQwMzY2LCJleHAiOjIwNTMwMDAzNjZ9.kpcKkgF9XyRMxdsbPm6D4usyXntf-t5rDQn6-hilcUY&t=2025-01-23T13%3A52%3A47.180Z',
        images: [
            "https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/ResumeBuilder1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvUmVzdW1lQnVpbGRlcjEucG5nIiwiaWF0IjoxNzM3NjQwMzY2LCJleHAiOjIwNTMwMDAzNjZ9.kpcKkgF9XyRMxdsbPm6D4usyXntf-t5rDQn6-hilcUY&t=2025-01-23T13%3A52%3A47.180Z",
            "https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/ResumeBuilder2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvUmVzdW1lQnVpbGRlcjIucG5nIiwiaWF0IjoxNzM3NjQwMzg5LCJleHAiOjIwNTMwMDAzODl9.CRALxcVrLyNxVKt80nPXS1biQyTak0XUjX9X2fvP66E&t=2025-01-23T13%3A53%3A09.401Z",
            "https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/ResumeBuilderDashboard.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvUmVzdW1lQnVpbGRlckRhc2hib2FyZC5wbmciLCJpYXQiOjE3Mzc2NDA3NzEsImV4cCI6MjA1MzAwMDc3MX0.AgXUdG4jgMzYk6D-ScEPYJl2LyYlygR-6SRqM7Qn85I&t=2025-01-23T13%3A59%3A32.235Z",
            "https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/ResumeBuilder4.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvUmVzdW1lQnVpbGRlcjQuanBnIiwiaWF0IjoxNzM3NjQwNTA3LCJleHAiOjIwNTMwMDA1MDd9.kRlSvjiWyhRUWZXpfkhsJtyR-kHyJWl82Eo8aPUo3PE&t=2025-01-23T13%3A55%3A07.991Z"
        ],
        techStack: ['React js', 'Next.js', 'PostgreSQL', 'Zustand', 'TypeScript', 'Drizzle', 'Kendo PDF ', 'Shadcn Ui' , 'Github'],
        caseStudy: {
            challenge: 'This project presented several significant challenges. Firstly, the development team aimed to create an exceptionally user-friendly interface that would empower users to effortlessly construct professional resumes. Secondly, robust data management strategies were crucial to ensure the secure storage and protection of user information, adhering to relevant privacy regulations. Thirdly, the application needed to provide extensive customization options, allowing users to tailor resumes to specific job requirements and industry standards. Finally, maintaining high performance and ensuring the application could scale to accommodate a growing user base were essential for long-term success.',
            solution: 'To address these challenges, a carefully selected technology stack was employed. React.js and Next.js formed the foundation of the frontend, delivering a dynamic and SEO-friendly user experience. Zustand was implemented for efficient state management, enhancing application performance and developer experience. TypeScript was utilized to improve code maintainability, type safety, and reduce potential bugs. Shadcn UI was leveraged for a visually appealing and user-friendly design, known for its speed and accessibility. On the backend, PostgreSQL served as the robust and scalable database for securely storing user data, including resumes, templates, and user profiles. Drizzle facilitated seamless interaction with the database, enabling efficient data fetching and updates. Kendo PDF was integrated to generate high-quality PDF resumes from user-created data, ensuring professional presentation and easy sharing. Finally, GitHub was utilized for version control, enabling collaborative development, tracking changes, and facilitating seamless deployments.',
            outcome: 'The successful implementation of these technologies resulted in a user-friendly and efficient Resume Builder application. Users can now easily create professional resumes with a wide range of customization options. The application ensures the secure storage and management of user data while providing a smooth and responsive user experience. Furthermore, the application is designed to scale effectively to accommodate a growing number of users and resume creations.'
        },
        deployedUrl: 'https://prepverse.xyz/tools/resume-builder',
        githubUrl: 'https://github.com/debojeet2004/resumebuilder',
        startDate: 'NOV 2024',
        endDate: 'JAN 2025'
    },
];

