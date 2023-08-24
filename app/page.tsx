import Image from "next/image";
import FirstParallax from "@/components/parallax/firstParallax";
import SecondParallax from "@/components/parallax/secondParallax";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <FirstParallax></FirstParallax>
      <SecondParallax></SecondParallax>
    </main>
  );
}
