export interface BlogPostProps {
    id: number;
    slug: string;
    title: string;
    date: string;
    readingTime: string;
    tags: string[];
    category: string;
    coverImage?: string;
    content: {
        img1?: string;
        paragraph: string;
        img2?: string;
    }[];
}


export const blogData: BlogPostProps[] = [
    {
        id: 1,
        slug: 'taking-the-first-step',
        title: 'Taking The First Step -Signing in to Life',
        date: '2024-12-27',
        readingTime: '3 min read',
        tags: ['Life', 'Motivation', 'Beginning', 'Inspiration','Journey'],
        category: 'Life Experience',
        coverImage: 'https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/jiscllg.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvamlzY2xsZy5qcGciLCJpYXQiOjE3MzU5ODc2ODEsImV4cCI6MjA1MTM0NzY4MX0.7euYlHhAVCxpkyv0K1EooFSJuAzfkLLu-AYMY_7fBB4&t=2025-01-04T10%3A48%3A01.474Z',
        content: [
            {
                paragraph: 'Hey there, I am Debojeet, a 4th year Computer Science Student majoring in Ai-Ml. Currently working as a Fullstack Developer Intern in HyrecruitAi — a Ai powered interview platform. Got this opportunity in september form a good friend of mine, it is a remote job so yeah there is no problem for commutating can do my thing from home only 🙂',
            },
            {
                paragraph: 'I’m originally from Dhanbad, Jharkhand, where I grew up as a quiet, average kid. Despite my introverted nature, I’ve always had a passion for art, particularly painting and sketching.Thanks to my mom,she helped me pursue my passion for painting and sketching by providing me with the necessary resources.',
            },
            {
                img1: 'https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/sketch.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvc2tldGNoLmpwZyIsImlhdCI6MTczNTk4Nzc0MywiZXhwIjoyMDUxMzQ3NzQzfQ.rkNr1pNhERPhSygcw8AlyhNbxw2-zBYf9XKKIuSNj_Q&t=2025-01-04T10%3A49%3A03.637Z',
                paragraph: 'In 2021, I started a new chapter of my life by moving to West Bengal for my B.Tech. As a part of the COVID-19 batch, my 12th grade was largely spent indoors, feeling a bit like hibernation.',
            },
            {
                paragraph: 'When I finally stepped onto the university campus, it was a whole new world! The vibrant atmosphere, the bustling crowd, and the sight of couples everywhere was a bit overwhelming, to be honest. As a young, inexperienced 17–18-year-old, I was a bit nervous and excited at the same time. Everywhere I looked, there were couples, strolling hand-in-hand or laughing together 😅😅.But I found a small group of fellow freshmen feeling just as overwhelmed as me. We huddled together in corners, a bit lost but ready for this journey.',
                img2: 'https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/jiscllg.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvamlzY2xsZy5qcGciLCJpYXQiOjE3MzU5ODc2ODEsImV4cCI6MjA1MTM0NzY4MX0.7euYlHhAVCxpkyv0K1EooFSJuAzfkLLu-AYMY_7fBB4&t=2025-01-04T10%3A48%3A01.474Z'
            },
            {
                paragraph: 'The first two years of engineering flew by in a blur. Before I knew it, time had slipped away, and I found myself with a backlog to deal with,But towards the end of my second year, I realized I needed to get serious about my studies. I had to clear my backlog and prepare for the future. A good friend of mine gave me a much-needed reality check, reminding me of the challenges that lie ahead after graduation. This motivated me to take life more seriously. After all, I had to start earning a living after college, and the thought of it was a bit daunting.',
            },
            {
                paragraph: 'I personally believe that transitioning from a student to a working professional is one of the most challenging phases of life. As students, we’re often sheltered and supported, but after graduation, we’re exposed to the harsh realities of the world. It’s like stepping out from under an umbrella into the sunlight and we need to be prepared with our sunscreen. I’m currently in the middle of my fourth year and I’m excited to be interning and earning a bit of money. While the pay isn’t much, it’s a valuable experience.',
            },
            {
                paragraph: 'I have big aspirations and want to achieve great things, but I know that many people dream big without taking action. I’ve seen this firsthand in group projects where initial enthusiasm often fades away, as if Thanos snapped his fingers and half the team disappeared. That’s why I’ve decided to take the initiative and start my own projects, like a YouTube channel and a blog. I’ve been thinking about this since eighth grade, but I’m finally taking the leap at 20.',
            },
            {
                paragraph: 'So why am I writing this blog or will start a YouTube channel? Well, there are two main reasons:',
            },
            {
                paragraph: '1. To achieve my goals: I want to accomplish something significant, build a strong personal brand, explore potential startups, earn money, and live life to the fullest.'
            },
            {
                paragraph: '2. To simply start: I’m eager to embark on this journey of self-expression and see where it leads me.'
            },
            
            {
                paragraph: 'I want to document my journey through my videos and blogs, so I can look back and see how far I’ve come.',
                img2: 'https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/debojeetmee.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvZGVib2plZXRtZWUuanBnIiwiaWF0IjoxNzM1OTg3NTIxLCJleHAiOjIwNTEzNDc1MjF9.BoLd88-LBEK1PL-3PkZndkvy9nX2-iCFNw8r4lCB2yE&t=2025-01-04T10%3A45%3A22.067Z'
            },
            {
                paragraph: 'There’s a quote that perfectly captures my feelings in this phase of life  “A lot to learn — A lot to know — A lot to explore — A lot to grow.”'
            },
            {
                paragraph: '~ Debojeet Karmakar'
            },
        ]
    },
    {
        id: 2,
        slug: 'leaving-2024-behind',
        title: 'Leaving 2024 Behind — Embracing the 2025 Transformation',
        date: '2025-01-01',
        readingTime: '3 min read',
        tags: ['Transformation', 'Change Your Life', 'Aspirations','Storytelling','2025'],
        category: 'Life Experience',
        coverImage: 'https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/leaving2024behind_image2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvbGVhdmluZzIwMjRiZWhpbmRfaW1hZ2UyLndlYnAiLCJpYXQiOjE3MzU5ODk4NTEsImV4cCI6MjA1MTM0OTg1MX0.yiiCYqB16qmJCRb59pfJ4YXMNKAmaeXpWUK3oswGQFk&t=2025-01-04T11%3A24%3A11.598Z',
        content: [
            {
                img1: 'https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/leaving2024behind_image1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvbGVhdmluZzIwMjRiZWhpbmRfaW1hZ2UxLndlYnAiLCJpYXQiOjE3MzU5ODk3MzMsImV4cCI6MjA1MTM0OTczM30.gesRkhq8D4SfHAJIeCSpXQEo2ff5XUhdW5kbTJOGUXQ&t=2025-01-04T11%3A22%3A13.486Z',
                paragraph: 'So 2024 began with a sense of uncertainty. I was quite in a messy situation. I was unsure of my career and felt overwhelmed by the possibilities.However, I took the initiative to research different fields and ultimately decided to pursue website design and development.',
            },
            {
                paragraph: 'My initial journey into full-stack development was a constant struggle against procrastination and the ubiquitous distractions of social media. These constant temptations often derailed my progress, making me feel like I was my own worst enemy. Recognizing the need for a significant change, I made a bold decision: to eliminate social media from my life. This drastic step, while initially challenging, proved to be a turning point. It forced me to confront my weaknesses and cultivate a new level of self-discipline. It left with nothing but a long path that I have to walk, ultimately paving the way for focused learning and significant progress.',
            },
            {
                paragraph: 'The path forward often felt daunting, and I frequently found myself slipping back into familiar patterns of inaction. Periods of stagnation, sometimes lasting months, breaking out of my comfort zone is the main challenge to overcome which tested my resilience. However, a deep-seated drive, a relentless pursuit of my goals, ultimately pulled me back from the brink. This inner fire, fueled by a desire for personal and professional growth and an unwavering belief in my abilities, empowered me to overcome these obstacles and continue on my journey.',
            },
            {
                paragraph: 'Incorporating journaling and daily to-do lists into my routine proved to be incredibly beneficial. The act of tracking my progress and achieving my goals provided a sense of accomplishment and fueled my motivation. As 2024 comes to an end, reflecting on my journey highlights the significant strides I’ve made. While I’m proud of my accomplishments, I acknowledge that this is just the first chapter in my ongoing pursuit of personal and professional growth. I have to achieve a lot more.',
                img2: 'https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/Projects/leaving2024behind_image2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvUHJvamVjdHMvbGVhdmluZzIwMjRiZWhpbmRfaW1hZ2UyLndlYnAiLCJpYXQiOjE3MzU5ODk4NTEsImV4cCI6MjA1MTM0OTg1MX0.yiiCYqB16qmJCRb59pfJ4YXMNKAmaeXpWUK3oswGQFk&t=2025-01-04T11%3A24%3A11.598Z'
            },
            {
                paragraph: 'As 2025 unfolds, I’m approaching my goals with a renewed sense of purpose and a strategic mindset. I’ve set ambitious resolutions and cultivated a vision for the future. To ensure I stay on track, I’m employing strategies like mind mapping and creating a vision board to visualize my aspirations daily. This year, I’m committed to cultivating a more holistic approach to life, incorporating new habits such as regular reading, gym sessions, and disciplined living. I also plan to focus on developing essential skills like wise investing and effective communication, recognizing these as fundamental building blocks for a successful and fulfilling future.',
            },
            {
                paragraph: 'While I have many dreams, I’m prioritizing three key objectives this year: building my freelance portfolio, securing a fulfilling job, and launching my YouTube channel to grow my personal brand. I approach these goals with a growth mindset, recognizing that challenges are inevitable. I will strive to learn from my experiences, adapt to changing circumstances, and celebrate every step forward on this exciting journey.'
            },
            {
                paragraph: 'With dreams as my stars and motivation as my guiding light, I shall navigate this year with enthusiasm and grace. To all who embark on this new journey, I extend heartfelt wishes for a year filled with boundless joy and the fulfillment of all your cherished dreams.'
            },
            {
                paragraph: '“You are the protagonist of your life — write a story worth telling.”'
            },
            {
                paragraph: '~ Debojeet Karmakar'
            },
        ]
    },
];
