import HomeMain from "@/features/home/HomeMain";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HomeMain />
      </main>
      <Footer />
    </>
  );
}
