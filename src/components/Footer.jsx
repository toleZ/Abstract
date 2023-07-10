const Footer = () => {
  return (
    <footer className="relative px-6 md:px-20 py-6 pb-64 grid grid-cols-2 lg:grid-cols-5 gap-6 bg-abstract-000000 text-abstract-fff">
      <section>
        <h3 className="text-2xl font-medium">Abstract</h3>
        <ul className="mt-2 flex flex-col">
          <li>
            <a href="#" className="hover:underline">
              Start Trial
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Download
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-2xl font-medium">Resources</h3>
        <ul className="mt-2 flex flex-col">
          <li>
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Release Notes
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Status
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-2xl font-medium">Community</h3>
        <ul className="mt-2 flex flex-col">
          <li>
            <a href="#" className="hover:underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Dribbble
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Podcast
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-2xl font-medium">Company</h3>
        <ul className="mt-2 flex flex-col">
          <li>
            <a href="#" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Legal
            </a>
          </li>
          <li className="mt-2">
            <h4 className="text-lg font-medium">Contact Us</h4>
            <a href="#" className="hover:underline">
              info@abstract.com
            </a>
          </li>
        </ul>
      </section>

      <div className="absolute bottom-0 left-0 md:right-0 mb-20 ml-6 md:mx-10">
        <img src="/img/asset 8.svg" alt="Abstract logo" className="w-40 pb-4" />
        <span className="text-xl font-medium">
          <h4>&copy; Copyright 2023</h4>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
