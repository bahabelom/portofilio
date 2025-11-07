import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "SelamNew Workspace",
      description:
        "An enterprise-level HR and productivity management platform that simplifies complex workflows, strengthens teamwork, manages projects, and enhances business operations. Features comprehensive HR modules including organization management, talent acquisition, OKR/CFR tracking, learning & growth, payroll, time & attendance, and more.",
      technologies: ["Next.js", "React", "TypeScript", "NestJS", "Microservices", "Dashboard Analytics", "HR Management"],
      link: "https://selamnew.com/",
      featured: true,
      image: "/projects/selamnew.png",
      highlights: [
        "Enterprise HR management system",
        "Real-time dashboard with analytics",
        "Comprehensive employee lifecycle management",
        "OKR and CFR tracking system",
      ],
    },
    {
      title: "Norem",
      description:
        "A modern restaurant discovery and food ordering platform featuring a beautiful dark-themed UI. Enables users to discover restaurants, filter by cuisine types, browse menus, and place orders. Built with focus on user experience and seamless navigation.",
      technologies: ["Next.js", "React", "TypeScript", "REST APIs", "Mobile-First Design", "Food Ordering System"],
      link: "https://norem.co/",
      featured: true,
      image: "/projects/norem.png",
      highlights: [
        "Restaurant discovery platform",
        "Multi-cuisine filtering system",
        "Modern dark-themed UI/UX",
        "Mobile-responsive design",
      ],
    },
    {
      title: "TDA - Tigray Development Association",
      description:
        "A comprehensive web platform for Tigray Development Association featuring secure payment integration for fundraising and donations. Enables seamless online donations with multiple payment gateways, donor management, and transparent fund tracking.",
      technologies: ["Next.js", "React", "TypeScript", "Payment Integration", "Stripe/PayPal", "Donation Management", "Secure Transactions"],
      link: "#",
      featured: false,
      image: "/projects/tda.png",
      highlights: [
        "Secure payment gateway integration",
        "Multiple payment methods support",
        "Donor management system",
        "Transparent fund tracking and reporting",
      ],
    },
    {
      title: "Tigray Education Bureau - HR Management",
      description:
        "A comprehensive HR management web application for Tigray Education Bureau. Streamlines employee management, payroll processing, attendance tracking, and administrative workflows for educational institutions.",
      technologies: ["Next.js", "React", "TypeScript", "NestJS", "HR Management", "Payroll System", "Attendance Tracking"],
      link: "#",
      featured: false,
      image: "/projects/online doctor.png",
      highlights: [
        "Comprehensive HR management system",
        "Payroll and attendance tracking",
        "Employee database management",
        "Administrative workflow automation",
      ],
    },
    {
      title: "Tigray Justice Bureau",
      description:
        "A web application developed for Tigray Justice Bureau to manage legal processes, case tracking, and administrative workflows. Provides efficient case management and document handling for the justice system.",
      technologies: ["Next.js", "React", "TypeScript", "Case Management", "Document Management", "Legal System"],
      link: "#",
      featured: false,
      image: "/projects/tda.png",
      highlights: [
        "Case management system",
        "Document tracking and management",
        "Legal process workflow",
        "Administrative dashboard",
      ],
    },
    {
      title: "Online Healthcare System - Mobile App",
      description:
        "A comprehensive mobile healthcare application developed as a final year graduation project. Features symptom analysis, disease diagnosis suggestions, vaccine recommendations, and full online doctor consultation system. Enables users to input symptoms and receive AI-powered disease predictions with medical guidance.",
      technologies: ["Flutter", "React Native", "Node.js", "AI/ML", "Healthcare API", "Symptom Analysis", "Telemedicine"],
      link: "#",
      featured: true,
      image: "/projects/online doctor.png",
      highlights: [
        "Symptom-based disease diagnosis",
        "AI-powered medical suggestions",
        "Vaccine recommendation system",
        "Full online doctor consultation",
        "Mobile-first healthcare platform",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
                    Featured
                  </span>
                </div>
              )}

              {/* Project Image */}
              {project.image && (
                <div className="relative h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}

              <div className="p-7">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed text-base line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1.5">
                      {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <svg className="w-3 h-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium shadow-sm border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium shadow-sm border border-gray-200 dark:border-gray-600">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {project.link && project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <span>Visit Live Site</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-lg font-semibold text-sm cursor-not-allowed">
                    <span>Project Details</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Interested in seeing more of my work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            Get in touch to discuss your project
            <svg
              className="w-5 h-5"
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
      </div>
    </section>
  );
}
