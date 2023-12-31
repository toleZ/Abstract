import { AiOutlineArrowRight } from "react-icons/ai";

const Help = () => {
  return (
    <main>
      <header className="px-8 py-32 flex flex-col items-center justify-center gap-8 bg-abstract-dadbf1">
        <h1 className="text-4xl md:text-7xl text-center font-medium">
          How can we help?
        </h1>
        <form className="relative w-full max-w-[720px] group">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-5 outline-none border border-black rounded-[.25rem] text-xl font-medium group-hover:border-abstract-4C5FD5 transition-all duration-200"
          />
          <button className="mr-6 absolute top-1/2 -translate-y-1/2 right-0">
            <AiOutlineArrowRight className="scale-150 group-hover:fill-abstract-4C5FD5 hover:fill-abstract-4C5FD5 hover:cursor-default transition-all duration-200" />
          </button>
        </form>
      </header>

      <section className="w-5/6 mx-auto py-24 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-28">
        <article className="flex gap-6">
          <img src="/img/asset 0.png" alt="Image" className="w-20 h-20" />
          <div className="text-xl">
            <h3 className="font-bold">Using Abstract</h3>
            <p className="my-3 font-medium">
              Abstract lets you manage, version, and document your designs in
              one place.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 text-abstract-4C5FD5 font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </article>

        <article className="flex gap-6">
          <img src="/img/asset 1.png" alt="Image" className="w-20 h-20" />
          <div className="text-xl">
            <h3 className="font-bold">Manage your account</h3>
            <p className="my-3 font-medium">
              Configure your account settings, such as your email, profile
              details, and password.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 text-abstract-4C5FD5 font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </article>

        <article className="flex gap-6">
          <img src="/img/asset 2.png" alt="Image" className="w-20 h-20" />
          <div className="text-xl">
            <h3 className="font-bold">
              Manage organizations, teams, and projects
            </h3>
            <p className="my-3 font-medium">
              Use Abstract organizations, teams, and projects to organize your
              people and your work.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 text-abstract-4C5FD5 font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </article>

        <article className="flex gap-6">
          <img src="/img/asset 3.png" alt="Image" className="w-20 h-20" />
          <div className="text-xl">
            <h3 className="font-bold">Manage billing</h3>
            <p className="my-3 font-medium">
              Change subscriptions and payment details.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 text-abstract-4C5FD5 font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </article>

        <article className="flex gap-6">
          <img src="/img/asset 4.png" alt="Image" className="w-20 h-20" />
          <div className="text-xl">
            <h3 className="font-bold">Authenticate to Abstract</h3>
            <p className="my-3 font-medium">
              Set up and configure SSO, SCIM, and Just-in-Time provisioning.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 text-abstract-4C5FD5 font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </article>

        <article className="flex gap-6">
          <img src="/img/asset 5.png" alt="Image" className="w-20 h-20" />
          <div className="text-xl">
            <h3 className="font-bold">Abstract support</h3>
            <p className="my-3 font-medium">Get in touch with a human.</p>
            <a
              href="#"
              className="flex items-center gap-2 text-abstract-4C5FD5 font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Help;
