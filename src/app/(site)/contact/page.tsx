"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelopeCircleCheck, FaLocationDot } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
// import Image from "next/image";
// import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  service?: string;
  location?: string;
  message?: string;
}

const info = [
  {
    icon: < IoLocation />,
    title: "LOCATION 1",
    info: "8870 NW 24th Terrace Doral, FL 33172",
    phone: "tel:+1234567890",
    email: "mailto:test@email.com",
    path: "tel:+34744400684"
  },
    {
    icon: < IoLocation />,
    title: "LOCATION 1",
    info: "8870 NW 24th Terrace Doral, FL 33172",
    phone: "tel:+1234567890",
    email: "mailto:test@email.com",
    path: "tel:+34744400684"
  },
    {
    icon: < IoLocation />,
    title: "LOCATION 1",
    info: "8870 NW 24th Terrace Doral, FL 33172",
    phone: "tel:+1234567890",
    email: "mailto:test@email.com",
    path: "tel:+34744400684"
  },
    {
    icon: < IoLocation />,
    title: "LOCATION 1",
    info: "8870 NW 24th Terrace Doral, FL 33172",
    phone: "tel:+1234567890",
    email: "mailto:test@email.com",
    path: "tel:+34744400684"
  },
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

    const handleSelectChange2 = (value: string) => {
    setFormData((prev) => ({ ...prev, location: value }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.service) newErrors.service = "Please select a service";
     if (!formData.location) newErrors.location = "Please select a location";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          location: formData.location,
          message: formData.message
        },
        publicKey
      )
      .then(() => {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-green-500 ring-opacity-5 mt-[6rem]`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <FaEnvelopeCircleCheck className="h-12 w-12 text-green-500" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-green-500">
                    Message Sent Successfully!!
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Thank you for reaching out! we’ll contact you soon...
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-accent">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-green-500  bg-[#ededed] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ));
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          location: "",
          message: ""
        });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="container mx-auto my-40 px-4">
        <div className="flex flex-col xl:flex-row gap-[40px]">
          {/* Form */}
          <div className="xl:w-[40%] order-2 xl:order-none form-clip">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-white rounded-xl transition-all duration-500 tiles-shadow">
              <h3 className="text-4xl lg:text-6xl font-semibold text-accent font-bebas tracking-wider">
                Contact Us
              </h3>
              {/* <p className="text-body tracking-wider">
                A MUG, YOUR IDEA AND MY EXPERTISE.. LET’S GO!
              </p> */}

              {/**INPUT FIELDS**/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full"/>
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <Input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full"/>
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
                <div>
                  <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full"/>
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Input type="text" name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleChange} className="w-full"/>
                </div>
              </div>


               {/**SELECTION FIELDS**/}
              <div>
                <Select onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full">
                    <CgNotes className="text-accent"/>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="SERVICE 1">SERVICE 1</SelectItem>
                      <SelectItem value="SERVICE 2">SERVICE 2</SelectItem>
                      <SelectItem value="SERVICE 3">SERVICE 3</SelectItem>
                      <SelectItem value="SERVICE 4">SERVICE 4</SelectItem>
                      <SelectItem value="SERVICE 5">SERVICE 5</SelectItem>
                      <SelectItem value="SERVICE 6">SERVICE 6</SelectItem>
                      <SelectItem value="SERVICE 7">SERVICE 7</SelectItem>
                      <SelectItem value="SERVICE 8">SERVICE 8</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-red-500 text-sm">{errors.service}</p>
                )}
              </div>


              <div>
                <Select onValueChange={handleSelectChange2}>
                  <SelectTrigger className="w-full">
                    <FaLocationDot className="text-accent"/>
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a location</SelectLabel>
                      <SelectItem value="LOCATION 1">LOCATION 1</SelectItem>
                      <SelectItem value="LOCATION 2">LOCATION 2</SelectItem>
                      <SelectItem value="LOCATION 3">LOCATION 3</SelectItem>
                      <SelectItem value="LOCATION 4">LOCATION 4</SelectItem>
                      <SelectItem value="LOCATION 5">LOCATION 5</SelectItem>
                      <SelectItem value="LOCATION 6">LOCATION 6</SelectItem>
                      <SelectItem value="LOCATION 7">LOCATION 7</SelectItem>
                      <SelectItem value="LOCATION 8">LOCATION 8</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.location && (
                  <p className="text-red-500 text-sm">{errors.location}</p>
                )}
              </div>

          
               {/**TEXTAREA FIELDS**/}
              <div>
                <Textarea className="h-[200px]" name="message" placeholder="Type your message here." value={formData.message} onChange={handleChange}/>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>


              {/**SUBMIT BUTTON**/}
              <Button type="submit" size="lg" className="inline-flex items-center bg-[#82302a] text-white font-semibold tracking-wide px-6 py-3 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" disabled={isSending}>
                {isSending ? (
                  <>
                    Sending <UseAnimations animation={loading} size={24} />
                  </>
                ) : (
                  "Send message"
                )}
              </Button>


              {/**SPONSORED**/}
              {/* <div className="flex flex-row items-center justify-end gap-1">
                <p className="text-[10px] text-white/60">Powered by EmailJS</p>
              </div> */}

            </form>
          </div>


          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <span>
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-white bg-[#82302a] rounded-full flex items-center justify-center hover:neon2 transition-all duration-300">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                  </span>
                   <div className="flex-1 text-gray text-sm flex flex-col gap-2">
                     <p className="font-bebas text-body tracking-wider text-xl">
                       {item.title}
                     </p>

                     {/* Info as link (if you want it clickable on maps) */}
                     <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.info)}`} target="_blank" rel="noopener noreferrer" className="text-gray hover:underline hover:text-accent">
                       {item.info}
                     </a>

                     {/* Phone link */}
                     <a href={item.phone} className="text-gray hover:underline">
                       {item.phone.replace("tel:", "")}
                     </a>

                     {/* Email link */}
                     <a href={item.email} className="text-gray hover:underline">
                       {item.email.replace("mailto:", "")}
                     </a>
                   </div>
                </li>
              ))}
            </ul>
          </div>

              {/* New Block */}
          <div className="flex-1 bg-white rounded-xl p-8 tiles-shadow flex flex-col justify-center order-3 xl:order-none">
            <h5 className="text-2xl font-bebas tracking-wider text-accent mb-4">
               Disclaimer
            </h5>
            <p className="text-gray leading-relaxed text-sm">
              No appointment necessary! We have an expert team ready to assist as soon as you arrive.<br/><br/> 
              If you have samples of your cabinets, floorings, etc. we encourage you to bring them.
              Your childrens safety is very important to us! They are more than welcome to stay with our team in the office however, due to the operating of cranes and other heavy equipment usage we do not permit anyone under the age of 12 in the warehouse area.<br/><br/>
              If you would like to view any stone slabs in our clearance or any specific slabs from our inventory when you plan to visit, please call in advance. This ensures that in the event that the slab you are interested in is in another part of the warehouse out of sight we are able to access it and have it ready to go for your viewing pleasure prior to your arrival!<br/><br/>  
              We love pets and they are more than welcome in our office. For safety reasons, we do not allow them in the warehouse area, with the exception of service animals specially trained to aid a disabled person defined under the American Disabilities Act.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
