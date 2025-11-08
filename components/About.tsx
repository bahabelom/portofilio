"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className={`text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About Me
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p 
            className={`text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            I'm a passionate software developer focused on creating innovative solutions and delivering
            high-quality software products. With a strong foundation in modern web technologies, I enjoy
            tackling complex challenges and turning ideas into reality.
          </p>
          <p 
            className={`text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            My approach to development combines technical expertise with creative problem-solving,
            ensuring that every project I work on is not only functional but also user-friendly and
            scalable. I'm always eager to learn new technologies and stay up-to-date with the
            latest industry trends.
          </p>
          <p 
            className={`text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            When I'm not coding, you can find me exploring new frameworks, contributing to open
            source projects, or sharing knowledge with the developer community.
          </p>
        </div>

        {/* Skills Preview */}
        <div 
          className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {["React", "Next.js", "NestJS", "TypeScript"].map((skill, index) => (
            <div
              key={skill}
              className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-lg text-center border border-blue-200 dark:border-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
