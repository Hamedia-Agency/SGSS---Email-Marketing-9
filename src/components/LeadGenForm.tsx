"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, CheckCircle, Send } from "lucide-react";

interface LeadGenFormProps {
  hideHeader?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function LeadGenForm({
  hideHeader = false,
  className = "",
  title = "Find Out Where Your Property May Be Exposed",
  subtitle = "Tell us a little about your property and current concerns. A member of our team will contact you with a customized security review.",
  buttonText = "Schedule Your Free Security Consultation",
}: LeadGenFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    propertyType: "",
    city: "",
    concern: "",
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SecureTrack Lead Form Submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`w-full max-w-xl mx-auto bg-white p-8 rounded-2xl border border-gray-100 shadow-xl text-center ${className}`}>
        <div className="w-16 h-16 bg-[#fecf31]/20 text-[#1d2c48] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={36} className="text-[#1d2c48]" />
        </div>
        <h3 className="text-2xl font-black text-[#1d2c48] mb-2">Request Received!</h3>
        <p className="text-[#2a2829] text-sm mb-6 leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. Our security operations team has received your information for <strong>{formData.companyName || "your property"}</strong>. We will reach out shortly to schedule your live SecureTrack consultation.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-[#1d2c48] hover:bg-[#263659] text-white font-bold py-2.5 px-6 rounded-lg text-xs uppercase tracking-wider transition-all"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-2xl ${className}`}>
      {!hideHeader && (
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#fecf31]/20 border border-[#fecf31]/40 text-[#1d2c48] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Shield size={14} className="text-[#1d2c48]" />
            Risk Assessment
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1d2c48] leading-tight tracking-tight mb-2">
            {title}
          </h2>
          <div className="h-1 bg-[#fecf31] w-20 mx-auto rounded-full mb-3"></div>
          <p className="text-sm text-[#929292] max-w-md mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#1d2c48] mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#f8f9fc] border border-[#c4c4c4] rounded-lg px-4 py-3 text-sm text-[#2a2829] focus:outline-none focus:border-[#1d2c48] focus:ring-2 focus:ring-[#fecf31]/50 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#1d2c48] mb-1">
              Company / Property Name *
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="e.g. Apex Commercial Plaza"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="w-full bg-[#f8f9fc] border border-[#c4c4c4] rounded-lg px-4 py-3 text-sm text-[#2a2829] focus:outline-none focus:border-[#1d2c48] focus:ring-2 focus:ring-[#fecf31]/50 transition-all"
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#1d2c48] mb-1">
              Business Email *
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#f8f9fc] border border-[#c4c4c4] rounded-lg px-4 py-3 text-sm text-[#2a2829] focus:outline-none focus:border-[#1d2c48] focus:ring-2 focus:ring-[#fecf31]/50 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#1d2c48] mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 000-0000"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#f8f9fc] border border-[#c4c4c4] rounded-lg px-4 py-3 text-sm text-[#2a2829] focus:outline-none focus:border-[#1d2c48] focus:ring-2 focus:ring-[#fecf31]/50 transition-all"
            />
          </div>
        </div>

        {/* Row 3: Property Type & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#1d2c48] mb-1">
              Property Type
            </label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full bg-[#f8f9fc] border border-[#c4c4c4] rounded-lg px-4 py-3 text-sm text-[#2a2829] focus:outline-none focus:border-[#1d2c48] focus:ring-2 focus:ring-[#fecf31]/50 transition-all"
            >
              <option value="">Select Property Type...</option>
              <option value="Commercial Office / Plaza">Commercial Office / Plaza</option>
              <option value="Construction Site">Construction Site</option>
              <option value="Retail & Shopping Center">Retail & Shopping Center</option>
              <option value="Industrial / Warehouse">Industrial / Warehouse</option>
              <option value="Residential HOA / Apartment">Residential HOA / Apartment</option>
              <option value="Other">Other Property</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#1d2c48] mb-1">
              City / Location
            </label>
            <input
              type="text"
              name="city"
              placeholder="e.g. Los Angeles, Irvine, San Diego"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-[#f8f9fc] border border-[#c4c4c4] rounded-lg px-4 py-3 text-sm text-[#2a2829] focus:outline-none focus:border-[#1d2c48] focus:ring-2 focus:ring-[#fecf31]/50 transition-all"
            />
          </div>
        </div>

        {/* Row 4: Concern */}
        <div>
          <label className="block text-xs font-bold text-[#1d2c48] mb-1">
            Current Security Concern or Objectives
          </label>
          <textarea
            name="concern"
            placeholder="Tell us about your property's security challenges or questions regarding SecureTrack technology..."
            rows={3}
            value={formData.concern}
            onChange={handleChange}
            className="w-full bg-[#f8f9fc] border border-[#c4c4c4] rounded-lg px-4 py-3 text-sm text-[#2a2829] focus:outline-none focus:border-[#1d2c48] focus:ring-2 focus:ring-[#fecf31]/50 transition-all resize-none"
          ></textarea>
        </div>

        {/* Row 5: Terms */}
        <div className="flex items-start gap-3 pt-1">
          <input
            type="checkbox"
            name="agreed"
            id="agreed"
            required
            checked={formData.agreed}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-[#1d2c48] border-[#c4c4c4] rounded focus:ring-[#fecf31] cursor-pointer"
          />
          <label htmlFor="agreed" className="text-[11px] text-[#929292] leading-tight cursor-pointer">
            I agree to the <Link href="#privacy" className="text-[#1d2c48] font-bold underline">privacy terms</Link>. By submitting, I authorize SGSS to contact me regarding security services and field visibility solutions.
          </label>
        </div>

        {/* Row 6: Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#fecf31] hover:bg-[#e8bb1e] text-[#1d2c48] font-black py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-[#fecf31] cursor-pointer"
        >
          <Send size={18} />
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default LeadGenForm;
