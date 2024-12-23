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
    <div className="relative flex flex-col items-center justify-center h-screen px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/dandelion.png"
          alt="contact-dandelion-image"
          fill={true}
          objectFit="cover"
          quality={100}
          priority={true}
        />
      </div>
      <div className="relative z-20 flex items-center justify-center gap-4 text-3xl font-bold tracking-widest uppercase">
        <span className="text-stone-400">Kontakt</span>
        <span
          className="cursor-pointer hover:text-stone-400 text-stone-500"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          Formular
        </span>
      </div>

      {isFormVisible && (
        <div className="relative z-20 w-full max-w-[700px] mt-8 p-8 bg-white bg-opacity-90 rounded-md">
          {!isSubmitted && (
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
                    placeholder="zB Miriam"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-transparent border-b-2 text-stone-700 border-stone-600 placeholder-stone-400 focus:outline-none focus:border-stone-800"
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
                    placeholder="zB Sparbrod"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-transparent border-b-2 text-stone-600 border-stone-600 placeholder-stone-400 focus:outline-none focus:border-stone-800"
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
                  placeholder="zB WebDevSparbrod"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-transparent border-b-2 text-stone-600 border-stone-600 placeholder-stone-400 focus:outline-none focus:border-stone-800"
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
                  placeholder="Bitte um Zusammenarbeit Web Applikation..."
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-transparent border-b-2 text-stone-600 border-stone-600 placeholder-stone-400 focus:outline-none focus:border-stone-800"
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
                  placeholder="sparbrod.webdev@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-transparent border-b-2 text-stone-600 border-stone-600 placeholder-stone-400 focus:outline-none focus:border-stone-800"
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
                  placeholder="Ich suche einen Full - Stack Entwickler für folgendes Projekt..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-transparent border-b-2 text-stone-600 border-stone-600 placeholder-stone-400 focus:outline-none focus:border-stone-800"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-stone-500 text-white py-2 hover:bg-stone-700 transition-colors"
              >
                Absenden
              </button>
            </form>
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
      )}
    </div>
  );
}
