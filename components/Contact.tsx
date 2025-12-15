"use client";

import React, { useEffect, useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, ChevronDown, Check } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mzznwdpk");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceError, setServiceError] = useState<string>("");
  const serviceRef = useRef<HTMLDivElement | null>(null);

  const serviceOptions = [
    { value: "web-development", label: "Web Development" },
    { value: "app-development", label: "App Development" },
    { value: "enquiry", label: "General Enquiry" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        serviceRef.current &&
        !serviceRef.current.contains(event.target as Node)
      ) {
        setServiceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        subject: "",
        message: "",
      });
      setServiceOpen(false);
      setServiceError("");
    }
  }, [state.succeeded]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!formData.service) {
      e.preventDefault();
      setServiceError("Please select a service");
      setServiceOpen(true);
      return;
    }
    setServiceError("");
    handleSubmit(e);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="px-6 md:px-12 py-20" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Get In Touch
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your
            vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-linear-to-br from-gray-900/80 to-gray-800/40 border border-gray-800 rounded-2xl p-6">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-white mb-2">Email Us</h3>
              <p className="text-gray-400">kodude.in@gmail.com</p>
            </div>

            <div className="bg-linear-to-br from-gray-900/80 to-gray-800/40 border border-gray-800 rounded-2xl p-6">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-white mb-2">Call Us</h3>
              <p className="text-gray-400">+91 8077533278</p>
            </div>

            <div className="bg-linear-to-br from-gray-900/80 to-gray-800/40 border border-gray-800 rounded-2xl p-6">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">
                123 Design Street, Creative City, NY 10001
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            {state.succeeded ? (
              <div className="bg-green-600/15 border border-green-500/30 text-green-100 rounded-2xl p-6 mb-6">
                <p className="text-lg font-semibold">
                  Thanks for reaching out!
                </p>
                <p className="text-sm text-green-200/80 mt-1">
                  We received your message and will get back to you shortly.
                </p>
              </div>
            ) : null}

            <form
              onSubmit={onSubmit}
              className="bg-linear-to-br from-gray-900/80 to-gray-800/40 border border-gray-800 rounded-2xl p-8"
            >
              <input type="hidden" name="service" value={formData.service} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="text-gray-300 mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-300 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div ref={serviceRef}>
                  <label htmlFor="service" className="text-gray-300 mb-2 block">
                    Service
                  </label>
                  <button
                    type="button"
                    id="service"
                    aria-haspopup="listbox"
                    aria-expanded={serviceOpen}
                    onClick={() => setServiceOpen((v) => !v)}
                    className="w-full bg-gray-900/60 border border-gray-700/80 rounded-lg px-4 py-3 text-left text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-colors shadow-inner shadow-black/20 hover:border-blue-400/50 flex items-center justify-between"
                  >
                    <span
                      className={`text-base ${
                        formData.service ? "text-gray-100" : "text-gray-400"
                      }`}
                    >
                      {formData.service
                        ? serviceOptions.find(
                            (o) => o.value === formData.service
                          )?.label
                        : "Select a service"}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        serviceOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {serviceOpen && (
                    <ul
                      role="listbox"
                      className="mt-2 w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/90 backdrop-blur-xl shadow-2xl shadow-black/30 divide-y divide-white/5"
                    >
                      {serviceOptions.map((option) => {
                        const selected = formData.service === option.value;
                        return (
                          <li
                            key={option.value}
                            role="option"
                            aria-selected={selected}
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                service: option.value,
                              }));
                              setServiceOpen(false);
                            }}
                            className={`flex cursor-pointer items-center justify-between px-4 py-3 text-sm transition-colors ${
                              selected
                                ? "bg-blue-500/10 text-white border-l-2 border-blue-500"
                                : "text-gray-200 hover:bg-white/5"
                            }`}
                          >
                            <span>{option.label}</span>
                            {selected && (
                              <Check size={16} className="text-blue-400" />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {serviceError && (
                    <p className="text-sm text-red-400 mt-2">{serviceError}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="text-gray-300 mb-2 block">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="e.g. +91 1234567890"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="text-gray-300 mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="How can we help?"
                  required
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="text-gray-300 mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Sending..." : "Send Message"}{" "}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
