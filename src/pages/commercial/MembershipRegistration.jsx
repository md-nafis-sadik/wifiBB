import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { images } from "@/services";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Cookies from "js-cookie";
import i18next from "i18next";
import { languageOptions } from "@/services";

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

  const appellations = ["Mr.", "Ms.", "Mrs."];
  const birthMonths = [
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
  ];

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

  const currentLanguage = Cookies.get("i18next");
  const [lang, setLang] = useState(currentLanguage);

  // console.log(currentLanguage);

  const handleLanguageChange = (language) => {
    setLang(language);
    i18next.changeLanguage(language);
  };

  const handleModalOpen = (name = "auth", value) => {
    if (name == "auth") {
      setIsAuthDialogOpen(value);
    } else if (name == "download") {
      setAppDownloadDialogOpen(value);
    } else {
      setLoginRequiredDialogOpen(value);
    }
    setIsShowMenu(false);
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
        <div className="mt-28">
          <p className="ml-4 uppercase text-base text-[#483800]">
            Book 30 days ahead
          </p>
          <div className="relative inline-block mt-2 mb-2 text-center">
            <div className="absolute h-[80px] xl:h-[90px] w-[80px] xl:w-[90px] -top-[65px] xl:-top-[75px] border-[6px] leading-[16px] uppercase border-main-600 right-10 bg-[#017EC8] text-main-600 font-bold text-[20px] flex items-center rounded-full">
              Save 20%
            </div>
            <h1 className="text-[#483800] text-6xl xl:text-7xl 2xl:text-[80px] font-extrabold uppercase leading-[63px] font-proxima">
              Exclusive <br /> Offer
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-end">
          <img src={images.registerImsge2} alt="Pagoda" className="w-full" />
          <div className="h-40 bg-gradient-to-t from-main-600 to-transparent absolute z-20 bottom-0 w-full"></div>
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
          <div className="flex justify-end items-center gap-2 w-full  lg:mt-0 pb-10 lg:pb-16">
            
          <Select onValueChange={handleLanguageChange} defaultValue={lang}>
            <SelectTrigger className="w-20 bg-white text-black font-bold">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languageOptions.map(({ _id, label, value, flag }) => (
                <SelectItem
                  key={_id}
                  value={value}
                  className={
                    "flex flex-row gap-1 items-center text-black font-semibold"
                  }
                >
                  {/* <img
                              src={flag()}
                              alt={label}
                              className="w-8 h-auto inline-block"
                            />{" "} */}
                  <span>{label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button className="bg-main-600 px-4 py-2 rounded-full font-medium text-sm lg:text-base">
              Rent WrifBB Now
            </button>
          </div>

          <div className="flex h-full lg:items-center justify-center lg:justify-start">
            <div className="max-w-lg w-full mx-auto mb-12">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 text-center">
                Membership Registration
              </h2>
              <p className="text-gray-500 mt-2 mb-6 text-center text-sm lg:text-lg">
                Join our community
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 pb-4">
                <div>
                  <label className="block text-sm font-bold text-black-700">
                    English Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full mt-1.5 px-4 py-2.5 placeholder:text-sm placeholder:text-disabled bg-neutral-50 border border-neutral-300 rounded-lg"
                  />
                </div>

                <div className="block sm:flex sm:space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-bold text-black-700">
                      Appellation*
                    </label>
                    <Select
                      value={formData.appellation}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, appellation: value }))
                      }
                    >
                      <SelectTrigger className="w-full mt-1.5 px-4 py-[21px] placeholder:text-sm placeholder:text-disabled bg-neutral-50 border border-neutral-300 rounded-lg">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {appellations.map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1 mt-4 sm:mt-0">
                    <label className="block text-sm font-bold text-black-700">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full mt-1.5 px-4 py-2.5 placeholder:text-sm placeholder:text-disabled bg-neutral-50 border border-neutral-300 rounded-lg"
                    />
                    {formData.phone && !phoneRegex.test(formData.phone) && (
                      <p className="text-sm text-red-500 mt-1">
                        Invalid phone number (8–15 digits only)
                      </p>
                    )}
                  </div>
                </div>

                <div className="block sm:flex sm:space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-bold text-black-700">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full mt-1.5 px-4 py-2.5 placeholder:text-sm placeholder:text-disabled bg-neutral-50 border border-neutral-300 rounded-lg"
                    />
                    {formData.email && !emailRegex.test(formData.email) && (
                      <p className="text-sm text-red-500 mt-1">
                        Please enter a valid email address
                      </p>
                    )}
                  </div>

                  <div className="flex-1 mt-4 sm:mt-0">
                    <label className="block text-sm font-bold text-black-700">
                      Birth Month*
                    </label>
                    <Select
                      value={formData.birthMonth}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, birthMonth: value }))
                      }
                    >
                      <SelectTrigger className="w-full mt-1.5 px-4 py-[21px] placeholder:text-sm placeholder:text-disabled bg-neutral-50 border border-neutral-300 rounded-lg">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {birthMonths.map((month) => (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
