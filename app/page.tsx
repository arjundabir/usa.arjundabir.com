import Link from "next/link";
import USAMapClient from "../components/usa-map-client";
import LogoAnimation from "@/components/logo-animation";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: states, error } = await supabase
    .from("states")
    .select("states");
  console.log(states);
  return (
    <div className="flex flex-col h-svh">
      <main className="flex-1 flex justify-center items-center ">
        <USAMapClient states={states[0].states} />
      </main>
      <footer className="">
        <Link href={"/"}>
          <p className=" grid grid-cols-3 w-full px-4">
            <span className="text-center hover:underline hover:cursor-pointer col-start-2 text-sm md:text-base">
              states i've visited
            </span>
            <span className="text-right hover:underline hover:cursor-pointer col-start-3 text-sm md:text-base">
              create your own
            </span>
          </p>
        </Link>
        <div className="h-10">
          <Link href={"https://arjundabir.com"}>
            <LogoAnimation />
          </Link>
        </div>
      </footer>
    </div>
  );
}
