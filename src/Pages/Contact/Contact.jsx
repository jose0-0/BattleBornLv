import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import Swal from "sweetalert2";

let services = [
  {
    name: "1 Year Ceramic Coating",
    price: "- Starting at $100",
  },
  {
    name: "5 Year Ceramic Coating",
    price: "- Starting $500",
  },
  {
    name: "1 Step polish with 5 year ceramic coating",
    price: "- Starting $850",
  },
  {
    name: "2 Step polish with 5 year ceramic coating",
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
    name: "$40 - Engine Bay Cleaning",
    price: "- Starting $40",
  },
  {
    name: "$40 - Leather Conditioner ",
    price: "- Starting $40",
  },
  {
    name: "$100 - Leather Ceramic Protection",
    price: "- Starting 100",
  },
  {
    name: "$50 - Cloth Seat Protection",
    price: "- Starting 50",
  },
];

const Contact = () => {
  const [result, setResult] = useState("");
  const [numVehicles, setNumVehicles] = useState(1);

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
      setNumVehicles(1); // Reset number of vehicles after submission
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 mt-8 rounded-sm shadow-md"
          >
            {/* Full Name */}
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="field w-full h-12 bg-transparent border-2 border-gray-300 p-4 rounded-sm"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="field w-full h-12 bg-transparent border-2 border-gray-300 p-4 rounded-sm"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="(555) 123-4567"
                className="field w-full h-12 bg-transparent border-2 border-gray-300 p-4 rounded-sm"
                required
              />
            </div>

            {/* Preferred Appointment Date */}
            <div>
              <label>Preferred Appointment Date</label>
              <input
                type="datetime-local"
                name="appointment-date"
                className="field w-full h-12 bg-transparent border-2 border-gray-300 p-4 rounded-sm"
                required
              />
            </div>

            {/* Service Address */}
            <div className="md:col-span-2">
              <label>Service Address</label>
              <input
                type="text"
                name="service-address"
                placeholder="123 Main St, Las Vegas, NV 89123"
                className="field w-full h-12 bg-transparent border-2 border-gray-300 p-4 rounded-sm"
                required
              />
            </div>

            {/* Children or Pets? */}
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
              <label>Number of Vehicles</label>
              <input
                type="number"
                name="num-vehicles"
                value={numVehicles}
                onChange={(e) =>
                  setNumVehicles(Math.max(1, Number(e.target.value)))
                }
                min="1"
                max="10"
                className="field w-full h-12 bg-transparent border-2 border-gray-300 p-4 rounded-sm"
                required
              />
            </div>

            {/* Vehicle Sections */}
            {[...Array(numVehicles)].map((_, index) => (
              <div
                key={index}
                className="border-2 border-gray-300 p-4 rounded-md my-2 md:col-span-2"
              >
                <h3 className="text-lg font-thin underline bold mb-2">
                  Vehicle {index + 1}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Make & Model */}
                  <div>
                    <label>Make & Model</label>
                    <input
                      type="text"
                      name={`make-model-${index + 1}`}
                      placeholder="e.g., Toyota Camry 2022"
                      className="field w-full h-12 bg-transparent border-2 border-gray-300 p-4 rounded-sm"
                      required
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label>Service</label>
                    <select
                      name={`service-${index + 1}`}
                      className="field w-full h-12 bg-transparent border-2 border-gray-300 p-1 rounded-sm"
                      required
                    >
                      <option value="">Select a Service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Add-Ons */}
                  <div className="">
                    <label>Add-Ons (Optional)</label>
                    <select
                      name={`first-AddOn-${index + 1}`}
                      className="field w-full h-12 bg-transparent border-2 border-gray-300 p-1 rounded-sm"
                    >
                      <option value="">Select an Add-On</option>
                      {addOns.map((addOn, idx) => (
                        <option key={idx} value={addOn.name}>
                          {addOn.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* addOns */}
                  <div className="">
                    <label>Add-Ons (Optional)</label>
                    <select
                      name={`second-AddOn-${index + 1}`}
                      className="field w-full h-12 bg-transparent border-2 border-gray-300 p-1 rounded-sm"
                    >
                      <option value="">Select an Add-On</option>
                      {addOns.map((addOn, idx) => (
                        <option key={idx} value={addOn.name}>
                          {addOn.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* addOns */}
                  <div className="">
                    <label>Add-Ons (Optional)</label>
                    <select
                      name={`third-AddOn-${index + 1}`}
                      className="field w-full h-12 bg-transparent border-2 border-gray-300 p-1 rounded-sm"
                    >
                      <option value="">Select an Add-On</option>
                      {addOns.map((addOn, idx) => (
                        <option key={idx} value={addOn.name}>
                          {addOn.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* addOns */}
                  <div className="">
                    <label>Add-Ons (Optional)</label>
                    <select
                      name={`fourth-AddOn-${index + 1}`}
                      className="field w-full h-12 bg-transparent border-2 border-gray-300 p-1 rounded-sm"
                    >
                      <option value="">Select an Add-On</option>
                      {addOns.map((addOn, idx) => (
                        <option key={idx} value={addOn.name}>
                          {addOn.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}

            {/* User Message */}
            <div className="md:col-span-2">
              <label>Your Message</label>
              <textarea
                name="message"
                className="field w-full h-48 bg-transparent border-2 border-gray-300 p-4 rounded-sm resize-none"
                placeholder="Comments, Questions or Concerns?"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full h-14 bg-black hover:bg-gray-600 text-white rounded-sm font-thin duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
