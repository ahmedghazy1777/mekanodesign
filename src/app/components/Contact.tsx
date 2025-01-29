import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-medium mb-6">
            Lets Talk About Your Project
          </h2>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Title"
                className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="First Name*"
                className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              <select className="col-span-1 p-3 border border-gray-200 rounded focus:outline-none focus:border-yellow-500">
                <option value="+971">🇦🇪 +971</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number*"
                className="col-span-3 p-3 border border-gray-200 rounded focus:outline-none focus:border-yellow-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600 transition-colors duration-300"
            >
              Enquire Now
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="h-full min-h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.999999999999!2d55.2707!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTQuNSJF!5e0!3m2!1sen!2sae!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
