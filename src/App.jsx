import { useTypewriter } from 'react-simple-typewriter';
import ThemeToggle from './ThemeToggle';
import VantaBackground from './VantaBackground';
import InfiniteScrollCarousel from './InfiniteScrollCarousel';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [text] = useTypewriter({
    words: ["Hi, I'm Brody"],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="min-h-screen bg-neutral dark:bg-neutral-dark transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-neutral dark:bg-neutral-dark shadow-sm z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-neutral-text dark:text-white">
              Portfolio
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-neutral-text/70 dark:text-white/70 hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-neutral-text/70 dark:text-white/70 hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-neutral-text/70 dark:text-white/70 hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-neutral-text/70 dark:text-white/70 hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-neutral-text/70 dark:text-white/70 hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                Contact
              </button>
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <VantaBackground>
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-neutral-text dark:text-white mb-8 leading-none transition-colors duration-300">
              {text}
              <span className="inline-block w-2 h-20 bg-neutral-text dark:bg-white ml-2 animate-blink-delayed"></span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-neutral-text/80 dark:text-white/80 mb-12 max-w-4xl mx-auto font-medium transition-colors duration-300">
              I'm an aspiring software engineer with a passion for building things.
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-block bg-primary text-white px-12 py-6 rounded-xl text-xl font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
          </div>
        </VantaBackground>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-neutral-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-black text-neutral-text dark:text-white text-center mb-16 transition-colors duration-300">
            About Me
          </h2>
          <div className="max-w-8xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-40 items-center">
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-[30rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                    <img
                      src="/images/profile.png"
                      alt="Brody Honigman Deltoff"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-5">
                  <p className="text-lg lg:text-xl text-neutral-text/80 dark:text-white/80 leading-relaxed font-medium transition-colors duration-300">
                    I'm currently a student at the University of Toronto pursuing a Computer Science Specialist program.
                    I love creating projects that combine design with functionality, whether that's
                    a web application, a game, or a small tool that makes life a bit easier.
                  </p>
                  <p className="text-lg lg:text-xl text-neutral-text/80 dark:text-white/80 leading-relaxed font-medium transition-colors duration-300">
                    I like mixing problem-solving with creativity, and I'm happiest when I see an idea come to life from start to finish.
                  </p>
                  <p className="text-lg lg:text-xl text-neutral-text/80 dark:text-white/80 leading-relaxed font-medium transition-colors duration-300">
                    Outside of coding, I spend a lot of time drawing and playing guitar. 
                    I've been into art since I was a kid, and I've been playing guitar for about 3 years.
                    I think that same creative mindset shapes how I approach building projects. 
                  </p>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-neutral-text dark:text-white mb-4 transition-colors duration-300">Quick Facts</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'Full-Stack Developer',
                      'Hackathon Winner',
                      'Artist',
                      'Game Developer',
                      'Problem Solver',
                      'Creative Thinker'
                    ].map((badge, index) => (
                      <span
                        key={index}
                        className="inline-block px-5 py-2.5 bg-primary-lightest dark:bg-primary-light/20 text-primary-dark dark:text-primary-light border-2 border-primary/30 rounded-full font-semibold text-base hover:bg-primary-light/30 hover:border-primary/50 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */} 
      <section id="skills" className="py-32 bg-neutral dark:bg-neutral-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-black text-neutral-text dark:text-white text-center mb-20 transition-colors duration-300">
            Skills & Technologies
          </h2>
          
          {/* Languages */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-neutral-text dark:text-white text-center mb-12 transition-colors duration-300">Languages</h3>
            <div className="flex justify-center">
              <div style={{ width: 'calc(6 * 10rem + 5 * 0.75rem)' }}>
                <InfiniteScrollCarousel
                  items={[
                    { name: 'Python', image: '/images/python.png' },
                    { name: 'JavaScript', image: '/images/javascript.png' },
                    { name: 'TypeScript', image: '/images/typescript.png' },
                    { name: 'HTML', image: '/images/html.png' },
                    { name: 'CSS', image: '/images/css.png' },
                    { name: 'C#', image: '/images/csharp.png' }
                  ]}
                  baseSpeed={1}
                  cardClassName="w-40 h-40"
                  cardContent={(skill) => (
                    <div className="bg-neutral dark:bg-neutral-dark rounded-2xl p-6 text-center shadow-sm border-2 border-primary/20 dark:border-primary/30 transform flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white dark:bg-white rounded-xl flex items-center justify-center">
                        <img
                          src={skill.image}
                          alt={`${skill.name} logo`}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <span className="text-2xl text-neutral-text/50 dark:text-white/50 hidden">🔤</span>
                      </div>
                      <h4 className="font-bold text-lg text-neutral-text dark:text-white transition-colors duration-300">{skill.name}</h4>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-neutral-text dark:text-white text-center mb-12 transition-colors duration-300">Frameworks & Libraries</h3>
            <div className="flex justify-center">
              <div style={{ width: 'calc(7 * 10rem + 6 * 0.75rem)' }}>
                <InfiniteScrollCarousel
                  items={[
                    { name: 'React', image: '/images/react.png' },
                    { name: 'Node.js', image: '/images/nodejs.png' },
                    { name: 'Next.js', image: '/images/nextjs.png' },
                    { name: 'Tailwind', image: '/images/tailwind.png' },
                    { name: 'Flask', image: '/images/flask.png' },
                    { name: 'NumPy', image: '/images/numpy.png' },
                    { name: 'Pandas', image: '/images/pandas.png' },
                    { name: 'Matplotlib', image: '/images/matplotlib.png' },
                    { name: 'Supabase', image: '/images/supabase.png' },
                  ]}
                  baseSpeed={1}
                  cardClassName="w-40 h-40"
                  cardContent={(skill) => (
                    <div className="bg-neutral dark:bg-neutral-dark rounded-2xl p-6 text-center shadow-sm border-2 border-primary/20 dark:border-primary/30 transform flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white dark:bg-white rounded-xl flex items-center justify-center">
                        <img
                          src={skill.image}
                          alt={`${skill.name} logo`}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <span className="text-2xl text-neutral-text/50 dark:text-white/50 hidden">🔤</span>
                      </div>
                      <h4 className="font-bold text-lg text-neutral-text dark:text-white transition-colors duration-300">{skill.name}</h4>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-neutral-text dark:text-white text-center mb-12">Databases</h3>
            <div className="flex justify-center">
              <div style={{ width: 'calc(2 * 10rem + 1 * 0.75rem)' }}>
                <InfiniteScrollCarousel
                  items={[
                    { name: 'SQLite', image: '/images/sqlite.png' },
                    { name: 'MongoDB', image: '/images/mongodb.png' },
                    { name: 'PostgreSQL', image: '/images/postgresql.png' }
                  ]}
                  baseSpeed={1}
                  cardClassName="w-40 h-40"
                  cardContent={(skill) => (
                    <div className="bg-neutral dark:bg-neutral-dark rounded-2xl p-6 text-center shadow-sm border-2 border-primary/20 dark:border-primary/30 transform flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white dark:bg-white rounded-xl flex items-center justify-center">
                        <img
                          src={skill.image}
                          alt={`${skill.name} logo`}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <span className="text-2xl text-neutral-text/50 dark:text-white/50 hidden">🔤</span>
                      </div>
                      <h4 className="font-bold text-lg text-neutral-text dark:text-white transition-colors duration-300">{skill.name}</h4>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Developer Tools & APIs */}
          <div>
            <h3 className="text-4xl font-bold text-neutral-text dark:text-white text-center mb-12">Developer Tools & APIs</h3>
            <div className="flex justify-center">
              <div style={{ width: 'calc(8 * 10rem + 7 * 0.75rem)' }}>
                <InfiniteScrollCarousel
                  items={[
                    { name: 'Git & GitHub', image: '/images/git.png' },
                    { name: 'VS Code', image: '/images/vscode.png' },
                    { name: 'VS', image: '/images/visualstudio.png' },
                    { name: 'PyCharm', image: '/images/pycharm.png' },
                    { name: 'Figma', image: '/images/figma.png' },
                    { name: 'Selenium', image: '/images/selenium.png' },
                    { name: 'Auth0', image: '/images/auth0.png' },
                    { name: 'ORS API', image: '/images/openrouteservice.png' },
                    { name: 'OpenAI API', image: '/images/openai.png' },
                    { name: 'Gemini API', image: '/images/gemini.png' }
                  ]}
                  baseSpeed={1}
                  cardClassName="w-40 h-40"
                  cardContent={(skill) => (
                    <div className="bg-neutral dark:bg-neutral-dark rounded-2xl p-6 text-center shadow-sm border-2 border-primary/20 dark:border-primary/30 transform flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white dark:bg-white rounded-xl flex items-center justify-center">
                        <img
                          src={skill.image}
                          alt={`${skill.name} logo`}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <span className="text-2xl text-neutral-text/50 dark:text-white/50 hidden">🔤</span>
                      </div>
                      <h4 className="font-bold text-lg text-neutral-text dark:text-white transition-colors duration-300">{skill.name}</h4>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-white dark:bg-neutral-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-black text-neutral-text dark:text-white text-center mb-20 transition-colors duration-300">
            Projects
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-neutral dark:bg-neutral-dark rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:scale-105 border-2 border-primary/20 dark:border-primary/30 transform flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img 
                    src="/images/uoft-housing-hub.png" 
                    alt="UofT Housing Hub Screenshot"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-neutral-text dark:text-white mb-6 transition-colors duration-300">
                    UofT Housing Hub
                  </h3>
                  <p className="text-neutral-text/70 dark:text-white/70 mb-8 text-lg leading-relaxed flex-grow transition-colors duration-300">
                  A full-stack web application that helps University of Toronto students find off-campus housing quickly and efficiently. Features include real-time filtering, interactive map view, listing previews, walking-time calculations to campus, and automated data collection from multiple rental platforms.
                  </p>
                  <button onClick={() => window.open('https://github.com/HD-Brody/UofT-Housing-Hub', '_blank')} className="w-full bg-primary text-white py-4 px-6 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg mt-auto">
                    View Project
                  </button>
                </div>
              </div>

              <div className="bg-neutral dark:bg-neutral-dark rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:scale-105 border-2 border-primary/20 dark:border-primary/30 transform flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img 
                    src="/images/pitchperfect.png" 
                    alt="PitchPerfect Screenshot"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-neutral-text dark:text-white mb-6 transition-colors duration-300">
                    PitchPerfect
                  </h3>
                  <p className="text-neutral-text/70 dark:text-white/70 mb-8 text-lg leading-relaxed flex-grow transition-colors duration-300">
                    An AI-powered platform that helps users practice workplace conversations such as pitching ideas or negotiating raises. Uses realistic scenario simulations and personalized feedback to improve communication skills. Winner of Best Use of Auth0 at HackThe6ix 2025.
                  </p>
                  <button onClick={() => window.open('https://github.com/VainerAriel/HackThe6ix2025', '_blank')} className="w-full bg-primary text-white py-4 px-6 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg mt-auto">
                    View Project
                  </button>
                </div>
              </div>

              <div className="bg-neutral dark:bg-neutral-dark rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:scale-105 border-2 border-primary/20 dark:border-primary/30 transform flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img 
                    src="/images/digit-recognition.png" 
                    alt="Digit Recognition Neural Network Screenshot"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-neutral-text dark:text-white mb-6 transition-colors duration-300">
                    Digit Recognition Neural Network
                  </h3>
                    <p className="text-neutral-text/70 dark:text-white/70 mb-8 text-lg leading-relaxed flex-grow transition-colors duration-300">
                    A high-accuracy digit classification model trained on the MNIST dataset, achieving 98% accuracy with optimized hyperparameters. Features an interactive interface where users can draw numbers for real-time recognition, enhancing usability and engagement.
                  </p>
                  <button onClick={() => window.open('https://github.com/HD-Brody/Digit-Recognition-Neural-Network', '_blank')} className="w-full bg-primary text-white py-4 px-6 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg mt-auto">
                    View Project
                  </button>
                </div>
              </div>

              <div className="bg-neutral dark:bg-neutral-dark rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all hover:scale-105 border-2 border-primary/20 dark:border-primary/30 transform flex flex-col">
                <div className="h-80 overflow-hidden">
                  <img 
                    src="/images/pixelize.png" 
                    alt="Pixelize Screenshot"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-neutral-text dark:text-white mb-6 transition-colors duration-300">
                    Pixelize
                  </h3>
                  <p className="text-neutral-text/70 dark:text-white/70 mb-8 text-lg leading-relaxed flex-grow transition-colors duration-300">
                  A pixel art software that enables users to create detailed pixel art with tools like paint bucket, undo, and layers. Supports exporting artwork as transparent PNG files for seamless integration into other projects.
                  </p>
                  <button onClick={() => window.open('https://github.com/HD-Brody/Pixelize', '_blank')} className="w-full bg-primary text-white py-4 px-6 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg mt-auto">
                    View Project
                  </button>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-neutral dark:bg-neutral-dark transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-neutral-text dark:text-white mb-8 transition-colors duration-300">
              Let's Connect
            </h2>
            <p className="text-2xl sm:text-3xl text-neutral-text/70 dark:text-white/70 max-w-4xl mx-auto font-medium leading-relaxed transition-colors duration-300">
              I'm always open to new opportunities, collaborations, or just a friendly chat about tech and projects!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Get In Touch */}
            <div className="bg-white dark:bg-neutral-dark rounded-3xl p-8 shadow-2xl border-2 border-primary/20 dark:border-primary/30">
              <h3 className="text-3xl font-bold text-neutral-text dark:text-white mb-8 transition-colors duration-300">
                Get In Touch
              </h3>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-neutral-text/60 dark:text-white/60 font-medium">Email</p>
                  <a 
                    href="mailto:0707bhd@gmail.com"
                    className="text-lg text-neutral-text dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors duration-300 font-semibold"
                  >
                    0707bhd@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Connect With Me */}
            <div className="bg-white dark:bg-neutral-dark rounded-3xl p-8 shadow-2xl border-2 border-primary/20 dark:border-primary/30">
              <h3 className="text-3xl font-bold text-neutral-text dark:text-white mb-8 transition-colors duration-300">
                Connect With Me
              </h3>
              <div className="space-y-6">
                <button 
                  onClick={() => window.open('https://github.com/HD-Brody', '_blank')}
                  className="w-full bg-neutral-text dark:bg-white text-white dark:text-neutral-text px-8 py-6 rounded-2xl text-xl font-bold hover:bg-neutral-text/90 dark:hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-4"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </button>
                
                <button 
                  onClick={() => window.open('https://www.linkedin.com/in/brody-hd/', '_blank')}
                  className="w-full bg-blue-600 text-white px-8 py-6 rounded-2xl text-xl font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-4"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
