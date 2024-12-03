import { FaLinkedin, FaGithub, FaInstagram, FaFacebookSquare, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/hammad-ali-952480300/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Hammadali23",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/ham_mad_alii.99/",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61558486799317",
      icon: <FaFacebookSquare />, 
      label: "Facebook",
    },
    {
      href: "mailto:malik.hammad.ali78@gmail.com",
      icon: <FaEnvelope />,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="flex justify-center gap-6">
        {socialLinks.map(({ href, icon, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            passHref
            aria-label={label}
          >
            <button
              className="text-white hover:text-cyan-400 hover:scale-125 transition-all duration-300 ease-in-out text-3xl"
            >
              {icon}
            </button>
          </Link>
        ))}
      </div>
      <p className="text-center mt-2 text-md">
            Your support fuels my creativity. Let stay connected!
     </p>
    </footer>
  );
}
