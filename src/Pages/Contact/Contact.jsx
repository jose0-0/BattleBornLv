import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import Swal from "sweetalert2";

let services = [
  {
    name: "1 step Ceramic Coating (1 Year)",
    price: "- Starting at $100",
  },
  {
    name: "5 Step Ceramic Coating (5 year)",
    price: "- Starting $500",
  },
  {
    name: "1 step polish with 5 year ceramic coating",
    price: "- Starting $850",
  },
  {
    name: "2 step polish with 5 year ceramic coating",
    price: "- Starting $1200",
  },
  {
    name: "Mini Jackpot (standard detail)",
    price: "- Starting $90",
  },
  {
    name: "VGK (interior deep clean)",
    price: "- Starting $130",
  },
  {
    name: "UNLV (Clay & Seal)",
    price: "Starting $130",
  },
  {
    name: "MEGA Jackpot",
    price: "- Starting $250",
  },
  {
    name: "Standard Exterior Clean",
    price: "- Starting $60",
  },
  {
    name: "Motorcycle Cleaning",
    price: "- Starting $60",
  },
  {
    name: "Rv Cleaning",
    price: "- Starting $7/sqft",
  },
];

let occupants = [
  {
    value: "Children",
  },
  {
    value: "Pets",
  },
  {
    value: "Both",
  },
  {
    value: "None",
  },
];

const addOns = [
  {
    name: "Engine Bay Cleaning",
    price: "- Starting $40",
  },
  {
    name: "Leather Conditioner ",
    price: "- Starting $40",
  },
  {
    name: "Leather Ceramic Protection",
    price: 100,
  },
  {
    name: "Cloth Seat Protection",
    price: 50,
  },
];
const Contact = () => {
  const [result, setResult] = useState("");

  let key = import.meta.env.VITE_WEB3FORMS_KEY;
  let email = import.meta.env.VITE_EMAIL_ADDRESS;

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", `${key}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "THANK YOU",
        text: "We will be in contact soon!",
        icon: "success",
      });
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div>
          {/* overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50" />
          <div className="absolute w-full h-full text-white flex flex-col justify-center">
            <div className="uppercase px-8 text-3xl md:text-7xl font-thin">
              Contact Us
            </div>
          </div>
          <img
            src="/images/image-10.png"
            alt="image-10"
            className="w-full max-h-[700px] object-cover"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mx-auto my-25 font-thin px-8">
        <div className="font-thin max-w-[800px] flex flex-col text-center items-center">
          <p>
            Have questions, need assistance, or want to book a service? Reach
            out to us using the contact form below, or email us directly at{" "}
            <a
              href="mailto:battleborndetailing@yahoo.com"
              className="text-accent"
            >
              {email}
            </a>{" "}
            if you prefer.
          </p>
          <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
        </div>
        <div className="max-w-[600px]">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 p-8 mt-8 rounded-sm shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="field w-[100%] h-[50px] bg-transparent border-[2px] border-[#ddd] p-4 rounded-sm"
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="example@gmail.com"
                  className="field w-[100%] h-[50px] bg-transparent border-[2px] border-[#ddd] p-4 rounded-sm"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone-number"
                  placeholder="(123)-456-7890"
                  className="field w-[100%] h-[50px] bg-transparent border-[2px] border-[#ddd] p-4 rounded-sm"
                  required
                />
              </div>
              <div>
                <label>Vehicle Information</label>
                <input
                  type="text"
                  name="vehicle-information"
                  placeholder="White 2020 Subaru BRZ"
                  className="field w-[100%] h-[50px] bg-transparent border-[2px] border-[#ddd] p-4 rounded-sm"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>Children or Pets?</label>
                <select
                  name="children-pets"
                  className="field w-[100%] h-[50px] bg-transparent border-[2px] border-[#ddd] p-1 rounded-sm"
                >
                  <option value="">N/a</option>
                  {occupants.map((occupant, index) => {
                    return (
                      <option key={index} value={occupant.value}>
                        {occupant.value}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label>Preferred Appointment Date</label>
                <input
                  type="datetime-local"
                  name="preferred-appointment-date"
                  className="field w-[100%] h-[50px] bg-transparent border-[2px] border-[#ddd] p-4 rounded-sm"
                  required
                />
              </div>
            </div>
            <div>
              <label>Address</label>
              <input
                type="address"
                name="address"
                placeholder="123 Main St. Las Vegas, NV 89123"
                className="w-[100%] h-[50px] bg-transparent border-[2px] border-[#ddd] p-4 rounded-sm"
                required
              />
            </div>
            <div>
              <label>Service(s)</label>
              <select
                name="service"
                className="field w-[100%] h-[50px] bg-transparent border-[2px] border-[#ddd] p-1 rounded-sm"
              >
                <option value="">Select a Service</option>
                {services.map((service, index) => {
                  return (
                    <option key={index} value={service.name}>
                      {service.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label>Add-Ons(s)</label>
              <select
                name="add-ons"
                className="field w-[100%] h-[50px] bg-transparent border-[2px] border-[#ddd] p-1 rounded-sm"
              >
                <option value="">Select a Service</option>
                {addOns.map((addOn, index) => {
                  return (
                    <option key={index} value={addOn.name}>
                      {addOn.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label>Your Message</label>
              <textarea
                name="message"
                className="field mess field w-[100%] h-[200px] bg-transparent border-[2px] border-[#ddd] p-4 rounded-sm resize-none"
                placeholder="Comments, Questions or Concerns?"
              />
            </div>
            <button
              type="submit"
              className="w-[100%] h-14 bg-black hover:bg-gray-600 text-white rounded-sm font-thin duration-300 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
