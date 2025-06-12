import { useState, useEffect, useRef } from 'react'

const OurServices = () => {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef([])

  const services = [
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description: 'We can help you build engaging and user-friendly mobile applications which are quick to launch and easy to maintain.',
      features: [
        'Android App Development',
        'iOS App Development', 
        'Cross Platform App Development'
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      )
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Software Development',
      description: 'We help brands create seamless shopping experiences and automate operations to maximise ROI.',
      features: [
        'Custom D2C commerce platforms',
        'B2B retail platforms',
        'Shopify website',
        'Marketplace solutions'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      )
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Build scalable and performant web applications with modern technologies and best practices.',
      features: [
        'Frontend Development',
        'Backend Development',
        'Full Stack Solutions',
        'Progressive Web Apps'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m16 0h2M3 15h2m16 0h2M7 12h10l-3 3m0-6l3 3"
          />
        </svg>
      )
    },
    {
      id: 'ai-solutions',
      title: 'AI & Machine Learning',
      description: 'Leverage the power of artificial intelligence to transform your business processes and decision making.',
      features: [
        'Gen AI Product Development',
        'Machine Learning Models',
        'AI Integration',
        'Data Analytics'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      )
    }
  ]

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-20">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4 font-montserrat">
            OUR SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-montserrat">
            360 Degree Digital Solution
          </h2>
        </div>

        {/* Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content - Scrollable Sections */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={el => sectionRefs.current[index] = el}
                className="py-20 flex flex-col justify-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-8">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 font-montserrat">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-8 leading-relaxed font-montserrat">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white font-medium font-montserrat">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Image - Sticky */}
          <div className="relative">
            <div className="sticky top-28 h-[80vh]">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl h-full w-10/12 relative ml-28">
                {services.map((service, index) => (
                  <img
                    key={service.id}
                    src={service.image}
                    alt={service.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      index === activeSection ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                
                {/* Overlay with service indicator */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="text-white font-bold text-lg font-montserrat">
                      {services[activeSection]?.title}
                    </h4>
                    <div className="flex space-x-2 mt-2">
                      {services.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            index === activeSection 
                              ? 'bg-primary w-8' 
                              : 'bg-gray-400 w-2'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
