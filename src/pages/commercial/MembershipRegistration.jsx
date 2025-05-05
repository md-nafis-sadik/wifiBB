import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

function MembershipRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    appellation: "",
    phone: "",
    email: "",
    birthMonth: "",
    agreeSMS: false,
    agreeTerms: false,
  });

  const phoneRegex = /^[0-9]{8,15}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValid =
  formData.name &&
  formData.appellation &&
  formData.birthMonth &&
  formData.agreeTerms &&
  phoneRegex.test(formData.phone) &&
  emailRegex.test(formData.email);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    toast.success("Registration Successful!", {
      position: "top-right",
      autoClose: 3000,
    });

    // Optionally: clear form
    // setFormData({ ... });
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full overflow-hidden font-sans">
      {/* Left Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-yellow-400 flex-1 flex flex-col justify-between items-center p-6 relative"
      >
        <div className="text-center mt-16">
          <p className="uppercase text-xs tracking-wider">Book 30 days ahead</p>
          <div className="relative inline-block mt-2 mb-2">
            <div className="absolute -top-4 -right-4 bg-blue-700 text-white text-xs px-2 py-1 rounded-full">
              Save 20%
            </div>
            <h1 className="text-5xl font-extrabold leading-tight text-black">
              Exclusive <br /> Offer
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-end">
          <img src="/pagoda.png" alt="Pagoda" className="h-48 md:h-64" />
          <img src="/tram.png" alt="Tram" className="h-40 md:h-56 ml-4" />
        </div>
        <div className="absolute bottom-6 flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white flex-1 flex flex-col justify-center px-6 lg:px-24 py-10"
      >
        <div className="flex justify-end">
          <button className="text-sm text-gray-700 mr-4">中文</button>
          <button className="bg-yellow-400 px-4 py-2 rounded-full font-medium">
            Rent WrifBB Now
          </button>
        </div>

        <div className="max-w-lg w-full mx-auto mt-10">
          <h2 className="text-3xl font-bold text-gray-900">Membership Registration</h2>
          <p className="text-gray-500 mt-1 mb-6">Join our community</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">English Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Appellation*</label>
                <select
                  name="appellation"
                  value={formData.appellation}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select</option>
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                </select>
              </div>
              <div className="flex-1">
  <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
  <input
    type="text"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Enter your phone number"
    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
  />
  {formData.phone && !phoneRegex.test(formData.phone) && (
    <p className="text-sm text-red-500 mt-1">Invalid phone number (8–15 digits only)</p>
  )}
</div>

            </div>

            <div>
  <label className="block text-sm font-medium text-gray-700">Email Address*</label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter your email address"
    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
  />
  {formData.email && !emailRegex.test(formData.email) && (
    <p className="text-sm text-red-500 mt-1">Please enter a valid email address</p>
  )}
</div>


            <div>
              <label className="block text-sm font-medium text-gray-700">Birth Month*</label>
              <select
                name="birthMonth"
                value={formData.birthMonth}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <option key={month}>{month}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreeSMS"
                checked={formData.agreeSMS}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <label className="text-sm text-gray-600">
                I agree to receive text messages (SMS).
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <label className="text-sm text-gray-600">
                I have read and agreed to the{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms & Condition & Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-2 rounded-full font-medium text-lg transition ${
                isValid
                  ? "bg-yellow-400 hover:bg-yellow-500 cursor-pointer"
                  : "bg-yellow-200 cursor-not-allowed"
              }`}
            >
              Register
            </button>
          </form>
        </div>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default MembershipRegistration;
