'use client';

import React, { useEffect } from 'react';

const AboutPage = () => {
  // 1. Data Array for Branches
  const branches = [
    {
      id: 1,
      name: "Smoky Hollow",
      address: "9514 Smoky Hollow St. Sulphur, LA 70663",
      phone: "(736) 267-8659",
      email: "rsmartin@gmail.com",
    },
    {
      id: 2,
      name: "North Road",
      address: "19 North Road Piscataway, NJ 08854",
      phone: "(736) 267-8659",
      email: "rsmartin@gmail.com",
    },
    {
      id: 3,
      name: "Rockville Ave",
      address: "8460 Rockville Ave. Greenville, NC 27834",
      phone: "(736) 267-8659",
      email: "rsmartin@gmail.com",
    }
  ];

  // 2. Smooth Scroll Logic
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          const navHeight = 90; // Adjust based on your NavBar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- CONTACT SECTION --- */}
      {/* Added scroll-mt-[90px] here */}
      <section id="contact-section" className="scroll-mt-[90px] pt-24 pb-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-[#003580] mb-4">Contact us</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            With lots of unique blocks, you can easily build a page without coding. 
            Build your next consultancy website within few minutes.
          </p>
        </div>
        

        {/* Contact Form Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-10 md:p-16 border border-slate-50">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1 text-slate-700">First & Last Name</label>
                <input type="text" placeholder="i.e. John Doe" className="w-full p-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#003580] focus:ring-0 transition-all outline-none text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1 text-slate-700">Email</label>
                <input type="email" placeholder="i.e. john@mail.com" className="w-full p-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#003580] focus:ring-0 transition-all outline-none text-sm" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1 text-slate-700">Message</label>
              <textarea rows="5" placeholder="Type your message..." className="w-full p-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#003580] focus:ring-0 transition-all outline-none text-sm"></textarea>
            </div>
            <button type="button" className="bg-[#003580] text-white px-12 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-900/20">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* --- BRANCHES SECTION --- */}
      {/* Added scroll-mt-[90px] here */}
      <section id="branches-section" className="scroll-mt-[90px] py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#003580] mb-3">Our Branches</h2>
            <p className="text-slate-400">Find a DreamHome office near you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {branches.map((branch) => (
              <div key={branch.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div className="h-52 bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                     <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#003580] transition-colors">{branch.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{branch.address}</p>
                  <div className="space-y-2 border-t border-slate-50 pt-6">
                    <p className="text-sm font-medium text-slate-700">📞 {branch.phone}</p>
                    <p className="text-sm font-medium text-slate-700">✉️ {branch.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;