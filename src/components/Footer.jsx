function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-8 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="#4F46E5" />
                <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" />
              </svg>
              <span className="text-xl font-bold">LandingAI</span>
            </div>
            <p className="text-sm text-gray-400">
              LandingAI™ helps companies build, deploy, and scale Visual AI
              solutions.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Partners", "Sales"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Videos", "Blogs", "Webinars"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 mt-4">
              {["Academy", "Apps Space"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {["LandingLens", "LandingLens on Snowflake", "VisionAgent"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
