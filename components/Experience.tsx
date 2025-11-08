"use client";

import { useEffect, useState, useRef } from "react";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      company: "IE Networks",
      position: "Software Developer",
      location: "Addis Ababa, Ethiopia",
      period: "May 2025 – Present",
      type: "Current",
      responsibilities: [
        "Contributing to enterprise-level software systems with a focus on backend services and integration",
        "Working on scalable applications using NestJS, Next.js, and React",
        "Collaborating with cross-functional teams to improve performance and deployment workflows",
      ],
    },
    {
      company: "Pilasa Technologies",
      position: "Software Developer",
      location: "Ethiopia (Hybrid)",
      period: "Jan 2023 – May 2025",
      type: "Previous",
      responsibilities: [
        "Developed and maintained full-stack web and mobile applications",
        "Implemented RESTful APIs with NestJS and frontends with React and Next.js",
        "Led deployments and CI/CD pipelines using Docker and GitHub Actions",
        "Worked closely with designers and clients to deliver modern, user-friendly interfaces",
      ],
    },
    {
      company: "Freelance / Self-Employed",
      position: "Software Developer",
      location: "Addis Ababa, Ethiopia",
      period: "Jan 2021 – Dec 2022",
      type: "Previous",
      responsibilities: [
        "Worked independently on freelance and self-learning projects",
        "Gained hands-on experience building web and mobile apps using React, Node.js, and Flutter",
        "Focused on backend architecture, authentication, and database design",
        "Built personal projects to strengthen full-stack development skills",
      ],
    },
  ];

  const education = {
    degree: "Bachelor's Degree in Computer Science",
    university: "Mekelle University",
    location: "Mekelle, Ethiopia",
  };

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Building scalable solutions and delivering exceptional results across diverse projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex gap-8 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex flex-shrink-0 items-start pt-2">
                  <div className={`relative w-16 h-16 rounded-full flex items-center justify-center ${
                    exp.type === "Current" 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/50" 
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    {exp.type === "Current" && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-20"></div>
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
                          {exp.position}
                        </h3>
                        {exp.type === "Current" && (
                          <span className="px-2 sm:px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded-full self-start sm:self-auto">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        {exp.company}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className={`mt-12 sm:mt-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 transition-all duration-1000 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Education
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                {education.degree}
              </h4>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium mb-2">
                {education.university}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {education.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
