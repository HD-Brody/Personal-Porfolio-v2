function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-neutral shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-neutral-text">
              Brody Honigman Deltoff
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-neutral-text/70 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-neutral-text/70 hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-neutral-text/70 hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-neutral-text/70 hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-neutral-text/70 hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral to-primary-light/20 pt-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-neutral-text mb-8 leading-none">
            Hi, I'm Brody
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-neutral-text/70 mb-12 max-w-4xl mx-auto font-medium">
            I'm an aspiring software engineer with a passion for building things.
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-block bg-primary text-white px-12 py-6 rounded-xl text-xl font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-neutral">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-black text-neutral-text text-center mb-20">
            About Me
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-2xl sm:text-3xl text-neutral-text/70 mb-16 text-center font-medium leading-relaxed">
              I'm currently a student at the University of Toronto pursuing a Computer Science Specialist. 
              I like to build projects where I can mix problem-solving with design, whether that's a web app, a game, or a personal tool.
              When I'm not coding, I'm usually drawing, playing guitar, or working on something artistic.
            </p>
            <div className="grid sm:grid-cols-2 gap-16">
              <div className="bg-white/50 p-8 rounded-2xl border-2 border-primary/20">
                <h3 className="text-3xl font-bold text-neutral-text mb-8">Technical Skills</h3>
                <ul className="space-y-4 text-xl text-neutral-text/70">
                  <li className="flex items-center"><span className="text-primary mr-3 text-2xl">▶</span> React & Next.js</li>
                  <li className="flex items-center"><span className="text-primary mr-3 text-2xl">▶</span> JavaScript & TypeScript</li>
                  <li className="flex items-center"><span className="text-primary mr-3 text-2xl">▶</span> Node.js & Express</li>
                  <li className="flex items-center"><span className="text-primary mr-3 text-2xl">▶</span> Python & Django</li>
                </ul>
              </div>
              <div className="bg-white/50 p-8 rounded-2xl border-2 border-primary/20">
                <h3 className="text-3xl font-bold text-neutral-text mb-8">Other Skills</h3>
                <ul className="space-y-4 text-xl text-neutral-text/70">
                  <li className="flex items-center"><span className="text-primary mr-3 text-2xl">▶</span> UI/UX Design</li>
                  <li className="flex items-center"><span className="text-primary mr-3 text-2xl">▶</span> Database Design</li>
                  <li className="flex items-center"><span className="text-primary mr-3 text-2xl">▶</span> API Development</li>
                  <li className="flex items-center"><span className="text-primary mr-3 text-2xl">▶</span> Cloud Deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-primary-light/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-black text-neutral-text text-center mb-20">
            Skills & Technologies
          </h2>
          
          {/* Languages */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-neutral-text text-center mb-12">Languages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Python', image: '/images/python.png' },
                { name: 'JavaScript', image: '/images/javascript.png' },
                { name: 'TypeScript', image: '/images/typescript.png' },
                { name: 'HTML', image: '/images/html.png' },
                { name: 'CSS', image: '/images/css.png' },
                { name: 'C#', image: '/images/csharp.png' }
              ].map((skill, index) => (
                <div key={index} className="bg-neutral rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-110 border-2 border-primary/20 transform">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                    <img 
                      src={skill.image} 
                      alt={`${skill.name} logo`}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-2xl text-neutral-text/50 hidden">🔤</span>
                  </div>
                  <h4 className="font-bold text-lg text-neutral-text">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-neutral-text text-center mb-12">Frameworks & Libraries</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {[
                { name: 'React', image: '/images/react.png' },
                { name: 'Next.js', image: '/images/nextjs.png' },
                { name: 'Tailwind CSS', image: '/images/tailwind.png' },
                { name: 'Flask', image: '/images/flask.png' },
                { name: 'NumPy', image: '/images/numpy.png' },
                { name: 'Pandas', image: '/images/pandas.png' },
                { name: 'Matplotlib', image: '/images/matplotlib.png' }
              ].map((skill, index) => (
                <div key={index} className="bg-neutral rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-110 border-2 border-primary/20 transform">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                    <img 
                      src={skill.image} 
                      alt={`${skill.name} logo`}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-2xl text-neutral-text/50 hidden">⚙️</span>
                  </div>
                  <h4 className="font-bold text-lg text-neutral-text">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-neutral-text text-center mb-12">Databases</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                { name: 'SQLite', image: '/images/sqlite.png' },
                { name: 'MongoDB', image: '/images/mongodb.png' }
              ].map((skill, index) => (
                <div key={index} className="bg-neutral rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-110 border-2 border-primary/20 transform">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                    <img 
                      src={skill.image} 
                      alt={`${skill.name} logo`}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-2xl text-neutral-text/50 hidden">🗄️</span>
                  </div>
                  <h4 className="font-bold text-lg text-neutral-text">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Developer Tools & APIs */}
          <div>
            <h3 className="text-4xl font-bold text-neutral-text text-center mb-12">Developer Tools & APIs</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {[
                { name: 'Git & GitHub', image: '/images/git.png' },
                { name: 'VS Code', image: '/images/vscode.png' },
                { name: 'Visual Studio', image: '/images/visualstudio.png' },
                { name: 'PyCharm', image: '/images/pycharm.png' },
                { name: 'Selenium', image: '/images/selenium.png' },
                { name: 'ORS API', image: '/images/openrouteservice.png' },
                { name: 'Gemini API', image: '/images/gemini.png' },
                { name: 'Auth0', image: '/images/auth0.png' }
              ].map((skill, index) => (
                <div key={index} className="bg-neutral rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-110 border-2 border-primary/20 transform">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                    <img 
                      src={skill.image} 
                      alt={`${skill.name} logo`}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-2xl text-neutral-text/50 hidden">🛠️</span>
                  </div>
                  <h4 className="font-bold text-lg text-neutral-text">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-black text-neutral-text text-center mb-20">
            Projects
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:scale-105 border-2 border-primary/20 transform flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img 
                    src="/images/uoft-housing-hub.png" 
                    alt="UofT Housing Hub Screenshot"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-neutral-text mb-6">
                    UofT Housing Hub
                  </h3>
                  <p className="text-neutral-text/70 mb-8 text-lg leading-relaxed flex-grow">
                  A full-stack web application that helps University of Toronto students find off-campus housing quickly and efficiently. Features include real-time filtering, interactive map view, listing previews, walking-time calculations to campus, and automated data collection from multiple rental platforms.
                  </p>
                  <button className="w-full bg-primary text-white py-4 px-6 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg mt-auto">
                    View Project
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:scale-105 border-2 border-primary/20 transform flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img 
                    src="/images/pitchperfect.png" 
                    alt="PitchPerfect Screenshot"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-neutral-text mb-6">
                    PitchPerfect
                  </h3>
                  <p className="text-neutral-text/70 mb-8 text-lg leading-relaxed flex-grow">
                    An AI-powered platform that helps users practice workplace conversations such as pitching ideas or negotiating raises. Uses realistic scenario simulations and personalized feedback to improve communication skills. Winner of Best Use of Auth0 at HackThe6ix 2025.
                  </p>
                  <button className="w-full bg-primary text-white py-4 px-6 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg mt-auto">
                    View Project
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:scale-105 border-2 border-primary/20 transform flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img 
                    src="/images/digit-recognition.png" 
                    alt="Digit Recognition Neural Network Screenshot"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-neutral-text mb-6">
                    Digit Recognition Neural Network
                  </h3>
                    <p className="text-neutral-text/70 mb-8 text-lg leading-relaxed flex-grow">
                    A high-accuracy digit classification model trained on the MNIST dataset, achieving 98% accuracy with optimized hyperparameters. Features an interactive interface where users can draw numbers for real-time recognition, enhancing usability and engagement.
                  </p>
                  <button className="w-full bg-primary text-white py-4 px-6 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg mt-auto">
                    View Project
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:scale-105 border-2 border-primary/20 transform flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img 
                    src="/images/pixelize.png" 
                    alt="Pixelize Screenshot"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-neutral-text mb-6">
                    Pixelize
                  </h3>
                  <p className="text-neutral-text/70 mb-8 text-lg leading-relaxed flex-grow">
                  A pixel art software that enables users to create detailed pixel art with tools like paint bucket, undo, and layers. Supports exporting artwork as transparent PNG files for seamless integration into other projects.
                  </p>
                  <button className="w-full bg-primary text-white py-4 px-6 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg mt-auto">
                    View Project
                  </button>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-dark">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-12">
            Contact
          </h2>
          <p className="text-2xl sm:text-3xl text-white/70 mb-16 max-w-4xl mx-auto font-medium leading-relaxed">
            Feel free to reach out!
          </p>
          <a 
            href="mailto:0707bhd@gmail.com"
            className="inline-block bg-primary text-white px-10 py-5 rounded-2xl text-2xl font-bold hover:bg-primary-dark transition-all transform hover:scale-110 shadow-2xl hover:shadow-3xl"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
