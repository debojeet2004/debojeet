export interface BlogPostProps {
    id: number;
    slug: string;
    title: string;
    date: string;
    readingTime: string;
    tags: string[];
    category: string;
    coverImage: string;
    content: {
        img1?: string;
        paragraph: string;
        img2?: string;
    }[];
}


export const blogData: BlogPostProps[] = [
    {
        id: 1,
        slug: 'exploring-ai-innovations',
        title: 'Exploring the Latest AI Innovations',
        date: '2023-11-15',
        readingTime: '5 min read',
        tags: ['AI', 'Technology', 'Innovation'],
        category: 'Technology',
        coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        content: [
            {
                img1: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
                paragraph: 'Discover how responsible travel can make a positive impact on local communities and the environment. We explore destinations that are leading the way in sustainable tourism.Discover how responsible travel can make a positive impact on local communities and the environment. We explore destinations that are leading the way in sustainable tourism.Discover how responsible travel can make a positive impact on local communities and the environment. We explore destinations that are leading the way in sustainable tourism.Discover how responsible travel can make a positive impact on local communities and the environment. We explore destinations that are leading the way in sustainable tourism.Discover how responsible travel can make a positive impact on local communities and the environment. We explore destinations that are leading the way in sustainable tourism.Discover how responsible travel can make a positive impact on local communities and the environment. We explore destinations that are leading the way in sustainable tourism.Discover how responsible travel can make a positive impact on local communities and the environment. We explore destinations that are leading the way in sustainable tourism.',
                img2: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
            },
            {
                // img1: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
                paragraph: '2nd para hai broi ',
                img2: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
            }
        ]
    },
    {
        id: 2,
        slug: 'sustainable-travel-experiences',
        title: 'Sustainable Travel: Exploring Eco-Friendly Destinations',
        date: '2023-10-22',
        readingTime: '7 min read',
        tags: ['Travel', 'Sustainability', 'Environment'],
        category: 'Travell',
        coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        content: [
            {
                img1: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
                paragraph: 'Discover how responsible travel can make a positive impact on local communities and the environment. We explore destinations that are leading the way in sustainable tourism.',
                img2: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
            }
        ]
    },
    {
        id: 3,
        slug: 'personal-growth-journey',
        title: 'My Personal Growth Journey: Lessons Learned',
        date: '2023-09-10',
        readingTime: '6 min read',
        tags: ['Personal Development', 'Life Lessons', 'Growth'],
        category: 'Life Experience',
        coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        content: [
            {
                img1: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
                paragraph: 'Reflecting on the challenges and triumphs that have shaped my personal and professional development. Learn how embracing change and continuous learning can transform your life.',
                img2: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
            }
        ]
    }
];

