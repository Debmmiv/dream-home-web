import { redirect } from 'next/navigation';

export default function ContactSupportRedirect() {
  // This instantly bounces the user to the main page's contact section
  redirect('/about#contact-section');
}