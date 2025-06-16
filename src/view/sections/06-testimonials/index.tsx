"use client";

import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="font-figtree scroll-mt-20 bg-[#1f1f1f] px-6 py-20 md:px-20 text-center text-white border-b border-gray-700"
    >
      <p className="text-gray-400 font-semibold">What People Say</p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

        {/* 1 */}
        <div className="rounded-xl border border-gray-600 bg-[#2a2a2a] p-6 shadow hover:shadow-lg transition text-left">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/hero/profile-pic.png"
              alt="Client 1"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-white">Jane Smith</h4>
              <p className="text-sm text-gray-400">Product Manager, XYZ Co.</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            "Working with John Doe was a pleasure. They delivered every
            milestone ahead of time, and the final product exceeded expectations.
            Highly recommended for any serious dev project."
          </p>
        </div>

        {/* 2 */}
        <div className="rounded-xl border border-gray-600 bg-[#2a2a2a] p-6 shadow hover:shadow-lg transition text-left">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/hero/profile-pic.png"
              alt="Client 2"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-white">Michael Tan</h4>
              <p className="text-sm text-gray-400">Founder, TechNova</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            "Very professional and detail-oriented. The code was clean,
            documented, and well-tested. I would definitely hire again for future work."
          </p>
        </div>
      </div>
    </section>
  );
}
