import { FacebookIcon, images, InstagramIcon, LinkedInIcon, XIcon, YoutubeIcon } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [
    {
      _id: 1,
      name: "WhatsApp",
      text: "Whatsapp Us",
      value: "(+65) 6100 9998",
      image: images.whatsapp,
      type: 'call'
    },
    {
      _id: 2,
      name: "Email",
      text: "Email Address",
      value: "business@yoowifi.com",
      image: images.email,
      type: 'email'
    },
  ],
  faqs: [
    {
      _id: 1,
      question: "Can I make calls with the pocket wifi?",
      answer:
        "The pocket wifi only gives you an internet connection; it does not enable regular voice calls via your cellular network. However, it does allow VoIP calls such as Skype, Viber, and Google Voice.",
    },
    {
      _id: 2,
      question:
        "What's the difference between a megabyte (MB) and a gigabyte (GB)?",
      answer:
        "A megabyte (MB) is 1,024 kilobytes (KB), while a gigabyte (GB) is 1,024 megabytes. Generally, 1GB equals 1,024MB.",
    },
    {
      _id: 3,
      question: "How can I return pocket wifi at the end of my rental period?",
      answer:
        "You can return your pocket wifi by following the instructions provided during rental. Typically, this includes returning it at a drop-off location or via a provided return envelope.",
    },
    {
      _id: 4,
      question: "Can I amend my booking information after placing an order?",
      answer:
        "Yes, you can amend your booking information after placing an order by contacting our support team, who will assist you with the necessary changes.",
    },
    {
      _id: 5,
      question: "How can I cancel my booking?",
      answer:
        "To cancel your booking, please reach out to our customer service team. Cancellations may be subject to our cancellation policy.",
    },
    {
      _id: 6,
      question:
        "I will be traveling to many different countries all over the world, how many devices do I need?",
      answer:
        "The number of devices you need depends on your travel itinerary. Typically, one device per region or country with specific data coverage would be recommended.",
    },
  ],
  socialLinks: [
    {
      _id: 1,
      name: "Facebook",
      link: "https://www.facebook.com/yoowifi/",
      icon: () => <FacebookIcon className="w-6 h-6 lg:w-8 lg:h-8" />
    },
    {
      _id: 2,
      name: "Youtube",
      link: "https://youtube.com/@yoowifi",
      icon: () => <YoutubeIcon className="w-6 h-6 lg:w-8 lg:h-8" />
    },
    {
      _id: 3,
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/yoowifi/?originalSubdomain=sg",
      icon: () => <LinkedInIcon className="w-6 h-6 lg:w-8 lg:h-8" />
    },
    {
      _id: 4,
      name: "Instagram",
      link: "https://www.instagram.com/yoowifi.co/?hl=en",
      icon: () => <InstagramIcon className="w-6 h-6 lg:w-8 lg:h-8" />
    },
    {
      _id: 5,
      name: "X",
      link: "https://x.com/yoowifipr?mx=2",
      icon: () => <XIcon className="w-6 h-6 lg:w-8 lg:h-8" />
    },
  ]
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
});

export default contactSlice.reducer;
