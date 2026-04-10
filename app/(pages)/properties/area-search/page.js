'use client';

import React, { useState } from 'react';
import SearchBar from '@/components/ui/SearchBar'; 
import HorizontalPropertyCard from '@/components/cards/HorizontalPropertyCard';
import AccordionItem from '@/components/ui/AccordionItem';
import PropertyDialog from '@/components/cards/property/PropertyDialog';

export default function AreaSearchPage() {
  // State to control the Property Dialog visibility and data
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const faqs = [
    {
      question: "How do I schedule a viewing?",
      answer: "Click 'View Details' on any property to see the full description and contact the branch directly to book a slot."
    },
    {
      question: "Are these prices inclusive of bills?",
      answer: "Monthly rent typically covers the property only. Check the details page for specific information regarding council tax and utilities."
    }
  ];

  // Dummy property data structured to match what PropertyDialog expects
  const dummyPropertyData = {
    title: "Modern Flat in City Centre",
    location: "Glasgow, Scotland",
    price: "£850/mo",
    tags: ["Available", "Featured"],
    images: ["/PlaceHolderPic.png"],
    agent: {
      name: "John Doe",
      title: "Senior Lettings Agent",
      avatarUrl: "https://i.pravatar.cc/150?img=11",
    },
    propertyType: "Flat",
    yearBuilt: 2018,
    bathrooms: 1,
    bedrooms: 2,
    address: "123 High Street",
    zip: "G1 1AA",
    city: "Glasgow",
    area: "City Centre",
    description: "A beautiful, modern flat located in the heart of the city. Perfect for professionals looking for a stylish living space with easy access to transport links and local amenities. Features a spacious living area, fully fitted kitchen, and secure entry.",
    propertyId: "P001",
    status: "Available",
    features: ["Central Heating", "Double Glazing", "Fitted Kitchen", "Secure Entry"]
  };

  // Function to handle opening the dialog
  const handleOpenDialog = () => {
    setSelectedProperty(dummyPropertyData);
    setIsDialogOpen(true);
  };

  return (
    <div className="bg-white min-h-screen relative">
      
      {/* 1. DATABASE-DRIVEN FILTER HEADER */}
      <section className="border-b border-slate-200 pb-4 pt-2 px-4 sm:px-8 bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col">
          
          <SearchBar />

          {/* Secondary Filter Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-6 gap-4 px-2 text-slate-700">
              <div className="flex flex-wrap items-center gap-3">
                
                <button className="flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-md text-sm font-semibold hover:bg-slate-50 transition bg-white">
                  Property Type
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>

                <button className="flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-md text-sm font-semibold hover:bg-slate-50 transition bg-white">
                  Price Range
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>

                <button className="flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-md text-sm font-semibold hover:bg-slate-50 transition bg-white">
                  Rooms
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              
              <div className="text-sm font-semibold flex items-center gap-2">
                  Sort by: 
                  <span className="text-[#e11d48] cursor-pointer flex items-center hover:underline">
                    Newest 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </span>
              </div>
          </div>
          
          <div className="text-sm font-medium text-slate-500 mt-4 px-2">
            <span className="text-slate-900 font-bold">52 results</span> found in your area
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT (List & Sticky Map) */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-[55%] xl:w-[60%] flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Available Properties
            </h1>
            
            {[1, 2, 3, 4, 5].map((item) => (
              <HorizontalPropertyCard 
                key={item} 
                onViewDetails={handleOpenDialog} 
              />
            ))}
          </div>

          {/* Sticky Map */}
          <div className="w-full lg:w-[45%] xl:w-[40%] hidden lg:block">
            <div className="sticky top-48 h-[calc(100vh-14rem)] w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 flex items-center justify-center relative">
                <div className="text-center">
                    <p className="text-slate-400 font-medium italic">Map View Placeholder</p>
                    <p className="text-xs text-slate-300">Google Maps API will integrate with City/Street columns</p>
                </div>
                
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md text-xs font-bold text-slate-700 flex items-center gap-2 border border-slate-100">
                  <input type="checkbox" className="accent-blue-600" defaultChecked readOnly />
                  Search as I move the map
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 py-16 border-t border-slate-100 mt-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center lg:text-left">
          Rental FAQ
        </h2>
        
        <div className="space-y-4 max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              title={faq.question}
              content={faq.answer}
            />
          ))}
        </div>
      </section>

      {/* Render the Property Dialog Modal */}
      <PropertyDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        property={selectedProperty} 
      />

    </div>
  );
}