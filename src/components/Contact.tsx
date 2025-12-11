// src/components/Contact.tsx
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20"
      style={{
        /* cotton candy gradient: sky -> heritage */
        background:
          "linear-gradient(180deg, rgba(236,32,136,0.08) 0%, rgba(18,177,231,0.06) 35%, rgba(255,255,255,0.95) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div>
          <h2 className="text-[#8A2890] text-4xl font-semibold font-figtree text-midnight">Find Us</h2>
          <div className="mt-2">

          {/* small heritage underline */}
          <div className="w-16 h-1 bg-[#EC2088] rounded-full mt-4 mb-8"></div>
          </div>

          {/* address */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-midnight text-[#292563]">RCC Institute of Information Technology</h3>
            <p className="text-[#191919] mt-3 leading-relaxed max-w-md">
              Canal S Rd, Beleghata,
              <br />
              Kolkata – 700 015, West Bengal,
              <br />
              India
            </p>
          </div>

          {/* contacts */}
          <div className="space-y-3 mb-8">
            <p className="text-black flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-heritage/10 text-heritage">☎</span>
              <span className="font-medium">+91 80138 32570</span>
            </p>

            <p className="text-black flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-heritage/10 text-heritage">✉</span>
              <span className="font-medium">hultprizercciit@gmail.com</span>
            </p>
          </div>

          {/* action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hultprizercciit@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-heritage text-[#292563] font-semibold shadow-md hover:opacity-95 transition"
            >
              ✉ Email Us
            </a>

            <a
              href="tel:+918013832570"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-midnight text-midnight font-semibold hover:bg-midnight hover:text-[#292563] transition"
            >
              ☎ Call Us
            </a>
          </div>
        </div>

        {/* RIGHT - MAP CARD */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-lg" style={{ border: "3px solid rgba(236,32,136,0.14)" }}>
            <iframe
              title="RCCIIT Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0744873597617!2d88.3938297!3d22.5592665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027686b848fb8d%3A0xed09795e4836e886!2sRCC%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1702300000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              className="block"
              style={{ border: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
