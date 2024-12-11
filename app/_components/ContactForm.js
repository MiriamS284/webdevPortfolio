"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    subject: "",
    email: "",
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
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          organization: "",
          subject: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setIsSubmitted(false);
          setIsFormVisible(false);
        }, 5000);
      } else {
        alert("Fehler beim Senden der E-Mail.");
      }
    } catch (error) {
      console.error("Fehler beim Senden der Anfrage:", error);
      alert(
        "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    }
  };

  return (
    <div className="flex h-screen px-4">
      <div className="hidden md:flex items-start justify-end w-1/4 pr-1 pt-4">
        <span className="text-stone-300 text-3xl mt-4 tracking-widest">
          KONTAKT
        </span>
      </div>

      <div
        className={`${
          isFormVisible ? "bg-stone-200" : ""
        } text-stone-500 tracking-widest w-full max-w-[700px] p-8 space-y-4 transition-all duration-500`}
      >
        <h2
          onClick={() => setIsFormVisible(!isFormVisible)}
          className={`text-3xl text-left tracking-widest -ml-8 cursor-pointer hover:bg-stone-400 hover:text-stone-200 transition-colors px-4 ${
            isFormVisible ? "bg-stone-400 text-stone-200" : "bg-transparent"
          }`}
        >
          FORMULAR
        </h2>

        {isFormVisible && !isSubmitted && (
          <div className="overflow-hidden transition-all duration-500 max-h-screen p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-stone-600"
                  >
                    Vorname
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Ihr Vorname"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-transparent border-b-2 text-stone-600 border-stone-600 placeholder-stone-400 focus:outline-none focus:border-white"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-stone-600"
                  >
                    Nachname
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Ihr Nachname"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-transparent border-b-2 text-stone-600 border-stone-600 placeholder-stone-400 focus:outline-none focus:border-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block mb-2 text-stone-600"
                >
                  Organisation
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="Name Ihrer Organisation"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-transparent border-b-2 text-stone-600 border-stone-600 placeholder-stone-400 focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-stone-600">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Betreff der Nachricht"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-transparent border-b-2 text-stone-600 border-stone-600 placeholder-stone-400 focus:outline-none focus:border-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-stone-600">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ihre E-Mail-Adresse"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-transparent border-b-2 text-stone-600 border-stone-600 placeholder-stone-400 focus:outline-none focus:border-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-stone-600">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Ihre Nachricht"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-transparent border-b-2 text-stone-600 border-stone-600 placeholder-stone-400 focus:outline-none focus:border-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-stone-200 text-stone-600 py-2 hover:bg-stone-400 transition-colors"
              >
                Absenden
              </button>
            </form>
          </div>
        )}

        {isSubmitted && (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-stone-600 text-md text-center">
              Vielen Dank für Ihre Kontaktaufnahme! <br />
              Ich freue mich über Ihre Nachricht und werde mich zeitnah bei
              Ihnen zurückmelden. Bis dahin wünsche ich Ihnen alles Gute.
            </p>
            <div className="mb-4">
              <Image
                src="/sign_1.png"
                alt="Logo"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
