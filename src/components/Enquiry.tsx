import React from 'react';

const Enquiry: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-2xl m-2 p-6">
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
        <img
          className="rounded-lg w-full"
          src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUyfHx0ZWNobm9sb2d5fGVufDB8fDB8fHww" 
          alt="Developer working"
        />
      </div>
      <div className="w-full lg:w-1/2 p-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center lg:text-left">Find Out More Reasons To Stay</h2>
        <form className="space-y-4">
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Mobile no."
          />
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="City"
          />
          <div className="flex items-start">
            <input
              className="mr-2 mt-1"
              type="checkbox"
            />
            <label className="text-gray-600 text-sm">
              Creating an account means you're okay with our Terms of Service, Privacy Policy, and default Notification Settings
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enquire Now
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-sm text-center lg:text-left">
          Already Have An Account? <a href="#" className="text-blue-600 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Enquiry;
