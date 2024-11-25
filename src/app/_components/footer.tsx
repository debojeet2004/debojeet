"use client"

import Link from 'next/link'
import { useEffect, useState, useMemo } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'


type SocialLink = [React.ComponentType<{ className: string }>, string, string]

export default function Footer() {
    const [time, setTime] = useState<string>('00:00 AM')
    const [status, setStatus] = useState<'working' | 'sleeping'>('working')
    const [quote, setQuote] = useState<string>('The best error message is the one that never shows up.')

    const quickLinks: Array<[string, string]> = [
        ['Home', '/'],
        ['About', '/aboutme'],
        ['Stack', '/stack'],
        ['Projects', '/projects'],
        ['Experience', '/experience/travel']
    ]

    const resourceLinks: Array<[string, string]> = [
        ['Blogs', '/blogs'],
        ['Learning Curve', '/learningcurve'],
        ['Testimonials', '/testimonials']
    ]

    const socialLinks: SocialLink[] = [
        [FaGithub, 'GitHub', 'https://github.com/DebojeetKarmakar'],
        [FaLinkedin, 'LinkedIn', 'https://linkedin.com'],
        [FaXTwitter, 'Twitter', 'https://twitter.com'],
        [FaInstagram, 'Instagram', 'https://instagram.com/debojeetkarmakar'],
        [FaYoutube, 'Youtube', 'https://youtube.com/@debojeetkarmakar']
    ]


    const codingQuotes = useMemo(() => [
        
        "Every programmer is an author.",
        "A lot to Learn - A lot to Know - A lot to Explore - A lot to Grow",
        "The expert in anything was once a beginner.",
        "Software and cathedrals are much the same – first we build them, then we pray.",
        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
        "It's not a bug – it's an undocumented feature.",
        "The function of good software is to make the complex appear to be simple.",
        "Don't worry if it doesn't work right. If everything did, you'd be out of a job.",
        "Experience is the name everyone gives to their mistakes.",
        "The best way to predict the future is to implement it.",
        "Good code is its own best documentation.",
        "Programming is not about typing, it's about thinking.",
        "What one programmer can do in one month, two programmers can do in two months.",
        "The most damaging phrase in the language is 'We've always done it this way.'",
        "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "The most important property of a program is whether it accomplishes the intention of its user.",
        "Before software can be reusable it first has to be usable.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."
    ], [])

    // Optimize time update interval
    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const istTime = now.toLocaleString('en-US', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            })
            setTime(istTime)

            const hour = parseInt(now.toLocaleString('en-US', {
                timeZone: 'Asia/Kolkata',
                hour: 'numeric',
                hour12: false
            }))
            setStatus(hour >= 9 && hour < 23 ? 'working' : 'sleeping')
        }

        updateTime()
        // Update every minute instead of every second for better performance
        const interval = setInterval(updateTime, 60000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const randomQuote = codingQuotes[Math.floor(Math.random() * codingQuotes.length)]
        setQuote(randomQuote)
    }, [codingQuotes])

    return (
        <footer className="relative bg-gradient-to-b from-background to-stone-900 border-t mt-6">
            <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-20 ">
                {/* Main grid with hover effects */} 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8  max-w-5xl mx-auto pt-6">
                    {/* Quick Links Card */}
                    <div className="group bg-stone-900/50 backdrop-blur-sm rounded-xl p-6 border border-stone-800 hover:border-stone-700 transition-all duration-300">
                        <h3 className="text-stone-200 font-medium mb-6 flex items-center gap-3">
                            <div className="h-8 w-1 bg-stone-700 rounded-full" />
                            Quick Links
                        </h3>
                        <nav className="space-y-3">
                            {quickLinks.map(([label, href]) => (
                                <Link 
                                    key={href} 
                                    href={href}
                                    className="block text-stone-400 hover:text-stone-200 hover:translate-x-3 transition-all duration-300 group/link"
                                >
                                    <div className="flex items-center justify-start gap-3 p-2 rounded-lg">
                                        <span>{label}</span>
                                        <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">
                                            →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Resources Card */}
                    <div className="group bg-stone-900/50 backdrop-blur-sm rounded-xl p-6 border border-stone-800 hover:border-stone-700 transition-all duration-300">
                        <h3 className="text-stone-200 font-medium mb-6 flex items-center gap-3">
                            <div className="h-8 w-1 bg-stone-700 rounded-full" />
                            Resources
                        </h3>
                        <nav className="space-y-3">
                            {resourceLinks.map(([label, href]) => (
                                <Link 
                                    key={href} 
                                    href={href}
                                    className="block text-stone-400 hover:text-stone-200 hover:translate-x-3 transition-all duration-300 group/link"
                                >
                                    <div className="flex items-center justify-start gap-3 p-2 rounded-lg">
                                        <span>{label}</span>
                                        <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">
                                            →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </nav>
                    </div> 

                    {/* Social Links Card */}
                    <div className="group bg-stone-900/50 backdrop-blur-sm rounded-xl p-6 border border-stone-800 hover:border-stone-700 transition-all duration-300">
                        <h3 className="text-stone-200 font-medium mb-6 flex items-center gap-3">
                            <div className="h-8 w-1 bg-stone-700 rounded-full" />
                            Let&apos;s Connect
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {socialLinks.map(([Icon, label, href]) => (
                                <Link 
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 text-stone-400 hover:text-stone-200 hover:scale-105 hover:translate-x-3 rounded-lg p-2 transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                                    <span>{label}</span>
                                </Link>
                            ))}
                        </div>
                    </div> 
                </div>

                {/* Creative time display */}
                <div className="mt-16 mb-16 max-w-5xl mx-auto">
                    <div className="w-full bg-gradient-to-br from-stone-900/50 to-stone-800/30 backdrop-blur-sm rounded-2xl p-8 border border-stone-800 hover:border-stone-600 transition-all duration-500 group hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]">
                        <div className="relative">                            
                            {/* Updated layout */}
                            <div className="relative flex justify-between items-center  ">
                                {/* Left side: Quote and Status */}
                                <div className="flex flex-col justify-end items-start  h-full gap-4">
                                    <div className={`flex items-center gap-2 ${status === 'working' ? 'text-green-400' : 'text-yellow-400'}`}>
                                        <span className={`w-2 h-2 rounded-full ${status === 'working' ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`} />
                                        <span className="text-sm font-medium">
                                            {status === 'working' ? 'Currently Working ' : 'Currently Sleeping'}
                                        </span>
                                    </div>
                                    <p className="text-stone-400 italic max-w-md">
                                        &quot;{quote}&quot;
                                    </p>
                                </div>
                                {/* Right side: Time */}
                                <div className="flex flex-col items-end gap-2"> 
                                    <span className="flex items-center gap-2 text-stone-400 opacity-60 text-sm uppercase tracking-wider">IST (India)</span>
                                    <span className=" text-8xl font-light text-transparent bg-clip-text bg-gradient-to-r from-stone-300 to-stone-500 tracking-tight ">
                                        {time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer attribution */}
                <div className=" max-w-5xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-stone-400">© {new Date().getFullYear()} Copyright</p>
                    <p className="text-stone-400">Made with ♥️ by Debojeet Karmakar</p>
                </div>
            </div>
        </footer>
    )
}
