import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { images } from "@/services";

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
  className="bg-main-600 w-full lg:w-[35%] hidden lg:flex flex-col justify-between items-center relative"
>

        <div className=" mt-16">
          <p className="ml-4 mb-[-10px] uppercase text-sm text-[#483800]">Book 30 days ahead</p>
          <div className="relative inline-block mt-2 mb-2 text-center">
            <div className="absolute h-[85px] w-[85px] -top-[70px] border-[6px] leading-[16px] uppercase border-main-600 right-10 bg-[#017EC8] text-main-600 font-bold text-[20px] flex items-center rounded-full">
              Save 20%
            </div>
            <h1 className="text-[#483800] text-6xl font-extrabold uppercase leading-[47px]">
              Exclusive <br /> Offer
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-end">
          <img src={images.registerImsge2} alt="Pagoda" className="w-[85%]" />
          <div className="h-24 bg-gradient-to-t from-main-300 to-transparent absolute z-20 bottom-0 w-full"></div>
        </div>
        <div className="absolute bottom-6 flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>

      {/* Right Section */}
      <div className="w-full h-full lg:w-[65%] bg-white lg:bg-main-600 ">
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="bg-white lg:rounded-l-2xl flex flex-col justify-between px-6 lg:px-24 py-6 lg:py-10 h-screen lg:h-full overflow-y-auto"
  >

        <div className="flex justify-end w-full  lg:mt-0 pb-10 lg:pb-16">
          <button className="text-sm text-gray-700 mr-4">中文</button>
          <button className="bg-main-600 px-4 py-2 rounded-full font-medium text-sm lg:text-base">
            Rent WrifBB Now
          </button>
        </div>

<div className="flex h-full lg:items-center justify-center lg:justify-start">
        <div className="max-w-lg w-full mx-auto mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 text-center">Membership Registration</h2>
          <p className="text-gray-500 mt-2 mb-6 text-center text-sm lg:text-lg">Join our community</p>

          <form onSubmit={handleSubmit} className="space-y-5 pb-4">
            <div>
              <label className="block text-xs font-bold text-black-700">English Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full mt-1.5 px-4 py-2.5 placeholder:text-xs placeholder:text-disabled bg-neutral-50 border border-neutral-300 rounded-lg"
              />
            </div>

            <div className="block sm:flex sm:space-x-4">
              <div className="flex-1">
                <label className="block text-xs font-bold text-black-700">Appellation*</label>
                <select
                  name="appellation"
                  value={formData.appellation}
                  onChange={handleChange}
                  className="w-full mt-1.5 px-4 py-2.5 placeholder:text-xs placeholder:text-disabled bg-neutral-50 border border-neutral-300 rounded-lg"
                >
                  <option value="">Select</option>
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                </select>
              </div>
              <div className="flex-1 mt-4 sm:mt-0">
  <label className="block text-xs font-bold text-black-700">Phone Number*</label>
  <input
    type="text"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Enter your phone number"
    className="w-full mt-1.5 px-4 py-2.5 placeholder:text-xs placeholder:text-disabled bg-neutral-50 border border-neutral-300 rounded-lg"
  />
  {formData.phone && !phoneRegex.test(formData.phone) && (
    <p className="text-sm text-red-500 mt-1">Invalid phone number (8–15 digits only)</p>
  )}
</div>

            </div>

            <div className="block sm:flex sm:space-x-4">
            <div className="flex-1">
  <label className="block text-xs font-bold text-black-700">Email Address*</label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter your email address"
    className="w-full mt-1.5 px-4 py-2.5 placeholder:text-xs placeholder:text-disabled bg-neutral-50 border border-neutral-300 rounded-lg"
  />
  {formData.email && !emailRegex.test(formData.email) && (
    <p className="text-sm text-red-500 mt-1">Please enter a valid email address</p>
  )}
</div>


            <div className="flex-1 mt-4 sm:mt-0">
              <label className="block text-xs font-bold text-black-700">Birth Month*</label>
              <select
                name="birthMonth"
                value={formData.birthMonth}
                onChange={handleChange}
                className="w-full mt-1.5 px-4 py-2.5 placeholder:text-xs placeholder:text-disabled bg-neutral-50 border border-neutral-300 rounded-lg"
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
              <label className="text-sm text-black-700">
                I have read and agreed to the{" "}
                <a href="#" className="text-[#37b7f9] font-semibold">
                  Terms & Condition & Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-3 rounded-full font-medium text-sm lg:text-base transition ${
                isValid
                  ? "bg-main-600 hover:bg-main-650 cursor-pointer"
                  : "bg-main-500 cursor-not-allowed"
              }`}
            >
              Register
            </button>
          </form>
          </div>
        </div>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer />
      </div>
    </div>
  );
}

export default MembershipRegistration;
