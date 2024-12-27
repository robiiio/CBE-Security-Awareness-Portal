function AboutUs() {
  return (
    <section id="about">
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl sm:py-4  sm:px-6 px-4 lg:px-8">
          <h1 className="text-4xl font-bold p-2 text-center">About Us</h1>
          <div className="relative isolate overflow-hidden bg-gray-100 px-6 pt-16 shadow-2xl sm:rounded-3xl rounded-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20  lg:px-24 lg:pt-0">
            <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text">
              <h2 className="text-3xl font-bold tracking-tight text-purple-500 sm:text-4xl">
                Department of IS Security
                <br />
                <p className="text-2xl">Security Traning Awareness</p>{" "}
              </h2>
              <p className="mt-6 text-lg leading-8 text-black">
                Information system security is one of the sub-sections under the
                Information system department and it is the section in which we
                have been working in. The Security Operation Centre(SOC) is a
                place where a cyber-threat that affects CBE’s information system
                assets are monitored, analyzed, and defended.
                <br />
                Commercial Bank of Ethiopia’s (CBE) has envisioned becoming
                world class bank by the year 2025, it is imperative to adopt and
                adapt international practices to realize this vision.
                <br />
                IT services have become strategic asset in today’s banking
                environment; continuous availability of these services is one of
                the undisputed factors that enable the bank to remain leader in
                the sector. the extreme speed of technology change and the
                cyber-threats that come with it are going to accelerate. The SOC
                gives an organization the ability to anticipate and respond more
                quickly to threats ever before, work more collaboratively and
                share knowledge among Processes effectively.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 ">
                <button
                  href="#"
                  className="rounded-md bg-white mb-4 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
