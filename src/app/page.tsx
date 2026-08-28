import Home from "@/src/components/Home";
import UserInitializer from "@/src/components/UserInitializer";
import { getStats } from "@/src/actions/user";
import { getHomepageReviews } from "@/src/actions/review";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function Main() {
  // Fetch data server-side in parallel
  const [statsData, reviewsData] = await Promise.all([
    getStats(),
    getHomepageReviews(),
  ]);

  const testimonials = reviewsData?.success ? reviewsData.data : [];

  return (
    <>
      <Home statsData={statsData} testimonialsData={testimonials} />
      <UserInitializer />
    </>
  );
}