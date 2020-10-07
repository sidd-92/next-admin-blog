import Link from "next/link";
const Layout = (props) => (
  <div>
    <header class="text-gray-700 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img src="/eat.svg" className="w-12" />
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">First Link</a>
          <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
          Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
    <main className="container mx-auto min-h-screen">{props.children}</main>
    <section className="antialiased font-sans w-full bg-gray-300 text-left text-black py-8">
      <div className="container mx-auto max-w-xl py-8 font-normal leading-normal">
        <h3 className="text-2xl">Grow Your Business</h3>
        <p className="">
          Build high performing teams, establish design practices, mentor and grow the next generation of great designers, and design interfaces and
          experiences.
        </p>
        <div className="max-w-sm mt-4 sm:flex">
          <input
            type="email"
            className="block w-full focus:outline-0 bg-white py-3 px-6 mb-2 sm:mb-0"
            name="email"
            placeholder="Enter your email"
            required=""
          />
          <button className="uppercase text-sm text-white focus:outline-0 w-full sm:w-auto bg-black hover:bg-gray-900 focus:bg-gray-300 tracking-wide px-6">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default Layout;
