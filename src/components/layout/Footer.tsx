import { IconType } from "react-icons";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import Button from "../ui/Button";

// Type for each footer link
interface FooterLink {
  name: string;
  href: string;
}

// Type for each footer section
interface FooterSection {
  title: string;
  links: FooterLink[];
}

// Type for each social media link
interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

// TODO: Update links once all website pages/routes are finalized
const footerSections: FooterSection[] = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "Browse Services", href: "/services" },
      { name: "How It Works", href: "/#how-it-works" },
      { name: "For Customers", href: "/customers" },
      { name: "For Skilled Workers", href: "/providers" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Safety Tips", href: "/safety" },
      { name: "Community Guidelines", href: "/community-guidelines" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
];

// TODO: Replace with Serv's actual social media links
const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: AiFillFacebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: AiFillInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: AiFillLinkedin,
  },
];

const Footer = () => {
  return (
    <footer className="pb-5 px-10">

      {/* Top Divider */}
      <div className="h-1 w-full bg-gray-200 mt-12 mb-10" />

      {/* Main Footer Container */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Brand Container */}
        <div className="flex flex-[2] flex-col gap-3">
          <h2 className="text-logo">
            Serv
          </h2>

          <p className="text-body">
            Connecting you with trusted skilled workers for a simpler,
            easier, and better way to get things done.
          </p>

          {/* Social Links Container */}
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer Links Container */}
        {footerSections.map((foot) => (
          <div
            key={foot.title}
            className="flex-1"
          >
            {/* Section Title */}
            <h3 className="text-subtitle">
              {foot.title}
            </h3>

            {/* Section Links */}
            <div className="flex flex-col gap-3 mt-3">
              {foot.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-body hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Feedback Container */}
        <div className="flex-[2]">
          <h3 className="text-subtitle">
            Feedback
          </h3>

          <p className="text-body mt-2">
            Give us feedback to improve.
          </p>

          {/* Feedback Form */}
          {/* TODO: Connect feedback form to backend/API */}
          <form className="flex flex-col gap-3 mt-3">
            <textarea
              id="feedback"
              name="feedback"
              placeholder="Write your feedback..."
              className="border border-gray-300 rounded-sm p-3 resize-none"
              rows={4}
            />

            <Button
              type="submit"
              className="btn-primary self-start"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="h-px w-full bg-gray-200 mt-10 mb-5" />

      {/* Bottom Footer Container */}
      <div className="w-full flex flex-col sm:flex-row gap-3 justify-between">
        <p className="text-body">
          © 2026 Serv. All rights reserved.
        </p>

        <p className="text-body">
          Much love 💙
        </p>
      </div>

    </footer>
  );
};

export default Footer;