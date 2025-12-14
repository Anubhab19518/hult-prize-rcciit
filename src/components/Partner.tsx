"use client";
import React from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function Partner() {

  // ✅ SUBMIT HANDLER (must be OUTSIDE JSX)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      organization: (form.elements.namedItem("organization") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      type: (form.elements.namedItem("type") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Proposal sent successfully!");
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  };

  return (
    <section id="partner" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-purple">
              Partner With Us
            </h2>
            <div className="w-20 h-1.5 bg-heritage mt-4 rounded-full"></div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We invite companies, NGOs, and ecosystem partners to collaborate with the
            Hult Prize at RCCIIT. Join us in shaping the next generation of social
            entrepreneurs through mentorship, sponsorship, and workshops.
          </p>

          <div className="space-y-4">
            {[
              "Sponsorship & Brand Visibility",
              "Mentorship & Workshop Opportunities",
              "Jury Participation in Quarter-Finals",
              "Access to Student Ventures & Talent",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="text-heritage w-6 h-6 flex-shrink-0" />
                <span className="text-midnight font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white border-l-4 border-heritage rounded-r-xl shadow-sm">
            <h4 className="font-bold text-midnight text-lg">Direct Contact</h4>
            <p className="text-gray-600 mt-1">hultprizercciit@gmail.com</p>
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>

          <h3 className="text-2xl font-bold text-midnight mb-6 relative z-10">
            Send a Proposal
          </h3>

          <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-heritage focus:ring-2 focus:ring-heritage/20 outline-none bg-gray-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Organization / Brand
              </label>
              <input
                name="organization"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-heritage focus:ring-2 focus:ring-heritage/20 outline-none bg-gray-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Official Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-heritage focus:ring-2 focus:ring-heritage/20 outline-none bg-gray-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Partnership Type
              </label>
              <select
                name="type"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-heritage focus:ring-2 focus:ring-heritage/20 outline-none bg-gray-50 focus:bg-white"
              >
                <option>Sponsorship</option>
                <option>Mentorship</option>
                <option>Workshops / Training</option>
                <option>Other Collaboration</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-heritage focus:ring-2 focus:ring-heritage/20 outline-none bg-gray-50 focus:bg-white resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-midnight hover:bg-purple text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>Submit Proposal</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
