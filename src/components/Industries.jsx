const Industries = () => {
  const industries = [
    {
      name: "Food & Beverage (F&B)",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="-2.6 0 34 34">
          <g transform="translate(-14 -11)">
            <path
              d="M27.778,29H22.222a4.224,4.224,0,0,0-4.043,3H31.82A4.224,4.224,0,0,0,27.778,29Zm-5.556-2A6.222,6.222,0,0,0,16,33.222a.778.778,0,0,0,.778.778H33.222A.778.778,0,0,0,34,33.222,6.222,6.222,0,0,0,27.778,27Z"
              fillRule="evenodd"
            />
            <path
              d="M34,36H16a5,5,0,0,0,5,5h8a5,5,0,0,0,5-5Zm-2.764,2H18.764A2.993,2.993,0,0,0,21,39h8A2.993,2.993,0,0,0,31.236,38Z"
              fillRule="evenodd"
            />
            <path
              d="M33,34H17a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2ZM17,32a3,3,0,0,0,0,6H33a3,3,0,0,0,0-6Z"
              fillRule="evenodd"
            />
            <path
              d="M23.222,20.3A3,3,0,0,1,26.208,17H39.792a3,3,0,0,1,2.986,3.3L40.6,42.3A3,3,0,0,1,37.617,45H28.383A3,3,0,0,1,25.4,42.3l-.281-2.84,1.99-.2.281,2.84a1,1,0,0,0,1,.9h9.233a1,1,0,0,0,1-.9l2.176-22a1,1,0,0,0-1-1.1H26.208a1,1,0,0,0-1,1.1l.793,8.017-1.99.2Z"
              fillRule="evenodd"
            />
            <path
              d="M32,32l-6.349,5.442a1,1,0,0,1-1.3,0L18,32Z"
              fill="#ffffff"
            />
            <path
              d="M32,32H18l6.349,5.442a1,1,0,0,0,1.3,0Zm-5.406,2H23.406L25,35.366Z"
              fillRule="evenodd"
            />
            <path
              d="M37,11a1,1,0,0,1,1,1v6a1,1,0,0,1-2,0V12A1,1,0,0,1,37,11Z"
              fillRule="evenodd"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "D2C & Ecommerce Brands",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      name: "Consumer & CPG Brands",
      icon: (
        <svg
          className="w-12 h-12"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 64 64"
        >
          <g>
            <path
              d="M60.476,16H15.059L12,3c-0.438-1.75-1.614-3-3.271-3H3C1.343,0,0,1.343,0,3s1.343,3,3,3h3.723
              l11.069,46.458C15.619,53.359,14.09,55.501,14.09,58c0,3.313,2.687,6,6,6c2.972,0,5.433-2.162,5.91-5h14.09
              c0.478,2.838,2.938,5,5.91,5c3.313,0,6-2.687,6-6s-2.687-6-6-6c-2.972,0-5.433,2.164-5.91,5H26c-0.478-2.836-2.938-5-5.91-5
              c-0.125,0-0.246,0.012-0.369,0.019l-0.642-2.258C19.507,49.904,19.972,50,20.505,50h32.969c2.625,0,3.908-1.904,4.5-4l5.933-26
              C64.344,17.583,63.265,16,60.476,16z M46,54c2.209,0,4,1.791,4,4s-1.791,4-4,4s-4-1.791-4-4S43.791,54,46,54z M24.09,58
              c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S24.09,55.791,24.09,58z M8.38,4.611C8.38,4.611,8.226,4,7.529,4S3,4,3,4
              C2.447,4,2,3.553,2,3s0.447-1,1-1h5.833C9.386,2,9.837,2.455,10,3l3.059,13h0.459c-0.991,0-1.756,0.209-2.323,0.576L8.38,4.611z
               M61.974,20l-6,26c-0.271,1.167-1.021,2-2.125,2H20.131c-1.102,0-1.85-0.833-2.12-2l-5.988-26c-0.312-1.229,0.125-2,1.479-2h46.989
              C61.849,18,62.286,18.771,61.974,20z"
            />
            <circle cx="46" cy="58" r="1" />
            <circle cx="20.09" cy="58" r="1" />
            <path
              d="M37,22c-1.657,0-3,1.343-3,3v16c0,1.657,1.343,3,3,3s3-1.343,3-3V25C40,23.343,38.657,22,37,22z M38,41
              c0,0.553-0.447,1-1,1s-1-0.447-1-1V25c0-0.553,0.447-1,1-1s1,0.447,1,1V41z"
            />
            <path
              d="M47,22c-1.657,0-3,1.343-3,3v16c0,1.657,1.343,3,3,3s3-1.343,3-3V25C50,23.343,48.657,22,47,22z M48,41
              c0,0.553-0.447,1-1,1s-1-0.447-1-1V25c0-0.553,0.447-1,1-1s1,0.447,1,1V41z"
            />
            <path
              d="M27,22c-1.657,0-3,1.343-3,3v16c0,1.657,1.343,3,3,3s3-1.343,3-3V25C30,23.343,28.657,22,27,22z M28,41
              c0,0.553-0.447,1-1,1s-1-0.447-1-1V25c0-0.553,0.447-1,1-1s1,0.447,1,1V41z"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "Healthcare & Wellness",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      name: "FMCG & Retail Chains",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-primary w-24"></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mx-8 font-poppins">
              The Industries We've Worked With
            </h2>
            <div className="h-px bg-primary w-24"></div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300">
                <div className="text-primary group-hover:text-primary-dark transition-colors duration-300">
                  {industry.icon}
                </div>
              </div>

              {/* Industry Name */}
              <h3 className="text-text-primary font-medium text-sm sm:text-base font-poppins leading-tight group-hover:text-primary transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
