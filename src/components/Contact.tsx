"use client";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Gradient using our CSS variables */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-heritage/10 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE: Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-purple font-figtree">Find Us</h2>
          <div className="w-20 h-1.5 bg-heritage mt-4 mb-10 rounded-full"></div>

          {/* Address Card */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-midnight mb-4">RCC Institute of Information Technology</h3>
            
            <div className="flex items-start gap-4 text-gray-700 text-lg leading-relaxed">
              <MapPin className="text-heritage mt-1 flex-shrink-0" />
              <p>
                Canal S Rd, Beleghata,
                <br />
                Kolkata – 700 015, West Bengal,
                <br />
                India
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12  rounded-full bg-purple/10 flex items-center justify-center text-purple">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Call Us</p>
                <p className="text-xl font-bold text-midnight">+91 80138 32570</p>
                <p className="text-xl font-bold text-midnight">+91 87777 23225</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-heritage/10 flex items-center justify-center text-heritage">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Email Us</p>
                <a href="mailto:hultprizercciit@gmail.com" className="text-xl font-bold text-midnight hover:text-heritage transition-colors">
                  hultprizercciit@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hultprizercciit@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-heritage text-white font-bold shadow-lg hover:bg-purple transition-all hover:-translate-y-1"
            >
              Send an Email
            </a>

            <a
              href="tel:+918013832570"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-midnight text-midnight font-bold hover:bg-midnight hover:text-white transition-all"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Map */}
        <div className="relative h-full min-h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            title="RCCIIT Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2228021835876!2d88.39382967507734!3d22.559261579501158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027686b848fb8d%3A0xed09795e4836e886!2sRCC%20Institute%20of%20Information%20Technology!5e1!3m2!1sen!2sin!4v1765637211556!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "450px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}