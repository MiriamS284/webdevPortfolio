"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("E-Mail wurde erfolgreich gesendet!");
        setFormData({
          firstName: "",
          lastName: "",
          subject: "",
          email: "",
          address: "",
          message: "",
        });
      } else {
        setStatus("Fehler beim Senden der E-Mail.");
      }
    } catch (error) {
      console.error("Fehler beim Senden der Anfrage:", error);
      setStatus(
        "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    }
  };
  return (
    <div className="flex h-screen px-4">
      <div className="hidden md:flex items-start justify-end w-1/4  pr-1 pt-4">
        <span className="text-stone-200 text-3xl mt-4 tracking-widest">
          KONTAKT
        </span>
      </div>

      <div className="bg-stone-200 text-stone-600 shadow-lg w-full max-w-[700px] p-8 space-y-4">
        <h2 className="text-3xl text-left tracking-widest -ml-8">FORMULAR</h2>
        <form onSubmit={handleSubmit} className="space-y-4 p-10">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block mb-2 text-stone-600">
                Vorname
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-stone-100 border text-stone-600 border-stone-600 focus:outline-none focus:border-white"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block mb-2 text-stone-600">
                Nachname
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 text-stone-600 bg-stone-100 border border-stone-600  focus:outline-none focus:border-white"
                required
              />
            </div>
          </div>

          {/* Betreff */}
          <div>
            <label htmlFor="subject" className="block mb-2 text-stone-600">
              Betreff
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 text-stone-600 bg-stone-100 border border-stone-600 focus:outline-none focus:border-white"
              required
            />
          </div>

          {/* E-Mail und Adresse */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="email" className="block mb-2 text-stone-600">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 text-stone-600 bg-stone-100 border border-stone-600 focus:outline-none focus:border-white"
                required
              />
            </div>
          </div>

          {/* Nachricht */}
          <div>
            <label htmlFor="message" className="block mb-2 text-stone-600">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 bg-stone-100 text-stone-600 border border-stone-600  focus:outline-none focus:border-white"
              required
            />
          </div>

          {/* Absenden Button */}
          <button
            type="submit"
            className="w-full bg-stone-200 text-stone-600 py-2  hover:bg-stone-400 transition-colors"
          >
            Absenden
          </button>
        </form>
      </div>

      {/* Rechter Rand */}
      <div className="hidden md:flex items-center justify-center w-1/4"></div>
    </div>
  );
}
