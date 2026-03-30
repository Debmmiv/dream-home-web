"use client";

import { useState, useEffect } from "react";
import { X, User, Home, Briefcase } from "lucide-react";

export default function LoginDialog({ isOpen, onClose, onSwitchToSignup }) {
  const [activeRole, setActiveRole] = useState("renter"); // 'renter', 'owner', or 'staff'

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300">
            
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-100">
            <h3 className="font-bold text-gray-900 text-xl">Welcome back</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors">
                <X className="h-5 w-5" />
            </button>
            </div>

            <div className="p-6">
            {/* Role Selector Tabs */}
            <div className="flex p-1 mb-6 bg-gray-100 rounded-lg">
                <button
                onClick={() => setActiveRole("renter")}
                className={`flex-1 flex items-center justify-center py-2 text-sm font-medium rounded-md transition-all ${activeRole === "renter" ? "bg-white shadow text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                <User className="w-4 h-4 mr-2" /> Renter
                </button>
                <button
                onClick={() => setActiveRole("owner")}
                className={`flex-1 flex items-center justify-center py-2 text-sm font-medium rounded-md transition-all ${activeRole === "owner" ? "bg-white shadow text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                <Home className="w-4 h-4 mr-2" /> Owner
                </button>
                <button
                onClick={() => setActiveRole("staff")}
                className={`flex-1 flex items-center justify-center py-2 text-sm font-medium rounded-md transition-all ${activeRole === "staff" ? "bg-white shadow text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                <Briefcase className="w-4 h-4 mr-2" /> Staff
                </button>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E11553] focus:border-[#E11553] outline-none transition-all"
                    placeholder={`Enter your ${activeRole} email`}
                    required
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                    type="password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E11553] focus:border-[#E11553] outline-none transition-all"
                    placeholder="••••••••"
                    required
                />
                </div>
                
                <div className="flex justify-end">
                <a href="#" className="text-sm text-[#E11553] hover:underline">Forgot password?</a>
                </div>

                <button type="submit" className="w-full py-3 bg-[#E11553] hover:bg-[#C11246] text-white font-semibold rounded-lg transition-colors mt-2">
                Log in as {activeRole.charAt(0).toUpperCase() + activeRole.slice(1)}
                </button>
            </form>
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-gray-100 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button onClick={onSwitchToSignup} className="text-[#E11553] font-semibold hover:underline">
                Sign up
            </button>
            </div>

        </div>
        </div>
    );
}