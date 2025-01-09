import Link from 'next/link'
// import AboutMenubarComponent from '@/components/AboutMenuBar'
export default function Page() {
  return (
    <div>
      <br/>
    <div className="flex">
      <aside className="w-1/4 pr-8">
        <nav className="sticky top-8">
          <ul className="space-y-2">
                <Link
                  href={`/`}
                  className="text-sm hover:underline"
                >
                  {'<- Blog'}
                </Link>
          </ul>
        </nav>
      </aside>
      <div className="w-3/4">
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p>Hello! I&apos;m a passionate developer with experience in web technologies.</p>
        </section>
        <section id="experience" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Senior Developer</h3>
              <p className="text-sm text-gray-600">TechCorp • 2020 - Present</p>
              <p>Led development of multiple web applications using React and Node.js.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Junior Developer</h3>
              <p className="text-sm text-gray-600">WebSolutions Inc. • 2018 - 2020</p>
              <p>Contributed to frontend development using HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </section>
        <section id="education" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div>
            <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-sm text-gray-600">University of Technology • 2014 - 2018</p>
          </div>
        </section>
        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript (React, Node.js)</li>
            <li>Python</li>
            <li>HTML/CSS</li>
            <li>SQL</li>
            <li>Git</li>
          </ul>
        </section>
        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">E-commerce Platform</h3>
              <p>Developed a full-stack e-commerce solution using MERN stack.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos qui tempore consequatur rerum aliquid ab, repudiandae alias maxime quia corporis provident sunt saepe cumque, eius dolore dignissimos! Sit, nisi!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos qui tempore consequatur rerum aliquid ab, repudiandae alias maxime quia corporis provident sunt saepe cumque, eius dolore dignissimos! Sit, nisi!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos qui tempore consequatur rerum aliquid ab, repudiandae alias maxime quia corporis provident sunt saepe cumque, eius dolore dignissimos! Sit, nisi!</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Task Management App</h3>
              <p>Created a React-based task management application with a Node.js backend.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

