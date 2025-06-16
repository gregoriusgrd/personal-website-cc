"use client";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="font-figtree scroll-mt-20 bg-[#1f1f1f] px-6 py-20 md:px-20 text-center text-white border-b border-gray-700"
    >
      <p className="text-gray-400 font-semibold">My Journey</p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">Experience</h2>

      <div className="space-y-10 text-left max-w-4xl mx-auto">

        {/* Tempat 1 */}
        <div className="border-l-4 border-gray-600 pl-6">
          <h3 className="text-xl font-semibold text-white">
            Full-Stack Web Developer – Freelance
          </h3>
          <p className="text-sm text-gray-400 mb-2">2023 – Present</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-1">
            <li>
              Developed and deployed scalable web apps using React, Next.js, Tailwind and
              PostgreSQL.
            </li>
            <li>
              Integrated third-party APIs and handled RESTful backend development.
            </li>
            <li>
              Delivered projects for clients in e-commerce, education, and retail.
            </li>
          </ul>
        </div>

        {/* Tempat 2 */}
        <div className="border-l-4 border-gray-600 pl-6">
          <h3 className="text-xl font-semibold text-white">
            Mobile App Developer – Intern @ ABC Tech
          </h3>
          <p className="text-sm text-gray-400 mb-2">2022 – 2023</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-1">
            <li>
              Built Android apps using Kotlin and integrated Firebase authentication.
            </li>
            <li>
              Worked closely with UI/UX team to translate designs into responsive mobile interfaces.
            </li>
            <li>
              Gained experience in client interaction, bug fixing, and release cycles.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
