import HomeMain from "@/features/home/HomeMain";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HomeMain />
      </main>
    </>
  );
}
