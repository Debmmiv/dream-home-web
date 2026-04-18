import { permanentRedirect } from "next/navigation";

export default function OurBranchesRedirect() {
  permanentRedirect("/about#branches-section");
}