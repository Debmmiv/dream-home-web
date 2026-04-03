"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { FormInput } from "./ui/FormInput";
import { RoleSelector } from "./ui/RoleSelector";
import { useSignupForm } from "../hooks/useSignupForm";

export default function SignupDialog({ isOpen, onClose, onSwitchToLogin }) {
  const [activeRole, setActiveRole] = useState("renter");
  const { 
    formData, isLoading, error, success, handleChange, handleSubmit, resetForm 
  } = useSignupForm(activeRole);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      resetForm(); 
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100 shrink-0">
          <h3 className="font-bold text-gray-900 text-xl">Create an account</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <RoleSelector activeRole={activeRole} setActiveRole={setActiveRole} />

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <FormInput label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
              <FormInput label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
            
            <FormInput label="Email address" type="email" name="email" value={formData.email} onChange={handleChange} />
            <FormInput label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} />

            <div className="grid grid-cols-2 gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select 
                  name="gender" 
                  value={formData.gender} 
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E11553] outline-none transition-all bg-white"
                >
                  <option value="" disabled>Select...</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                  <option value="P">Prefer not to say</option>
                </select>
              </div>
              <FormInput label="Birthdate" type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />
            </div>

            <FormInput label="Password" type="password" name="password" placeholder="Min. 8 characters" value={formData.password} onChange={handleChange} />

            {/* Status Messages */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm animate-pulse">
                Account created! Taking you to your dashboard...
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading || success}
              className="w-full py-3 bg-[#E11553] hover:bg-[#C11246] text-white font-semibold rounded-lg transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating account..." : `Create ${activeRole} account`}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-100 text-center text-sm text-gray-600 shrink-0 bg-gray-50">
          Already have an account?{" "}
          <button type="button" onClick={onSwitchToLogin} className="text-[#E11553] font-semibold hover:underline">
            Log in
          </button>
        </div>

      </div>
    </div>
  );
}