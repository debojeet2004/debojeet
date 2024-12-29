'use client'
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from 'next/image'

export default function AboutPage() {

  const thoughts = [
    { title: 'Exploring New Technologies', category: 'Tech', icon: '🚀' },
    { title: 'Digital Art & Creativity', category: 'Design', icon: '🎨' },
    { title: 'Remote Work Adventures', category: 'Travel', icon: '✈️' },
    { title: 'UI/UX Innovation', category: 'Design', icon: '📱' },
  ]

  return (
    <div className="min-h-screen text-zinc-400">
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-thin text-white mb-8">About Me</h1>
            <p className="text-lg leading-relaxed text-justify">
            In the digital realm where dreams take flight,
            A seeker of knowledge, coding day and night.
            From AI&apos;s depths to ML&apos;s embrace,
            Creating solutions with artistic grace.
            A designer&apos;s soul in a developer&apos;s mind,
            Weaving future&apos;s tapestry, one line at a time.
            Through circuits and pixels, my journey flows,
            As innovation&apos;s flame eternally glows.
            </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-[16/9] overflow-hidden rounded-lg"
        >
          <Image
            src="/debojeet.jpg"
            alt="Profile"
            width={800}
            height={440}
            className="object-cover border"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-justify">
          I&apos;m Debojeet Karmakar, a Computer Science student with a specialization in Artificial Intelligence and Machine Learning. I&apos;m passionate about technology and its potential to shape the future. I&apos;m particularly drawn to the intersection of technology and design, and I enjoy the process of designing, developing, and bringing innovative digital experiences to life. I&apos;m a UI/UX Designer and a Full-stack Developer, constantly seeking to enhance my skills and explore new technologies.
          </p>
          <p className="text-lg leading-relaxed text-justify">
          My journey in higher education has been a period of significant personal and academic growth. I&apos;ve embraced challenges, sought out new experiences, and developed a strong work ethic. I&apos;m driven to succeed in my academic pursuits and build a meaningful career in the tech industry.<br/><br/>
          I&apos;m a proactive and results-oriented individual with a strong desire to learn and grow. I&apos;m eager to contribute my skills and knowledge to impactful projects and make a positive impact on the world.
          </p>
        </motion.div>

        {/* Thoughts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-thin text-white mb-1">Thoughts</h2>
          <p className="text-sm text-zinc-500 mb-8">Here are some of my thoughts and reflections on my journey so far.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {thoughts.map((thought, index) => (
              <Card 
                key={index} 
                className="bg-stone-900 border-stone-800 hover:border-stone-700 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="text-2xl mb-2">{thought.icon}</div>
                  <h3 className="text-white font-medium mb-1">{thought.title}</h3>
                  <p className="text-sm text-zinc-500">{thought.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

  )
}
