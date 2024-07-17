import { useState } from "react";
import toast from "react-hot-toast";

import axiosInstance from "../Helpers/axiosInstance";
import { isEmail } from "../Helpers/regexMatcher";
import HomeLayout from "../Layouts/HomeLayout";
const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!userInput.email || !userInput.name || !userInput.message) {
      toast.error("All fields are mandatory");
    }

    if (!isEmail(userInput.email)) {
      toast.error("Invalid email id");
      return;
    }

    try {
      const response = axiosInstance.post("/contact", userInput);
      toast.promise(response, {
        loading: "Submitting your message...",
        success: "Message sent successfully",
        error: "Failed to send the message",
      });
      const constactResponse = await response;
      if (constactResponse?.data?.success) {
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Opeartion failed...");
    }
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[90vh]">
        <div className="max-w-2xl mx-auto p-4 relative z-10">
          <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your career Development.
          </p>
          <form
            className="flex flex-col gap-4"
            onSubmit={onFormSubmit}
            noValidate
          >
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="rounded-lg border border-neutral-800 focus:ring-2 w-full p-4 bg-neutral-950 placeholder:text-neutral-500"
              onChange={handleUserInput}
              value={userInput.name}
            />

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              className="rounded-lg border border-neutral-800 focus:ring-2 w-full p-4 placeholder:text-neutral-500"
              onChange={handleUserInput}
              value={userInput.email}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              className="rounded-lg border border-neutral-800 focus:ring-2 w-full p-4 placeholder:text-neutral-500"
              rows={5}
              onChange={handleUserInput}
              value={userInput.message}
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 w-40 rounded-lg bg-yellow-600 text-black font-medium hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Contact;
