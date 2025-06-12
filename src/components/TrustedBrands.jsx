const TrustedBrands = () => {
  const brands = [
    {
      name: "smartt-ai",
      logo: "https://via.placeholder.com/150x60/000000/FFFFFF?text=smartt-ai"
    },
    {
      name: "SMARTQ",
      logo: "https://via.placeholder.com/150x60/000000/FFFFFF?text=SMARTQ"
    },
    {
      name: "FYUR",
      logo: "https://via.placeholder.com/150x60/000000/FFFFFF?text=FYUR"
    },
    {
      name: "Goodera",
      logo: "https://via.placeholder.com/150x60/000000/FFFFFF?text=Goodera"
    },
    {
      name: "TECHNOSP",
      logo: "https://via.placeholder.com/150x60/000000/FFFFFF?text=TECHNOSP"
    }
  ]

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="bg-secondary-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4 font-montserrat">
            TRUSTED BY
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 font-montserrat">
            Leading Brands
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-montserrat">
            We've helped over 30+ businesses go to the market with amazing products we 
            helped them build. And every time our clients, and the market just loved it!
          </p>
        </div>        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`} 
                className="flex-shrink-0 w-64 px-4"
              >
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBrands
