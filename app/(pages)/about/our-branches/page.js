import { redirect } from 'next/navigation';

export default function OurBranchesRedirect() {
  // This instantly bounces the user to the main page's branches section
  redirect('/about#branches-section');
}