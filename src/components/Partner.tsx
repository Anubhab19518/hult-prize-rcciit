import React from 'react';

export default function Partner(){
  return (
    <section id="partner" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-bold text-midnight">Partner With Us</h3>
          <p className="mt-4 text-gray-700">We invite companies, NGOs, and ecosystem partners to collaborate — via mentorship, sponsorship, workshops, and jury participation.</p>

          <ul className="mt-6 text-gray-700 space-y-2">
            <li>• Sponsorship & brand visibility</li>
            <li>• Mentorship & workshops</li>
            <li>• Opportunities to scout student ventures</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <form className="space-y-4">
            <input className="w-full border rounded p-3" placeholder="Your Name" />
            <input className="w-full border rounded p-3" placeholder="Organization / Brand" />
            <input className="w-full border rounded p-3" placeholder="Official Email" />
            <select className="w-full border rounded p-3">
              <option>Sponsorship</option>
              <option>Mentorship</option>
              <option>Partnership</option>
            </select>
            <textarea className="w-full border rounded p-3" rows={4} placeholder="Message / Proposal"></textarea>
            <button type="submit" className="bg-heritage text-white px-5 py-2 rounded">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
