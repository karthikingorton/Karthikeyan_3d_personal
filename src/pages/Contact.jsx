import React, { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import Loader from "../components/Loader";

import Groot from "../models/Groot";
import Earth from "../models/Earth";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = React.useRef(null);
  

  // Handle input change
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Clear previous messages
    setSuccessMessage("");
    setErrorMessage("");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // Template ID
        {
          from_name: form.name,
          to_name: "Karthikeyan",
          from_email: form.email,
          to_email: "karthikeyansivanesan23@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Public Key
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
        setSuccessMessage("Message sent successfully!");
        setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("EmailJS Error:", error.text || error.message);
        setErrorMessage("Something went wrong, please try again later.");
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit} // Handle form submission
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Rocky"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Rockybhai@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you"
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Display success or error messages */}
        {successMessage && (
          <div className="mt-4 text-green-500 font-semibold">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mt-4 text-red-500 font-semibold">{errorMessage}</div>
        )}
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <Suspense fallback={<Loader />}>
            <Earth
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
