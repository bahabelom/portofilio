export default function Projects() {
  const projects = [
    {
      title: "Enterprise Web Application",
      description:
        "A full-stack web application built with Next.js and TypeScript, featuring real-time updates and advanced analytics.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      link: "#",
    },
    {
      title: "API Integration Platform",
      description:
        "A robust platform for managing and integrating multiple APIs with comprehensive monitoring and error handling.",
      technologies: ["Node.js", "Express", "MongoDB", "Docker"],
      link: "#",
    },
    {
      title: "Mobile-First Dashboard",
      description:
        "A responsive dashboard application with interactive charts and real-time data visualization for business insights.",
      technologies: ["React", "Chart.js", "REST API", "Material-UI"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

