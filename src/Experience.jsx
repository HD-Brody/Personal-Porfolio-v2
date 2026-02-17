import { useState } from 'react';

// Experience data - easily add more by adding new objects to this array
const experiencesData = [
  {
    id: 1,
    title: 'Human Machine Interface Developer',
    company: 'aUToronto',
    period: 'September 2025 - Present',
    description: 'Developed a dashboard using React and MapboxGL to visualize real-time vehicle telemetry and obstacle tracking during autonomous competitions. Collaborated with a team of engineers to integrate the dashboard with ROS for seamless data communication.',
    skills: ['React', 'ROS', 'Linux', 'Distributed Systems', 'Real-Time Data Handling', 'Git'],
    images: [
      {
        src: '/images/autoronto1.png',
        caption: 'There\'s me!',
      },
      {
        src: '/images/autoronto2.png',
        caption: 'Our car Artemis in action',
      }
    ]
  },
  {
    id: 2,
    title: 'Web Developer Director',
    company: 'UofT Projects Club',
    period: 'September 2025 - Present',
    description: 'Led the web development team in creating and maintaining the club\'s website. Coordinated with designers and other developers to implement new features and improve user experience.',
    skills: ['React', 'JavaScript', 'CSS', 'Team Leadership'],
    images: [
      {
        src: '/images/utpc1.jpg',
        caption: 'Executive\'s meeting',
      },
      {
        src: '/images/utpc2.png',
        caption: 'Our website homepage',
      },     

    ]
  }
];

function Experience() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section id="experience" className="py-32 bg-white dark:bg-neutral-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-5xl sm:text-6xl lg:text-6xl font-black text-neutral-text dark:text-white text-center mb-20 transition-colors duration-300">
          Experience
        </h2>

        {/* Experience items */}
        <div className="space-y-24">
          {experiencesData.map((exp, index) => (
            <div
              key={exp.id}
              className="relative"
            >
              {/* Content card */}
              <div className="bg-neutral dark:bg-neutral-dark/40 rounded-3xl p-8 lg:p-12 shadow-xl border-2 border-primary/20 dark:border-primary/30 hover:border-primary/40 dark:hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-neutral-text dark:text-white transition-colors duration-300 mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-xl lg:text-2xl font-semibold text-primary dark:text-primary-light mb-2">
                    {exp.company}
                  </p>
                  <p className="text-base font-medium text-neutral-text/60 dark:text-white/60">
                    {exp.period}
                  </p>
                </div>

                {/* Description */}
                <p className="text-lg text-neutral-text/80 dark:text-white/80 leading-relaxed mb-8">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-5 py-2 bg-primary-lightest dark:bg-primary-light/20 text-primary-dark dark:text-primary-light border border-primary/30 rounded-full text-base font-semibold hover:bg-primary-light/30 hover:scale-105 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Images - Always visible and larger */}
                {exp.images && exp.images.length > 0 && (
                  <div className="pt-8 border-t-2 border-primary/20">
                    <div className={`grid gap-6 ${exp.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
                      {exp.images.map((image, idx) => (
                        <div
                          key={idx}
                          className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                          onClick={() => setLightboxImage(image)}
                        >
                          <div className="aspect-[4/3] bg-gradient-to-br from-primary-lightest to-primary-lighter dark:from-primary-dark/20 dark:to-primary/20 flex items-center justify-center overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.caption}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextElementSibling.style.display = 'flex';
                              }}
                            />
                            <div className="hidden w-full h-full items-center justify-center">
                              <span className="text-6xl opacity-30">📷</span>
                            </div>
                          </div>
                          {/* Hover overlay with zoom icon */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                            <svg
                              className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </svg>
                          </div>
                          {image.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                              <p className="text-white text-base font-semibold">
                                {image.caption}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-primary-light transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-7xl max-h-[90vh] relative">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.caption}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {lightboxImage.caption && (
              <div className="mt-6 text-center">
                <p className="text-white text-xl font-semibold">
                  {lightboxImage.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;
