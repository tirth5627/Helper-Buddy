import { Metadata } from "next";
import { Contact } from "@/src/components/other/contact";

export const metadata: Metadata = {
  title: "Contact Us – Helper Buddy",
  description:
    "Get in touch with Helper Buddy. We're here to help with any questions about our home services.",
};

export default function ContactUs() {
  return (
    <>
      <Contact />
    </>
  );
}
