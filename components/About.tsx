export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          About Me
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            I'm a passionate software developer focused on creating innovative solutions and delivering
            high-quality software products. With a strong foundation in modern web technologies, I enjoy
            tackling complex challenges and turning ideas into reality.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            My approach to development combines technical expertise with creative problem-solving,
            ensuring that every project I work on is not only functional but also user-friendly and
            scalable. I'm always eager to learn new technologies and stay up-to-date with the
            latest industry trends.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            When I'm not coding, you can find me exploring new frameworks, contributing to open
            source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
}

