"use client";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { usePostContactMutation } from "@/api/webApiSlice";
import { personalInfo } from "@/configs/common";
import PageWrapper from "@/components/page-wrapper/PageWrapper";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [postContact] = usePostContactMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postContact(formData).unwrap();
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!"); // <-- success toast
    } catch (error) {
      console.error("Error sending message", error);
      toast.error("Failed to send message. Please try again."); // <-- error toast
    }
  };
  return (
    <PageWrapper
      title="Contact Me"
      description="Feel free to reach out for collaborations or just a friendly hello"
      background="bg-triangle-bg bg-no-repeat bg-cover bg-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-primaryWhiteColor p-5 rounded-lg shadow-lg text-base text-secondaryTextColor font-medium">
            <FaEnvelope className="text-secondaryTextColor w-6 h-6" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-4 bg-primaryWhiteColor p-5 rounded-lg border shadow-lg text-base text-secondaryTextColor font-medium">
            <FaPhoneAlt className="text-secondaryTextColor w-6 h-6" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-4 bg-primaryWhiteColor p-5 rounded-lg shadow-lg text-base text-secondaryTextColor font-medium">
            <FaMapMarkerAlt className="text-secondaryTextColor w-6 h-6" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="flex gap-6 mt-6  justify-center md:hidden">
            {personalInfo?.socialMediaLinks?.map((link, index) => {
              const Icon = link.icon;

              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primaryTextColor rounded-full hover:text-secondaryColor hover:border-secondaryColor transition p-2"
                  aria-label={`Link to ${link.url}`}
                >
                  <Icon className="w-8 h-8" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-primaryWhiteColor p-6 rounded-lg shadow-lg"
        >
          <div>
            <label className="block text-sm text-thirdTextColor mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-secondaryWhiteColor text-secondaryTextColor  focus:border-secondaryTextColor focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-thirdTextColor mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-secondaryWhiteColor text-secondaryTextColor  focus:border-secondaryTextColor focus:outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-thirdTextColor mb-1 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-secondaryWhiteColor text-secondaryTextColor  focus:border-secondaryTextColor focus:outline-none"
              rows={5}
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-secondaryColor text-primaryWhiteColor font-semibold py-2 px-6 rounded-md transition uppercase"
          >
            Send Message
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
