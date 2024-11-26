"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");
  const router = useRouter();

  // Form validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setUsernameError("");
    setPasswordError("");
    setApiError("");

    let valid = true;

    if (username.length < 3) {
      setUsernameError("at least 3 characters long");
      valid = false;
    }

    if (password.length < 3) {
      setPasswordError("at least 3 characters long");
      valid = false;
    }

    if (valid) {
      try {
        // API-Aufruf an /api/login
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          router.push("/admin/dashboard");
        } else {
          const { error } = await response.json();
          setApiError(error || "Invalid login");
        }
      } catch (error) {
        setApiError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="flex w-full max-w-lg mx-auto bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-8">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-stone-500 mb-6 text-center">
          Admin Sign In
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className={`w-full p-3 border-2 rounded-full bg-transparent placeholder-gray-500 text-white focus:bg-white focus:text-gray-900 ${
                usernameError ? "border-red-800" : "border-stone-300"
              } focus:outline-none focus:border-slate-600 transition-colors`}
            />
            {usernameError && (
              <div className="text-red-800 text-sm mt-2">{usernameError}</div>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`w-full p-3 border-2 rounded-full bg-transparent placeholder-gray-500 text-white focus:bg-white focus:text-gray-900 ${
                passwordError ? "text-red-800" : "border-stone-300"
              } focus:outline-none focus:border-slate-600 transition-colors`}
            />
            {passwordError && (
              <div className="text-red-800 text-sm mt-2">{passwordError}</div>
            )}
          </div>

          {/* API-Fehlermeldung */}
          {apiError && (
            <div className="text-red-800 text-sm mb-4">{apiError}</div>
          )}

          <button
            type="submit"
            className="w-full bg-stone-300 text-white py-3 rounded-full hover:bg-stone-400 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
