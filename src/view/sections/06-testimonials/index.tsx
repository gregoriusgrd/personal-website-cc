"use client";

import { ITestimonial } from "@/interface/testimonial.interface";
import TestimonialCard from "./testimonial-card";

interface TestimonialsSectionProps {
  testimonials: ITestimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      className="font-figtree scroll-mt-20 bg-[#1f1f1f] px-6 py-20 md:px-20 text-center text-white border-b border-gray-700"
    >
      <p className="text-gray-400 font-semibold">What People Say</p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <TestimonialCard testimonials={testimonials} />
      </div>
    </section>
  );
}
