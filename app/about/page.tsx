import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description: "Learn about RealCore Solutions delivering enterprise ERP and CRM to 500+ businesses across 15+ industries worldwide.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <h1>About Us</h1>
    </>
  );
}