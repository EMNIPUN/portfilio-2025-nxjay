"use client";

import { motion } from "framer-motion";
import { Star, Briefcase, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "Remote",
      period: "2023 - Present",
      description: "Lead development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led migration to TypeScript reducing bugs by 60%",
        "Implemented CI/CD pipeline reducing deployment time by 75%"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "2022 - 2023",
      description: "Developed and maintained e-commerce platforms and customer-facing applications. Collaborated with cross-functional teams to deliver high-quality solutions.",
      achievements: [
        "Built responsive e-commerce platform generating $2M+ revenue",
        "Reduced page load times by 50% through code optimization",
        "Integrated payment systems processing 10k+ transactions daily"
      ],
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Vercel"]
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      location: "San Francisco, CA",
      period: "2021 - 2022",
      description: "Focused on creating intuitive user interfaces and improving user experience. Worked closely with designers to implement pixel-perfect designs.",
      achievements: [
        "Improved user engagement by 35% through UX enhancements",
        "Developed reusable component library used across 5+ projects",
        "Reduced bundle size by 30% through code splitting and optimization"
      ],
      technologies: ["React", "JavaScript", "SASS", "Material-UI", "Jest"]
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Star className="w-5 h-5" />
            <span className="font-medium">Professional Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Professional{" "}
            <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my career growth and the impact I've made at various organizations
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                
                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="md:ml-20 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:text-right mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
