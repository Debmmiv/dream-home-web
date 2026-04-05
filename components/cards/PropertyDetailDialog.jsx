"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, MapPin, CheckCircle2 } from "lucide-react";

export default function PropertyDetailDialog({ property, isOpen, onClose }) {
  const [activeImage, setActiveImage] = useState("/PlaceHolderPic.png");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !property) return null;

  const dummyFeatures = [
    "Air Conditioning", "Shared gym", "TV Cable",
    "External Yard", "Kitchen Appliances", "Washer",
    "Dryer", "Outdoor Shower", "Gym", "Two Refrigerators",
    "Laundry", "Club House"
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-gray-50 rounded-2xl shadow-2xl w-full max-w-6xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[95vh] flex flex-col relative flex-shrink-0">

        {/* Header - Fixed */}
        <div className="flex justify-between items-start p-6 bg-white border-b border-gray-200 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              {property.type} in {property.city}
            </h2>
            <p className="text-gray-500 flex items-center gap-1 mt-1 text-sm">
              <MapPin className="h-4 w-4" /> {property.street}, {property.city}, {property.postcode}
            </p>
            <div className="flex gap-2 mt-2">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-semibold uppercase">For Rent</span>
              <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded font-semibold uppercase">Featured</span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-2xl font-bold text-gray-900">£{property.monthlyRent}/mo</span>
            <button
              onClick={onClose}
              className="mt-2 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-grow p-6">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left Column - Main Details */}
            <div className="flex-grow space-y-8 lg:w-2/3">

              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative h-[300px] md:h-[450px] w-full rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={activeImage}
                    alt="Main Property View"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </button>
                  <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                  </button>
                </div>
                {/* Thumbnails */}
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {[1, 2, 3, 4, 5].map((idx) => (
                    <div key={idx} className="relative h-20 w-32 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer border-2 border-transparent hover:border-blue-600">
                      <Image src="/PlaceHolderPic.png" alt="thumbnail" fill sizes="128px" className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Sections Container */}
              <div className="space-y-6">

                {/* Overview Box */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gray-100/50 px-6 py-3 font-semibold text-gray-800 border-b border-gray-100">Overview</div>
                  <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Property Type</div>
                      <div className="font-bold text-gray-900">{property.type}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Year Built</div>
                      <div className="font-bold text-gray-900">2015</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Bathrooms</div>
                      <div className="font-bold text-gray-900 flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" /><line x1="10" x2="8" y1="5" y2="7" /><line x1="2" x2="22" y1="12" y2="12" /><line x1="7" x2="7" y1="19" y2="21" /><line x1="17" x2="17" y1="19" y2="21" /></svg> {Math.ceil(property.noOfRooms / 2)}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Bedrooms</div>
                      <div className="font-bold text-gray-900 flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></svg> {property.noOfRooms}</div>
                    </div>
                  </div>
                </div>

                {/* Address Box */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gray-100/50 px-6 py-3 font-semibold text-gray-800 border-b border-gray-100">Address</div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-semibold text-gray-900">Address</span>
                      <span className="text-gray-600 text-right">{property.street}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-semibold text-gray-900">Zip/Postal Code</span>
                      <span className="text-gray-600 text-right">{property.postcode}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-semibold text-gray-900">City</span>
                      <span className="text-gray-600 text-right">{property.city}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-semibold text-gray-900">Area</span>
                      <span className="text-gray-600 text-right">Central</span>
                    </div>
                  </div>
                </div>

                {/* Description Box */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gray-100/50 px-6 py-3 font-semibold text-gray-800 border-b border-gray-100">Description</div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>

                {/* Details Box */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gray-100/50 px-6 py-3 font-semibold text-gray-800 border-b border-gray-100">Details</div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-semibold text-gray-900">Property ID</span>
                      <span className="text-gray-600">{property.id}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-semibold text-gray-900">Property Status</span>
                      <span className="text-gray-600">{property.status}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-semibold text-gray-900">Property Type:</span>
                      <span className="text-gray-600">{property.type}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-semibold text-gray-900">Bedrooms</span>
                      <span className="text-gray-600">{property.noOfRooms}</span>
                    </div>
                  </div>
                </div>

                {/* Features Box */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gray-100/50 px-6 py-3 font-semibold text-gray-800 border-b border-gray-100">Features</div>
                  <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-y-4 text-sm">
                    {dummyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-0 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Submit an inquiry</h3>

                {/* Agent Info */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-200 shadow-sm flex-shrink-0">
                    <Image src="/PlaceHolderPic.png" alt="Martha Stewart" fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Martha Stewart</div>
                    <div className="text-xs text-gray-500">Property Consultant</div>
                  </div>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 mb-1">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 mb-1">Email</label>
                    <input type="email" placeholder="email@domain.com" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 mb-1">Phone (Optional)</label>
                    <input type="tel" placeholder="+1 (123) 456-7890" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 mb-1">Message</label>
                    <textarea rows="4" placeholder="Please Enter Your Message" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-md transition-colors mt-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
