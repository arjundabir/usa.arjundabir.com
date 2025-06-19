import Link from "next/link";
import USAMapClient from "./usa-map-client";
import LogoAnimation from "@/components/logo-animation";

export default function Home() {
  return (
    <div className="flex flex-col h-svh">
      <main className="flex-1 flex justify-center items-center ">
        <USAMapClient />
      </main>
      <footer className="">
        <Link href={"https://arjundabir.com"}>
          <p className="text-center hover:underline hover:cursor-pointer">
            states i've visited
          </p>
        </Link>
        <div className="h-10">
          <Link href={"/"}>
            <LogoAnimation />
          </Link>
        </div>
      </footer>
    </div>
  );
}
