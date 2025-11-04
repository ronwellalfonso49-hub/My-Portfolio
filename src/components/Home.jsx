import React from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Mail, Instagram, Sparkles, Code, Palette } from 'lucide-react'
import { Button } from './ui/button'

const Home = ({ setActiveSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-32 left-20 text-primary/20"
      >
        <Code className="h-8 w-8" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute top-40 right-32 text-primary/20"
      >
        <Palette className="h-6 w-6" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-40 left-32 text-primary/20"
      >
        <Sparkles className="h-7 w-7" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative w-52 h-52 mx-auto mb-8">
            {/* Animated rings around profile picture */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-primary/10"
            />
            
            <div className="w-52 h-52 mx-auto rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl relative z-10">
              <img 
                src="/profile-picture.webp" 
                alt="Ronwell Alfonso" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  imageRendering: 'high-quality',
                  imageRendering: '-webkit-optimize-contrast'
                }}
                loading="eager"
                decoding="sync"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Hi, I'm Ronwell Alfonso
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Full-Stack Developer & UI/UX Designer
        </motion.p>

        <motion.p 
          variants={itemVariants}
          className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I create beautiful, functional, and user-centered digital experiences. 
          Passionate about clean code, innovative solutions, and bringing ideas to life 
          through technology.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <a href="/Ronwell_Alfonso_Resume.pdf" download="Ronwell_Alfonso_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setActiveSection('projects')}
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/ron_well/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900 hover:from-pink-300 hover:to-purple-300 dark:hover:from-pink-800 dark:hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Instagram className="h-6 w-6 text-pink-700 dark:text-pink-300" />
          </motion.a>
          <motion.a
            href="mailto:ronwellalfonso49@gmail.com"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 hover:from-red-200 hover:to-red-300 dark:hover:from-red-800 dark:hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="h-6 w-6 text-red-700 dark:text-red-300" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home
