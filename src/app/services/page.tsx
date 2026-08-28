import { Metadata } from "next";
import ServicesClient from "@/src/components/ServicesClient";
import { getServices } from "@/src/actions/updateservice";

export const metadata: Metadata = {
  title: "Services – Helper Buddy",
  description:
    "Browse and book trusted home services including cleaning, plumbing, appliance repair, and more.",
};

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function ServicesPage() {
  const { success, services } = await getServices();

  if (!success || !services) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Unable to load services
          </h2>
          <p className="text-gray-600">
            Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return <ServicesClient initialServices={services} />;
}