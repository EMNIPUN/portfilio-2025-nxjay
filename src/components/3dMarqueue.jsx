import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

// Tech skills data organized by categories
const techSkills = [
  {
    category: "Frontend",
    name: "React",
    experience: "4+ years",
    image: "https://cdn-icons-png.flaticon.com/128/3459/3459528.png",
    color: "from-blue-500 to-cyan-400",
    description: "Component-based UI development with React and Next.js",
  },
  {
    category: "Frontend",
    name: "TypeScript",
    experience: "3+ years",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "from-blue-600 to-indigo-500",
    description: "Type-safe JavaScript for building robust applications",
  },
  {
    category: "Frontend",
    name: "Tailwind CSS",
    experience: "3+ years",
    image: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
    color: "from-cyan-500 to-teal-400",
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    category: "Frontend",
    name: "Next.js",
    experience: "3+ years",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "from-gray-600 to-black",
    description: "React framework for production-grade applications",
  },
  {
    category: "Backend",
    name: "Node.js",
    experience: "3+ years",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "from-green-500 to-emerald-400",
    description: "Server-side JavaScript runtime for scalable applications",
  },
  {
    category: "Backend",
    name: "Python",
    experience: "2+ years",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "from-blue-400 to-indigo-400",
    description: "Versatile language for web, data science and automation",
  },
  {
    category: "Database",
    name: "PostgreSQL",
    experience: "3+ years",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "from-blue-600 to-indigo-600",
    description: "Robust relational database for complex data models",
  },
  {
    category: "Database",
    name: "MongoDB",
    experience: "2+ years",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "from-green-500 to-green-700",
    description: "NoSQL database for flexible document storage",
  },
  {
    category: "Mobile",
    name: "React Native",
    experience: "2+ years",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "from-blue-500 to-purple-500",
    description: "Cross-platform mobile app development with React",
  },
  {
    category: "Mobile",
    name: "Flutter",
    experience: "1+ years",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    color: "from-cyan-400 to-blue-500",
    description: "Multi-platform UI toolkit for beautiful native apps",
  },
  {
    category: "DevOps",
    name: "Docker",
    experience: "2+ years",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "from-blue-400 to-blue-600",
    description: "Containerization for consistent deployment environments",
  },
  {
    category: "DevOps",
    name: "AWS",
    experience: "2+ years",
    image: "https://img.icons8.com/?size=96&id=33039&format=png",
    color: "from-yellow-500 to-orange-400",
    description: "Cloud infrastructure and serverless architectures",
  },
  {
    category: "Tools",
    name: "Git & GitHub",
    experience: "4+ years",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "from-orange-500 to-red-500",
    description: "Version control and collaborative development",
  },
  {
    category: "Tools",
    name: "VS Code",
    experience: "4+ years",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    color: "from-blue-500 to-blue-700",
    description: "Powerful code editor with extensive extension ecosystem",
  },
];

// Organize skills into two rows for the marquee
const firstRow = techSkills.slice(0, Math.ceil(techSkills.length / 2));
const secondRow = techSkills.slice(Math.ceil(techSkills.length / 2));

// Skill card component with improved UI
const SkillCard = ({
  name,
  category,
  experience,
  image,
  color,
  description,
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        // light styles
        "border-gray-950/[.1] bg-transparent backdrop-blur-sm hover:bg-white/30",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-transparent dark:backdrop-blur-sm dark:hover:bg-gray-800/30",
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`rounded-md p-1 flex items-center justify-center bg-gradient-to-br  w-10 h-10`}>
            <img 
              src={image} 
              alt={`${name} icon`} 
              className="w-8 h-8 object-contain" 
            />
          </div>
          <div className="flex flex-col">
            <figcaption className="text-sm font-bold dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{category}</p>
          </div>
        </div>
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100/50 dark:bg-gray-700/50 dark:text-gray-300">
          {experience}
        </span>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4 py-8">
      <h3 className="text-xl font-semibold text-center mb-4 dark:text-white">
        My Technical <span className="text-primary">Expertise</span>
      </h3>
      <Marquee pauseOnHover className="[--duration:30s] pb-4">
        {firstRow.map((skill) => (
          <div key={skill.name} className="mx-2">
            <SkillCard {...skill} />
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((skill) => (
          <div key={skill.name} className="mx-2">
            <SkillCard {...skill} />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
