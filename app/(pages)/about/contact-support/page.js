import { permanentRedirect } from "next/navigation";

export default function ContactSupportRedirect() {
  permanentRedirect("/about#contact-section");
}