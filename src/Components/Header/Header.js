import React from "react";

const Header = () => {
  return (
    <div>
      {/* <!-- navbar goes here --> */}
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* <!-- logo --> */}
              <div>
                <a
                  href="/#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="font-light uppercase text-xl">
                    Edu Buddies
                  </span>
                </a>
              </div>

              {/* <!-- primary nav --> */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="/#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  About
                </a>
                <a
                  href="/#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Course
                </a>
                <a
                  href="/#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Blog
                </a>
              </div>
            </div>

            {/* <!-- secondary nav --> */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-5 px-3">
                Login
              </a>
              <a
                href="/"
                className="py-2 px-3 bg-sky-300 hover:bg-sky-500 text-white hover:text-white rounded transition duration-300"
              >
                Signup
              </a>
            </div>

            {/* <!-- mobile button goes here --> */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div className="mobile-menu hidden md:hidden">
          <a href="/#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            About
          </a>
          <a href="/#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Course
          </a>
          <a href="/#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Blog
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
