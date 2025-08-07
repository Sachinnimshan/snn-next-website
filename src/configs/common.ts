import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

export const personalInfo = {
    name: "Sachin Nimshan",
    title: "Frontend Engineer",
    subtitle: "( React | TypeScript | UI/UX )",
    description:
        "Passionate software engineer building modern, intuitive, and scalable web apps. Expert in React, TypeScript, and clean UI development. Dedicated to delivering smooth, high-performance user experiences.",
    email: "sachinnimshan@gmail.com",
    phone: "+94 77 9012 655",
    location: "Walasmulla, Sri Lanka",
    socialMediaLinks: [
        {
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/sachin-nimshan/",
        },
        {
            icon: FaFacebook,
            url: "https://www.facebook.com/sachin.nimshan",
        },
        {
            icon: FaYoutube,
            url: "https://www.youtube.com/@sachinnimshan/featured",
        },
        {
            icon: FaGithub, // reference component only
            url: "https://github.com/your-username",
        },
    ],
};
