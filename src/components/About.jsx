import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Database, Smartphone, Globe, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const About = () => {
  const [activeTab, setActiveTab] = useState('skills')

  const skills = [
    { name: 'HTML/CSS', level: 85, icon: <Code className="h-5 w-5" /> },
    { name: 'JavaScript', level: 75, icon: <Code className="h-5 w-5" /> },
    { name: 'React', level: 70, icon: <Code className="h-5 w-5" /> },
    { name: 'PHP', level: 80, icon: <Database className="h-5 w-5" /> },
    { name: 'MySQL', level: 75, icon: <Database className="h-5 w-5" /> },
    { name: 'Java', level: 70, icon: <Code className="h-5 w-5" /> },
    { name: 'UI/UX Design', level: 80, icon: <Palette className="h-5 w-5" /> },
    { name: 'Adobe Photoshop', level: 85, icon: <Palette className="h-5 w-5" /> },
  ]

  const beginnerExperience = [
    {
      title: 'Web Developer',
      description: 'Creating responsive websites and web applications using modern technologies like HTML, CSS, JavaScript, and PHP.',
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: 'Graphic Designer',
      description: 'Designing logos, banners, and visual content using Adobe Photoshop and other design tools.',
      icon: <Palette className="h-6 w-6" />
    },
    {
      title: 'Database Developer',
      description: 'Working with MySQL databases to store and manage data for web applications.',
      icon: <Database className="h-6 w-6" />
    },
    {
      title: 'Desktop App Developer',
      description: 'Building desktop applications using Java Swing and JDBC for cross-platform compatibility.',
      icon: <Code className="h-6 w-6" />
    }
  ]

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aspiring developer passionate about learning web development, graphic design, and creating digital solutions.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-1 shadow-lg">
            {[
              { id: 'skills', label: 'Skills' },
              { id: 'experience', label: 'Experience' }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'ghost'}
                onClick={() => setActiveTab(tab.id)}
                className={`mx-1 transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg' 
                    : 'hover:bg-white/50 dark:hover:bg-gray-600/50'
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {skill.icon}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">What I Do</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Globe className="h-8 w-8" />, title: 'Web Development', desc: 'HTML, CSS, JavaScript' },
                    { icon: <Palette className="h-8 w-8" />, title: 'Graphic Design', desc: 'Photoshop & UI/UX' },
                    { icon: <Database className="h-8 w-8" />, title: 'Database', desc: 'MySQL & PHP' },
                    { icon: <Code className="h-8 w-8" />, title: 'Desktop Apps', desc: 'Java & Swing' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-card border text-center"
                    >
                      <div className="text-primary mb-2">{item.icon}</div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">My Experience Areas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {beginnerExperience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="text-primary">{exp.icon}</div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground">
                          {exp.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  )
}

export default About
 
