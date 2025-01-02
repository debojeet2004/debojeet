import { StackItem } from "../_components/stackCards";

export interface StacksType {
    design: StackItem[];
    productivity: StackItem[];
    technologies: StackItem[];
    aiTools: StackItem[];
    developerTools: StackItem[];
}

export const Stacks: StacksType = {
    design: [
        {
            title: "Figma",
            purpose: "UI design and wireframing",
            iconurl: '/figma.png'
        },
        {
            title: "Canva",
            purpose: "Graphic design and visual content",
            iconurl: '/canva.png'
        },
        {
            title: "Photoshop",
            purpose: "Image editing and manipulation",
            iconurl: '/photoshop.png'
        },
        {
            title: "Erasor.io",
            purpose: "Online whiteboard for team collaboration",
            iconurl: '/erasorio.png'
        },
    ],
    productivity: [
        {
            title: "Notion",
            purpose: "All-in-one workspace",
            iconurl: '/notion.png'
        },
        {
            title: "Slack",
            purpose: "Real-time team communication",
            iconurl: '/slack.png'
        },
        {
            title: "Google Calendar",
            purpose: "Time management",
            iconurl: '/googlecalendar.png'
        },
        {
            title: "YouTube Music",
            purpose: "Music streaming and discovery",
            iconurl: '/ytmusic.png'
        },
        {
            title: "Discord",
            purpose: "Voice, video, and text communication",
            iconurl: '/discord.png'
        },
        {
            title: "Microsoft Teams",
            purpose: "Collaboration and communication",
            iconurl: '/teams.png'
        },
    ],
    technologies: [
        {
            title: "React Js",
            purpose: "Building user interfaces",
            iconurl: '/react.png'
        },
        {
            title: "Next Js",
            purpose: "Server-rendered websites",
            iconurl: '/nextjs.png'
        },
        {
            title: "Node Js",
            purpose: "Server-side JavaScript",
            iconurl: '/nodejs.png'
        },
        {
            title: "Prisma",
            purpose: "ORM for Node.js",
            iconurl: '/prisma.png'
        },
        {
            title: "Postgres Js",
            purpose: "Relational database",
            iconurl: '/postgres.png'
        },
        {
            title: "MongoDb",
            purpose: "NoSQL database",
            iconurl: '/mongodb.png'
        },
        {
            title: "Tailwind Css",
            purpose: "Rapid UI development",
            iconurl: '/tailwind.png'
        },
        {
            title: "Docker",
            purpose: "Containerization platform",
            iconurl: '/docker.png'
        },
        {
            title: "Redux Toolkit",
            purpose: "State management library",
            iconurl: '/redux.png'
        },
        {
            title: "Drizzle",
            purpose: "ORM for TypeScript",
            iconurl: '/drizzle.png'
        },
        {
            title: "GraphQL",
            purpose: "Query language for APIs",
            iconurl: '/graphql.png'
        },
        {
            title: "Express Js",
            purpose: "Node.js web framework",
            iconurl: '/expressjs.png'
        },
        {
            title: "Azure",
            purpose: "Cloud computing platform",
            iconurl: '/azure.png'
        },
        {
            title: "Javascript",
            purpose: "Dynamic programming language",
            iconurl: '/js.png'
        },
        {
            title: "Typescript",
            purpose: "Statically typed JavaScript",
            iconurl: '/typescript.png'
        },
    ],
    developerTools: [
        {
            title: "Vs Code",
            purpose: "Lightweight code editor",
            iconurl: '/vscode.png'
        },
        {
            title: "Github",
            purpose: "Version control and collaboration",
            iconurl: '/github.png'
        },
    ],
    aiTools: [
        {
            title: "Chat-Gpt",
            purpose: "AI-powered chatbot",
            iconurl: '/chatgpt.png'
        },
        {
            title: "Perplexity",
            purpose: "Creative content generation",
            iconurl: '/perplexity.png'
        },
        {
            title: "Github Copilot",
            purpose: "AI-powered code completion",
            iconurl: '/copilot.png'
        },
    ]
}