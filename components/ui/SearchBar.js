import { Search } from 'lucide-react';

export default function PrimarySearchBar() {
    return (
        <div className="flex items-center justify-center w-full mt-8">
        {/* Main Container */}
        <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-4xl mx-auto h-16">
            
            {/* Where Section */}
            <button className="flex flex-col justify-center flex-1 h-full px-8 rounded-l-full hover:bg-gray-100 transition-colors text-left focus:outline-none focus:bg-gray-100">
            <span className="text-xs font-bold text-gray-800 tracking-wide">Where</span>
            <span className="text-sm text-gray-500 truncate">Search destinations</span>
            </button>

            {/* Divider */}
            <div className="w-[1px] h-8 bg-gray-200 hidden sm:block"></div>

            {/* When Section */}
            <button className="flex flex-col justify-center flex-1 h-full px-8 hover:bg-gray-100 transition-colors text-left hidden sm:flex focus:outline-none focus:bg-gray-100">
            <span className="text-xs font-bold text-gray-800 tracking-wide">When</span>
            <span className="text-sm text-gray-500 truncate">Add dates</span>
            </button>

            {/* Divider */}
            <div className="w-[1px] h-8 bg-gray-200 hidden md:block"></div>

            {/* Who Section & Search Button */}
            <div className="flex items-center justify-between flex-1 h-full pl-8 pr-2 rounded-r-full hover:bg-gray-100 transition-colors hidden md:flex cursor-pointer focus-within:bg-gray-100">
            <div className="flex flex-col justify-center text-left">
                <span className="text-xs font-bold text-gray-800 tracking-wide">Who</span>
                <span className="text-sm text-gray-500 truncate">Add guests</span>
            </div>
            
            {/* Search Button */}
            <button 
                type="button"
                className="flex items-center justify-center p-3 sm:p-4 bg-[#E11553] hover:bg-[#C11246] text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E11553]"
                aria-label="Search properties"
            >
                <Search className="w-5 h-5" strokeWidth={2.5} />
            </button>
            </div>

            {/* Mobile Search Button Fallback (Visible only on very small screens) */}
            <div className="md:hidden flex-1 flex justify-end pr-2">
            <button 
                type="button"
                className="flex items-center justify-center p-3 bg-[#E11553] text-white rounded-full"
            >
                <Search className="w-4 h-4" />
            </button>
            </div>
        </div>
        </div>
    );
}
