"use client";
    import React, { useState, lazy, Suspense } from 'react';
    import { LucideClipboard } from 'lucide-react';
    // import { cn } from '@/lib/utils';
    import { Marquee } from "@/components/ui/Marquee";
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import Image from 'next/image';
    import { ReviewCard } from './reviewCard';
    
    // Lazy load WorldMapDemo
    const WorldMapDemo = lazy(() => import('./worldmapdemo').then(mod => ({ default: mod.WorldMapDemo })));
    
    const reviews = [
        { id: 1, body: "React" },
        { id: 2, body: "Next.js" },
        { id: 3, body: "Tailwind CSS" },
        { id: 4, body: "TypeScript" },
        { id: 5, body: "Node.js" },
        { id: 6, body: "GraphQL" },
        { id: 7, body: "Redux" },
        { id: 8, body: "Jest" },
        { id: 9, body: "Cypress" },
        { id: 10, body: "Webpack" },
    ];
    
    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);
    
    const BentoSection = React.memo(() => {
        const [copied, setCopied] = useState(false);
    
        const copyEmail = React.useCallback(() => {
            navigator.clipboard.writeText('debojeetkarmakar2020@gmail.com');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }, []);
    
        return (
            <div className='w-full h-[50rem] flex flex-col justify-evenly p-4 mt-16'>
                {/* 1st section */}
                <div className='py-1 w-full h-[48%] flex flex-col md:flex-row justify-between items-center'>
                    {/*LEFT SECTION BOX 1 */}
                    <div className='hidden md:flex w-full md:w-[64%] h-full overflow-hidden rounded-xl shadow-lg hover:scale-105 will-change-transform transition-transform duration-500 group'>
                        <div className='relative w-full h-full' style={{ minHeight: '400px' }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-800 to-stone-950 z-10 opacity-80 rounded-lg will-change-opacity transition-opacity duration-300 group-hover:opacity-70" />
                            <Image 
                                src='/codingman.png' 
                                alt='A Developer at Work' 
                                width={800}
                                height={600}
                                // loading="lazy"
                                priority
                                className='object-cover w-full h-full rounded-xl will-change-transform transition-transform duration-500 blur-[2px] group-hover:blur-none scale-110 group-hover:scale-125'
                            />
                            <div className='absolute z-20 bottom-16 left-6 flex flex-col items-start will-change-transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:translate-x-2'>
                                <p className='text-xs tracking-wider uppercase text-stone-300 mb-4 drop-shadow-md'>Empowering global developers.</p>
                                <h2 className='text-xl font-bold text-white drop-shadow-lg'>Dedicated to enhancing client partnerships<br/> through transparent and effective communication.</h2>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT SECTION */}
                    <div className='w-full md:w-[34%] h-full flex flex-col justify-between items-center'>
                        {/* BOX 2 */}
                        <div className='relative cursor-pointer w-full h-[48%] rounded-lg will-change-transform transition-transform duration-300 hover:scale-105 overflow-hidden'>
                            <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 z-10 opacity-50 rounded-lg will-change-opacity transition-opacity duration-300 hover:opacity-70" />
                            <CardHeader className="absolute space-y-2 z-20 will-change-transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 hover:scale-105">
                                <div className="text-[0.55rem] text-stone-300 font-medium uppercase">Seamless Global Collaboration</div>
                                <CardTitle className="text-md font-semibold leading-tight">
                                    Flexible with Time Zone Communication
                                </CardTitle>
                                <div className="flex space-x-2">
                                    {["Japan", "Australia", "India"].map((country) => (
                                        <div
                                            key={country}
                                            className="bg-gradient-to-r from-stone-800 to-stone-900 text-white p-2 rounded-lg shadow-md backdrop-blur-md bg-opacity-30 border border-stone-700 will-change-transform transition-transform duration-300 group-hover:scale-110 hover:scale-110"
                                        >
                                            <p className="text-[0.70rem] tracking-wide font-thin">{country}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardHeader>
                            <Suspense fallback={<div className="w-full h-full bg-stone-800 animate-pulse" />}>
                                <WorldMapDemo />
                            </Suspense>
                        </div>
                        {/* BOX 3 */}
                        <div className='cursor-pointer w-full h-[48%] relative flex flex-row items-center justify-end overflow-hidden rounded-lg bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 md:shadow-md will-change-transform transition-transform duration-300 hover:scale-105 group'>
                            <div className='absolute top-[35%] left-4 group-hover:scale-105 will-change-transform transition-transform duration-300 ease-in-out'>
                                <p className='text-[0.50rem] text-stone-400 font-thin uppercase tracking-widest group-hover:text-stone-300 transition-colors duration-300'>Always improving</p>
                                <p className='text-xl font-semibold tracking capitalize group-hover:text-stone-100 transition-colors duration-300'>My tech stack</p>
                            </div>
                            <Marquee pauseOnHover vertical className="[--duration:20s] group-hover:translate-y-6 will-change-transform transition-transform duration-300 ease-in-out">
                                {firstRow.map((review) => (
                                    <ReviewCard key={review.id} {...review} />
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover vertical className="[--duration:20s] group-hover:-translate-y-6 will-change-transform transition-transform duration-300 ease-in-out">
                                {secondRow.map((review) => (
                                    <ReviewCard key={review.id} {...review} />
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-stone-900"></div>
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-stone-800"></div>
                        </div>
                    </div>
                </div>
                {/* 2nd section */}
                <div className='py-1 w-full h-[48%] flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0'>
                    {/*LEFT SECTION */}
                    <div className='w-full md:w-[34%] h-full flex flex-col justify-between items-center gap-4 md:gap-0'>
                        {/* BOX 4 */}
                        <div className='w-full h-[48%]'>
                            <Card className="cursor-pointer relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 text-white p-4 rounded-lg shadow-lg backdrop-blur-md w-full h-full overflow-hidden flex flex-col justify-between group will-change-transform transition-transform duration-300 ease-in-out hover:scale-105">
                                <div className="relative z-10 text-center mb-2 will-change-transform transition duration-500 ease-in-out group-hover:translate-y-3 group-hover:scale-110">
                                    <h2 className="text-lg md:text-xl font-bold">Tech Enthusiast</h2>
                                    <p className="text-stone-200 text-xs md:text-sm">With a passion for development</p>
                                </div>
                                <div className="relative z-10 mb-2 flex-grow flex flex-col justify-center items-center will-change-transform transition-transform duration-500 ease-in-out group-hover:blur-[3px] group-hover:z-0 group-hover:translate-y-[-20px]">
                                    <div className="mt-3 p-1 border-2 border-dashed border-stone-400 rounded text-xs w-full text-center">
                                        <div className="flex flex-col h-full bg-stone-800 text-white rounded">
                                            <div className="flex justify-between items-center bg-stone-700 p-2 rounded-t">
                                                <span className="text-[0.6rem] font-semibold">Code Life: Embrace the Journey</span>
                                                <div className="flex space-x-1">
                                                    <span className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></span>
                                                    <span className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></span>
                                                    <span className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></span>
                                                </div>
                                            </div>
                                            <div className="flex flex-grow">
                                                <div className="w-1/4 bg-stone-700 p-2 border-r border-stone-600 text-left text-stone-300">
                                                    <p className="text-[0.5rem] font-thin">work.exe</p>
                                                    <ul className="text-[0.5rem] mt-2 space-y-1">
                                                        <li>index.js</li>
                                                        <li>App.js</li>
                                                        <li>styles.css</li>
                                                    </ul>
                                                </div>
                                                <div className="w-3/4 p-2">
                                                    <div className="bg-stone-900 h-full border border-stone-600 rounded">
                                                        <p className="text-[0.4rem] p-1 font-thin text-left">Editor</p>
                                                        <div className="bg-stone-800 h-full p-2">
                                                            <p className="text-[0.3rem] text-stone-400">{`"Code is like humor. When you have to explain it, it's bad." - Cory House`}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        {/* BOX 5 */}
                        <div className='w-full h-[48%] relative'>
                            <Card className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 bg-opacity-90 rounded-xl shadow-2xl backdrop-blur-lg text-white overflow-hidden will-change-transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-3xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-transparent to-purple-500 opacity-20 pointer-events-none"></div>
                                <div className="absolute top-0 left-0 w-16 md:w-20 h-16 md:h-20 bg-blue-500 rounded-full opacity-30 blur-lg"></div>
                                <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-pink-500 rounded-full opacity-30 blur-lg"></div>
                                <CardHeader className="w-full text-center py-2 md:py-3 relative z-10">
                                    <h2 className="text-base md:text-lg font-bold">Build Greatness Together!</h2>
                                    <p className="text-[0.6rem] md:text-[0.65rem] tracking-normal text-stone-300 mt-1">Collaborate, innovate, and achieve more.</p>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center justify-center relative z-10">
                                    <Button
                                        onClick={copyEmail}
                                        className="flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold py-2 md:py-3 px-3 md:px-4 rounded-lg will-change-transform transition-transform duration-300 transform hover:shadow-xl backdrop-blur-md bg-opacity-70 text-sm md:text-base"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.3)'
                                        }}
                                    >
                                        <LucideClipboard className="w-4 h-4 md:w-6 md:h-6 mr-1" />
                                        <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    {/* RIGHT SECTION BOX 6*/}
                    <div className='w-full md:w-[64%] h-full hidden md:flex'>
                        <Card className="cursor-pointer w-full h-full overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 bg-opacity-90 border-0 text-white rounded-lg shadow-xl will-change-transform transform transition-transform duration-300 group hover:scale-105">
                            <div className="relative grid md:grid-cols-2 gap-4 p-4">
                                <CardHeader className="space-y-2 z-20 will-change-transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105">
                                    <div className="text-[0.65rem] text-stone-300 font-medium">EXCLUSIVE INSIGHTS</div>
                                    <CardTitle className="text-2xl font-bold leading-tight">
                                        Currently building an AI-powered interview platform
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="absolute -right-5 top-36 z-10 p-2 bg-stone-900 rounded-lg font-mono text-xs border border-dashed border-stone-500 w-full max-w-[30rem] h-auto md:w-[30rem] md:h-[18rem] will-change-transform transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:scale-110">
                                    <div className="flex flex-col h-full bg-stone-700 rounded border-dashed border-stone-400">
                                        <div className="flex justify-between items-center bg-stone-600 p-2 rounded-t">
                                            <span className="text-[0.6rem] font-thin tracking-widest">IDE</span>
                                            <div className="flex space-x-1">
                                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                            </div>
                                        </div>
                                        <div className="flex flex-grow flex-col md:flex-row">
                                            <div className="w-full md:w-1/3 bg-stone-800 p-2 border-r border-stone-500 text-left text-stone-300">
                                                <p className="text-[0.5rem] font-thin text-stone-400">Files :</p>
                                                <ul className="text-[0.5rem] mt-2 space-y-1">
                                                    <li>page.tsx</li>
                                                    <li>config.ts</li>
                                                    <li>layout.tsx</li>
                                                </ul>
                                            </div>
                                            <div className="bg-stone-800 h-full overflow-hidden">
                                                <p className="text-[0.6rem] p-2 font-thin tracking-widest text-left">Code Editor</p>
                                                <div className="bg-stone-700 h-full p-2">
                                                    <div className="space-y-2">
                                                        <div className="text-stone-400">{`// Importing Next.js components with TypeScript`}</div>
                                                        <div>
                                                            <span className="text-pink-500">import</span>{" "}
                                                            <span className="text-purple-400">NextPage</span>{" "}
                                                            <span className="text-pink-500">from</span>{" "}
                                                            <span className="text-orange-300">&apos;next&apos;</span>;
                                                        </div>
                                                        <div className="text-stone-400">{`// Importing AI utilities for the interview platform`}</div>
                                                        <div>
                                                            <span className="text-pink-500">import</span>{" "}
                                                            {"{"} <span className="text-purple-400">AIEngine, InterviewHelper</span> {"}"}{" "}
                                                            <span className="text-pink-500">from</span>{" "}
                                                            <span className="text-orange-300">&apos;@ai-platform/utils&apos;</span>;
                                                        </div>
                                                        <div className="text-stone-400">{`// Importing all components from a UI library`}</div>
                                                        <div>
                                                            <span className="text-pink-500">import</span>{" "}
                                                            <span className="text-purple-400">*</span>{" "}
                                                            <span className="text-pink-500">as</span>{" "}
                                                            <span className="text-purple-400">UIComponents</span>{" "}
                                                            <span className="text-pink-500">from</span>{" "}
                                                            <span className="text-orange-300">&apos;ui-library&apos;</span>;
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    });
    
    BentoSection.displayName = 'BentoSection';
    
    export default BentoSection;