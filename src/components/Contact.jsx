import { useState } from "react";
import { Forminit } from "forminit";

const forminit = new Forminit();

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget; // form ko pehle store karo
  setStatus("Sending...");

  const formData = new FormData(form);

  const { error } = await forminit.submit(
    "a5byof4ntyd",
    formData
  );

  if (error) {
    console.error(error);
    setStatus("Something went wrong ❌");
    return;
  }

  // Submission successful hone ke baad form clear
  form.reset();

  setStatus("Message sent successfully ✅");
};

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">
        Contact Me
      </h1>

      <span>
        Please fill out the form below to contact me
      </span>

      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl shadow-md"
        >
          <h1 className="text-xl font-semibold mb-4">
            Send Your Message
          </h1>

          {/* Full Name */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 mb-1"
            >
              Full Name
            </label>

            <input
              id="fullName"
              name="fi-sender-fullName"
              type="text"
              placeholder="Enter your fullname"
              required
              className="shadow rounded-lg border w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 mb-1"
            >
              Email Address
            </label>

            <input
              id="email"
              name="fi-sender-email"
              type="email"
              placeholder="Enter your email address"
              required
              className="shadow rounded-lg border w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 mb-1"
            >
              Message
            </label>

            <textarea
              id="message"
              name="fi-text-message"
              rows="5"
              placeholder="Enter message"
              required
              className="shadow rounded-lg border w-full py-2 px-3 text-gray-700 leading-tight resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-4 py-2 hover:bg-slate-700 duration-300 cursor-pointer"
          >
            Send
          </button>

          {/* Status */}
          {status && (
            <p className="mt-4 text-sm font-medium">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;